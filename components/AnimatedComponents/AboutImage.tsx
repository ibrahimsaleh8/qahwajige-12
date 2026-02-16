"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function AboutImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="flex justify-center items-center">
      {/* IMAGE (LCP) — NO ANIMATION */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg md:w-1/2 md:h-200">
        <Image
          src={imageUrl}
          alt="Hero Image"
          width={1000}
          height={1000}
          className="w-full h-200 object-top object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/40" />

        {/* Animated Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute bottom-6 right-6 bg-white text-black rounded-xl p-4 shadow-lg max-w-50">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[hsl(var(--color-main-color))]/10 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-[hsl(var(--color-main-color))]"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
              </svg>
            </div>
            <span className="text-sm font-semibold">جودة استثنائية</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
