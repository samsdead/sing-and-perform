import type { MetadataRoute } from "next";
import { siteData } from "@/content/siteData";

export default function robots(): MetadataRoute.Robots {
  const base = siteData.siteUrl.replace(/\/$/, "");
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`
  };
}
