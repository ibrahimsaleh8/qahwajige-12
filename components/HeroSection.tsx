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
      id="home"
      dir="rtl"
      className="relative min-h-screen overflow-hidden flex items-center">
      <HeroBackground />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16 lg:pt-0 lg:pb-0">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* TEXT (LCP lives here) */}
          <div className="flex-1 text-center lg:text-right space-y-6">
            <HeroText
              headline={headline ?? ""}
              subheadline={subheadline ?? ""}
            />
            <HeroLinks whatsApp={whatsApp} />
            <HeroStats />
          </div>

          {/* IMAGE (client-only) */}
          <AboutImage imageUrl={aboutImage} />
        </div>
      </div>
    </section>
  );
}
