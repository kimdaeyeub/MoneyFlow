import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/graph", "/today", "/this-week"],
    },
    sitemap: "https://getmoneyflow.vercel.app/sitemap.xml",
  };
}
