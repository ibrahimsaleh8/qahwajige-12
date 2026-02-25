"use client";

import { FooterData } from "@/lib/responseType";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection({
  address,
  phone,
  email,
  whatsapp,
}: FooterData & { whatsapp: string }) {
  const waHref = whatsapp
    ? `https://wa.me/${whatsapp.replace(/\+/g, "")}?text=مرحباً، أود الاستفسار عن خدمات قهوجى الرياض`
    : null;

  return (
    <section
      id="contact-information"
      dir="rtl"
      className="py-20 sm:py-28 relative overflow-hidden bg-slate-900">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-150 h-75 rounded-full bg-cyan-500/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            احجز معنا لمناسبتك
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-md mx-auto leading-relaxed">
            دعنا نتولى مهمة الضيافة، واستمتع بمناسبتك بكل راحة.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {waHref && (
              <motion.a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                <MessageCircle className="w-4 h-4" />
                احجز عبر واتساب
                <span className="mr-1">←</span>
              </motion.a>
            )}

            {phone && (
              <motion.a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/15 text-white font-semibold text-sm hover:border-white/30 hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                dir="ltr">
                {phone}
              </motion.a>
            )}
          </div>

          {/* Extra contact hints */}
          {(email || address) && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-slate-500 text-xs">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="hover:text-slate-300 transition-colors">
                  {email}
                </a>
              )}
              {address && <span>{address}</span>}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
