import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Star, ArrowLeftRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CompassIcon from "@/components/CompassIcon";

interface Story {
  challenge: string;
  challengeDetail: string;
  solution: string;
  quote: string;
  client: string;
}

const stories: Story[] = [
  {
    challenge: "החזר חודשי חונק",
    challengeDetail: "משפחה עם החזר של 8,200 ₪ שלא הצליחה לסגור את החודש",
    solution: "חיסכון של 180,000 ₪",
    quote: "מאיר הציל לנו את התקציב המשפחתי!",
    client: "משפחת לוי",
  },
  {
    challenge: "סירוב בנקאי למשכנתא",
    challengeDetail: "זוג צעיר שנדחה בשלושה בנקים שונים",
    solution: "אישור משכנתא תוך 48 שעות",
    quote: "לא האמנו שזה אפשרי אחרי כל הסירובים",
    client: "דני ושירה כ.",
  },
  {
    challenge: "ריבית גבוהה מדי",
    challengeDetail: "משכנתא ישנה עם ריבית פריים +1.8% שאף אחד לא טיפל בה",
    solution: "ירידה לפריים +0.85%",
    quote: "חסכנו מאות שקלים כל חודש בלי מאמץ",
    client: "משפחת אברהמי",
  },
  {
    challenge: "מחיר למשתכן - בלבול מוחלט",
    challengeDetail: "לא ידעו מאיפה להתחיל עם כל הבירוקרטיה והניירת",
    solution: "ליווי מלא עד קבלת המפתח",
    quote: "הרגשנו שיש מישהו שבאמת דואג לנו",
    client: "יוסי ומיכל ר.",
  },
  {
    challenge: "הון עצמי לא מספיק",
    challengeDetail: "חלמו על דירה אבל חשבו שאין להם מספיק כסף להתחלה",
    solution: "מימון 90% עם תנאים מעולים",
    quote: "הפך את הבלתי אפשרי לאפשרי!",
    client: "משפחת חדד",
  },
  {
    challenge: "בנייה עצמית - סיוט פיננסי",
    challengeDetail: "פרויקט בנייה שיצא מכל פרופורציה תקציבית",
    solution: "תכנון מחדש וחיסכון של 220,000 ₪",
    quote: "בלעדיו היינו מפסידים את הבית",
    client: "אבי ורונית ג.",
  },
  {
    challenge: "הלוואות מפוזרות בכל מקום",
    challengeDetail: "5 הלוואות שונות עם החזרים שלא מסתנכרנים",
    solution: "איחוד לתשלום אחד נוח",
    quote: "סוף סוף סדר בבלאגן הפיננסי",
    client: "משפחת מזרחי",
  },
  {
    challenge: "משקיע מתלבט",
    challengeDetail: "רצה לקנות דירה להשקעה אבל פחד לטעות",
    solution: "תשואה של 5.2% על ההשקעה",
    quote: "ההשקעה הכי טובה שעשיתי בחיים",
    client: "אלון ק.",
  },
];

const FlipCard = ({ story, index }: { story: Story; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-[1000px] h-[280px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Front - Challenge */}
        <div
          className="absolute inset-0 rounded-xl border border-border/60 bg-card p-6 flex flex-col items-center justify-center text-center gap-4"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertTriangle className="text-accent" size={24} />
          </div>
          <h4 className="text-lg font-bold text-foreground">{story.challenge}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {story.challengeDetail}
          </p>
          <div className="mt-auto flex items-center gap-1.5 text-xs text-accent font-medium">
            <ArrowLeftRight size={14} />
            <span>לחצו לראות את הפתרון</span>
          </div>
        </div>

        {/* Back - Solution */}
        <div
          className="absolute inset-0 rounded-xl border border-accent/30 bg-primary p-6 flex flex-col items-center justify-center text-center gap-3"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h4 className="text-xl font-bold text-accent">{story.solution}</h4>
          <p className="text-sm text-primary-foreground/70 italic leading-relaxed">
            "{story.quote}"
          </p>
          <div className="flex gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="text-accent fill-accent"
              />
            ))}
          </div>
          <span className="text-xs text-primary-foreground/50 font-medium mt-1">
            — {story.client}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

const SuccessStoriesSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <CompassIcon size={500} className="text-foreground" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent/50" />
              <span className="text-sm font-medium text-accent">מהשטח</span>
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              סיפורי הצלחה
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              העבירו את העכבר על הכרטיסייה כדי לגלות איך הפכנו את האתגר להצלחה
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {stories.map((story, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <FlipCard story={story} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
