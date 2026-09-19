module.exports = function(eleventyConfig) {
  // Pass through static assets and root files unchanged
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Active page helper — used in nav to highlight current link
  eleventyConfig.addFilter("active", function(page, url) {
    return page.url === url ? "active" : "";
  });

  // ISO date filter for sitemap
  eleventyConfig.addFilter("isoDate", function(date) {
    const d = date instanceof Date ? date : new Date(date || Date.now());
    return d.toISOString().split("T")[0];
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk"
  };
};
