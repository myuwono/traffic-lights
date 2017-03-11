var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    "babel-polyfill",
    path.resolve(__dirname, '../src/app.jsx')
  ],
  output: {
    path: path.resolve(__dirname, '../build/public'),
    filename: 'bundle.js',
    chunkFilename: 'bundle.chunk.js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  },
  resolve: {
      extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      inject: 'body' // Inject webpack scripts into the body.
    })
  ]
};