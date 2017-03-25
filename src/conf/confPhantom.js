// An example configuration file.
exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when protractor is called.
    //  specs: ['../test/*_spec.js'],

    suites: {
        homepage: '../test/*_spec.js',
        homepage2: ['../test/*_spec.js',
            '../**/*_spec.js']
    },

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        // If true, display spec names.
        isVerbose: true,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000
    }
};