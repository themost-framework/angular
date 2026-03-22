// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular', 'api'],
        plugins: [
            require('./karma-test-api-server'),
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, './coverage'),
            reports: ['kjhtml', 'mocha'],
            fixWebpackSourcePaths: true
        },
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: [
                    '--no-sandbox',
                    '--enable-logging=stderr',
                    '--disable-web-security',
                    '--disable-gpu',
                    '--no-proxy-server'
                ]
            }
        },
        reporters: ['progress', 'kjhtml'],
        port: 8080,
        proxies: {
            '/api/': 'http://localhost:28080/api/',
            '/auth/': 'http://localhost:28080/auth/'
        },
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["ChromeHeadlessNoSandbox"],
        singleRun: false
    });
};
