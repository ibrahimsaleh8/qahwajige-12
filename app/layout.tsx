// app/layout.tsx
import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { APP_URL, CurrentProjectId, currentURL } from "@/lib/ProjectId";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const tajawalFont = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["arabic"],
});
type MetaDataResponseDataType = {
  title: string;
  description: string;
  keywords: string[];
  brandName: string;
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(
      `${APP_URL}/api/project/${CurrentProjectId}/metadata`,
      {
        next: {
          tags: ["metadata"],
        },
      },
    );
    const data: MetaDataResponseDataType = await res.json();

    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords,
      creator: data.brandName,
      publisher: data.brandName,
      openGraph: {
        title: data.title,
        description: data.description,
        type: "website",
        locale: "ar_SA",
        siteName: data.brandName,
      },

      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
      alternates: {
        canonical: currentURL,
      },
      verification: {
        google: "cscr_OYovNv_gigHNevr7OlNG5Sscj-MfEk1NjOFg1Y",
      },
    };
  } catch (error) {
    console.error("Metadata fetch failed:", error);
    return {
      title: "قهوجى الرياض — خدمة القهوة العربية والضيافة في الرياض",
      description:
        "قهوجى الرياض: تقديم القهوة العربية والضيافة في الرياض. صبّابون محترفون، مستلزمات راقية، أعراس ومناسبات. احجز الآن.",
    };
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawalFont.className} antialiased`}>
        {children}
        <Analytics />

        <Script id="clixtell-tracking" strategy="afterInteractive">
          {`
            var script = document.createElement('script');
            var prefix = document.location.protocol;
            script.async = true;
            script.type = 'text/javascript';
            var target = prefix + '//scripts.clixtell.com/track.js';
            script.src = target;
            document.head.appendChild(script);
          `}
        </Script>

        <noscript>
          <img
            src="//tracker.clixtell.com/track/t.gif"
            alt="clixtell-tracker"
          />
        </noscript>
      </body>
    </html>
  );
}
