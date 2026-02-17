"use client";

import { FooterData } from "@/lib/responseType";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const contacts = (
  phone: string,
  whatsapp: string,
  email: string,
  address: string,
) => [
  {
    id: "01",
    label: "الهاتف",
    value: phone,
    href: `tel:${phone}`,
    ltr: true,
    icon: Phone,
  },
  {
    id: "02",
    label: "واتساب",
    value: whatsapp,
    href: `https://wa.me/${whatsapp.replace("+", "")}?text=`,
    ltr: true,
    icon: MessageCircle,
  },
  {
    id: "03",
    label: "البريد الإلكتروني",
    value: email,
    href: `mailto:${email}`,
    ltr: false,
    icon: Mail,
  },
  {
    id: "04",
    label: "العنوان",
    value: address,
    href: null,
    ltr: false,
    icon: MapPin,
  },
];

export default function ContactSection({
  address,
  phone,
  email,
  whatsapp,
}: FooterData & { whatsapp: string }) {
  const items = contacts(phone ?? "", whatsapp, email ?? "", address ?? "");

  return (
    <section id="contact" dir="rtl" className="py-24 relative overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute top-[-20%] right-[-10%] w-125 h-125 rounded-full bg-cyan-400/6 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[-15%] left-[-12%] w-100 h-100 rounded-full bg-indigo-600/[0.07] blur-[90px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* ── Header ── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/25 text-cyan-400 text-[0.78rem] font-bold tracking-wider mb-5">
            <Phone className="w-3.5 h-3.5" />
            تواصل معنا
          </span>

          <h2
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)" }}>
            <span className="text-[#C7CBEF] [text-shadow:0_0_20px_rgba(199,203,239,0.25)]">
              معلومات{" "}
            </span>
            <span className="text-cyan-400">التواصل</span>
          </h2>

          <p className="mt-3 max-w-xl mx-auto text-white/50 text-base leading-relaxed">
            نحن هنا لخدمتكم والإجابة على جميع استفساراتكم. تواصل معنا عبر أي من
            الوسائل التالية وسيسعد فريقنا بمساعدتك.
          </p>

          {/* Gradient divider */}
          <div className="w-20 h-0.5 mx-auto mt-6 rounded-full bg-linear-to-l from-transparent via-cyan-400 to-transparent" />
        </motion.div>

        {/* ── Contact Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="group relative rounded-2xl overflow-hidden
                  bg-slate-800/40 backdrop-blur-xl
                  border border-t-white/13 border-white/8
                  hover:border-cyan-400/30
                  shadow-[0_4px_30px_rgba(0,0,0,0.2)]
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_0_18px_rgba(34,211,238,0.08)]
                  hover:-translate-y-1.5
                  transition-all duration-380 ease-out
                  p-7 flex flex-col items-center text-center gap-5">
                {/* Top cyan accent line */}
                <div className="absolute top-0 inset-x-0 h-0.5 bg-linear-to-l from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/60 transition-all duration-500" />

                {/* Ghost number */}
                <span className="absolute top-3 left-4 text-6xl font-black text-white/40 select-none leading-none">
                  {item.id}
                </span>

                {/* Icon badge */}
                <div className="relative w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-400/15 group-hover:shadow-[0_0_16px_rgba(34,211,238,0.25)] transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Label */}
                <p className="text-sm font-bold text-[#C7CBEF] tracking-wide">
                  {item.label}
                </p>

                {/* Value */}
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir={item.ltr ? "ltr" : "rtl"}
                    className="text-white/70 font-medium text-sm leading-relaxed hover:text-cyan-400 transition-colors duration-200 break-all">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white/70 font-medium text-sm leading-relaxed">
                    {item.value}
                  </p>
                )}

                {/* Bottom inner divider */}
                <div className="w-10 h-px bg-linear-to-l from-transparent via-white/10 to-transparent mt-auto" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
