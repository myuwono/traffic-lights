var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var CompressionPlugin = require('compression-webpack-plugin');

webpackConfig.output.filename = 'bundle.min.js';
webpackConfig.output.chunkFilename = 'bundle.chunk.min.js';
delete webpackConfig.devtool;
webpackConfig.plugins = webpackConfig.plugins.concat([
  new webpack.DefinePlugin({ // <-- key to reducing React's size
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.AggressiveMergingPlugin(),
  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  })
]);

module.exports = webpackConfig;
