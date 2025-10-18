const { $ } = require('@wdio/globals')

class SideMenuComponent {

    get rootElement() {
        return $('.bm-menu-wrap');
    }
    
    item(param) {
        const selectors = {
            allItems: "#inventory_sidebar_link",
            about: "#about_sidebar_link",
            logout: "#logout_sidebar_link",
            resetAppState: "#reset_sidebar_link"
        };
        return this.rootElement.$(selectors[param.toLowerCase()]);    
    }
}

module.exports = SideMenuComponent;