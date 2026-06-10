
import {test, expect} from '@playwright/test'

test('Frames', async({page})=>{
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
    await page.frameLocator('#frm2').locator('#firstName').fill('Bhuvi');
    await page.waitForTimeout(3000);
    await page.screenshot({path : 'tests/Screenshot/' + Date.now() + ' Frame.png'});

})