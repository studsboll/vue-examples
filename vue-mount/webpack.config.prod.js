﻿const path = require('path');
const webpack = require("webpack");
const progressBarPlugin = require('progress-bar-webpack-plugin');
const compiler = require('vue-template-compiler');
var extractTextPlugin = require("extract-text-webpack-plugin");

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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new extractTextPlugin({ filename: "style.css" })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: "vue-loader",
                    options: {
                        loaders: {
                            //scss: 'vue-style-loader!css-loader!sass-loader'
                            scss: extractTextPlugin.extract({
                                use: ['css-loader', 'sass-loader'],
                                fallback: 'vue-style-loader'
                            })
                        }
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
                loader: extractTextPlugin.extract({ 
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
            'vue$': 'vue/dist/vue.min.js'
        }
    }
}