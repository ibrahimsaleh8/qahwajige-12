"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "ما هي المناطق التي تغطونها في تقديم الخدمة؟",
    answer:
      "نقدم خدماتنا داخل مدينة الرياض والمناطق المجاورة لها، كما يمكن التنسيق لتقديم الخدمة في مناطق أخرى حسب الطلب المسبق.",
  },
  {
    question: "هل توفرون جميع مستلزمات تقديم القهوة؟",
    answer:
      "نعم، تشمل خدمتنا جميع أدوات الضيافة مثل الدلال، الفناجيل، الصواني، وتقديم القهوة العربية بطريقة راقية تناسب مناسبتكم.",
  },
  {
    question: "كم عدد الصبابين المناسب لمناسبتي؟",
    answer:
      "يعتمد ذلك على عدد الضيوف وطبيعة المناسبة، وغالبًا نوصي بصباب واحد لكل 30 إلى 50 ضيف لضمان سرعة الخدمة وجودتها.",
  },
  {
    question: "هل تقدمون الخدمة لجميع أنواع المناسبات؟",
    answer:
      "نعم، نخدم مختلف المناسبات مثل الأعراس، الاجتماعات الرسمية، المناسبات العائلية، والفعاليات الخاصة.",
  },
  {
    question: "هل يمكن تخصيص الزي أو طريقة التقديم؟",
    answer:
      "بالتأكيد، نوفر خيارات متعددة في الزي وأسلوب التقديم بما يتناسب مع ذوق العميل وطبيعة المناسبة.",
  },
  {
    question: "كم مدة تقديم الخدمة خلال المناسبة؟",
    answer:
      "مدة الخدمة تعتمد على حجم المناسبة وعدد الضيوف، ويتم الاتفاق عليها مسبقًا لضمان تغطية الحدث بالكامل.",
  },
  {
    question: "ما هي طريقة حجز الخدمة؟",
    answer:
      "يمكنك الحجز بسهولة عبر الاتصال المباشر أو من خلال الواتساب باستخدام الأزرار الموجودة في الموقع، ويفضل الحجز المبكر لضمان التوفر.",
  },
  {
    question: "هل يمكن تعديل أو إلغاء الحجز؟",
    answer:
      "نعم، يمكن تعديل أو إلغاء الحجز وفق سياسة الحجز لدينا، ويفضل التواصل معنا مبكرًا في حال وجود أي تغيير.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
          repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.04) 0, rgba(255, 255, 255, 0.04) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.04) 0, rgba(255, 255, 255, 0.04) 1px, transparent 1px, transparent 20px)
        `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-main-color mb-4">
            <HelpCircle className="w-6 h-6" />
            <span className="font-bold text-lg">الأسئلة الشائعة</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            إجابات على استفساراتكم
          </h2>
          <p className="text-low-color max-w-2xl mx-auto">
            لقد جمعنا لكم أكثر الأسئلة شيوعًا حول خدماتنا لمساعدتكم في اتخاذ
            القرار المناسب لمناسبتكم.
          </p>
        </div>

        <div className="mx-auto space-y-4 max-w-6xl">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-card-background shadow-sm border border-white/10 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-right bg-card-background hover:bg-card-background/90 transition-colors duration-200">
                <h3 className="font-bold text-lg text-white">
                  {item.question}
                </h3>
                <span
                  className={`transform transition-transform duration-300 text-main-color ${
                    openIndex === index ? "rotate-180" : ""
                  }`}>
                  <ChevronDown className="w-6 h-6" />
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <p className="px-5 pb-5 text-white leading-relaxed border-t border-white/10 pt-4">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
