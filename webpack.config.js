const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"]
    },
    output: {
        filename: "main.js",
        path: path.join(__dirname, "dist"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.(gif|jpeg|jpg|png|svg)$/i,
                type: "asset/resource"
            }
        ]
    }
};
