const globalSetting = require("../global.config");
exports.config = {

    seleniumAddress: globalSetting.seleniumAddress,
    framework: "mocha",
    // mochaOpts: {
    //     timeout: globalSetting.timeout,
    //     reporter: 'mochawesome',
    //     reporterOptions: {
    //         overwrite: true,
    //         reportDir: 'ui_reports' // place to store report
    //         reportName: 'ui-tests-report',
    //         reportTitle: 'UI Tests Report'
    //     }
    // },
    mochaOpts: {
        reporter: 'mochawesome-screenshots',
        reporterOptions: {
            reportDir: 'ui_reports',
            reportName: 'ui-tests-report',
            reportTitle: 'UI Tests Report',
            reportPageTitle: 'UI Tests Report',
            takePassedScreenshot: false,
            clearOldScreenshots: true,    
        },
        timeout: globalSetting.timeout
    },
    capabilities: {
        browserName: globalSetting.testBrowser,
    },
    suites: {
        homePage: ["./homepage/**/*.js"],
        profilePage: ["./profilepage/**/*.js"],
        allTests: ["./**/*.js"]
    },

    onPrepare: () => {

        /**
         *  Maximize the browser window
         */
        browser.manage().window().maximize();
        
        /** 
         * Protractor waits for angular components to load completely on a web-page befor it begins any execution.
         * However, since I used non-angular application, so the Protractor keeps waiting for 'angular' to load till the test fails with timeout. 
         * So,I explicitly tell the Protractor do not wait for the 'angular' components
         * */
        browser.ignoreSynchronization = true;

    
    },
    onComplete: () => {
        // clean up code goes here
    }

}