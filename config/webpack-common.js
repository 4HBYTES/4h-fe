const webpack = require('webpack');
const helpers = require('./helpers');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: [/\.e2e\.ts$/]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(jpg|png|otf|eot|svg|ttf|woff|woff2|ico)$/,
        loader: 'file-loader?name=assets/[name].[ext]'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('src')
    ),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: helpers.root(),
        postcss: [
          autoprefixer
        ],
        output: {
          path: helpers.root('dist')
        }
      }
    })
  ],
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true
  }
};
