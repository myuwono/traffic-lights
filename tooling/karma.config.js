var path = require('path');
var webpackConfig = require('./webpack.config')

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      '../test/**/*.spec.js'
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      '../src/**/!(*spec).js': ['babel', 'sourcemap', 'coverage'],
      '../test/**/*.spec.js': ['webpack']
    },
    specReporter: {
      maxLogLines: 5,         // limit number of lines logged per test
      suppressErrorSummary: true,  // do not print error summary
      suppressFailed: false,  // do not print information about failed tests
      suppressPassed: false,  // do not print information about passed tests
      suppressSkipped: true,  // do not print information about skipped tests
      showSpecTiming: false // print the time elapsed for each spec
    },
    reporters: ['spec', 'coverage'],
    singleRun: true,
    webpack: {
      module: {
        rules: [
          {
            enforce: 'pre', 
            test: /\.jsx?$/,
            exclude: [
              /node_modules/,
              /\.spec\.js/
            ],
            loader: 'isparta-loader'
          },
          {
            test: /(\.jsx|\.js)$/,
            exclude: /(node_modules|bower_components)/,
            include: path.resolve(__dirname, '../test'),
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-0']
            }
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true,
    },
    coverageReporter: {
      instrumenters: {isparta: require('isparta')},
			instrumenter: {
				'src/**/*.js': 'isparta'
			},
      dir: '../build/coverage/',
      reporters: [
        { type: 'html', subdir: 'html' }, 
        { type: 'lcov', subdir: 'lcov' }
      ] 
    }
  });
};
