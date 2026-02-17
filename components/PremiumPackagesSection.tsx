"use client";

import { PackageData } from "@/lib/responseType";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function PremiumPackagesSection({
  whatsapp,
  packages,
}: {
  whatsapp: string;
  packages: PackageData[];
}) {
  const whatsappNumber = whatsapp.includes("+")
    ? whatsapp.split("+").join("")
    : whatsapp;
  const waLink = `https://wa.me/${whatsappNumber}?text=`;

  if (!packages?.length) return null;

  return (
    <section id="packages" dir="rtl" className="py-24 relative overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-140 h-140 rounded-full bg-cyan-400/6 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-12%] w-105 h-105 rounded-full bg-indigo-600/[0.07] blur-[90px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
          <span className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/25 text-cyan-400 text-[0.78rem] font-bold tracking-wider mb-5">
            باقات مميزة
          </span>

          <h2
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)" }}>
            <span className="text-[#C7CBEF] [text-shadow:0_0_20px_rgba(199,203,239,0.25)]">
              اختر الباقة{" "}
            </span>
            <span className="text-cyan-400">المناسبة لك</span>
          </h2>

          <p className="mt-3 text-white/50 text-base leading-relaxed max-w-xl mx-auto">
            نقدم لك مجموعة متميزة من الباقات المصممة بعناية لتلبي احتياجاتك
          </p>

          <div className="w-20 h-0.5 mx-auto mt-6 rounded-full bg-linear-to-l from-transparent via-cyan-400 to-transparent" />
        </motion.div>

        {/* ── Packages Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages.map((pkg, index) => {
            const isFeatured = index === 1;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className={`
                  group relative flex flex-col rounded-4xl overflow-hidden
                  bg-slate-800/40 backdrop-blur-xl
                  border border-white/8
                  shadow-[0_4px_30px_rgba(0,0,0,0.2)]
                  hover:shadow-[0_14px_50px_rgba(0,0,0,0.45),0_0_20px_rgba(34,211,238,0.1)]
                  hover:border-cyan-400/30
                  hover:-translate-y-2
                  transition-all duration-400 ease-out
                  ${isFeatured ? "md:-translate-y-4 border-cyan-400/25 shadow-[0_4px_30px_rgba(0,0,0,0.25),0_0_20px_rgba(34,211,238,0.08)]" : ""}
                `}>
                {/* Top accent line — always visible on featured, appears on hover for others */}
                <div
                  className={`
                  absolute top-0 inset-x-0 h-0.5 z-10
                  bg-linear-to-l from-transparent via-cyan-400 to-transparent
                  transition-opacity duration-500
                  ${isFeatured ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                `}
                />

                {/* Featured badge */}
                {isFeatured && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-400 text-slate-900 text-[0.7rem] font-black shadow-[0_0_14px_rgba(34,211,238,0.5)] tracking-wide">
                      الأكثر طلباً
                    </span>
                  </div>
                )}

                {/* Package number badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-sm border border-cyan-400/20 text-cyan-400 text-[0.7rem] font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* ── Image ── */}
                <div className="relative aspect-video overflow-hidden">
                  {pkg.image ? (
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      width={600}
                      height={340}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-700/60 flex items-center justify-center">
                      <span className="text-white/20 text-4xl font-black">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}

                  {/* Image gradient fade into card */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                </div>

                {/* ── Content ── */}
                <div className="flex flex-col flex-1 p-7">
                  {/* Title */}
                  <h3
                    className="font-bold text-[#C7CBEF] mb-5 leading-snug"
                    style={{ fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)" }}>
                    {pkg.title}
                  </h3>

                  {/* Divider */}
                  <div className="h-px mb-5 bg-linear-to-l from-transparent via-white/8 to-transparent" />

                  {/* Features */}
                  {pkg.features?.length > 0 && (
                    <ul className="space-y-3 flex-1 mb-7">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-right">
                          {/* Cyan dot check */}
                          <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-cyan-400/10 border border-cyan-400/25 flex items-center justify-center">
                            <Check
                              className="w-3 h-3 text-cyan-400"
                              strokeWidth={3}
                            />
                          </span>
                          <span className="text-sm text-white/65 font-medium leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTA Button */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      mt-auto w-full py-3.5 px-6 rounded-xl font-bold text-sm
                      flex items-center justify-center gap-2.5
                      transition-all duration-300
                      ${
                        isFeatured
                          ? "bg-cyan-400 text-slate-900 hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_28px_rgba(34,211,238,0.5)] hover:-translate-y-0.5"
                          : "bg-cyan-400/8 text-cyan-400 border border-cyan-400/25 hover:bg-cyan-400/15 hover:border-cyan-400/40 hover:-translate-y-0.5"
                      }
                    `}>
                    <FaWhatsapp className="w-4.5 h-4.5" />
                    اطلب الخدمة الآن
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
