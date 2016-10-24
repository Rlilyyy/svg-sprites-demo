const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var plugins = [
  new HtmlWebpackPlugin({
    filename: './index.html',
    template: './index.html'
  })
];

plugins.push(
  new ExtractTextPlugin('[name].css')
);

module.exports = {
  entry: {
    app: './index.js',
  },

  output: {
    path: './dist',
    publicPath: './',
    // filename: '[name].[chunkhash:6].js'
    filename: '[name].js'
  },

  resolve: {
    extensions: [ '', '.js' ]
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.svg$/, loaders: [ 'svg-sprite-loader', 'svgo-loader?useConfig=svgoConfig' ] },
      { test: /\.(gif|png|jpg|ttf|woff2|woff|eot)$/, loader: 'url?limit=1000&name=[path][name].[hash:6].[ext]' }
    ]
  },

  svgoConfig: {
    plugins: [
      { removeTitle: true },
      { convertColors: { shorthex: true } },
      { convertPathData: true },
      { cleanupAttrs: true },
      { removeComments: true },
      { removeDesc: true },
      { removeUselessDefs: true },
      { removeEmptyAttrs: true },
      { removeHiddenElems: true },
      { removeEmptyText: true }
    ]
  },
  plugins: plugins
};
