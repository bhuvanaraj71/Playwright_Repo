import {test, expect} from '@playwright/test'

//adding beforeEach Hook
let page;
test.beforeEach(async({browser})=>{
    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/index.html');

//Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('bhuvi');
    await page.locator('#loginpassword').fill('123');
    await page.getByRole('button',{name:'Log in'}).click();

//click on product and add to cart
    await page.locator('link', { name: 'Samsung galaxy s6'}).click();
    await page.getByText('Add to cart').click();
    await page.waitForTimeout(3000);

})