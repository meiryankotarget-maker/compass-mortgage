import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Compass, Navigation, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import CompassIcon from "@/components/CompassIcon";
import heroBg from "@/assets/hero-bg.jpg";

const benefits = [
  { icon: Navigation, text: "ניווט ברור ומדויק בכל סוגי המשכנתאות" },
  { icon: MapPin, text: "הסברים פשוטים וברורים על מסלולים וריביות" },
  { icon: Compass, text: "חיסכון מוכח בכסף ובהחזר החודשי" },
  { icon: Phone, text: 'ליווי אישי לכל שלב, כולל מו"מ עם הבנקים' },
  { icon: Navigation, text: "ניסיון במקרים מורכבים ובמשכנתאות מיוחדות" },
];

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src={heroBg}
          alt=""
          className="w-full h-[130%] object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </motion.div>

      {/* Animated compass in background */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-[0.06] hidden lg:block">
        <CompassIcon size={500} className="text-accent animate-compass-spin" />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <CompassIcon size={56} className="text-accent" />
              <div className="h-px flex-1 max-w-[100px] bg-accent/50" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-primary-foreground mb-4 leading-tight">
              מצפן{" "}
              <span className="text-gradient-gold">משכנתאות</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-light mb-6">
              הכיוון הנכון למשכנתא שלך
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-base md:text-lg text-primary-foreground/65 leading-relaxed mb-10 max-w-2xl text-balance">
              כמו מצפן שמכוון לצפון – אנחנו מכוונים אתכם להחלטה הפיננסית הנכונה.
              ליווי מקצועי, שקיפות מלאה ותכנון מדויק. בכל שלב, אתם יודעים לאן
              אתם פונים ומה המסלול, ואנחנו כאן כדי לוודא שתגיעו ליעד בלי עיכובים
              וטעויות.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={0.5}>
            <div className="flex flex-wrap gap-4 mb-14">
              <Button
                variant="gold"
                size="lg"
                className="text-base px-8"
                onClick={() => scrollTo("#cta")}
              >
                <MapPin className="!size-5" />
                השאר פרטים
              </Button>
              <Button
                variant="gold-outline"
                size="lg"
                className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                onClick={() => scrollTo("#cta")}
              >
                <Phone className="!size-5" />
                קבע שיחת טלפון
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-base px-8 text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/5"
                asChild
              >
                <a
                  href="https://wa.me/972500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="!size-5" />
                  שלח וואטסאפ
                </a>
              </Button>
            </div>
          </ScrollReveal>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={0.5 + i * 0.1}>
                <div className="flex items-center gap-3 text-primary-foreground/70 group">
                  <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center shrink-0 group-hover:border-accent/70 group-hover:bg-accent/10 transition-all duration-300">
                    <benefit.icon className="text-accent" size={18} />
                  </div>
                  <span className="text-sm font-light">{benefit.text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;