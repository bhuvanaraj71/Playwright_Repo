import {test, expect} from '@playwright/test'

test('Keyboard', async({page})=>{
    await page.goto('https://gotranscript.com/text-compare');
    await page.getByPlaceholder('Paste one version of the text here.').fill('Bhuvi is good girl');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    await page.keyboard.press('Control+V');
    await page.screenshot({path: 'tests/Screenshot/' + Date.now() + 'Keyboard Action.png'});
    await page.waitForTimeout(3000);

})