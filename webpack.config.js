var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}

module.exports = config;
