import { useState, useRef, useEffect } from "react";
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

const clockAngles = [0, 60, 120, 180, 240, 300];

const CompassWithIcons = ({ size, orbitRadius, iconSize, fontSize, needleRotation, activeIndex, onIconClick }: {
  size: number;
  orbitRadius: number;
  iconSize: number;
  fontSize: string;
  needleRotation: number;
  activeIndex: number | null;
  onIconClick: (i: number) => void;
}) => {
  const totalSize = size + (orbitRadius + iconSize) * 2;
  return (
  <div className="relative flex items-center justify-center" style={{ width: totalSize, height: totalSize }}>
    {/* Compass center - absolutely centered */}
    <div className="absolute" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
      <CompassIcon size={size} className="text-foreground/80" needleRotation={needleRotation} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full border border-accent/20 animate-pulse-gold" style={{ width: size * 0.71, height: size * 0.71 }} />
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
          className="absolute flex flex-col items-center gap-1 cursor-pointer group focus:outline-none"
          style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: "translate(-50%, -50%)",
          }}
          onClick={() => onIconClick(i)}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={`rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
            isActive
              ? "bg-accent border-accent shadow-lg shadow-accent/30"
              : "bg-card/80 backdrop-blur-sm border-border/50 group-hover:border-accent/60"
          }`} style={{ width: iconSize, height: iconSize }}>
            <item.icon
              className={`transition-colors duration-300 ${isActive ? "text-accent-foreground" : "text-accent"}`}
              size={iconSize * 0.42}
            />
          </div>
          <span className={`font-semibold whitespace-nowrap transition-colors duration-300 ${isActive ? "text-accent" : "text-muted-foreground"}`}
            style={{ fontSize }}>
            {item.text}
          </span>
        </motion.button>
      );
    })}
  </div>
  );
};

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
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(215 55% 18%) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Visual side - Desktop only (large) */}
            <ScrollReveal direction="right" className="order-2 lg:order-1 hidden lg:flex justify-center">
              <CompassWithIcons
                size={280}
                orbitRadius={160}
                iconSize={48}
                fontSize="10px"
                needleRotation={needleRotation}
                activeIndex={activeIndex}
                onIconClick={handleIconClick}
              />
            </ScrollReveal>

            {/* Content side */}
            <div className="order-1 lg:order-2">
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
                      <span className="text-sm font-medium text-foreground">{item.text}</span>
                    </button>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Mobile compass - shown below content */}
          <ScrollReveal delay={0.3} className="flex justify-center mt-10 lg:hidden">
            <CompassWithIcons
              size={160}
              orbitRadius={130}
              iconSize={34}
              fontSize="9px"
              needleRotation={needleRotation}
              activeIndex={activeIndex}
              onIconClick={handleIconClick}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
