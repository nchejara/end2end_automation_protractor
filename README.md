# End 2 end UI automation using protractor
Setup end-2-end UI automation for the web application from the scratch

## Installation
 
    $ git clone https://github.com/nchejara/end2end_automation_protractor.git
    $ cd end2end_automation_protractor
    $ npm install


## Run Tests

* Run all UI Tests

        $ grunt smoke_ui:allTests // Run all test
        $ npm test

* Run only home page tests

        $ grunt smoke_ui:homePage

* Run only home page tests with headless configuration

        $ grunt smoke_ui:homePage --config-file=/end2end_automation_protractor/tests/headlessConf.js


**Note**: I have used my local application in the UI tests, therefore, please update you local application prior to running test in your environment 