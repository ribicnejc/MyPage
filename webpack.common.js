const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'app.bundle.min.css': [
            __dirname + '/src/css/app.css',
            __dirname + '/src/css/animate.css'
        ],
        'app.bundle.min.js': './src/javascript/main.js'
    },
    plugins: [
        new CleanWebpackPlugin([
            './dist/',
        ]),
        new HtmlWebpackPlugin({
            title: 'Nejc Ribič',
            template: './src/index.html'
        })
    ],
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'dist/')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.sass$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css']
    }
};
