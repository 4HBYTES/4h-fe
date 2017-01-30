const helpers = require('./helpers');
const webpackCommon = require('./webpack-common');

const testConfig = {
  bail: true,
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'istanbul-instrumenter-loader',
        exclude: [
          'node_modules',
          /test.*\.ts$/
        ],
        enforce: 'post'
      }
    ]
  }
};

module.exports = helpers.merge({}, webpackCommon, testConfig);
