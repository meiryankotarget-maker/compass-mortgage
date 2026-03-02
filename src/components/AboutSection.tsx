import { useState } from "react";
import { Shield, Clock, MessageSquare, Handshake, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import CompassIcon from "@/components/CompassIcon";

const differentiators = [
  { icon: Clock, text: "זמינות מלאה" },
  { icon: MessageSquare, text: "הסברים ברורים" },
  { icon: Shield, text: "ניסיון במקרים מורכבים" },
  { icon: Handshake, text: "קשרים בבנקים" },
  { icon: Award, text: "ליווי אישי" },
  { icon: Zap, text: "מהירות טיפול" },
];

// Clock positions: 12, 2, 4, 6, 8, 10 → angles in degrees (from top, clockwise)
const clockAngles = [0, 60, 120, 180, 240, 300];
const orbitRadius = 170; // px from center

const AboutSection = () => {
  const [needleRotation, setNeedleRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleIconClick = (index: number) => {
    setActiveIndex(index);
    setNeedleRotation(clockAngles[index]);
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(215 55% 18%) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Visual side - Compass with orbiting icons */}
            <ScrollReveal direction="right">
              <div className="relative flex items-center justify-center" style={{ minHeight: 420 }}>
                {/* Decorative outer ring */}
                <div className="absolute w-[380px] h-[380px] rounded-full border border-border/30" />

                {/* Compass center */}
                <div className="relative">
                  <CompassIcon
                    size={280}
                    className="text-foreground/80"
                    needleRotation={needleRotation}
                  />
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[200px] h-[200px] rounded-full border border-accent/20 animate-pulse-gold" />
                  </div>
                </div>

                {/* Orbiting icons */}
                {differentiators.map((item, i) => {
                  const angleRad = (clockAngles[i] - 90) * (Math.PI / 180);
                  const x = Math.cos(angleRad) * orbitRadius;
                  const y = Math.sin(angleRad) * orbitRadius;
                  const isActive = activeIndex === i;

                  return (
                    <motion.button
                      key={i}
                      className={`absolute flex flex-col items-center gap-1 cursor-pointer group focus:outline-none`}
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      onClick={() => handleIconClick(i)}
                      animate={{
                        y: [0, -6, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                          isActive
                            ? "bg-accent border-accent shadow-lg shadow-accent/30"
                            : "bg-card/80 backdrop-blur-sm border-border/50 group-hover:border-accent/60"
                        }`}
                      >
                        <item.icon
                          className={`transition-colors duration-300 ${
                            isActive ? "text-accent-foreground" : "text-accent"
                          }`}
                          size={20}
                        />
                      </div>
                      <span
                        className={`text-[10px] font-semibold whitespace-nowrap transition-colors duration-300 ${
                          isActive ? "text-accent" : "text-muted-foreground"
                        }`}
                      >
                        {item.text}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Content side */}
            <div>
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-12 bg-accent/50" />
                  <span className="text-sm font-medium text-accent">אודות</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  מי מוביל את המצפן
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  אני יועץ משכנתאות ומתכנן פיננסי עם ניסיון עשיר מהבנק ומהשוק
                  החופשי. מכיר מבפנים את השיקולים והדינמיקה של הבנקים, ומלווה
                  אותך לאורך כל המסלול כדי להגיע ליעד בבטחה.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  מה שמבדיל אותנו
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {differentiators.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleIconClick(i)}
                      className={`flex items-center gap-2 p-3 rounded-lg transition-colors duration-300 text-right ${
                        activeIndex === i
                          ? "bg-accent/15 ring-1 ring-accent/40"
                          : "bg-secondary/50 hover:bg-secondary"
                      }`}
                    >
                      <item.icon className="text-accent shrink-0" size={18} />
                      <span className="text-sm font-medium text-foreground">
                        {item.text}
                      </span>
                    </button>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
