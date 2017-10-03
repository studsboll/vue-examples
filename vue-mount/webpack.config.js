const path = require('path');
const webpack = require("webpack");
const progressBarPlugin = require('progress-bar-webpack-plugin');
const compiler = require('vue-template-compiler');
const extractTextPlugin = require("extract-text-webpack-plugin");

const extractDocs = new extractTextPlugin("docs.html");
const extractCss = new extractTextPlugin("style.css");



module.exports = {
    devtool: "eval",
    entry: {
        vue: path.join(__dirname, "src", "index.ts")
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js"
    },
    plugins: [
        new progressBarPlugin(),
        extractCss,
        extractDocs
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: "vue-loader",
                    options: {
                        loaders: {
                            scss: extractCss.extract({
                                use: ['css-loader', 'sass-loader'],
                                fallback: 'vue-style-loader'
                            }),
                            css: extractCss.extract({
                                use: ['css-loader'],
                                fallback: 'vue-style-loader'
                            }),
                            docs: extractDocs.extract({
                                use: ['html-loader', 'markdown-loader']}
                            ),
                        },
                        //extractCSS: true
                    }
                }],
                include: [
                    path.join(__dirname, "src")
                ]
            },
            {
                test: /\.ts(x?)$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }],
                include: [
                    path.join(__dirname, "src")
                ]
            },
            {
                test: /.htm(l?)$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        sourceMap: true
                    }
                }],
                include: [
                    path.join(__dirname, "src")
                ]
            },
            { 
                test: /\.(sass|scss)$/, 
                loader: extractCss.extract({ 
                    fallback: "style-loader", 
                    use: 'css-loader!sass-loader' 
                }) 
            }
        ]
    },
    resolve: {
        extensions: [".vue", ".ts", ".js"],
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    }
}