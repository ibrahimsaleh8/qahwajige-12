import { ServicesSectionData, GalleryImageData } from "@/lib/responseType";
import { Coffee, Users, Heart, Building2, LucideIcon } from "lucide-react";
import { InlineGallery } from "./InlineGallery";

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Users,
  Heart,
  Building2,
};

export default function ServicesSection({
  description,
  items,
  title,
  gallery = [],
}: ServicesSectionData & { gallery?: GalleryImageData[] }) {
  const list =
    items && items.length > 0
      ? items
      : [
          {
            id: "1",
            icon: "Coffee",
            title: "تقديم القهوة العربية",
            description: "تقديم راقٍ بالدلة والفناجيل مع صبّابين محترفين.",
          },
          {
            id: "2",
            icon: "Users",
            title: "صبّابون محترفون",
            description: "فريق مدرب على أعلى معايير الضيافة والسلوك.",
          },
          {
            id: "3",
            icon: "Heart",
            title: "مستلزمات الضيافة",
            description: "دلال، فناجيل، صواني وكل ما يلزم لتقديم ضيافة كاملة.",
          },
          {
            id: "4",
            icon: "Building2",
            title: "جميع المناسبات",
            description: "أعراس، اجتماعات، مناسبات عائلية وفعاليات في الرياض.",
          },
        ];

  return (
    <section
      id="our-services"
      className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-125 h-125 rounded-full bg-cyan-500/5 blur-[130px]" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <header className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
          <p className="mt-3 text-slate-400 text-sm leading-relaxed">
            {description}
          </p>
        </header>

        {/* Bento-style grid: first item large, rest in 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {list.slice(0, 1).map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap] ?? Coffee;
            return (
              <article
                key={card.id ?? card.title}
                className="md:col-span-2 rounded-2xl border border-white/10 bg-slate-800/40 p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-cyan-500/25 hover:bg-slate-800/60 transition-all">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                    {card.description}
                  </p>
                </div>
              </article>
            );
          })}
          {list.slice(1).map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap] ?? Coffee;
            return (
              <article
                key={card.id ?? card.title}
                className="rounded-2xl border border-white/10 bg-slate-800/30 p-6 flex gap-4 hover:border-cyan-500/20 hover:bg-slate-800/50 transition-all">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{card.title}</h3>
                  <p className="text-white/70 text-xs leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        <InlineGallery images={gallery} title="من مناسباتنا — خدمات الضيافة" />
      </div>
    </section>
  );
}
