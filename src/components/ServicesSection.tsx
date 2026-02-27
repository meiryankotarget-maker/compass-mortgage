import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import CompassIcon from "@/components/CompassIcon";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, ArrowLeft } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="relative overflow-hidden">
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
              מפת המסלולים שלנו • {services.length} תחנות יעד
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
  <Link to={`/services/${service.slug}`} className="block h-full">
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative p-6 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:border-gold/30 transition-colors duration-300 group h-full cursor-pointer"
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

      {/* CTA hint */}
      <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs text-accent font-medium">קרא עוד</span>
        <ArrowLeft size={14} className="text-accent" />
      </div>
    </motion.div>
  </Link>
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

export default ServicesSection;
