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

const services = [
  {
    icon: HomePurchaseIcon,
    title: "רכישת דירה",
    description:
      'בניית תמהיל משכנתא מותאם להכנסה, ניהול מו"מ מול מספר בנקים לקבלת התנאים הטובים ביותר.',
    color: "from-emerald-500/20 to-emerald-600/5",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-600",
  },
  {
    icon: AffordableHousingIcon,
    title: "מחיר למשתכן / מחיר מטרה",
    description:
      "ליווי משלב הזכייה ועד חתימה, פתרונות גרייס והלוואות ביניים מותאמות.",
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-600",
  },
  {
    icon: HomeUpgradeIcon,
    title: "משפרי דיור",
    description:
      "תכנון פיננסי למכירה וקנייה במקביל, הבטחת רצף כלכלי חלק.",
    color: "from-sky-500/20 to-sky-600/5",
    borderColor: "border-sky-500/30",
    iconColor: "text-sky-600",
  },
  {
    icon: InvestorIcon,
    title: "משקיעים",
    description:
      "התאמת משכנתא למינוף נכון ויצירת תזרים חודשי ברור.",
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "border-amber-500/30",
    iconColor: "text-amber-600",
  },
  {
    icon: SelfBuildIcon,
    title: "משכנתא לבנייה עצמית",
    description:
      "ליווי מהתכנון ועד לשחרור כספים, תיאום מול הבנקים בכל שלב.",
    color: "from-orange-500/20 to-orange-600/5",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-600",
  },
  {
    icon: RenovationIcon,
    title: "משכנתא לשיפוץ",
    description:
      "מימון יעיל עם תזרים מותאם לפרויקט השיפוץ שלכם.",
    color: "from-rose-500/20 to-rose-600/5",
    borderColor: "border-rose-500/30",
    iconColor: "text-rose-600",
  },
  {
    icon: LoanConsolidationIcon,
    title: "איחוד הלוואות",
    description:
      "סגירת מינוסים והלוואות יקרות, הורדת החזר חודשי משמעותית.",
    color: "from-violet-500/20 to-violet-600/5",
    borderColor: "border-violet-500/30",
    iconColor: "text-violet-600",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(215 55% 18%) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent/50" />
              <CompassIcon size={36} className="text-accent" />
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              השירותים שלנו
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              ניווט פיננסי מותאם אישית – כל שירות הוא תחנה במסלול שלך
            </p>
          </div>
        </ScrollReveal>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                className={`glass-card p-6 h-full group hover:-translate-y-1 transition-all duration-500 border ${service.borderColor} hover:shadow-xl`}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`${service.iconColor}`} size={26} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Route connector dot */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <div className="h-px flex-1 bg-accent/20" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;