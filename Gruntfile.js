module.exports = grunt => {
    "use strict";

    let match = require("matchdep"),
        path = require('path');

    /**
     * Load all grunt tasks which start with 'grunt-' in dependencies
     */
    match.filter(['grunt-*', '!grunt-cli'], require('./package.json')).forEach(grunt.loadNpmTasks);

    /**
     * Load all grunt tasks which start with 'grunt-' in devDependencies
     */
    match.filterDev(
        ['grunt-*', '!grunt-cli'], 
        require('./package.json')).forEach(grunt.loadNpmTasks);

        
    /**
     * Regiester grunt task for UI automation
     */    
     grunt.registerMultiTask('smoke_ui', 'Run protractor tests', function() {
        let config = {};
        config[this.target] = grunt.config.get('smoke_ui')[this.target];
        
        grunt.config.set('protractor', config);
        grunt.task.run(`protractor:${this.target}`);

     });

     /* 
      * Expose command line option to get protractor config file else cosider the default file
      */
     let testConfigFile = grunt.option('config-file') || path.resolve(__dirname, './tests/conf.js');

     /**
     * Prepare test suites and config file
     */    
     function prepareTestSuiteOptions(suiteName){
        let opts = {
            options: {
                configFile: testConfigFile,
                args: { suite: suiteName }
            }
        };
        return opts;
     }

     /*
      * Set a grunt job
      */
     grunt.config.set('smoke_ui', {
         homepage: prepareTestSuiteOptions("homePage"),
         profilePage: prepareTestSuiteOptions("profilePage"),
         allTests: prepareTestSuiteOptions("allTests")
        
     });




}