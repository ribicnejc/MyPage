const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('bundle.min.css');

module.exports = {
    entry: {
        'bundle.min.css': [
            __dirname + '/src/css/app.css',
            __dirname + '/src/css/animate.css'
        ]
    },
    devtool: '',
    output: {
        path: __dirname + '/dist/styles/',
        filename: '[name]'

    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: extractCSS.extract({
                use: {
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }
            })
        }]
    },
    resolve: {
        alias: {},
        modules: [],
        extensions: ['.css']
    },
    plugins: [
        extractCSS
    ]
};