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
import { MapPin, Phone, MessageCircle } from "lucide-react";

const services = [
  {
    icon: HomePurchaseIcon,
    title: "רכישת דירה",
    description:
      'בניית תמהיל משכנתא מותאם להכנסה, ניהול מו"מ מול מספר בנקים לקבלת התנאים הטובים ביותר.',
  },
  {
    icon: AffordableHousingIcon,
    title: "מחיר למשתכן / מחיר מטרה",
    description:
      "ליווי משלב הזכייה ועד חתימה, פתרונות גרייס והלוואות ביניים מותאמות.",
  },
  {
    icon: HomeUpgradeIcon,
    title: "משפרי דיור",
    description:
      "תכנון פיננסי למכירה וקנייה במקביל, הבטחת רצף כלכלי חלק.",
  },
  {
    icon: InvestorIcon,
    title: "משקיעים",
    description:
      "התאמת משכנתא למינוף נכון ויצירת תזרים חודשי ברור.",
  },
  {
    icon: SelfBuildIcon,
    title: "משכנתא לבנייה עצמית",
    description:
      "ליווי מהתכנון ועד לשחרור כספים, תיאום מול הבנקים בכל שלב.",
  },
  {
    icon: RenovationIcon,
    title: "משכנתא לשיפוץ",
    description:
      "מימון יעיל עם תזרים מותאם לפרויקט השיפוץ שלכם.",
  },
  {
    icon: LoanConsolidationIcon,
    title: "איחוד הלוואות",
    description:
      "סגירת מינוסים והלוואות יקרות, הורדת החזר חודשי משמעותית.",
  },
];

const highlights = [
  { icon: "compass", text: "ניווט ברור ומדויק בכל סוגי המשכנתאות" },
  { icon: "savings", text: "חיסכון מוכח בכסף ובהחזר החודשי" },
  { icon: "map", text: "הסברים פשוטים ובהירים על מסלולים וריביות" },
  { icon: "phone", text: 'ליווי אישי לכל שלב, כולל מו"מ עם הבנקים' },
  { icon: "route", text: "ניסיון במקרים מורכבים ובמשכנתאות מיוחדות" },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const compassRotate = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* ===== HERO AREA ===== */}
      <div className="relative bg-navy-gradient py-24 lg:py-32">
        {/* Topographic watermark background */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--gold) / 0.5) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Large compass watermark - left side */}
        <motion.div
          className="absolute left-[-5%] top-1/2 -translate-y-1/2 opacity-[0.06] hidden lg:block"
          style={{ rotate: compassRotate }}
        >
          <CompassIcon size={600} className="text-gold" />
        </motion.div>

        {/* Topographic SVG lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 800"
        >
          <path d="M0 200 Q300 150 600 250 T1200 200" stroke="hsl(var(--gold))" strokeWidth="2" fill="none" />
          <path d="M0 400 Q400 350 700 420 T1200 380" stroke="hsl(var(--gold))" strokeWidth="1.5" fill="none" />
          <path d="M0 600 Q250 550 500 630 T1200 580" stroke="hsl(var(--gold))" strokeWidth="1" fill="none" />
        </svg>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Small compass icon top-right */}
          <div className="flex justify-end mb-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <CompassIcon size={48} className="text-gold opacity-80" />
            </motion.div>
          </div>

          {/* Title */}
          <ScrollReveal>
            <div className="text-right max-w-3xl mr-auto lg:mr-[40%]">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3">
                <span className="text-gradient-gold">מצפן</span>{" "}
                <span className="text-white">משכנתאות</span>
              </h2>
              <p className="text-gold text-lg md:text-xl font-medium mb-6">
                הכיוון הנכון למשכנתא שלך
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
                כמו מצפן שמכוון לצפון – אנחנו מכוונים אתכם להחלטה הפיננסית הנכונה.
                ליווי מקצועי, שקיפות מלאה ותכנון מדויק. בכל שלב, אתם יודעים לאן אתם
                פונים ומה המסלול, ואנחנו כאן כדי לוודא שתגיעו ליעד בלי עיכובים וטעויות.
              </p>
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 mt-10 justify-start">
              <button className="bg-gold-gradient text-navy-dark font-bold px-8 py-3.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-gold/20">
                <MapPin size={18} />
                השאר פרטים
              </button>
              <button className="border border-white/30 text-white font-medium px-8 py-3.5 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors">
                <Phone size={18} />
                קבע שיחת טלפון
              </button>
              <button className="text-white/70 font-medium px-6 py-3.5 flex items-center gap-2 hover:text-white transition-colors">
                <MessageCircle size={18} />
                שלח וואטסאפ
              </button>
            </div>
          </ScrollReveal>

          {/* Highlight points */}
          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mt-16 max-w-4xl">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-right">
                  <span className="text-sm text-white/80 leading-relaxed">{item.text}</span>
                  <div className="w-9 h-9 rounded-full border border-gold/50 flex items-center justify-center flex-shrink-0">
                    <HighlightIcon type={item.icon} />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ===== SERVICES GRID ===== */}
      <div className="relative bg-gradient-to-b from-navy-dark to-primary py-20 lg:py-28">
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--gold)) 0.5px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-16 bg-gradient-to-l from-gold/60 to-transparent" />
                <CompassIcon size={32} className="text-gold" />
                <div className="h-px w-16 bg-gradient-to-r from-gold/60 to-transparent" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                השירותים שלנו
              </h3>
              <p className="text-white/50 text-base max-w-xl mx-auto">
                כל שירות הוא תחנה במפת המסלול שלך – אנחנו מנווטים אותך ליעד הפיננסי הנכון
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <ServiceCard service={service} index={i} />
              </ScrollReveal>
            ))}
          </div>

          {/* Route summary dots */}
          <ScrollReveal delay={0.5}>
            <div className="mt-16 flex items-center justify-center gap-2">
              {services.map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold/60" />
                  {i < services.length - 1 && (
                    <div
                      className="w-6 h-px"
                      style={{
                        backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--gold) / 0.3) 0, hsl(var(--gold) / 0.3) 3px, transparent 3px, transparent 6px)`,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-white/30 mt-3">
              מפת המסלולים שלנו • 7 תחנות יעד
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ===== STICKY CONTACT BAR ===== */}
      <StickyContactBar />
    </section>
  );
};

/* ---- Service Card ---- */
interface ServiceCardProps {
  service: (typeof services)[number];
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="relative p-6 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:border-gold/30 transition-colors duration-300 group h-full cursor-default"
  >
    {/* Station number */}
    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/20">
      <span className="text-[10px] font-bold text-navy-dark">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>

    {/* Icon */}
    <div className="w-14 h-14 rounded-lg border border-gold/20 bg-gold/[0.06] flex items-center justify-center mb-5 group-hover:border-gold/40 group-hover:bg-gold/[0.1] transition-all duration-300">
      <service.icon className="text-gold" size={28} />
    </div>

    {/* Content */}
    <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
    <p className="text-sm text-white/50 leading-relaxed">{service.description}</p>

    {/* Bottom route line */}
    <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-2 h-2 rounded-full bg-gold/50" />
      <div
        className="h-px flex-1"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--gold) / 0.3) 0, hsl(var(--gold) / 0.3) 4px, transparent 4px, transparent 8px)`,
        }}
      />
      <span className="text-[10px] text-white/30 font-mono">תחנה {String(index + 1).padStart(2, "0")}</span>
    </div>
  </motion.div>
);

