var path = require('path');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      '../test/**/*.spec.+(js|jsx)'
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      '../src/**/!(*spec).+(js|jsx)': ['webpack', 'coverage'],
      '../test/**/*.spec.+(js|jsx)': ['webpack']
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
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['.js', '.jsx']
      },
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /(\.jsx|\.js)$/,
            include: path.resolve(__dirname, '../src'),
            exclude: /(node_modules)/,
            loader: 'isparta-loader'
          },
          {
            enforce: 'pre',
            test: /(\.jsx|\.js)$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
              eslint: {
                configFile: path.resolve(__dirname, '../.eslintrc.json'),
                cache: false
              },
              failOnError: true
            }
          },
          {
            test: /(\.jsx|\.js)$/,
            exclude: /(node_modules|bower_components)/,
            include: [
              path.resolve(__dirname, '../src'),
              path.resolve(__dirname, '../test'),
            ],
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-0'],
              auxiliaryCommentBefore: ' istanbul ignore next ',
              plugins: ["transform-runtime"]
            }
          }
        ]
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    webpackServer: {
      noInfo: true,
    },
    coverageReporter: {
      dir: '../build/coverage/',
      reporters: [
        { type: 'html', subdir: 'html' }, 
        { type: 'lcov', subdir: 'lcov' },
        { type: 'text' }
      ] 
    }
  });
};
