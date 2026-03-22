const { $ } = require('@wdio/globals')

class NavigationBarPage {
   
    get btnMenuLogin () {
        return $('accessibility id:Login');
    }

    get btnForm () {
        return $('accessibility id:Forms');
    }
    
    async menuLogin () {
        await this.btnMenuLogin.click();
    }

    async menuForm () {
        await this.btnForm.click();
    }
         
    async open () {
        await super.open();
    }
}
module.exports = new NavigationBarPage();