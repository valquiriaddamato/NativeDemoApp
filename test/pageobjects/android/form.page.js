const { $ } = require('@wdio/globals')

class FormPage {

    get inputText () {
        return $("accessibility id:text-input");
    }

    get inputTextResult () {
        return $('accessibility id:input-text-result');
    }

    get switch () {
        return $('accessibility id:switch');
    }

    get dropdown () {
        return $('accessibility id:Dropdown');
    }

    get dropdownOption () {
        return $('//android.widget.EditText[@resource-id="text_input"]');
    }

    get btnActive () {
        return $('accessibility id:button-Active');
    }

    get msgSwitch () {
        return $('accessibility id:switch-text');
    }

    async formInput (text) {
        await this.inputText.waitForDisplayed();
        await this.inputText.setValue(text);
    }

    async formSwitch () {
        await this.switch.waitForDisplayed();
        await this.switch.click();
    }

    async formDropdown () {
        await this.inputText.waitForDisplayed();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        await this.dropdown.waitForDisplayed();
        await this.dropdown.click();
        await $('android=new UiSelector().textContains("This app is awesome")').click();
    }

    async formBtn () {
        await this.inputText.waitForDisplayed();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        await this.btnActive.waitForDisplayed();
        await this.btnActive.click();
    }

    async open () {
        await super.open();
    }
}

module.exports = new FormPage();
