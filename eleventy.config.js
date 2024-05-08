const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const CleanCSS = require("clean-css");
const { minify } = require("terser");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "static/": "/" });
    eleventyConfig.addWatchTarget("static/**/*.{svg,webp,png,jpg}");
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    eleventyConfig.addFilter("cssmin", (code) => new CleanCSS({}).minify(code).styles);
    eleventyConfig.addNunjucksAsyncFilter("jsmin", async (code, cb) => {
        try {
            const minified = await minify(code);
            cb(null, minified.code);
        } catch (err) {
            console.error("Terser error: ", err);
            cb(null, code);
        }
    });

    return {
        dir: {
            input: "src",
            output: "dist"
        },
        pathPrefix: "/"
    };
};
