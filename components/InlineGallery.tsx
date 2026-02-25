"use client";

import { GalleryImageData } from "@/lib/responseType";
import Image from "next/image";
import { motion } from "motion/react";

type Props = {
  images: GalleryImageData[];
  title?: string;
  className?: string;
};

export function InlineGallery({ images, title, className = "" }: Props) {
  if (!images?.length) return null;

  return (
    <div className={`mt-14 pt-10 border-t border-white/10 ${className}`}>
      {title && (
        <p className="text-slate-500 text-sm font-medium mb-5 text-center">{title}</p>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-slate-800/30 group shadow-lg"
          >
            <Image
              src={img.url}
              alt={img.alt ?? `صورة ${i + 1}`}
              fill
              className="object-cover transition-transform duration-400 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, 200px"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <span className="text-xs text-white/95 truncate w-full">{img.alt ?? `صورة ${i + 1}`}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
