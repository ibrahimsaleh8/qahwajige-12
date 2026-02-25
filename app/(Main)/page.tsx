// app/page.tsx
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PremiumPackagesSection from "@/components/PremiumPackagesSection";
import { CurrentProjectId } from "@/lib/ProjectId";
import RatingSection from "@/components/RatingSection";
import WhyUsDescription from "@/components/WhyUsDescription";
import EventsSection from "@/components/EventsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PreventCopy from "@/components/PreventCopy";
import ShowKeywords from "@/components/ShowKeywords";
import { FetchProjectData } from "@/lib/FetchProjectData";

export default async function HomePage() {
  const { data } = await FetchProjectData();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header brandName={data.header.brandName} telephone={data.footer.phone} />
      <HeroSection {...data.hero} aboutImage={data.about.image ?? ""} />
      <WhyUsDescription description={data.whyUs.description ?? ""} />
      <AboutSection
        {...data.about}
        features={data.whyUs.features}
        gallery={data.gallery?.slice(0, 3) ?? []}
      />
      <ServicesSection
        {...data.services}
        gallery={data.gallery?.slice(3, 6) ?? []}
      />
      <EventsSection gallery={data.gallery?.slice(6, 9) ?? []} />
      <HowItWorksSection />
      <PremiumPackagesSection
        packages={data.packages ?? []}
        whatsapp={data.hero?.whatsApp ?? ""}
        gallery={data.gallery?.slice(9, 12) ?? []}
      />
      <RatingSection
        projectId={CurrentProjectId}
        averageRating={data.rating?.averageRating ?? 0}
        totalRatings={data.rating?.totalRatings ?? 0}
      />

      <FAQSection />

      <PreventCopy />
      <ShowKeywords keywords={data.keywords ?? []} />
      <ContactSection {...data.footer} whatsapp={data.hero?.whatsApp ?? ""} />
    </div>
  );
}
