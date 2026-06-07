import {test, expect} from '@playwright/test'

test('Practice', async({page})=>{
    await page.goto('https://www.easemytrip.com/');
    // await page.locator('.react-autosuggest__input').fill('Delhi');
    // await page.waitForSelector("//span[@class='revampedCityName']");
    // const cityOptions = await page.$$("//span[@class='revampedCityName']");

    // for(let option of cityOptions)
    // {
    //     const value = await option.textContent();
    //     console.log(value);
    //     // if(value.includes('Kolkata'))
    //     // {
    //     //     await option.click();
    //     //     break;
    //     // }
    // }
    // await page.waitForTimeout(4000);
    

})