const webpack = require("webpack");
const path = require("path");

module.exports = {
    // 多页面应用
    entry: {
        pageA: './src/PageA.js',
        pageB: './src/PageB.js'
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    },
    optimization: {
        splitChunks: {
            // 注意 priority 属性
            cacheGroups: {
                // 其次 打包业务中的公共代码
                common: {
                    name: "common",
                    chunks: "all",
                    minSize: 1,
                    priority: 0
                },
                // 首先 打包 node_modules中的文件
                vendor: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 10
                }
            }
        }
    }
};