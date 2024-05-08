const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "static/": "/" });
    eleventyConfig.addWatchTarget("static/**/*.{svg,webp,png,jpg}");
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    eleventyConfig.addFilter("cssmin", (code) => new CleanCSS({}).minify(code).styles);

    return {
        dir: {
            input: "src",
            output: "dist"
        },
        pathPrefix: "/"
    };
};
