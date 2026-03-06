import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Clock, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CompassIcon from "@/components/CompassIcon";

const Blog = () => {
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
        <div className="absolute left-[-80px] bottom-[-80px] opacity-[0.04]">
          <CompassIcon size={400} className="text-accent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-accent/80 hover:text-accent transition-colors mb-8 text-sm font-medium"
            >
              <ArrowLeft size={16} />
              חזרה לדף הבית
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-accent text-sm font-medium mb-2">מרכז הידע למשכנתאות</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              תובנות מהשטח
            </h1>
            <p className="text-lg text-primary-foreground/60 max-w-2xl">
              מאמרים, טיפים ומדריכים מעולם המשכנתאות והפיננסים
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block h-full"
                >
                  <article className="glass-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <CalendarDays size={13} />
                          {new Date(post.date).toLocaleDateString("he-IL")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={13} />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {post.summary}
                      </p>
                      <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                        קרא עוד
                        <ArrowLeft size={14} />
                      </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
