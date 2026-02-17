import { ServicesSectionData } from "@/lib/responseType";
import { Coffee, Users, Heart, Building2, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Users,
  Heart,
  Building2,
};

export default function ServicesSection({
  description,
  items,
  label,
  title,
}: ServicesSectionData) {
  return (
    <section id="services" dir="rtl" className="py-24 relative overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-135 h-135 rounded-full bg-cyan-400/6 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-15%] right-[-10%] w-100 h-100 rounded-full bg-indigo-600/[0.07] blur-[90px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Section Header ── */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          {label && (
            <span className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/25 text-cyan-400 text-[0.78rem] font-bold tracking-wider mb-5">
              {label}
            </span>
          )}

          <h2
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)" }}>
            <span className="text-[#C7CBEF] [text-shadow:0_0_20px_rgba(199,203,239,0.25)]">
              {title}
            </span>
          </h2>

          <p className="mt-3 text-white/50 text-base leading-[1.85] max-w-xl mx-auto">
            {description}
          </p>

          <div className="w-20 h-0.5 mx-auto mt-6 rounded-full bg-linear-to-l from-transparent via-cyan-400 to-transparent" />
        </div>

        {/* ── Service Cards ── */}
        {items && items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((card, index) => {
              const Icon = iconMap[card.icon as keyof typeof iconMap] || Coffee;

              return (
                <div
                  key={card.title}
                  className="
                    group relative
                    bg-slate-800/40 backdrop-blur-xl
                    border border-white/8 border-t-white/[0.14]
                    rounded-[18px] p-8 text-right
                    flex flex-col
                    shadow-[0_4px_30px_rgba(0,0,0,0.2)]
                    hover:border-cyan-400/30
                    hover:shadow-[0_12px_44px_rgba(0,0,0,0.4),0_0_18px_rgba(34,211,238,0.09)]
                    hover:-translate-y-1.25
                    transition-all duration-380 ease-out
                    overflow-hidden
                  ">
                  {/* Top cyan accent line */}
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-linear-to-l from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/60 transition-all duration-500" />

                  {/* Ghost number */}
                  <span className="absolute top-3 left-4 text-[5.5rem] font-black leading-none text-white/40 select-none pointer-events-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon badge */}
                  <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-400/16 group-hover:shadow-[0_0_16px_rgba(34,211,238,0.25)] transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#C7CBEF] mb-2 leading-snug">
                    {card.title}
                  </h3>

                  {/* Inner divider */}
                  <div className="h-px mb-4 bg-linear-to-l from-transparent via-white/[0.07] to-transparent" />

                  {/* Description */}
                  <p className="text-sm text-white/50 leading-relaxed flex-1">
                    {card.description}
                  </p>

                  {/* Footer tag */}
                  <div className="flex items-center gap-2 mt-6 pt-5 border-t border-white/6">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.7)] shrink-0" />
                    <span className="text-xs text-white/30 font-medium">
                      خدمة متكاملة وفق أعلى المعايير
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
