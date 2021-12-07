const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            process: "process/browser"
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        })
    ]
};
