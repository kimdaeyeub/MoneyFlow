module.exports = {
  siteUrl: "https://getmoneyflow.vercel.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ["https://getmoneyflow.vercel.app/sitemap.xml"],
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/graph", "/today", "/this-week"],
      },
    ],
  },
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/dashboard", "/graph", "/today", "/this-week"],
  generate: ["sitemap.xml"],
};
