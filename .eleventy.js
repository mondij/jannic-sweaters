module.exports = function(eleventyConfig) {
  // Pass through static assets unchanged
  eleventyConfig.addPassthroughCopy("src/assets");

  // Active page helper — used in nav to highlight current link
  eleventyConfig.addFilter("active", function(page, url) {
    return page.url === url ? "active" : "";
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
