const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './content/main/html',
        // TODO !!security!!: listening on all interfaces is dangerous
        host: '0.0.0.0'
    }
});
