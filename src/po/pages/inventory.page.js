const BasePage = require('./base.page');
const Header = require('../components/common/header.component');
const SecondaryHeader = require('../components/common/secondary.header.component');

class InventoryPage extends BasePage {

    constructor() {
        super("inventory.html");
        this.header = new Header();
        this.secondaryHeader = new SecondaryHeader();
    }

    get title () {
        return $("[data-test=title]");
    }
}

module.exports = new InventoryPage;
