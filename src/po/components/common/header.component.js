const { $ } = require('@wdio/globals')
const SideMenu = require('./side-menu.component');

class Header {
  constructor() {
      this.sideMenu = new SideMenu();
  }
  get rootElement() { return $("[data-test='header']")}
  get menuButton() { return $("[data-test='open-menu']")}
  get cartIcon() { return $("[data-test='shopping-cart-link']")}

  async openMenu() {
    await this.menuButton.click();
  }

}
module.exports = Header;
