const path = require('path');
const { expect, driver } = require('@wdio/globals')
const LoginPage = require('../../pageobjects/android/login.page');
const AlertPage = require('../../pageobjects/android/alert.page')
const NavigationBarPage = require('../../pageobjects/android/navigationbar.page')

describe('Login in wdio application', () => {

    afterEach(async () => {
        await driver.closeApp();
        await driver.startActivity('com.wdiodemoapp', 'com.wdiodemoapp.MainActivity');})

    it('should login with valid email and password', async () => {
        await NavigationBarPage.menuLogin()
        await LoginPage.login('val@teste.com', '12345678')
        await expect(AlertPage.flashAlert).toBeExisting()
        await expect(AlertPage.flashAlert).toHaveText(
            expect.stringContaining('You are logged in!'))
        await AlertPage.closeAlert()
    });

    it('should login with invalid email', async () => {
        await NavigationBarPage.menuLogin()
        await LoginPage.login('val@com', '12345678')
        await expect(LoginPage.msgEmailInvalid).toBeExisting()
        await expect(LoginPage.msgEmailInvalid).toHaveText(
            expect.stringContaining('Please enter a valid email address'))
    });

    it('login with invalid password', async () => {
        await NavigationBarPage.menuLogin()
        await LoginPage.login('val@teste.com', '12345')
        await expect(LoginPage.msgPasswordInvalid).toBeExisting()
        await expect(LoginPage.msgPasswordInvalid).toHaveText(
            expect.stringContaining('Please enter at least 8 characters'))
    });
    
})