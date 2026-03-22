# NativeDemoApp

#### Prerequisites
- Have Node installed on the machine
- Have Android Studio installed on the machine
- Have a AVD Nexus 5 with API 30
- Have Java and Android environment variables set on machine
- Download the [android.wdio.native.app.v2.0.0.apk](https://github.com/valquiriaddamato/NativeDemoApp/releases/tag/Apps) and include it on ./app/android
- Download the [ios.simulator.wdio.native.app.v2.0.0.zip](https://github.com/valquiriaddamato/NativeDemoApp/releases/tag/Apps), extract and include it on ./ios/android
- To verify if the machine is correctly configured, install and run Appium doctor 
```sh
npm install appium-doctor -g
```
```sh 
appium-doctor
```

#### Run project
1. Open the project on IDE
2. Install dependencies on terminal run it:
```sh
npx wdio config
```
3. Open AVD Nexus 5 on Android run on cmd:
```sh
emulator @Nexus_5
```
4. Run all tests:
```sh
npx wdio
```
