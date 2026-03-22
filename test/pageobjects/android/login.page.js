const { $ } = require('@wdio/globals')

class LoginPage {

    get loginPageView () {
        return $('//android.view.View[@content-desc="Login-screen"]');
    }

    get inputEmail () {
        return $("accessibility id:input-email");
    }

    get inputPassword () {
        return $('accessibility id:input-password');
    }

    get btnSubmit () {
        return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]');
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
        await this.btnSubmit.click();
    }

    async open () {
        await super.open();
    }
}

module.exports = new LoginPage();
