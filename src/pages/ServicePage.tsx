import { useParams, Link, Navigate } from "react-router-dom";
import { services } from "@/data/services";
import { ArrowRight, MapPin, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import CompassIcon from "@/components/CompassIcon";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  if (!service) return <Navigate to="/" replace />;

  const ServiceIcon = service.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "הפרטים נשלחו בהצלחה!",
      description: "ניצור אתכם קשר בהקדם.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-navy-gradient overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--gold)) 0.5px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <div className="absolute left-[-80px] bottom-[-80px] opacity-[0.04]">
          <CompassIcon size={400} className="text-accent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-accent/80 hover:text-accent transition-colors mb-8 text-sm font-medium"
            >
              <ArrowRight size={16} />
              חזרה לדף הבית
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl border border-accent/20 bg-accent/[0.08] flex items-center justify-center">
                <ServiceIcon className="text-accent" size={32} />
              </div>
              <div>
                <p className="text-accent text-sm font-medium mb-1">השירותים שלנו</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                  {service.title}
                </h1>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-primary-foreground/60 max-w-2xl">
              {service.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Main text */}
            <div className="lg:col-span-2 space-y-6">
              {service.longDescription.map((paragraph, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <p className="text-foreground/80 leading-relaxed text-base lg:text-lg">
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            {/* Benefits sidebar */}
            <ScrollReveal delay={0.2}>
              <div className="glass-card p-6 h-fit sticky top-24">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <CompassIcon size={20} className="text-accent" />
                  היתרונות שלנו
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                      <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA & Contact Form */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <CompassIcon size={40} className="text-accent mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  מוכנים להתחיל את <span className="text-gradient-gold">המסלול</span>?
                </h2>
                <p className="text-muted-foreground">
                  השאירו פרטים ונחזור אליכם עם תוכנית מותאמת אישית
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">שם מלא</label>
                    <Input
                      placeholder="ישראל ישראלי"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="text-right"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">טלפון</label>
                    <Input
                      placeholder="050-0000000"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="text-right"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">הודעה (אופציונלי)</label>
                  <Textarea
                    placeholder="ספרו לנו קצת על הצרכים שלכם..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="text-right"
                    rows={4}
                  />
                </div>
                <Button variant="gold" size="lg" className="w-full text-base" type="submit">
                  <MapPin className="!size-5" />
                  שלחו פרטים
                </Button>
              </form>
            </ScrollReveal>

            {/* Alternative contact */}
            <ScrollReveal delay={0.2}>
              <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
                <Button variant="gold-outline" size="sm" asChild>
                  <a href="tel:+972500000000">
                    <Phone className="!size-4" />
                    קבע שיחת טלפון
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent" asChild>
                  <a href="https://wa.me/972500000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="!size-4" />
                    שלח וואטסאפ
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
