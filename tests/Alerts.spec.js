import { test, expect } from "@playwright/test";

test.skip('Alerts', async({page})=>{
    page.goto('https://testautomationpractice.blogspot.com/')
//Handling ALert OK dailog window
    page.on('dialog', async dailog=>{                                //enabling dailog handler by creating function [enable = on SO page.on], we are turning on for dailog, so sepcify dailog keyword
        expect(dailog.type()).toContain('alert');                    //assertion for dailog type to be alert
        expect(dailog.message()).toContain('I am an alert box!');    //assertion for dailog message to be what's displayed in alert window
        await dailog.accept();                                       //after checking all this, click on OK(Accept).
    })
    await page.locator('#alertBtn').click();                         //before triggering this event the dailog handler should be written.
    await page.waitForTimeout(5000);
})

//----------------------------------------------------------------------------------------------------------------------------------------------
//Handling confirm alert box
test.skip('Confirm', async({page})=>{
    page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async(dailog)=>{
        expect(dailog.type()).toContain('confirm');
        expect(dailog.message()).toContain('Press a button!');
        await dailog.accept();                                     //to close dailog box on clicking ok
        //await dailog.dismiss();                                  //to close dailog box on clicking cancel.
    })
    await page.locator('#confirmBtn').click();
    await expect(page.locator('#demo')).toHaveText('You pressed OK!');  //to validate a text displayed after clicking on OKAY
    await page.waitForTimeout(4000);
})

//------------------------------------------------------------------------------------------------------------------------

test('prompt', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.on('dialog', async(dailog)=>{
        expect(dailog.type()).toContain('prompt');
        expect(dailog.message()).toContain('Please enter your name:');
        expect(dailog.defaultValue()).toContain('Harry Potter');        //checking to have default have in the field
        await dailog.accept('Bhuvi');                                   //adding value in accept, the value to be enteredin dailog box
        
    })
    await page.locator('#promptBtn').click();
    await expect(page.locator('#demo')).toHaveText('Hello Bhuvi! How are you today?');  //verifying if the text is diaplyed correctly after closing prompt alert
    await page.waitForTimeout(3000);
})
