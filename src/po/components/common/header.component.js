const SideMenu = require('./side-menu.component');
const BaseComponent = require('../base.component');

class Header extends BaseComponent {
  constructor() {
      super("[data-test='header']");
      this.sideMenu = new SideMenu();
  }
  get menuButton() { return $("[data-test='open-menu']")}
  get cartIcon() { return $("[data-test='shopping-cart-link']")}

  async openMenu() {
    await this.menuButton.click();
  }
}
module.exports = Header;
