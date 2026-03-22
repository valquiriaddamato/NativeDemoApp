const path = require('path');
const { expect } = require('@wdio/globals')
const SingInPage = require('../../pageobjects/android/signin.page');
const AlertPage = require('../../pageobjects/android/alert.page')
const HomePage = require('../../pageobjects/android/home.page')

describe('Sign in wdio application', () => {

    afterEach(async () => {
        await driver.closeApp();
        await driver.startActivity('com.wdiodemoapp', 'com.wdiodemoapp.MainActivity');})

    it('should sign in with valid email and password', async () => {
        await HomePage.menuLogin()
        await SingInPage.signIn('val@teste.com', '12345678', '12345678')
        await expect(AlertPage.flashAlert).toBeExisting()
        await expect(AlertPage.flashAlert).toHaveText(
            expect.stringContaining('You successfully signed up!'))
        await AlertPage.closeAlert()
    });

    it('should sign in with invalid email', async () => {
        await HomePage.menuLogin()
        await SingInPage.signIn('val@com', '12345678', '12345678')
        await expect(SingInPage.msgEmailInvalid).toBeExisting()
        await expect(SingInPage.msgEmailInvalid).toHaveText(
            expect.stringContaining('Please enter a valid email address'))
    });

    it('should sign in with invalid password', async () => {
        await HomePage.menuLogin()
        await SingInPage.signIn('val@teste.com', '12345', '12345')
        await expect(SingInPage.msgPasswordInvalid).toBeExisting()
        await expect(SingInPage.msgPasswordInvalid).toHaveText(
            expect.stringContaining('Please enter at least 8 characters'))
    });
    
    it('should sign in with same password', async () => {
        await HomePage.menuLogin()
        await SingInPage.signIn('val@teste.com', '12345678', '123456789')
        await expect(SingInPage.msgSamePassword).toBeExisting()
        await expect(SingInPage.msgSamePassword).toHaveText(
            expect.stringContaining('Please enter the same password'))
    });
})

