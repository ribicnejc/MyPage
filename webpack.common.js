const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// const PATHS = {
    // content: path.join(__dirname, 'content'), //absolute path to RepoDir/content
    // dist: path.join(__dirname, 'dist') //absolute path to RepoDir/dist
// };

module.exports = {
    entry: {
        app: './content/javascript/main.js'
    },
    plugins: [
        new CleanWebpackPlugin([
            './dist/',
        ]),
        new HtmlWebpackPlugin({
            title: 'Nejc Ribič',
            template: './content/index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: 'content/assets',
                to: 'assets'
            },
            {
                from: 'content/css', //Will resolve to RepoDir/content/css and all *.css files from this directory
                to: 'css' //Copies all matched css files from above dest to dist/css
            },
            {
                from: 'content/javascript', //Will resolve to RepoDir/content/css and all *.css files from this directory
                to: 'javascript' //Copies all matched css files from above dest to dist/css
            },
            {
                from: "content/bootstrap-1.0-dist",
                to: "bootstrap-1.0-dist/"
            }
        ])
    ],
    output: {
        filename: 'javascript/[name].js',
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
