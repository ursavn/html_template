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
                // Set to save images using CSS
                // save with the same image path as site.css
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            // Image used by CSS stored at
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
