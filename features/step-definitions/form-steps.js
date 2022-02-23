const { Given, When, Then } = require('@wdio/cucumber-framework');

const formPage = require('../pageobjects/form-page');

Given(/^I am on the Dashboard page$/, async () => {
    await t.page `https://dashboard-admin-here.com`
});

When(/^I see User Transaction Table$/, async () => {
    await formPage.tableTransaction.waitForDisplayed();
});

Then(/^I can see ID (.*) Username (.*) Source Bank (.*) Destination Bank (.*) and Amount (.*)$/, async (id,usern,source_bank,dest_bank,amount) => {
    await 
        expect(formPage.userId).toHaveTextContaining(id)
        expect(formPage.userName).toHaveTextContaining(usern)
        expect(formPage.sourceBank).toHaveTextContaining(source_bank)
        expect(formPage.destBank).toHaveTextContaining(dest_bank)
        expect(formPage.amount).toHaveTextContaining(amount)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

