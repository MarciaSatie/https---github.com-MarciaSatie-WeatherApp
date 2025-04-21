module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("src"); // copies everything from src to _site
    eleventyConfig.addPassthroughCopy("./data/weather_data.js");
  };
  