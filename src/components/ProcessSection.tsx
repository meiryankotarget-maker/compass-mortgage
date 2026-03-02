import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import CompassIcon from "@/components/CompassIcon";
import {
  Compass,
  FolderOpen,
  BarChart3,
  Route,
  Building,
  CheckCircle2,
  PenTool,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "שיחת היכרות ואבחון ראשוני",
    subtitle: "מצפן הכוונה",
    description: "הבנה מעמיקה של הצרכים, היכולת הפיננסית והיעדים שלכם.",
  },
  {
    icon: FolderOpen,
    title: "איסוף מסמכים",
    subtitle: "מיפוי הדרך",
    description: "איסוף מסודר של כל המסמכים הנדרשים לתהליך.",
  },
  {
    icon: BarChart3,
    title: "ניתוח פיננסי והגדרת מסגרת",
    subtitle: "סימון תחנות יעד",
    description: "בחינת יכולת ההחזר, ניתוח הכנסות והוצאות.",
  },
  {
    icon: Route,
    title: "בניית תמהיל משכנתא מותאם",
    subtitle: "קביעת המסלול",
    description: "הרכבת תמהיל אופטימלי מותאם למצבכם הייחודי.",
  },
  {
    icon: Building,
    title: 'פנייה לבנקים וניהול מו"מ',
    subtitle: "ניווט בשטח",
    description: "פנייה מקצועית למספר בנקים להשגת התנאים הטובים ביותר.",
  },
  {
    icon: CheckCircle2,
    title: "בחירת בנק וליווי לאישור סופי",
    subtitle: "מעבר קריטי",
    description: "בחירה מושכלת ומלווה עד לאישור הסופי.",
  },
  {
    icon: PenTool,
    title: "חתימה, ביצוע וליווי עד העברת הכסף",
    subtitle: "הגעה ליעד",
    description: "ליווי צמוד בשלב החתימה ועד העברת הכספים בפועל.",
  },
  {
    icon: ShieldCheck,
    title: "ליווי עתידי ובקרה",
    subtitle: "תחזוקת המצפן",
    description: "בדיקות תקופתיות והמלצות למיחזור בעת הצורך.",
  },
];

/* Large background compass with scroll-driven needle */
const ParallaxCompass = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <motion.div
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[10%] pointer-events-none hidden lg:block"
      style={{ y }}
    >
      <CompassIcon size={650} className="text-accent opacity-[0.12]" />
    </motion.div>
  );
};

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-navy-gradient relative overflow-hidden"
    >
      {/* Large parallax compass background */}
      <ParallaxCompass scrollYProgress={scrollYProgress} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent/50" />
              <Compass className="text-accent" size={32} />
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              איך אנחנו מכוונים את המסלול שלך
            </h2>
            <p className="text-lg text-primary-foreground/60 max-w-xl mx-auto">
              תהליך מובנה וברור – שלב אחרי שלב עד ליעד
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Animated line */}
          <div className="absolute right-[1.6rem] md:right-[1.85rem] top-0 bottom-0 w-[2px] bg-primary-foreground/10">
            <motion.div
              className="w-full bg-accent origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.08} direction="right">
                <div className="flex gap-6 md:gap-8 group">
                  {/* Glowing node */}
                  <div className="relative shrink-0">
                    <div
                      className="timeline-node w-[3.2rem] h-[3.2rem] md:w-[3.7rem] md:h-[3.7rem] rounded-full bg-primary-foreground/5 border-2 border-accent/40 flex items-center justify-center transition-all duration-500 group-hover:border-accent group-hover:bg-accent/10"
                    >
                      <step.icon className="text-accent" size={22} />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-navy-gradient border border-accent/60 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-accent">
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-2 pt-1">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {step.subtitle}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-primary-foreground mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/55 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
