import { HeroSectionData } from "@/lib/responseType";
import HeroLinks from "./AnimatedComponents/HeroLinks";
import AboutImage from "./AnimatedComponents/AboutImage";
export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
  aboutImage,
}: HeroSectionData & {
  aboutImage: string;
}) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col gap-10 pb-10 bg-[hsl(var(--color-main-background))] overflow-hidden">
      <div className="ambient-glow"></div>

      {/* Content */}
      <div className="relative z-10 container mt-40 mx-auto px-4">
        <div className="max-w-3xl flex flex-col gap-7 mx-auto text-center text-white space-y-6">
          <p className="inline-flex  w-fit mx-auto items-center justify-center px-5 py-2 rounded-full text-orange-400 bg-main-color/10 border border-main-color/20 text-sm md:text-base font-medium backdrop-blur-sm">
            الاصالة فى كل فنجان
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            {headline}
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>

          <div className="mt-4 flex justify-center">
            <HeroLinks whatsApp={whatsApp} />
          </div>
        </div>
      </div>

      <AboutImage imageUrl={aboutImage} />
    </section>
  );
}
