const path = require('path');
const { expect } = require('@wdio/globals')
const FormPage = require('../../pageobjects/android/form.page')
const NavigationBarPage = require('../../pageobjects/android/navigationbar.page')
const AlertPage = require('../../pageobjects/android/alert.page')

describe('Form in wdio application', () => {

    afterEach(async () => {
        await driver.closeApp();
        await driver.startActivity('com.wdiodemoapp', 'com.wdiodemoapp.MainActivity');})

    it('validate form input is the same that input result', async () => {
        await NavigationBarPage.menuForm()
        await FormPage.formInput('Val')
        await expect(FormPage.inputTextResult).toBeExisting()
        await expect(FormPage.inputTextResult).toHaveText(
            expect.stringContaining('Val'))    
    });

    it('validate switch functionality', async () => {
        await NavigationBarPage.menuForm()
        await FormPage.formSwitch()
        await expect(FormPage.msgSwitch).toBeExisting()
        await expect(FormPage.msgSwitch).toHaveText(
            expect.stringContaining('Click to turn the switch OFF'))
        await FormPage.formSwitch()
        await expect(FormPage.msgSwitch).toBeExisting()
        await expect(FormPage.msgSwitch).toHaveText(
            expect.stringContaining('Click to turn the switch ON'))   
    });

    it('validate dropdown functionality', async () => {
        await NavigationBarPage.menuForm()
        await FormPage.formDropdown()
        await expect(FormPage.dropdown).toBeExisting()
        await expect(FormPage.dropdownOption).toHaveText(
            expect.stringContaining('This app is awesome'))
    });

    it('validate buttons functionality', async () => {
        await NavigationBarPage.menuForm()
        await FormPage.formBtn()
        await expect(AlertPage.flashAlert).toBeExisting()
        await expect(AlertPage.flashAlert).toHaveText(
            expect.stringContaining('This button is active'))
        await AlertPage.closeAlert()
    });
 });