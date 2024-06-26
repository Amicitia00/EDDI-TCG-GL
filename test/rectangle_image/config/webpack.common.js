const path = require("path");

module.exports = {
    entry: {
        rectangle_image: "./test/rectangle_image/draw_rectangle_image.ts"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../../dist/rectangle_image"),
    },
};