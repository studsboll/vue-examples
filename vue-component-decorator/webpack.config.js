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
                            'scss': 'vue-style-loader!css-loader!sass-loader',
                            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                        },
                        extractCSS: true
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
            }
        ]
    },
    resolve: {
        extensions: [".vue", ".ts"],
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}