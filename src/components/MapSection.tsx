import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import CompassIcon from "@/components/CompassIcon";
import { X, MapPin, Star } from "lucide-react";

interface Story {
  id: number;
  city: string;
  title: string;
  description: string;
  client: string;
  // SVG coordinates (percentage-based)
  x: number;
  y: number;
}

const stories: Story[] = [
  {
    id: 1,
    city: "חיפה",
    title: "איחוד הלוואות",
    description:
      "סגירת חובות של 250,000 ש\"ח והורדת ההחזר החודשי ב-4,000 ש\"ח.",
    client: "משפחת לוי",
    x: 40,
    y: 22,
  },
  {
    id: 2,
    city: "נתניה",
    title: "משפרי דיור",
    description:
      "גישור פיננסי מדויק בין מכירת הדירה הישנה לקניית החדשה.",
    client: "משפחת שטרן",
    x: 34,
    y: 34,
  },
  {
    id: 3,
    city: "תל אביב",
    title: "משקיעי נדל\"ן",
    description:
      "מינוף נכס קיים לצורך רכישת דירה נוספת עם תזרים חיובי.",
    client: "יעקב א.",
    x: 32,
    y: 40,
  },
  {
    id: 4,
    city: "ראשון לציון",
    title: "מיחזור משכנתא",
    description:
      "שיפור תנאי הריבית והורדת תקופת ההלוואה ב-5 שנים.",
    client: "משפחת פרץ",
    x: 33,
    y: 44,
  },
  {
    id: 5,
    city: "ירושלים",
    title: "מחיר למשתכן",
    description:
      "ליווי צמוד מהזכייה ועד קבלת המפתח כולל הלוואת גרייס.",
    client: "דניאל ורעות",
    x: 50,
    y: 46,
  },
  {
    id: 6,
    city: "אשדוד",
    title: "רכישת דירה ראשונה",
    description:
      "בניית תמהיל מורכב שחסך 140,000 ש\"ח.",
    client: "משפחת יצחקי",
    x: 30,
    y: 52,
  },
  {
    id: 7,
    city: "אשקלון",
    title: "פתרון למסורבי בנקים",
    description:
      "השגת אישור עקרוני לאחר שני סירובים קודמים.",
    client: "אבי וסיגל",
    x: 27,
    y: 56,
  },
  {
    id: 8,
    city: "באר שבע",
    title: "משכנתא לבנייה עצמית",
    description:
      "ניהול שלבי שחרור הכספים מול הבנק לאורך כל הפרויקט.",
    client: "אלון ומיכל",
    x: 38,
    y: 68,
  },
];

/* ── Simplified Israel SVG outline ── */
const IsraelOutline = () => (
  <path
    d="
      M 42 5
      C 40 5, 38 7, 37 10
      L 35 15
      C 34 17, 36 18, 38 19
      L 42 20
      C 44 20, 45 18, 44 16
      L 46 14
      C 48 12, 47 10, 45 8
      L 42 5
      Z

      M 38 19
      L 36 22
      C 34 25, 33 28, 32 31
      L 30 35
      C 29 38, 28 41, 28 44
      L 27 48
      C 26 51, 25 54, 24 57
      L 23 60
      C 22 63, 24 66, 27 67
      L 30 68
      C 33 69, 36 70, 38 72
      L 40 75
      C 41 78, 42 81, 43 84
      L 44 87
      C 44 89, 43 91, 42 93
      L 41 95

      M 42 20
      L 44 22
      C 46 24, 48 25, 50 27
      L 52 30
      C 53 33, 54 36, 54 39
      L 53 42
      C 52 45, 51 47, 50 48
      L 48 50
      C 46 51, 44 52, 42 53
      L 40 55
      C 38 56, 36 58, 34 60
      L 32 63
      C 30 65, 29 67, 28 68
    "
    fill="none"
    stroke="hsl(var(--border))"
    strokeWidth="1.2"
    strokeLinejoin="round"
    strokeLinecap="round"
    className="opacity-60"
  />
);

/* ── Pulsing Pin Component ── */
const PulsingPin = ({
  story,
  isActive,
  onClick,
}: {
  story: Story;
  isActive: boolean;
  onClick: () => void;
}) => (
  <g
    className="cursor-pointer"
    onClick={onClick}
    style={{ transform: `translate(${story.x}%, ${story.y}%)` }}
  >
    {/* Pulse rings */}
    <circle cx={0} cy={0} r={6} className="fill-accent/20 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
    <circle cx={0} cy={0} r={4} className="fill-accent/30 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]" />
    {/* Core dot */}
    <circle
      cx={0}
      cy={0}
      r={3}
      className={`transition-all duration-300 ${isActive ? "fill-accent stroke-accent-foreground stroke-[1.5]" : "fill-accent stroke-accent-foreground/50 stroke-1"}`}
      style={{ filter: isActive ? "drop-shadow(0 0 6px hsl(var(--accent)))" : undefined }}
    />
  </g>
);

