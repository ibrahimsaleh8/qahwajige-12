import { APP_URL, CurrentProjectId, currentURL } from "@/lib/ProjectId";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Article = {
  id: string;
  title: string;
  coverImage: string | null;
  createdAt: string;
  updatedAt: string;
  content: string | null;
};

type GetArticlesResponse = {
  success: boolean;
  data: {
    articles: Article[];
    count: number;
  };
};

export const metadata: Metadata = {
  title: "خدمات الضيافة و القهوة العربية | مقالات ونصائح الضيافة",
  description:
    "اكتشف أحدث المقالات حول القهوة العربية، أساليب الضيافة الأصيلة، تجهيز المناسبات، واختيار أفضل أنواع القهوة وأدوات التقديم لتقديم تجربة ضيافة مميزة.",
  alternates: {
    canonical: `${currentURL}/articles`,
  },
  openGraph: {
    title: "خدمات الضيافة و القهوة العربية | مقالات ونصائح الضيافة",
    description:
      "اكتشف أحدث المقالات حول القهوة العربية، أساليب الضيافة الأصيلة، تجهيز المناسبات، واختيار أفضل أنواع القهوة وأدوات التقديم لتقديم تجربة ضيافة مميزة.",
    url: `${currentURL}/articles`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "خدمات الضيافة و القهوة العربية | مقالات ونصائح الضيافة",
    description:
      "اكتشف أحدث المقالات حول القهوة العربية، أساليب الضيافة الأصيلة، تجهيز المناسبات، واختيار أفضل أنواع القهوة وأدوات التقديم لتقديم تجربة ضيافة مميزة.",
  },
};

export default async function ArticlesPage() {
  const res = await fetch(
    `${APP_URL}/api/project/${CurrentProjectId}/articles/category/خدمات-الضيافة`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data: GetArticlesResponse = await res.json();
  const articles = data.data.articles;
  return (
    <section
      id="articles"
      className="container mx-auto px-4 py-12 space-y-8 min-h-[50vh] pt-30">
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          خدمات الضيافة
        </h1>
        <p className="text-sm md:text-base text-white/60">
          أجدد المقالات والإرشادات من فريقنا.
        </p>
      </div>

      {articles.length === 0 ? (
        <p className="text-center text-sm text-white/60">
          لا توجد مقالات متاحة حالياً.
        </p>
      ) : (
        <div className="grid md:gap-6 gap-3 grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <Link
              href={`/${article.title.split(" ").join("-")}`}
              key={article.id}
              className="bg-card-background rounded-xl shadow-sm border border-white/10 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200">
              {article.coverImage && (
                <div className="relative w-full h-70">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              )}

              <div className="md:p-4 p-2 flex flex-col flex-1 space-y-3">
                <h2 className="md:text-lg text-base font-semibold text-white line-clamp-2">
                  {article.title}
                </h2>

                {article.content && (
                  <p className="md:text-sm text-xs text-white/60 line-clamp-3">
                    {article.content.replace(/<[^>]+>/g, "")}
                  </p>
                )}

                <div className="mt-auto pt-2 flex items-center justify-between text-xs text-white/60">
                  <span>
                    {new Date(article.createdAt).toLocaleDateString("ar-SA", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <p className="bg-white text-xs text-black px-3 py-2 rounded-md font-bold text-center mr-auto w-full">
                  اقرأ المزيد
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
