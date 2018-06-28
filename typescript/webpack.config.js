'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },

    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist/'),
      hot: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'dist/index.html',
        template: 'dist/index.html'
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
};
