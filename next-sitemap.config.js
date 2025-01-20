module.exports = {
  siteUrl: "https://getmoneyflow.vercel.app",
  generateRobotsTxt: true, // robots.txt 파일 생성
  robotsTxtOptions: {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/graph", "/today", "/this-week"],
      },
    ],
  },
  sitemapSize: 7000, // 7000개 이상의 URL이 있을 경우 자동으로 분할
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/dashboard", "/graph", "/today", "/this-week"], // 제외할 페이지
};
