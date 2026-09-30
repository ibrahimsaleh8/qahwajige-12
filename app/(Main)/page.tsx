// app/page.tsx
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PremiumPackagesSection from "@/components/PremiumPackagesSection";
import { APP_URL, CurrentProjectId } from "@/lib/ProjectId";
import RatingSection from "@/components/RatingSection";
import WhyUsDescription from "@/components/WhyUsDescription";
import EventsSection from "@/components/EventsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import { FetchProjectData } from "@/lib/FetchProjectData";
import HomeArticlesSection, {
  HomeArticle,
} from "@/components/components/HomeArticlesSection";
import CustomSection from "@/components/components/CustomSection";

export default async function HomePage() {
  const { data } = await FetchProjectData();
  let homeArticles: HomeArticle[] = [];

  try {
    const articlesRes = await fetch(
      `${APP_URL}/api/project/${CurrentProjectId}/articles/category/${encodeURIComponent("الصفحة-الرئيسية")}`,
    );
    if (articlesRes.ok) {
      const articlesData = await articlesRes.json();
      homeArticles = articlesData.data?.articles || [];
    }
  } catch (error) {
    console.error("Failed to fetch home articles:", error);
  }

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

      {data.customSections &&
        data.customSections.length > 0 &&
        data.customSections.map((customSection, index) => (
          <CustomSection
            key={customSection.id}
            {...customSection}
            index={index}
          />
        ))}
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

      {data.showContactSection && (
        <ContactSection {...data.footer} whatsapp={data.hero?.whatsApp ?? ""} />
      )}

      <HomeArticlesSection articles={homeArticles} />
    </div>
  );
}
