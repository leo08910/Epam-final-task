const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const loginPage = require('../../../po/pages/login.page');

const pages = {
    login: loginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I enter any username and password$/, async () => {
    await loginPage.form.inputUsername.setValue('someuser');
    await loginPage.form.inputPassword.setValue("somepass");
});

When(/^I login with "(.*)" and "(.*)"$/, async (username, password) => {
    await loginPage.form.login(username, password);
})

When(/^I clear both input fields$/, async () => {
    await loginPage.form.clearUsername();
    await loginPage.form.clearPassword();
});

When(/^I click the login button$/, async () => {
  await loginPage.form.btnSubmit.click();
});

When(/^I clear password input field$/, async () => {
    await loginPage.form.clearPassword();
});


Then(/^I should see an error message saying "(.*)"$/, async (message) => {
  await expect(loginPage.form.errorMessage).toBeExisting();
  await expect(loginPage.form.errorMessage).toHaveText(message);
});

Then(/^I should see the page title "(.*)"$/, async (title) => {
    loginPage.expectTitle(title);
})


