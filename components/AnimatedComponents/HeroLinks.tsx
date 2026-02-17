"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

export default function HeroLinks({ whatsApp }: { whatsApp?: string }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
      {whatsApp && (
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/${whatsApp.replace(/\+/g, "")}?text=`}
          className="
            relative inline-flex items-center gap-3
            rounded-full px-8 py-3 text-sm font-bold
            text-cyan-400
            border border-cyan-400/30
            bg-cyan-400/10
            backdrop-blur
            overflow-hidden
            transition-all duration-300
            hover:bg-cyan-400
            hover:text-midnight
            hover:border-cyan-400
            hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
            hover:text-black
          ">
          {/* top highlight */}
          <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/10 to-transparent rounded-t-full" />
          اطلب الخدمة الآن
          <FaArrowLeft />
        </motion.a>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        viewport={{ once: true }}>
        <Link
          href="#gallery"
          className="
            relative inline-flex items-center gap-3
            rounded-full px-8 py-3 text-sm font-bold
            text-silver
            border border-white/10
            bg-white/5
            backdrop-blur
            transition-all duration-300
            hover:bg-white/10
            hover:text-white
          ">
          عرض معرض الأعمال
        </Link>
      </motion.div>
    </div>
  );
}
