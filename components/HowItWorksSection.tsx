"use client";

import { motion } from "motion/react";
import { MessageCircle, Package, Coffee, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "تواصل واحجز",
    description:
      "اتصل بنا أو راسلنا عبر واتساب لمعرفة التفاصيل والأسعار، واختر الباقة والموعد المناسبين لمناسبتكم.",
  },
  {
    icon: Package,
    number: "02",
    title: "نُجهّز كل شيء",
    description:
      "نحضر الدلال، الفناجيل، القهوة والمستلزمات، ونصل إلى مكان المناسبة في الوقت المحدد مع فريق الصبّابين.",
  },
  {
    icon: Coffee,
    number: "03",
    title: "تقديم راقٍ",
    description:
      "يقدم فريقنا القهوة العربية لضيوفكم بأسلوب احترافي وأنيق طوال مدة المناسبة حسب الاتفاق.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "انطباع لا يُنسى",
    description:
      "نضمن لكم تجربة ضيافة سلسة تترك أثراً إيجابياً في ضيوفكم وتُكمل نجاح مناسبتكم.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      dir="rtl"
      className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.header
          className="text-center max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-wider mb-4">
            خطوات بسيطة
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            كيف نعمل <span className="text-cyan-400">معكم</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm">
            من أول اتصال حتى نهاية المناسبة — نرافقكم خطوة بخطوة.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex gap-5 rounded-2xl border border-white/10 bg-slate-800/30 p-6 hover:border-cyan-500/20 hover:bg-slate-800/50 transition-all"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <step.icon className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-cyan-400/80 text-xs font-bold">{step.number}</span>
                <h3 className="font-bold text-slate-200 mt-1 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
