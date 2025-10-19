const BasePage = require('./base.page');

class LoginPage extends BasePage {

    constructor() {
        super("/");
    }
    get inputUsername () {
        return $("[data-test='username']");
    }

    get inputPassword () {
        return $("[data-test='password']");
    }

    get btnSubmit () {
        return $("[data-test='login-button']");
    }

    get errorMessage () {
        return $("[data-test='error']");
    }


    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async clearUsername() {
        await this.inputUsername.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    }

    async clearPassword() {
        await this.inputPassword.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    }

}

module.exports =  new LoginPage;
