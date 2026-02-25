"use client";

import { PackageData, GalleryImageData } from "@/lib/responseType";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
import { InlineGallery } from "./InlineGallery";

export default function PremiumPackagesSection({
  whatsapp,
  packages,
  gallery = [],
}: {
  whatsapp: string;
  packages: PackageData[];
  gallery?: GalleryImageData[];
}) {
  const wa = (whatsapp || "").replace(/\+/g, "");
  const waLink = wa ? `https://wa.me/${wa}?text=أريد الاستفسار عن الباقات — قهوجى الرياض` : "#contact";

  if (!packages?.length) return null;

  return (
    <section id="packages" dir="rtl" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber-500/5 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.header
          className="text-center max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-wider mb-4">
            باقات مميزة
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            اختر الباقة المناسبة <span className="text-cyan-400">لمناسبتك</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm">باقات مصممة بعناية لتلبية احتياجاتكم</p>
        </motion.header>

        {/* Horizontal scroll on small, grid on large — single row of equal cards */}
        <div className="flex gap-5 overflow-x-auto pb-4 md:overflow-visible md:grid md:grid-cols-3 md:gap-6 snap-x snap-mandatory scrollbar-thin">
          {packages.map((pkg, index) => {
            const isFeatured = index === 1;
            return (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`
                  shrink-0 w-[min(100%,320px)] md:w-auto snap-center
                  rounded-2xl border overflow-hidden
                  flex flex-col
                  transition-all duration-300
                  ${isFeatured
                    ? "border-cyan-500/30 bg-slate-800/50 shadow-lg shadow-cyan-500/5 md:scale-[1.02]"
                    : "border-white/10 bg-slate-800/30 hover:border-cyan-500/20"
                  }
                `}
              >
                {/* Image at top — fixed aspect */}
                <div className="relative h-44 bg-slate-700/50">
                  {pkg.image ? (
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 320px, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-black text-2xl">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />
                  {isFeatured && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-cyan-500 text-slate-900 text-[0.65rem] font-bold">
                      الأكثر طلباً
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-bold text-lg text-white mb-3">{pkg.title}</h3>
                  {pkg.features?.length > 0 && (
                    <ul className="space-y-2 flex-1">
                      {pkg.features.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-right text-sm text-slate-400">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0" strokeWidth={2.5} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      mt-5 w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2
                      transition-all
                      ${isFeatured
                        ? "bg-cyan-500 text-slate-900 hover:bg-cyan-400"
                        : "bg-white/10 text-slate-300 hover:bg-white/15 border border-white/10"
                      }
                    `}
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    اطلب عبر واتساب
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
        <InlineGallery images={gallery} title="ذكريات من مناسبات عملائنا" />
      </div>
    </section>
  );
}
