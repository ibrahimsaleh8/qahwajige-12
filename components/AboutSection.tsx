import {
  AboutSectionData,
  WhyUsFeatureData,
  GalleryImageData,
} from "@/lib/responseType";
import Image from "next/image";
import { InlineGallery } from "./InlineGallery";

export default function AboutSection({
  description1,
  title,
  features,
  image,
  gallery = [],
}: AboutSectionData & {
  features?: WhyUsFeatureData[];
  gallery?: GalleryImageData[];
}) {
  return (
    <section id="about-us" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber-500/5 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual column — image or placeholder */}
          <div className="relative order-2 lg:order-1">
            {image ? (
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-4/5 max-h-105 w-full">
                <Image
                  src={image}
                  alt={title ?? "قهوجى الرياض"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
              </div>
            ) : (
              <div className="rounded-3xl border border-white/10 bg-slate-800/40 aspect-4/5 max-h-105 flex items-center justify-center">
                <span className="text-4xl font-black text-slate-700">
                  قهوجى الرياض
                </span>
              </div>
            )}
          </div>

          {/* Content column */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight max-w-lg">
              {title}
            </h2>
            <p className="text-slate-400 leading-[1.85] max-w-lg">
              {description1}
            </p>

            {/* Features as compact list (no cards) */}
            {features && features.length > 0 && (
              <ul className="flex flex-col gap-4 pt-4">
                {features.map((item) => {
                  return (
                    <li
                      key={item.title}
                      className="flex gap-3 items-start p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-colors">
                      <div>
                        <h3 className="font-bold text-white text-sm">
                          {item.title}
                        </h3>
                        <p className="text-white/60 text-xs leading-relaxed mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        <InlineGallery images={gallery} title="بعض من اعمالنا السابقة" />
      </div>
    </section>
  );
}
