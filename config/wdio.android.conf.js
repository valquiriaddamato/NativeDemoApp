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
        '../test/specs/android/test.login.js',
        '../test/specs/android/test.signin.js',
        '../test/specs/android/test.form.js',
    ];
    // ============
    // Capabilities
    // ============
    config.capabilities = [{
        platformName: "Android",
            "appium:platformVersion": "11",
            "appium:deviceName": "emulador-5554",
            "appium:automationName": "UIAutomator2",
            "appium:app": path.join(process.cwd(), "./app/android/android.wdio.native.app.v2.0.0.apk"),
            "appium:autoGrantPermissions": true
    }];
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    
    exports.config = config;