import { Shield, Clock, MessageSquare, Handshake, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CompassIcon from "@/components/CompassIcon";

const differentiators = [
  { icon: Clock, text: "זמינות מלאה" },
  { icon: MessageSquare, text: "הסברים ברורים" },
  { icon: Shield, text: "ניסיון במקרים מורכבים" },
  { icon: Handshake, text: "קשרים בבנקים" },
  { icon: Award, text: "ליווי אישי" },
];

const AboutSection = () => {
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
            {/* Visual side */}
            <ScrollReveal direction="right">
              <div className="relative flex items-center justify-center">
                {/* Compass decoration */}
                <div className="relative">
                  <CompassIcon
                    size={280}
                    className="text-foreground/80"
                  />
                  {/* Decorative rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[200px] h-[200px] rounded-full border border-accent/20 animate-pulse-gold" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[320px] h-[320px] rounded-full border border-border/30" />
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute top-4 left-4 glass-card px-3 py-2 animate-float">
                  <span className="text-xs font-semibold text-accent">ניסיון עשיר</span>
                </div>
                <div className="absolute bottom-8 right-0 glass-card px-3 py-2 animate-float" style={{ animationDelay: "1s" }}>
                  <span className="text-xs font-semibold text-accent">שקיפות מלאה</span>
                </div>
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
                    <div
                      key={i}
                      className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                    >
                      <item.icon className="text-accent shrink-0" size={18} />
                      <span className="text-sm font-medium text-foreground">
                        {item.text}
                      </span>
                    </div>
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