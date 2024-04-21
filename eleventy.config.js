const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "static/": "/" });
    eleventyConfig.addWatchTarget("static/**/*.{svg,webp,png,jpg}");
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    return {
        dir: {
            input: "src",
            output: "dist"
        },
        pathPrefix: "/"
    };
};
