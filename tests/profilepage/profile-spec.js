const should = require('should'),
      globalSetting = require('../../global.config');

describe("Profile page", () => {
    it(`Navigate to '${globalSetting.applicationAddress}/user/profile/Naren-Chejara/1'`, async () => {
        await browser.get(`${globalSetting.applicationAddress}/user/profile/Naren-Chejara/1`);  
        (await browser.getTitle()).should.equal("Welcome to Technologies Circle");
    });
   
})