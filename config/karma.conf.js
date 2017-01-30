const helpers = require('./helpers');

module.exports = (config) => {
  config.set({
    basePath: '..',
    frameworks: ['jasmine'],
    exclude: [],
    files: [{
      pattern: './test/spec/bundle.ts'
    }],
    preprocessors: {
      './test/spec/bundle.ts': ['webpack']
    },
    webpack: require('./webpack-test'),
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {
          type: 'text-summary'
        },
        {
          type: 'json',
          subdir: '.',
          file: 'coverage.json'
        },
        {
          type: 'lcovonly',
          subdir: './lcov'
        }
      ]
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    webpackMiddleware: {noInfo: true},
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: !helpers.isProduction() || helpers.isDevelopment(),
    singleRun: helpers.isProduction() || !helpers.isDevelopment(),
    browsers: ['chromeCI'],
    customLaunchers: {
      chromeCI: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
  });
};
