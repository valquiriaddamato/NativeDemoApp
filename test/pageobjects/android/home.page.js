const { $ } = require('@wdio/globals')

class HomePage {
   
    get btnMenuLogin () {
        return $('//android.view.View[@content-desc="Login"]');
    }
    
    async menuLogin () {
        await this.btnMenuLogin.click();
    }

    async open () {
        await super.open();
    }
}
module.exports = new HomePage();