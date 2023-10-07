const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
 
    it('should wait for the taxi driver', async () => {
        // call the taxi to the address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        // selecting supportive plan
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click(); 
        
        // adding a payment card
        await page.addPaymentMethodCard();
        
        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();
       
        // input phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting(); 

        // Writing a message for the driver
        const inputMessageToDriver = await $(page.inputMessageToDriver);
        await inputMessageToDriver.waitForDisplayed();
        await inputMessageToDriver.setValue('Please hurry!');

        const actualMessageToDriver = await $(page.actualMessageToDriver);
        await actualMessageToDriver.waitForDisplayed();
        await expect(await $(actualMessageToDriver)).toBeExisting();        

        // Ordering a Blanket and handkerchiefs
        const blanketAndHandkerchiefsButton = await $(page.blanketAndHandkerchiefsButton);
        await blanketAndHandkerchiefsButton.waitForDisplayed();
        await blanketAndHandkerchiefsButton.click();

        // Ordering 2 Ice creams
        const addIceCreamButton = await $(page.addIceCreamButton);
        await addIceCreamButton.waitForDisplayed();
        await addIceCreamButton.click();
        await addIceCreamButton.click();

        const numberOfIceCreams = await $(page.numberOfIceCreams);
        await numberOfIceCreams.waitForDisplayed();
        await expect(await $(numberOfIceCreams)).toBeExisting();

        // The car search modal appears
        const orderButton = await $(page.orderButton);
        await orderButton.waitForDisplayed();
        await orderButton.click();

        const carSearchModal = await $(page.carSearchModal);
        await carSearchModal.waitForDisplayed();
        await expect(await $(carSearchModal)).toBeExisting();

    })
})

