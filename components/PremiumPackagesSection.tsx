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
    <section
      id="packages"
      className="py-24 relative overflow-hidden bg-second-bg">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
          repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.08) 0, rgba(255, 255, 255, 0.08) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.08) 0, rgba(255, 255, 255, 0.08) 1px, transparent 1px, transparent 20px)
        `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-main-color/10 text-main-color text-sm font-semibold mb-5 tracking-wide">
            باقات مميزة
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
            اختر الباقة المناسبة لك
          </h2>
          <p className="text-low-color text-lg md:text-xl leading-relaxed">
            نقدم لك مجموعة متميزة من الباقات المصممة بعناية لتلبي احتياجاتك
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 * index }}
              key={pkg.id}
              className={`${index == 1 ? "md:-mt-10" : ""} group relative text-white flex flex-col h-full w-full rounded-md overflow-hidden bg-card-background border border-white/10 shadow-[0_4px_20px_rgba(51,40,34,0.04)] hover:shadow-[0_20px_60px_rgba(51,40,34,0.12)] hover:border-main-color/20 transition-all duration-500 hover:-translate-y-1`}>
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                {pkg.image && (
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                )}
                {/* Package label overlay */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-main-color backdrop-blur-sm text-black text-xs font-bold shadow-sm">
                    الباقة {index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7 md:p-8">
                <h3 className="text-xl md:text-3xl font-bold text-main-color mb-3 text-right">
                  {pkg.title}
                </h3>
                {/* Features */}
                {pkg.features?.length > 0 ? (
                  <div>
                    <p className="text-sm md:text-base mb-3 text-right font-bold">
                      المميزات :
                    </p>
                    <ul className="space-y-3 flex-1 mb-8 pr-3">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-right">
                          <span className="shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center">
                            <Check className="w-5 h-5" strokeWidth={2.5} />
                          </span>
                          <span className="text-sm md:text-base font-medium leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="flex-1 mb-8" />
                )}

                {/* CTA */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-4 px-6 rounded-sm font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 bg-main-color text-white hover:bg-main-color/90 shadow-lg shadow-main-color/20 hover:shadow-xl hover:shadow-main-color/25 hover:-translate-y-0.5 active:translate-y-0">
                  <FaWhatsapp className="w-5 h-5" />
                  اطلب الخدمة الان
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
