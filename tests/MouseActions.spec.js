import { test, expect } from "@playwright/test";


//Mouse actions - Double Click
test.skip('Double Click MA', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const btnClick = await page.locator("//button[text() =('Copy Text')]");
    await btnClick.dblclick();
    const f2 = await page.locator('#field2');
    await expect(f2).toHaveValue('Hello World!');
    await page.waitForTimeout(3000);
})

//Mouse Actions - Hover
test.skip('Hover MA', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const btnHover = await page.locator("//button[contains(text(), 'Point Me')]");
    await btnHover.hover();
    await page.waitForTimeout(3000);
})

//Mouse Actions - Right click
test.skip('Right CLick MA', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const btnHover = await page.locator("//a[@id = 'apple']");
    await btnHover.click({button : 'right'});
    await page.waitForTimeout(3000);
})

//Mouse Actions - Drag and Drop
test('Drag and Drop MA', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const drag = await page.locator('#draggable');
    const drop = await page.locator('#droppable');
    //await drag.dragTo(drop);
    await drag.hover();
    await page.mouse.down();
    await drop.hover();
    await page.mouse.up();
    await page.waitForTimeout(3000);

})


