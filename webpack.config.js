const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
    new webpack.ProvidePlugin({
        process: 'process/browser',
    }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].[contenthash].css",
        chunkFilename:"[id].[contenthash].css",
    }),
    new webpack.HotModuleReplacementPlugin() // for development
];

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        filename: 'app.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            process: "process/browser"
        },
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                // Thiết lập lưu các ảnh sử dụng bởi CSS
                // lưu dưới đường dẫn images cùng file site.css
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            // Image sử dụng bởi CSS lưu tại
                            publicPath: './assets/images',
                            emitFile: false
                        }
                    }
                ]
            }
        ],
    },
    plugins: plugins
};
