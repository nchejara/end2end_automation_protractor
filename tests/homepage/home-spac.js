const should = require('should'),
      globalSetting = require('../../global.config');

describe("Home page", () => {
    it(`Navigate to '${globalSetting.applicationAddress}'`, async () => {
        await browser.get(globalSetting.applicationAddress);  
        (await browser.getTitle()).should.equal("Welcome to Technologies Circle");
        
    });
    it(`Navigate to '${globalSetting.applicationAddress}'`, async () => {
        await browser.get(globalSetting.applicationAddress);  
        (await browser.getTitle()).should.equal("Dummy Title");
    });
})