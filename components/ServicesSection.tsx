import { ServicesSectionData } from "@/lib/responseType";
import { Coffee, Users, Heart, Building2, LucideIcon } from "lucide-react";

// Optional Lucide icons map
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
    <section id="services" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
          repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.04) 0, rgba(255, 255, 255, 0.04) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.04) 0, rgba(255, 255, 255, 0.04) 1px, transparent 1px, transparent 20px)
        `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {label && (
            <p className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-main-color/5 text-main-color text-sm font-semibold mb-4">
              {label}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[hsl(var(--color-text-heading))] mb-4">
            {title}
          </h2>
          <p className="text-low-color text-lg max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {items &&
            items.map((card, index) => {
              const IconComponent =
                iconMap[card.icon as keyof typeof iconMap] || Coffee;
              return (
                <div
                  key={card.title}
                  className="relative flex flex-col text-center items-center bg-card-background border border-white/5 p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:border-main-color/60 hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition-all duration-300">
                  <p className="absolute right-4 top-4 text-white/10 text-7xl font-bold">
                    {index + 1}
                  </p>

                  <div className="w-14 h-14 bg-main-color rounded-2xl flex items-center justify-center mb-6 text-main-color">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-low-color text-sm md:text-base leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-low-color border-t border-slate-100 pt-4">
                    <span>خدمة متكاملة وفق أعلى المعايير</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
