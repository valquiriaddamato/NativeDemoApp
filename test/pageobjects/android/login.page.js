const { $ } = require('@wdio/globals')

class LoginPage {

    get inputEmail () {
        return $("accessibility id:input-email");
    }

    get inputPassword () {
        return $('accessibility id:input-password');
    }

    get btnSubmit () {
        return $('accessibility id:button-LOGIN');
    }

    get msgEmailInvalid(){
        return $('//android.widget.TextView[@text="Please enter a valid email address"]');
    }

    get msgPasswordInvalid(){
        return $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
    }

    async login (email, password) {
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        await this.btnSubmit.waitForDisplayed();
        await this.btnSubmit.click();
    }

    async open () {
        await super.open();
    }
}

module.exports = new LoginPage();
