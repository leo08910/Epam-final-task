const { expect } = require("@wdio/globals");
const LoginPage = require("../../po/pages/login.page");
const loginPage = new LoginPage();
const users = require("../../tests/data/data");

describe("SauceDemo Login Tests", () => {
  beforeEach(async () => {
    await loginPage.open();
  });

  it("UC-1: should show error when credentials are empty", async () => {
    await loginPage.inputUsername.setValue("someuser");
    await loginPage.inputPassword.setValue("somepass");

    await loginPage.clearUsername();
    await loginPage.clearPassword();

    await loginPage.btnSubmit.click();

    await expect(loginPage.errorMessage).toBeExisting();
    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Username is required"
    );
  });

  it("UC-2: should show error when password is empty", async () => {
    await loginPage.inputUsername.setValue("someuser");
    await loginPage.inputPassword.setValue("somepass");

    await loginPage.clearPassword();

    await loginPage.btnSubmit.click();

    await expect(loginPage.errorMessage).toBeExisting();
    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Password is required"
    );
  });

  users.forEach(({ username }) => {
    it(`UC-3: should login successfully with valid user ${username}`, async () => {
      await loginPage.inputUsername.setValue(username);
      await loginPage.inputPassword.setValue("secret_sauce");
      await loginPage.btnSubmit.click();

      await expect(browser).toHaveTitle("Swag Labs");
    });
  });
});
