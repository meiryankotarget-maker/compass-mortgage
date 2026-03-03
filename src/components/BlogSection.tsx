import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Clock, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import CompassIcon from "@/components/CompassIcon";

const BlogSection = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-muted/40 relative overflow-hidden" dir="rtl">
      <div className="absolute left-[-60px] top-[-60px] opacity-[0.03]">
        <CompassIcon size={350} className="text-accent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-semibold tracking-wide mb-2">הבלוג</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              טיפים <span className="text-gradient-gold">למשכנתאות</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              מדריכים, טיפים ועדכונים שיעזרו לכם לקבל החלטות חכמות בתחום המשכנתאות
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {latestPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.12}>
              <Link to={`/blog/${post.slug}`} className="group block h-full">
                <article className="glass-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
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
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
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

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <Button variant="gold" size="lg" className="text-base px-10" asChild>
              <Link to="/blog">לכל המאמרים</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlogSection;
