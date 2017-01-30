const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack-common.js');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  target: 'web',
  entry: {
    index: helpers.root('src/index')
  },
  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    proxy: {
      '/graphql': {
        target: 'http://0.0.0.0:8080'
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: helpers.root('src', 'index.html')
    }),
    new CopyWebpackPlugin([
      {
        from: helpers.root('src','assets'),
        to: 'assets'
      }
    ])
  ]

});
