const BasePage = require('./base.page');
const Header = require('../components/common/header.component');

class InventoryPage extends BasePage {

    constructor() {
        super("inventory.html");
        this.header = new Header();
    }

    get title () {
        return $("[data-test=title]");
    }
}

module.exports = new InventoryPage;
