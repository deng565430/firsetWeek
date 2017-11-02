module.exports = function(config) {
  config.set({

    // 测试文件路径
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // 断言库测试 BDD
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // 要测试的文件
    // list of files / patterns to load in the browser
    files: [
        './app/test/*.js'
    ],

    // 需要排除的文件
    // list of files to exclude
    exclude: [
    ],

    // 处理器 配置测试的报表 覆盖率
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // 生成报表
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // 端口
    // web server port
    port: 9876,

    // 是否有颜色
    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // 警告的级别
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // 监测
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // 浏览器 无头的浏览器 ，方便未来自动化测试
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // 是否是独立的运行
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    //
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
