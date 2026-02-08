import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import CompassIcon from "@/components/CompassIcon";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "האם כל אחד יכול לקבל משכנתא?",
    a: "באופן עקרוני כן, אך הבנקים בוחנים מספר פרמטרים כגון הכנסה, יציבות תעסוקתית, הון עצמי והיסטוריית אשראי. אנחנו עוזרים להתאים את הפנייה לבנק כך שתעלה את הסיכוי לאישור.",
  },
  {
    q: "האם אתם מבטיחים את הריבית הכי נמוכה בארץ?",
    a: "אנחנו פועלים להשיג את התנאים הטובים ביותר עבורך. באמצעות משא ומתן מול מספר בנקים ובזכות הניסיון שלנו, אנו מגיעים לתנאים תחרותיים מאוד.",
  },
  {
    q: "אני עצמאי, האם אפשר לקבל משכנתא?",
    a: "בהחלט! יש בנקים שמתמחים בעצמאיים. אנחנו יודעים כיצד להציג את ההכנסות בצורה שתמקסם את סיכויי האישור.",
  },
  {
    q: "כמה זמן לוקח לקבל אישור משכנתא?",
    a: "התהליך אורך בדרך כלל בין 2-4 שבועות, תלוי במורכבות המקרה ובמהירות הגשת המסמכים. אנחנו מזרזים את התהליך ככל האפשר.",
  },
  {
    q: "מה ההבדל בין משכנתא צמודה לריבית לא צמודה?",
    a: "משכנתא צמודה מדד משתנה לפי מדד המחירים לצרכן, בעוד שמשכנתא לא צמודה נשארת קבועה. לכל סוג יתרונות וחסרונות שנסביר לכם בפגישה.",
  },
  {
    q: "האם אפשר לשלב מספר מסלולים במשכנתא אחת?",
    a: "בהחלט! למעשה, שילוב מסלולים (תמהיל) הוא המפתח למשכנתא מאוזנת ונכונה. אנחנו בונים תמהיל מותאם אישית.",
  },
  {
    q: "מהו גרייס ואיך הוא עובד?",
    a: "גרייס היא תקופה שבה אתם משלמים רק ריבית (או בכלל לא), בדרך כלל בתחילת המשכנתא. מתאים למצבים כמו מחיר למשתכן או בנייה עצמית.",
  },
  {
    q: "אני זוכה במחיר למשתכן – מה חשוב לדעת?",
    a: "יש מספר היבטים ייחודיים כמו תקופת גרייס, הלוואת ביניים ותזמון התשלומים. אנחנו מתמחים בליווי זוכי מחיר למשתכן.",
  },
  {
    q: "האם אפשר למחזר משכנתא קיימת?",
    a: "כן! מיחזור משכנתא יכול לחסוך לכם עשרות אלפי שקלים. אנחנו בודקים האם כדאי למחזר ומלווים את התהליך.",
  },
  {
    q: "האם יועץ משכנתאות יכול לעזור לי עם סירובי בנק?",
    a: "בהחלט. יש לנו ניסיון רב בטיפול במקרים מורכבים ובמציאת פתרונות יצירתיים כשבנק אחד מסרב.",
  },
  {
    q: "האם אני חייב יועץ משכנתאות אם אני יכול ללכת ישירות לבנק?",
    a: "אתם לא חייבים, אבל יועץ משכנתאות חוסך לכם זמן, כסף ולחץ. אנחנו יודעים מה לבקש, איך לנהל משא ומתן ואיפה יש מקום לשיפור.",
  },
  {
    q: "איך יודעים אם כדאי לשנות את המשכנתא בעתיד?",
    a: "אנחנו עוקבים אחרי תנאי השוק ומעדכנים אתכם כשמזהים הזדמנות לשיפור תנאי המשכנתא שלכם.",
  },
  {
    q: "האם אתם מספקים ליווי אחרי חתימה?",
    a: "כן! הליווי שלנו לא נגמר בחתימה. אנחנו זמינים לכל שאלה ובודקים מעת לעת אם יש הזדמנות לשיפור.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent/50" />
              <div className="w-10 h-10 rounded-full border border-accent/40 flex items-center justify-center">
                <HelpCircle className="text-accent" size={20} />
              </div>
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              שאלות נפוצות
            </h2>
            <p className="text-lg text-muted-foreground">
              תשובות לשאלות שמרבית הלקוחות שלנו שואלים
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <AccordionItem
                  value={`item-${i}`}
                  className="glass-card px-6 border border-border/50 data-[state=open]:border-accent/30 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-right text-foreground font-medium hover:text-accent transition-colors py-4 [&[data-state=open]]:text-accent">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border border-accent/30 flex items-center justify-center shrink-0">
                        <CompassIcon size={14} className="text-accent" />
                      </div>
                      <span>{faq.q}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pr-9 pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;