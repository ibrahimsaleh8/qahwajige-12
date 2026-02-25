import HeroBackground from "./HeroBackground";
import { HeroSectionData } from "@/lib/responseType";
import HeroText from "./HeroText";
import HeroStats from "./HeroStats";
import HeroLinks from "./AnimatedComponents/HeroLinks";
import AboutImage from "./AnimatedComponents/AboutImage";

export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
  aboutImage,
}: HeroSectionData & { aboutImage: string }) {
  return (
    <section
      id="main-section"
      className="relative min-h-screen overflow-hidden flex items-center">
      <HeroBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 lg:pt-0 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Content block — takes 7 cols on large */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-right order-2 lg:order-1">
            <HeroText
              headline={headline ?? ""}
              subheadline={subheadline ?? ""}
            />
            <HeroLinks whatsApp={whatsApp} />
            <HeroStats />
          </div>

          {/* Image block — takes 5 cols */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-1 lg:order-2">
            <AboutImage imageUrl={aboutImage} />
          </div>
        </div>
      </div>
    </section>
  );
}
