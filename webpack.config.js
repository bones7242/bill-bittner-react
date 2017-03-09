const path = require("path");

module.exports = {
    // the entry file for the bundle
    entry: path.join(__dirname, "/src/index.jsx"),
    // the bundle file we will get in the result
    output: {
        path: path.join(__dirname, "/public"),
        filename: "bundle.js",
    },
    module: {
        // apply loaders to files that meet given conditions
        loaders: [
                {
                test: /\.jsx?$/,
                include: path.join(__dirname, "/src"),
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                }
            }
        ]
    },

    // start webpack in a watch mode, so webpack will rebuild the bundle on changes
    devtool: "eval-source-map" 
};