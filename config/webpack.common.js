var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts',
    'styles': './src/assets/styles/global-styles.scss'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    preloaders: [
      {
        test: /\.ts$/,
        loader: 'tslint'
      }
    ],

    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        include: /\.pug$/,
        loader: 'pug-html-loader'
      },
      {
        test: /\.scss$/,
        include: helpers.root('src', 'app'),
        loaders: ["to-string", "style", "css", "sass"]
      },
      {
        test: /global-styles.scss$/,
        include: helpers.root('src', 'assets'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
      },
      {
        test: /\.js$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.pug'
    }),

    new ExtractTextPlugin("styles.css"),

    new CopyWebpackPlugin(
      [{from: 'public'}]
    )
  ],

  tslint: {
    failOnHint: true,
    emitErrors: true
  }
};
