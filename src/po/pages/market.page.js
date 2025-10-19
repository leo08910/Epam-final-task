const BasePage = require('./base.page');
const Header = require('../components/common/header.component');

class MarketPage extends BasePage {

    constructor() {
        super();
        this.header = new Header();
    }

    get title () {
        return $("[data-test=title]");
    }

    open () {
        return super.open('https://www.saucedemo.com/marketplace.html');
    }
}

module.exports = MarketPage;
