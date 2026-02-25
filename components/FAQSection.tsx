"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
    <>
      <style>{`
        #faq-section .faq-item {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-top: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.35s ease, box-shadow 0.35s ease;
        }

        #faq-section .faq-item:hover {
          border-color: rgba(34, 211, 238, 0.22);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 12px rgba(34,211,238,0.06);
        }

        #faq-section .faq-item.is-open {
          border-color: rgba(34, 211, 238, 0.3);
          box-shadow: 0 10px 40px rgba(0,0,0,0.35), 0 0 18px rgba(34,211,238,0.1);
        }

        #faq-section .faq-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 22px 24px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: right;
          transition: background 0.2s ease;
        }

        #faq-section .faq-btn:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        #faq-section .faq-number {
          font-size: 0.7rem;
          font-weight: 700;
          color: #22D3EE;
          background: rgba(34, 211, 238, 0.08);
          border: 1px solid rgba(34, 211, 238, 0.2);
          border-radius: 9999px;
          padding: 2px 10px;
          letter-spacing: 0.05em;
          flex-shrink: 0;
        }

        #faq-section .faq-chevron {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(229, 231, 235, 0.5);
          transition: all 0.3s ease;
        }

        #faq-section .faq-item.is-open .faq-chevron {
          background: rgba(34, 211, 238, 0.12);
          border-color: rgba(34, 211, 238, 0.35);
          color: #22D3EE;
          box-shadow: 0 0 10px rgba(34,211,238,0.2);
        }

        #faq-section .faq-answer-inner {
          padding: 0 24px 22px 24px;
          position: relative;
        }

        #faq-section .faq-answer-inner::before {
          content: '';
          display: block;
          height: 1px;
          margin-bottom: 18px;
          background: linear-gradient(to left, transparent, rgba(34, 211, 238, 0.2), transparent);
        }

        #faq-section .badge-pill {
          background: rgba(34, 211, 238, 0.08);
          border: 1px solid rgba(34, 211, 238, 0.25);
          color: #22D3EE;
          border-radius: 9999px;
          padding: 6px 18px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        #faq-section .glow-orb {
          animation: faq-orb-pulse 9s ease-in-out infinite alternate;
        }
        @keyframes faq-orb-pulse {
          0%  { opacity: 0.35; transform: scale(1); }
          100%{ opacity: 0.6;  transform: scale(1.1); }
        }
      `}</style>

      <section
        id="faq-section"
        dir="rtl"
        className="py-24 relative overflow-hidden">
        {/* Background glow orbs */}
        <div
          className="glow-orb pointer-events-none absolute top-0 right-[-20%] rounded-full"
          style={{
            width: 550,
            height: 550,
            background: "rgba(34, 211, 238, 0.06)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-[-10%] left-[-15%] rounded-full"
          style={{
            width: 420,
            height: 420,
            background: "rgba(99, 102, 241, 0.07)",
            filter: "blur(90px)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* ── Section header ── */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
            <span className="badge-pill mb-5">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              الأسئلة الشائعة
            </span>

            <h2
              className="font-bold leading-tight mt-2"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                color: "#C7CBEF",
                textShadow: "0 0 20px rgba(199, 203, 239, 0.25)",
              }}>
              إجابات على <span style={{ color: "#22D3EE" }}>استفساراتكم</span>
            </h2>
            <p
              className="mt-3 max-w-xl mx-auto"
              style={{
                color: "rgba(229,231,235,0.50)",
                fontSize: "1rem",
                lineHeight: 1.75,
              }}>
              جمعنا لكم أكثر الأسئلة شيوعًا حول خدمات قهوجى الرياض لمساعدتكم في
              اتخاذ القرار المناسب لمناسبتكم.
            </p>
          </motion.div>

          {/* ── FAQ list ── */}
          <div className="space-y-3">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  className={`faq-item${isOpen ? " is-open" : ""}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.055,
                    duration: 0.5,
                    ease: "easeOut",
                  }}>
                  <button
                    className="faq-btn"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}>
                    {/* Right side: number + question */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="faq-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className="font-bold text-right flex-1"
                        style={{
                          color: isOpen ? "#ffffff" : "rgba(229,231,235,0.85)",
                          fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
                          lineHeight: 1.5,
                          transition: "color 0.25s ease",
                        }}>
                        {item.question}
                      </h3>
                    </div>

                    {/* Left side: chevron */}
                    <motion.div
                      className="faq-chevron"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}>
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}>
                        <div className="faq-answer-inner">
                          <p
                            style={{
                              color: "rgba(229,231,235,0.65)",
                              lineHeight: 1.8,
                              fontSize: "0.95rem",
                            }}>
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* ── Bottom CTA nudge ── */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}>
            <p
              style={{ color: "rgba(229,231,235,0.4)", fontSize: "0.9rem" }}
              className="flex items-center gap-3 justify-center">
              لم تجد إجابة؟{" "}
              <a
                href="#contact"
                style={{
                  color: "#22D3EE",
                  fontWeight: 700,
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(34,211,238,0.3)",
                  paddingBottom: "1px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.borderColor = "#22D3EE")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.borderColor =
                    "rgba(34,211,238,0.3)")
                }>
                تواصل معنا مباشرةً
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
