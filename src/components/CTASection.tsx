import { MapPin, Phone, MessageCircle, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "@/components/ScrollReveal";
import CompassIcon from "@/components/CompassIcon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "הפרטים נשלחו בהצלחה!", description: "ניצור אתכם קשר בהקדם." });
    setFormData({ name: "", phone: "", message: "" });
  };

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
              השאירו פרטים ונחזור אליכם עם ייעוץ מותאם אישית
            </p>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.25}>
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5 text-right max-w-2xl mx-auto mb-10">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary-foreground/80 mb-1.5">שם מלא</label>
                  <Input
                    placeholder="ישראל ישראלי"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-right bg-white/15 border-white/40 text-white placeholder:text-white/50 focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-foreground/80 mb-1.5">טלפון</label>
                  <Input
                    placeholder="050-0000000"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="text-right bg-white/15 border-white/40 text-white placeholder:text-white/50 focus:border-accent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-foreground/80 mb-1.5">הודעה (אופציונלי)</label>
                <Textarea
                  placeholder="ספרו לנו קצת על הצרכים שלכם..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="text-right bg-white/15 border-white/40 text-white placeholder:text-white/50 focus:border-accent"
                  rows={4}
                />
              </div>
              <Button variant="gold" size="lg" className="w-full text-base" type="submit">
                <MapPin className="!size-5" />
                שלחו פרטים
              </Button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
