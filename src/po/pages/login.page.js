const LoginForm = require("../components/common/login.form.component");
const BasePage = require("./base.page");

class LoginPage extends BasePage {
  constructor() {
    super("/");
    this.form = new LoginForm
  }

  async expectTitleToBe(title) {
    await expect(browser).toHaveTitle(title);
  }
}

module.exports = new LoginPage();
