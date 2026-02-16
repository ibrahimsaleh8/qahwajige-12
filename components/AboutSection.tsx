import { AboutSectionData, WhyUsFeatureData } from "@/lib/responseType";
import { Award, Clock, Shield, Sparkles, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Clock,
  Shield,
  Sparkles,
};
export default function AboutSection({
  description1,
  label,
  title,
  features,
  whyUsDescription,
}: AboutSectionData & {
  features?: WhyUsFeatureData[];
  whyUsDescription: string;
}) {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-second-bg">
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

      <div className="container mx-auto px-4 relative z-10 flex gap-10 justify-between lg:flex-row flex-col-reverse">
        <div className="w-full">
          {/* Section Header */}
          <div className="text-center mb-14">
            {label && (
              <p className="flex text-orange-500 items-center justify-center w-fit mx-auto text-lg font-bold px-4 py-1.5 mb-4">
                {label}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              {title}
            </h2>
            <p className="text-low-color text-lg max-w-3xl mx-auto leading-relaxed">
              {description1}
            </p>

            <p className="text-low-color text-lg max-w-3xl mx-auto leading-relaxed mt-4">
              {whyUsDescription}
            </p>
          </div>

          {features && features.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto">
              {features.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];

                return (
                  <div
                    key={item.title}
                    className="relative group bg-main-background border border-white/10 text-black hover:border-main-color/60 p-8 text-center shadow-sm hover:shadow-luxury transition-all duration-300">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-main-color group-hover:bg-main-color/90 duration-300 transition-colors">
                      {Icon && (
                        <Icon className="w-7 h-7 text-white group-hover:scale-105 transition-transform" />
                      )}
                    </div>
                    <p className="absolute right-4 top-4 text-white/10 text-7xl font-bold">
                      {index + 1}
                    </p>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-low-color text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
