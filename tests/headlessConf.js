const config = require('./conf').config;
let browserOpts = {};

if(config.capabilities.browserName.toString() === "chrome"){
    browserOpts.chromeOptions = {
        args: ["--headless"]    
    }
}

if(config.capabilities.browserName.toString() === "firefox") {
    browserOpts.firefoxOptions = {
        args: ['--headless']
    },
    browserOpts['moz:firefoxOptions'] = {
        args: [ '--headless' ]
    }
}


config.capabilities = Object.assign(config.capabilities, browserOpts);
//console.dir(config);
exports.config = config;