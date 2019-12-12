module.exports = (() => {
    "use strict";

    const _host = process.env.APPLICATION_HOST || "localhost",
          _port = process.env.APPLICATION_PORT || '3000',
          _seleniumHost = process.env.SELENIUM_SERVER || "localhost",
          _seleniumPort = process.env.SELENIUM_PORT || '4444',
          _testBrowser = process.env.TEST_BROWSER || "chrome";

    return {
        
        applicationAddress: `http://${_host}:${_port}`,
        seleniumAddress: `http://${_seleniumHost}:${_seleniumPort}/wd/hub`,
        timeout: 60 * 1000,
        testBrowser: _testBrowser
    }
    
})();

