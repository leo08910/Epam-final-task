const loginPage = require("../../po/pages/login.page");
const users = require("../../tests/data/data");

//comment just to try Jenkins
//1

describe("SauceDemo Login Tests", () => {
  beforeEach(async () => {
    await loginPage.open();
  });

  it("UC-1: should show error when credentials are empty", async () => {
    await loginPage.form.inputUsername.setValue("someuser");
    await loginPage.form.inputPassword.setValue("somepass");

    await loginPage.form.clearUsername();
    await loginPage.form.clearPassword();

    await loginPage.form.btnSubmit.click();

    await expect(loginPage.form.errorMessage).toBeExisting();
    await expect(loginPage.form.errorMessage).toHaveText(
      "Epic sadface: Username is required"
    );
  });

  it("UC-2: should show error when password is empty", async () => {
    await loginPage.form.inputUsername.setValue("someuser");
    await loginPage.form.inputPassword.setValue("somepass");

    await loginPage.form.clearPassword();

    await loginPage.form.btnSubmit.click();

    await expect(loginPage.form.errorMessage).toBeExisting();
    await expect(loginPage.form.errorMessage).toHaveText(
      "Epic sadface: Password is required"
    );
  });

  users.forEach(({ username }) => {
    it(`UC-3: should login successfully with valid user ${username}`, async () => {
      await loginPage.form.login(username ,"secret_sauce");

      loginPage.expectTitleToBe('Swag Labs');
    });
  });
});
