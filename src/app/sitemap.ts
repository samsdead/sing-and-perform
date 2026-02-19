import type { MetadataRoute } from "next";
import { siteData } from "@/content/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteData.siteUrl.replace(/\/$/, "");

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 }
  ];
}
