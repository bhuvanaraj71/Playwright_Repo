import {test, expect} from '@playwright/test'

//adding beforeEach Hook
let page;
test.beforeAll(async({browser})=>{
    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/index.html');
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('123');
    await page.locator('#loginpassword').fill('123');
    await page.getByRole('button',{name:'Log in'}).click();
})


test.afterAll(async()=>{
    await page.locator('#logout2').click();
    await page.waitForTimeout(3000);
})

test('Add to Cart', async()=>{
    await page.locator('//a[contains(text(),"Samsung galaxy s6")]').click();

    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert');                    //assertion for dailog type to be alert
        expect(dialog.message()).toContain('Product added');    //assertion for dailog message to be what's displayed in alert window
        await dialog.accept();
    })
    await page.getByText('Add to cart').click();

})

test('No Of Elements', async()=>{
    //await page.goto('https://www.demoblaze.com/index.html');
    const elements = await page.$$('.card-img-top');
    console.log(elements.length);

})

