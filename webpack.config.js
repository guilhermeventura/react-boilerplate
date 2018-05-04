/**
 * Webpack Basic react config
 */

const webpack = require('webpack');
const path = require('path');

const config = {
    entry: ['./src/index.js', 'react-hot-loader/patch'],
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /.(js|jsx)?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: './public',
        hot: true
    }
};

module.exports = config;
