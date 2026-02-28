import ScrollReveal from "@/components/ScrollReveal";
import CompassIcon from "@/components/CompassIcon";
import { Check } from "lucide-react";

interface Testimonial {
  name: string;
  message: string;
  time: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "משפחת לוי",
    message: "מאיר, אין מילים! חסכת לנו 180,000 ₪ על המשכנתא. לא מאמינים שלא פנינו אליך קודם 🙏",
    time: "14:20",
    initials: "מל",
  },
  {
    name: "דני ושירה כ.",
    message: "נדחינו ב-3 בנקים ואתה סידרת לנו אישור תוך 48 שעות!! אלוף 💪",
    time: "09:45",
    initials: "דש",
  },
  {
    name: "משפחת אברהמי",
    message: "ירדנו מפריים +1.8% לפריים +0.85%. כל חודש חוסכים מאות שקלים בלי שעשינו כלום. תודה ענקית!",
    time: "18:03",
    initials: "מא",
  },
  {
    name: "יוסי ומיכל ר.",
    message: "הבירוקרטיה של מחיר למשתכן שיגעה אותנו. מאיר לקח את הכל על עצמו והרגשנו שיש מישהו שבאמת דואג 🏠",
    time: "11:32",
    initials: "ימ",
  },
  {
    name: "משפחת חדד",
    message: "חשבנו שאין לנו מספיק הון עצמי בכלל. הוא מצא לנו מימון 90% עם תנאים מטורפים. הפך את הבלתי אפשרי לאפשרי!",
    time: "16:55",
    initials: "מח",
  },
  {
    name: "אבי ורונית ג.",
    message: "הבנייה העצמית יצאה מכל פרופורציה. מאיר תכנן מחדש את המימון וחסך לנו 220,000 ₪. בלעדיו היינו מפסידים את הבית",
    time: "20:11",
    initials: "אר",
  },
  {
    name: "משפחת מזרחי",
    message: "היו לנו 5 הלוואות בבלאגן מוחלט. הוא איחד הכל לתשלום אחד נוח. סוף סוף סדר בחיים 😅",
    time: "13:07",
    initials: "ממ",
  },
  {
    name: "אלון ק.",
    message: "קניתי דירה להשקעה לפי העצה שלו. תשואה של 5.2%! ההשקעה הכי טובה שעשיתי בחיים. ממליץ בחום 🔥",
    time: "22:38",
    initials: "אק",
  },
];

const ChatBubble = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex gap-3 items-end" dir="rtl">
    {/* Avatar */}
    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0 text-sm font-bold text-accent">
      {testimonial.initials}
    </div>

    {/* Bubble */}
    <div className="relative flex-1 rounded-xl rounded-br-none bg-[hsl(120_50%_92%)] p-4 shadow-sm">
      {/* Tail */}
      <div
        className="absolute -bottom-0 -right-[7px] w-0 h-0"
        style={{
          borderLeft: "8px solid hsl(120 50% 92%)",
          borderBottom: "8px solid transparent",
        }}
      />

      <p className="font-bold text-foreground text-sm mb-1.5">{testimonial.name}</p>
      <p className="text-foreground/80 text-sm leading-relaxed">{testimonial.message}</p>

      {/* Time + blue ticks */}
      <div className="flex items-center gap-1 justify-end mt-2">
        <span className="text-[11px] text-muted-foreground">{testimonial.time}</span>
        <div className="flex -space-x-1.5 text-[hsl(210_80%_55%)]">
          <Check size={14} strokeWidth={2.5} />
          <Check size={14} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
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
              מה הלקוחות כותבים לי
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              הודעות אמיתיות מלקוחות מרוצים
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <ChatBubble testimonial={t} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
