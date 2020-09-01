const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
}