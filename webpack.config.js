var path = require('path');
const BowerWebpackPlugin = require("bower-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var config = {
  entry: {
    'app': ['./app/app.js'],
    'style': ['./assets/sass/index.scss'],
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:      'css-loader!sass-loader'
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'file-loader'
        }
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new BowerWebpackPlugin(),
    new UglifyJSPlugin()
  ]
}

module.exports = config;
