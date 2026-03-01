import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Clock, CalendarDays, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CompassIcon from "@/components/CompassIcon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  if (!post) return <Navigate to="/blog" replace />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "הפרטים נשלחו בהצלחה!", description: "ניצור אתכם קשר בהקדם." });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden" dir="rtl">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-navy-gradient overflow-hidden">
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
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-accent/80 hover:text-accent transition-colors mb-8 text-sm font-medium"
            >
              <ArrowLeft size={16} />
              חזרה לבלוג
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/50 mb-4">
              <span className="flex items-center gap-1">
                <CalendarDays size={14} />
                {new Date(post.date).toLocaleDateString("he-IL")}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-3xl">
              {post.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            <ScrollReveal>
              <div className="rounded-xl overflow-hidden mb-10 shadow-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Text */}
            <div className="space-y-6">
              {post.content.map((paragraph, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <p className="text-foreground/80 leading-relaxed text-base lg:text-lg">
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
            </div>
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
                  רוצים לשמוע עוד? <span className="text-gradient-gold">דברו איתנו</span>
                </h2>
                <p className="text-muted-foreground">
                  השאירו פרטים ונחזור אליכם עם ייעוץ מותאם אישית
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

export default BlogPost;
