module.exports = {
  siteUrl: "https://getmoneyflow.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  transform: async (config, path) => {
    if (path === "/") {
      return {
        loc: path,
        priority: 1.0,
        changefreq: "daily",
      };
    }
    return {
      loc: path,
      priority: config.priority,
      changefreq: config.changefreq,
    };
  },
};
