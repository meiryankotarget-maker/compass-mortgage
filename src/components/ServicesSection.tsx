import ScrollReveal from "@/components/ScrollReveal";
import CompassIcon from "@/components/CompassIcon";
import {
  HomePurchaseIcon,
  AffordableHousingIcon,
  HomeUpgradeIcon,
  InvestorIcon,
  SelfBuildIcon,
  RenovationIcon,
  LoanConsolidationIcon,
} from "@/components/ServiceIcons";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: HomePurchaseIcon,
    title: "רכישת דירה",
    description:
      'בניית תמהיל משכנתא מותאם להכנסה, ניהול מו"מ מול מספר בנקים לקבלת התנאים הטובים ביותר.',
    color: "from-emerald-500/20 to-emerald-600/5",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-600",
    markerColor: "bg-emerald-500",
  },
  {
    icon: AffordableHousingIcon,
    title: "מחיר למשתכן / מחיר מטרה",
    description:
      "ליווי משלב הזכייה ועד חתימה, פתרונות גרייס והלוואות ביניים מותאמות.",
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-600",
    markerColor: "bg-blue-500",
  },
  {
    icon: HomeUpgradeIcon,
    title: "משפרי דיור",
    description:
      "תכנון פיננסי למכירה וקנייה במקביל, הבטחת רצף כלכלי חלק.",
    color: "from-sky-500/20 to-sky-600/5",
    borderColor: "border-sky-500/30",
    iconColor: "text-sky-600",
    markerColor: "bg-sky-500",
  },
  {
    icon: InvestorIcon,
    title: "משקיעים",
    description:
      "התאמת משכנתא למינוף נכון ויצירת תזרים חודשי ברור.",
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "border-amber-500/30",
    iconColor: "text-amber-600",
    markerColor: "bg-amber-500",
  },
  {
    icon: SelfBuildIcon,
    title: "משכנתא לבנייה עצמית",
    description:
      "ליווי מהתכנון ועד לשחרור כספים, תיאום מול הבנקים בכל שלב.",
    color: "from-orange-500/20 to-orange-600/5",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-600",
    markerColor: "bg-orange-500",
  },
  {
    icon: RenovationIcon,
    title: "משכנתא לשיפוץ",
    description:
      "מימון יעיל עם תזרים מותאם לפרויקט השיפוץ שלכם.",
    color: "from-rose-500/20 to-rose-600/5",
    borderColor: "border-rose-500/30",
    iconColor: "text-rose-600",
    markerColor: "bg-rose-500",
  },
  {
    icon: LoanConsolidationIcon,
    title: "איחוד הלוואות",
    description:
      "סגירת מינוסים והלוואות יקרות, הורדת החזר חודשי משמעותית.",
    color: "from-violet-500/20 to-violet-600/5",
    borderColor: "border-violet-500/30",
    iconColor: "text-violet-600",
    markerColor: "bg-violet-500",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const compassRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Map-style background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--navy)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Topographic-style decorative lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        <path
          d="M0 200 Q300 150 600 250 T1200 200"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M0 400 Q400 350 700 420 T1200 380"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M0 600 Q250 550 500 630 T1200 580"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      {/* Floating compass decoration - top left */}
      <motion.div
        className="absolute top-16 left-8 opacity-[0.07] hidden lg:block"
        style={{ rotate: compassRotate }}
      >
        <CompassIcon size={120} className="text-accent" />
      </motion.div>

      {/* Floating compass decoration - bottom right */}
      <motion.div
        className="absolute bottom-16 right-8 opacity-[0.05] hidden lg:block"
        style={{ rotate: compassRotate }}
      >
        <CompassIcon size={80} className="text-primary" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-16 bg-gradient-to-l from-accent/60 to-transparent" />
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <CompassIcon size={40} className="text-accent" />
              </motion.div>
              <div className="h-px w-16 bg-gradient-to-r from-accent/60 to-transparent" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              השירותים שלנו
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              כל שירות הוא תחנה במפת המסלול שלך – אנחנו מנווטים אותך ליעד הפיננסי הנכון
            </p>

            {/* Map legend */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span>תחנת יעד</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-6 h-0.5 bg-accent/40" style={{ backgroundImage: "repeating-linear-gradient(90deg, hsl(var(--accent) / 0.4) 0, hsl(var(--accent) / 0.4) 4px, transparent 4px, transparent 8px)" }} />
                <span>מסלול ניווט</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <svg width="12" height="12" viewBox="0 0 12 12" className="text-accent">
                  <polygon points="6,1 5,5 7,5" fill="currentColor" />
                  <polygon points="6,11 5,7 7,7" fill="currentColor" opacity="0.3" />
                  <circle cx="6" cy="6" r="1" fill="currentColor" />
                </svg>
                <span>מצפן</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Services grid with route connections */}
        <div className="relative max-w-6xl mx-auto">
          {/* SVG Route lines connecting cards */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            style={{ zIndex: 0 }}
          >
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.15" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* Horizontal dashed route lines */}
            <line x1="33%" y1="50%" x2="66%" y2="50%" stroke="url(#routeGradient)" strokeWidth="2" strokeDasharray="8 6" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative" style={{ zIndex: 1 }}>
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative glass-card p-7 h-full group border ${service.borderColor} cursor-default`}
                >
                  {/* Station number badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <span className="text-xs font-bold text-primary-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Map pin marker */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className={`w-2.5 h-2.5 rounded-full ${service.markerColor} shadow-md`} />
                    <div className={`w-0.5 h-3 ${service.markerColor} mx-auto opacity-50`} />
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <service.icon className={`${service.iconColor}`} size={30} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Route connector line at bottom */}
                  <div className="mt-5 flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${service.markerColor} opacity-60`} />
                    <div
                      className="h-px flex-1 opacity-30"
                      style={{
                        backgroundImage: `repeating-linear-gradient(90deg, currentColor 0, currentColor 4px, transparent 4px, transparent 8px)`,
                      }}
                    />
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-accent opacity-40">
                      <polygon points="8,2 6.5,7 9.5,7" fill="currentColor" />
                      <polygon points="8,14 6.5,9 9.5,9" fill="currentColor" opacity="0.3" />
                      <circle cx="8" cy="8" r="1.2" fill="currentColor" />
                    </svg>
                  </div>

                  {/* Coordinates label */}
                  <div className="mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] text-muted-foreground font-mono tracking-wider">
                      N 31°47′ E 35°13′ • תחנה {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom route summary */}
          <ScrollReveal delay={0.6}>
            <div className="mt-16 flex items-center justify-center gap-3">
              {services.map((service, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${service.markerColor} opacity-70`}
                    title={service.title}
                  />
                  {i < services.length - 1 && (
                    <div
                      className="w-8 h-px opacity-30"
                      style={{
                        backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--accent)) 0, hsl(var(--accent)) 3px, transparent 3px, transparent 6px)`,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3 opacity-60">
              מפת המסלולים שלנו • 7 תחנות יעד
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
