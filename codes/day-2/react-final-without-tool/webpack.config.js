const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /.html$/,
                use: {
                    loader: "html-loader"
                }
            }
        ]
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist',
        port: 4000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new CleanWebpackPlugin()
    ]
}