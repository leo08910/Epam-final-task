const BaseComponent = require('../base.component'); 

class SideMenuComponent extends BaseComponent {
    constructor() {
        super('.bm-menu-wrap');
    }

    item(param) {
        const selectors = {
            allItems: "[data-test='inventory-sidebar-link']",
            about: "[data-test='about-sidebar-link']",
            logout: "[data-test='logout-sidebar-link']",
            resetAppState: "[data-test='reset-sidebar-link']"
        };
        return this.rootElement.$(selectors[param.toLowerCase()]);    
    }
}

module.exports = SideMenuComponent;