import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { siteData } from "@/content/siteData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteData.businessName,
    url: siteData.siteUrl,
    areaServed: siteData.locationServed,
    ...(siteData.phoneDisplay ? { telephone: siteData.phoneDisplay } : {}),
    ...(siteData.email ? { email: siteData.email } : {})
  };

  return (
    <html lang="en-GB">
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:shadow-soft"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main">{children}</main>

        <Footer />

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
      </body>
    </html>
  );
}
