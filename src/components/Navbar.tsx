import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Compass, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import CompassIcon from "@/components/CompassIcon";

const navLinks: { label: string; href: string; isRoute?: boolean }[] = [
  { label: "ראשי", href: "#hero" },
  { label: "שירותים", href: "#services" },
  { label: "תהליך עבודה", href: "#process" },
  { label: "אודות", href: "#about" },
  { label: "שאלות נפוצות", href: "#faq" },
  { label: "בלוג", href: "/blog", isRoute: true },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, isRoute?: boolean) => {
    setIsMobileMenuOpen(false);
    if (isRoute) {
      navigate(href);
      return;
    }
    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isMobileMenuOpen
          ? "bg-[#1a2540] shadow-lg"
          : isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2 group"
          >
            <CompassIcon
              size={36}
              className={`transition-colors duration-300 ${
                isScrolled ? "text-accent" : "text-accent"
              }`}
            />
            <span
              className={`text-lg lg:text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              מצפן משכנתאות
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, link.isRoute)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:right-0 after:bg-accent after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-right ${
                  isScrolled
                    ? "text-foreground/70"
                    : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="gold"
              size="sm"
              onClick={() => handleNavClick("#cta")}
            >
              השאר פרטים
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={isScrolled ? "text-foreground" : "text-primary-foreground"}
                size={24}
              />
            ) : (
              <Menu
                className={isScrolled ? "text-foreground" : "text-primary-foreground"}
                size={24}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-white/20 mt-2">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, link.isRoute)}
                  className="text-sm font-medium text-white hover:text-accent transition-colors text-right py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="gold"
                size="sm"
                className="mt-2"
                onClick={() => handleNavClick("#cta")}
              >
                השאר פרטים
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
