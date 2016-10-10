var helpers = require('./helpers');

const ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
  // debug: true,

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader?sourceMap=false&inlineSourceMap=true',
          'angular2-template-loader'
        ],
        exclude: [/\.e2e\.ts$/]
      },
      {
        test: /\.html$/,
        loader: 'html'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: 'null'
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      },
      {
        include: /\.pug$/,
        loader: 'pug-html-loader'
      },
      {
        test: /\.scss$/,
        include: helpers.root('src', 'app'),
        exclude: /global-styles\.scss$/,
        loaders: ["to-string", "style", "css", "sass"]
      },
      {
        test: /\.js$/,
        include: helpers.root('src', 'app'),
        loader: 'null'
      }
    ],

    postLoaders: [
      {
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        include: helpers.root('src', 'app'),
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ]
      }
    ]
  },

  plugins: [
    new ProvidePlugin({
      hljs: 'highlight.js',
      Clipboard: 'clipboard'
    })
  ]
}
