const { $ } = require('@wdio/globals')

class SignInPage {

    get signInLink() {
        return $('accessibility id:button-sign-up-container');
    }

    get inputEmail () {
        return $("accessibility id:input-email");
    }

    get inputPassword () {
        return $('accessibility id:input-password');
    }

    get inputSamePassword () {
        return $('accessibility id:input-repeat-password');
    }

    get btnSubmit () {
        return $('accessibility id:button-SIGN UP');
    }

    get msgEmailInvalid(){
        return $('//android.widget.TextView[@text="Please enter a valid email address"]');
    }

    get msgPasswordInvalid(){
        return $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
    }

     get msgSamePassword(){
        return $('//android.widget.TextView[@text="Please enter the same password"]');
    }



    async signIn (email, password, samePassword) {
        await this.signInLink.click();
        await this.inputSamePassword.waitForDisplayed();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputSamePassword.setValue(samePassword);
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        await this.btnSubmit.waitForDisplayed();
        await this.btnSubmit.click();
    }

    async open () {
        await super.open();
    }
}

module.exports = new SignInPage();
