module.exports = {
    rules: [
        // the 'transform-runtime' plugin tells Babel to
        // require the runtime instead of inlining it.
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime']
                }
            }
        }
    ]
}