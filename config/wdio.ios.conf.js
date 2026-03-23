const path = require('path');
const { config } = require('./wdio.conf');
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    config.runner = 'local';
    config.port = 4723;
    // ==================
    // Specify Test Files
    // ==================
    config.specs = [
        //Incluir testes de iOS quando estiver acesso ao BS
        //'../test/specs/ios/*.js',
    ];
    // ============
    // Capabilities
    // ============
    config.capabilities = [{
        platformName: "iOS",
            "appium:platformVersion": "16.0",
            "appium:deviceName": "iPhone 14 Pro",
            "appium:automationName": "UIAutomator2",
            "appium:app": path.join(process.cwd(), "./app/ios/ios.wdio.native.app.v2.0.0.app"),
            "appium:autoGrantPermissions": true
    }];
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.

    exports.config = config;