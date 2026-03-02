import { Compass, Phone, Mail, MapPin } from "lucide-react";
import CompassIcon from "@/components/CompassIcon";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-gradient border-t border-primary-foreground/10 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CompassIcon size={32} className="text-accent" />
              <span className="text-xl font-bold text-primary-foreground">
                מצפן משכנתאות
              </span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              הכיוון הנכון למשכנתא שלך. ליווי מקצועי, שקיפות מלאה ותכנון מדויק
              בכל שלב בדרך.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">
              ניווט מהיר
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "ראשי", href: "#hero" },
                { label: "שירותים", href: "#services" },
                { label: "תהליך עבודה", href: "#process" },
                { label: "אודות", href: "#about" },
                { label: "שאלות נפוצות", href: "#faq" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-primary-foreground/50 hover:text-accent transition-colors text-right"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">
              יצירת קשר
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+972556883590"
                className="flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-accent transition-colors"
              >
                <Phone size={14} />
                <span>055-688-3590</span>
              </a>
              <a
                href="mailto:info@compass-mortgage.co.il"
                className="flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-accent transition-colors"
              >
                <Mail size={14} />
                <span>info@compass-mortgage.co.il</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} מצפן משכנתאות. כל הזכויות שמורות.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
            <div className="h-px w-8 bg-accent/20" />
            <Compass className="text-accent/30" size={14} />
            <div className="h-px w-8 bg-accent/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
