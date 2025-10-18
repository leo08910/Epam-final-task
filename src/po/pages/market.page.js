const { $ } = require('@wdio/globals')
const Page = require('./page');
const Header = require('../components/common/header.component');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class MarketPage extends Page {

    constructor() {
        super();
        this.header = new Header();
    }
    /**
     * define selectors using getter methods
     */
    get title () {
        return $("[data-test=title]");
    }

    open () {
        return super.open('https://www.saucedemo.com/marketplace.html');
    }
}

module.exports = MarketPage;