/* ---- Sticky Contact Bar ---- */
const StickyContactBar = () => (
  <div className="sticky bottom-0 z-50 bg-navy-dark/95 backdrop-blur-md border-t border-white/10">
    <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-3 flex-wrap">
      <a
        href="#contact"
        className="bg-gold-gradient text-navy-dark font-bold px-6 py-2.5 rounded-full flex items-center gap-2 text-sm hover:opacity-90 transition-opacity shadow-lg shadow-gold/20"
      >
        <MapPin size={16} />
        השאר פרטים
      </a>
      <a
        href="tel:+972000000000"
        className="border border-white/20 text-white font-medium px-6 py-2.5 rounded-full flex items-center gap-2 text-sm hover:bg-white/10 transition-colors"
      >
        <Phone size={16} />
        קבע שיחה
      </a>
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/60 font-medium px-5 py-2.5 flex items-center gap-2 text-sm hover:text-white transition-colors"
      >
        <MessageCircle size={16} />
        וואטסאפ
      </a>
    </div>
  </div>
);

/* ---- Highlight Icons ---- */
const HighlightIcon = ({ type }: { type: string }) => {
  const cls = "text-gold w-4 h-4";
  switch (type) {
    case "compass":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M3 11l9-9 9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M5 11v8a2 2 0 002 2h10a2 2 0 002-2v-8" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "savings":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M12 7v10M9 10l3-3 3 3M9 14l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3V7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M9 4v13M15 7v13" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "route":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <polygon points="12,2 10,10 14,10" fill="currentColor" />
          <polygon points="12,22 10,14 14,14" fill="currentColor" opacity="0.3" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
};

export default ServicesSection;
