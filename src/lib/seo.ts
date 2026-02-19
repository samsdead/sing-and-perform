import type { Metadata } from "next";
import { siteData } from "@/content/siteData";

export function buildMetadata(params?: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const title = params?.title ? `${params.title} | ${siteData.businessName}` : siteData.businessName;

  const description = params?.description ?? siteData.defaultDescription;

  const url = new URL(siteData.siteUrl);
  if (params?.path) url.pathname = params.path;

  return {
    title,
    description,
    metadataBase: new URL(siteData.siteUrl),
    alternates: { canonical: url.toString() },
    openGraph: {
      title,
      description,
      url: url.toString(),
      siteName: siteData.businessName,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: "/images/hero-placeholder.png",
          width: 1600,
          height: 900,
          alt: `${siteData.businessName} — Singing lessons in ${siteData.locationServed}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero-placeholder.png"]
    }
  };
}
