const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AlertPage {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('id:android:id/message');
    }

    get btnOK(){
        return $('id:android:id/button1');
    }

    async closeAlert () {
        await this.btnOK.click();
    }

}

module.exports = new AlertPage();
