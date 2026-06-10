import {test, expect } from "@playwright/test";
test('Date Picker', async({page})=>{
    const Year = 2020;
    const month = 'April';
    const Date = 30;

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#datepicker').click();

    while(true){
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if(currentYear == Year && currentMonth == month)
        {
            break;
        }
        await page.locator("//a[contains(@class, 'ui-datepicker-prev')]").click();
    }
    const dates = await page.$$("//td[contains(@data-handler, 'selectDay')]");

    for(const dt of dates)
    {
        if(await dt.textContent()==Date)
        {
            await dt.click();
            break;
        }
    }

    await page.screenshot({path : 'tests/Screenshot/Calendar.png'})    //Captures the screenshot of the visible screen where code is running
    //await page.screenshot({path : 'tests/Screenshot/Calendar.png', fullPage:true})     //Captures the current full page.
})

