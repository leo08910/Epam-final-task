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
    await loginPage.inputUsername.setValue('someuser');
    await loginPage.inputPassword.setValue("somepass");
});

When(/^I login with "(.*)" and "(.*)"$/, async (username, password) => {
    await loginPage.login(username, password);
})

When(/^I clear both input fields$/, async () => {
    await loginPage.clearUsername();
    await loginPage.clearPassword();
});

When(/^I click the login button$/, async () => {
  await loginPage.btnSubmit.click();
});

When(/^I clear password input field$/, async () => {
    await loginPage.clearPassword();
});


Then(/^I should see an error message saying "(.*)"$/, async (message) => {
  await expect(loginPage.errorMessage).toBeExisting();
  await expect(loginPage.errorMessage).toHaveText(message);
});

Then(/^I should see the page title "(.*)"$/, async (title) => {
    await expect(browser).toHaveTitle(title);
})


