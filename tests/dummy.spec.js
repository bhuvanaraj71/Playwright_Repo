import{test,expect} from '@playwright/test'

test('dummy', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const year = 2023;
    const month = 'June';
    const date = 30;
    await page.locator('#datepicker').click();
    while(true)
    {
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        const currentYear = await page.locator('.ui-datepicker-year').textContent();

        if(currentMonth == month && currentYear == year)
        {
            break;
        }
        await page.locator('.ui-datepicker-prev').click();
    }
    const dates = await page.$$("//td[@data-handler = 'selectDay']");

    for(const dt of dates)
    {
        if(await dt.textContent()==date)
        {
            await dt.click();
            break;
        }
    }
})