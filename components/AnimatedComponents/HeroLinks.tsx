"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
import { ImageIcon } from "lucide-react";

export default function HeroLinks({ whatsApp }: { whatsApp?: string }) {
  const waNum = whatsApp?.replace(/\+/g, "") ?? "";
  const waLink = waNum
    ? `https://wa.me/${waNum}?text=مرحباً، أود الاستفسار عن خدمات قهوجى الرياض`
    : "#contact";

  return (
    <div className="flex flex-wrap gap-3 pt-2">
      {waNum && (
        <motion.a
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          target="_blank"
          href={waLink}
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold bg-green-700 text-white hover:bg-green-600 shadow-lg hover:shadow-emerald-500/25 transition-all">
          <FaWhatsapp className="w-5 h-5" />
          واتساب — احجز الآن
        </motion.a>
      )}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08 }}>
        <Link
          href="#services"
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold border border-white/15 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-all">
          <ImageIcon className="w-4 h-4" />
          خدماتنا
        </Link>
      </motion.div>
    </div>
  );
}
