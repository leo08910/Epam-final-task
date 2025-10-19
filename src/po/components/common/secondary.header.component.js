const BaseComponent = require('../base.component');

class SecondaryHeader extends BaseComponent {

    constructor() {
        super("[data-test='secondary-header']");
    }

    get title() { return $("[data-test='title']")}
}

module.exports = SecondaryHeader;