/* ── Popup Card ── */
const StoryPopup = ({
  story,
  onClose,
}: {
  story: Story;
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 8, scale: 0.95 }}
    transition={{ duration: 0.25 }}
    className="absolute z-30 w-72 rounded-xl border border-border bg-card p-5 shadow-xl"
    style={{
      left: `${story.x}%`,
      top: `${story.y}%`,
      transform: "translate(-50%, -110%)",
    }}
    dir="rtl"
  >
    {/* Close */}
    <button
      onClick={onClose}
      className="absolute left-2 top-2 rounded-full p-1 text-muted-foreground hover:text-foreground transition-colors"
    >
      <X size={14} />
    </button>

    {/* City badge */}
    <div className="flex items-center gap-2 mb-2">
      <MapPin size={14} className="text-accent shrink-0" />
      <span className="text-xs font-bold text-accent">{story.city}</span>
    </div>

    <h4 className="text-sm font-bold text-foreground mb-1">{story.title}</h4>
    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
      {story.description}
    </p>

    {/* Stars + client */}
    <div className="flex items-center gap-1 border-t border-border pt-2">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} className="fill-accent text-accent" />
        ))}
      </div>
      <span className="text-[11px] text-muted-foreground mr-auto">{story.client}</span>
    </div>
  </motion.div>
);

/* ── Main Section ── */
const MapSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const activeStory = stories.find((s) => s.id === activeId) ?? null;

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-secondary/30">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <CompassIcon size={500} className="text-foreground" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent/50" />
              <span className="text-sm font-medium text-accent">הצלחות בפריסה ארצית</span>
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              המפה של המצפן
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              לקוחות מרוצים מכל רחבי הארץ – לחצו על נעץ לפרטים
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative max-w-lg mx-auto" dir="ltr">
            {/* SVG Map */}
            <svg
              viewBox="0 0 80 100"
              className="w-full h-auto"
              style={{ maxHeight: "70vh" }}
            >
              <IsraelOutline />

              {/* Pins rendered inside SVG via foreignObject workaround — 
                  we use raw circles for the pins */}
              {stories.map((story) => (
                <g key={story.id}>
                  {/* Outer pulse */}
                  <circle
                    cx={story.x}
                    cy={story.y}
                    r={2.5}
                    className="fill-accent/20"
                    style={{
                      animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite",
                    }}
                  />
                  {/* Inner dot */}
                  <circle
                    cx={story.x}
                    cy={story.y}
                    r={1.5}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeId === story.id
                        ? "fill-accent stroke-accent-foreground"
                        : "fill-accent stroke-accent-foreground/60"
                    }`}
                    strokeWidth={activeId === story.id ? 0.6 : 0.3}
                    style={
                      activeId === story.id
                        ? { filter: "drop-shadow(0 0 3px hsl(38 80% 52%))" }
                        : undefined
                    }
                    onClick={() =>
                      setActiveId(activeId === story.id ? null : story.id)
                    }
                  />
                  {/* City label */}
                  <text
                    x={story.x}
                    y={story.y - 3}
                    textAnchor="middle"
                    className="fill-foreground text-[2px] font-medium pointer-events-none select-none"
                  >
                    {story.city}
                  </text>
                </g>
              ))}
            </svg>

            {/* Popup overlay (HTML, positioned absolutely) */}
            <AnimatePresence>
              {activeStory && (
                <StoryPopup
                  key={activeStory.id}
                  story={activeStory}
                  onClose={() => setActiveId(null)}
                />
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* Mobile list fallback */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto lg:hidden">
          {stories.map((story, i) => (
            <ScrollReveal key={story.id} delay={i * 0.08}>
              <div
                className="rounded-xl border border-border bg-card p-4 shadow-sm"
                dir="rtl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={14} className="text-accent shrink-0" />
                  <span className="text-xs font-bold text-accent">
                    {story.city}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-foreground mb-1">
                  {story.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                  {story.description}
                </p>
                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={10}
                        className="fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-muted-foreground mr-auto">
                    {story.client}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
