/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://getmoneyflow.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/sign-in", "/create-account", "/github/*"],
  transform: async (config, path) => {
    const publicPaths = [
      "/sign-in",
      "/create-account",
      "/github/start",
      "/github/complete",
    ];

    const privatePaths = [
      "/",
      "/today",
      "/graph",
      "/this-week",
      "/categories/[id]",
    ];

    if (publicPaths.includes(path)) {
      return {
        loc: path,
        priority: 1.0,
        changefreq: "daily",
      };
    }

    if (privatePaths.includes(path)) {
      return {
        loc: path,
        priority: config.priority,
        changefreq: config.changefreq,
      };
    }

    return null;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: [
          "/sign-in",
          "/create-account",
          "/github/start",
          "/github/complete",
        ],
      },
      {
        userAgent: "*",
        disallow: ["/", "/today", "/graph", "/this-week", "/categories"],
      },
    ],
  },
};
