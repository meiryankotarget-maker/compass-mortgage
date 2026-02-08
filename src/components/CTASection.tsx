import { MapPin, Phone, MessageCircle, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import CompassIcon from "@/components/CompassIcon";

const CTASection = () => {
  return (
    <section
      id="cta"
      className="py-24 lg:py-32 bg-navy-gradient relative overflow-hidden"
    >
      {/* Background compass */}
      <div className="absolute right-[-100px] bottom-[-100px] opacity-[0.05]">
        <CompassIcon size={500} className="text-accent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <CompassIcon size={56} className="text-accent mx-auto mb-6" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              בואו נתחיל את{" "}
              <span className="text-gradient-gold">המסלול</span> שלכם
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-primary-foreground/60 mb-10 max-w-xl mx-auto">
              ניצור קשר בהקדם, נבנה תמהיל מותאם עבורך ונראה איפה אפשר לחסוך
              כסף וריביות.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="gold"
                size="lg"
                className="text-base px-10 min-w-[200px] animate-pulse-gold"
                onClick={() =>
                  document
                    .querySelector("#contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <MapPin className="!size-5" />
                השאר פרטים עכשיו
              </Button>

              <Button
                variant="gold-outline"
                size="lg"
                className="text-base px-10 min-w-[200px] border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <a href="tel:+972500000000">
                  <Phone className="!size-5" />
                  קבע שיחת טלפון
                </a>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="text-base px-10 min-w-[200px] text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/5"
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

          {/* Route connector */}
          <ScrollReveal delay={0.4}>
            <div className="flex items-center justify-center gap-2 mt-10">
              <div className="w-2 h-2 rounded-full bg-accent/50" />
              <div className="h-px w-16 bg-accent/20" />
              <Compass className="text-accent/40" size={16} />
              <div className="h-px w-16 bg-accent/20" />
              <div className="w-2 h-2 rounded-full bg-accent/50" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;