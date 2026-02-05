export const config = {   
    autoCompileOpts: {
        autoCompileOpts: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json',
        },
        tsConfigPathsOpts: {
            baseUrl: './',
        },
    },
    capabilities: [{
        acceptInsecureCerts: true,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                'window-size=1366,1035',
                '--disable-logging',
                '--disable-metrics',
                '--disable-dev-shm-usage',
                '--log-level=3', // Только FATAL ошибки
            ],
        },
        /*
        * wdio 9 по умолчанию работает по протоколу BiDi
        * selenoid сходу не стал работать по новому протоколу
        * явно указал работать по старому протоколу webdriver
        */
       'wdio:enforceWebDriverClassic' : true,
    }],
    connectionRetryCount: 3,
    connectionRetryTimeout: 60000,
    framework: 'mocha',
    logLevel: 'error',
    maxInstances: 5,
    mochaOpts: {
        timeout: 60000
    },
    reporters: ['spec'],
    specs: ['./src/**/*.test.ts'],
    waitforTimeout: 20000,
}
