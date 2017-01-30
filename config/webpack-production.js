const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonConfig = require('./webpack-common.js');
const helpers = require('./helpers');

process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  entry: {
    app: helpers.root('src/index'),
    angular: helpers.root('src/angular.ts'),
    vendor: helpers.root('src/vendor.ts'),
    polyfills: helpers.root('src/polyfills.ts')
  },
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    /* eslint-disable camelcase */
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {screw_ie8: true, keep_fnames: false},
      compress: {screw_ie8: true},
      comments: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'angular','vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency',
      favicon: 'src/favicon.ico'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': helpers.getEnvironmentVariable('ENV')
      }
    }),
    new CopyWebpackPlugin([
      {
        from: helpers.root('i18n'),
        to: 'i18n'
      },
      {
        from: helpers.root('src','assets'),
        to: 'assets'
      }
    ])
  ]
});
