/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://nhunghuoutramnhan.com/",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  //   sitemapSize: 7000,
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "test-bot",
        allow: [
          "/introduce",
          "/categories/cao-nhung-huou",
          "/categories/cao-huou",
          "/categories/cao-ban-long",
          "/categories/nhung-huou",
          "/categories/ruou",
          "/categories/mat-ong",
          "/blog",
          "/blog/1",
          "/blog/2",
          "/blog/3",
          "/blog/4",
          "/blog/5",
          "/products/1",
          "/products/2",
          "/products/3",
          "/products/4",
          "/products/5",
          "/products/6",
          "/products/7",
          "/products/8",
          "/products/9",
          "/products/10",
          "/products/11",
          "/products/12",
          "/products/13",
          "/products/14",
          "/products/15",
          "/products/16",
          "/products/17",
          "/products/18",
          "/products/19",
        ],
      },
      {
        userAgent: "black-listed-bot",
        disallow: ["/checkout", "/cart"],
      },
    ],
    additionalSitemaps: [
      "https://www.nhunghuoutramnhan.com/my-sitemap-1.xml",
      "https://www.nhunghuoutramnhan.com/my-sitemap-2.xml",
      "https://www.nhunghuoutramnhan.com/my-sitemap-3.xml",
    ],
  },
};
