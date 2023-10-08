const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
 
    it('fill the address', async () => {
        // call the taxi to the address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');          
        const fromFieldWithAddress = await $(page.fromFieldWithAddress);
        await fromFieldWithAddress.waitForDisplayed();
        await expect(await $(fromFieldWithAddress)).toBeExisting();
        const toFieldWithAddress = await $(page.toFieldWithAddress);
        await toFieldWithAddress.waitForDisplayed();
        await expect(await $(toFieldWithAddress)).toBeExisting();
    })
        


    it('select supportive plan', async () => {
        // selecting supportive plan
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click();  
        const supportiveButtonActive = await $(page.supportiveButtonActive);
        await supportiveButtonActive.waitForDisplayed();
        await expect(await $(supportiveButtonActive)).toBeExisting();  
        
    })
        
    it('add a payment card', async () => {
        // adding a payment card
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.addPaymentMethodCard();        
        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();
        
    })
      
    it('input phone number', async () => {
        // input phone number
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();  
        
    })

    it('write a message for the driver', async () => {
        // Writing a message for the driver
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const inputMessageToDriver = await $(page.inputMessageToDriver);
        await inputMessageToDriver.waitForDisplayed();
        await inputMessageToDriver.setValue('Please hurry!');
        const actualMessageToDriver = await $(page.actualMessageToDriver);
        await actualMessageToDriver.waitForDisplayed();
        await expect(await $(actualMessageToDriver)).toBeExisting(); 

    })

    it('order a blanket and handkerchiefs', async () => {              
        // Ordering a Blanket and handkerchiefs
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click();
        const blanketAndHandkerchiefsButton = await $(page.blanketAndHandkerchiefsButton);
        await blanketAndHandkerchiefsButton.waitForDisplayed();
        await blanketAndHandkerchiefsButton.click();
        const blanketAndHandkerchiefsButtonEnabled = await $(page.blanketAndHandkerchiefsButtonEnabled);
        await blanketAndHandkerchiefsButtonEnabled.waitForDisplayed();
        await expect(await $(blanketAndHandkerchiefsButtonEnabled)).toBeEnabled();

    })

    it('order 2 ice creams', async () => {
        // Ordering 2 Ice creams
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click();
        const addIceCreamButton = await $(page.addIceCreamButton);
        await addIceCreamButton.waitForDisplayed();
        await addIceCreamButton.click();
        await addIceCreamButton.click();
        const numberOfIceCreams = await $(page.numberOfIceCreams);
        await numberOfIceCreams.waitForDisplayed();
        await expect(await $(numberOfIceCreams)).toBeExisting();    
        
    })

    it('the car search modal appears', async () => {
        // The car search modal appears
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const orderButton = await $(page.orderButton);
        await orderButton.waitForDisplayed();
        await orderButton.click();
        const carSearchModal = await $(page.carSearchModal);
        await carSearchModal.waitForDisplayed();
        await expect(await $(carSearchModal)).toBeExisting();   
        
    })

    
})

