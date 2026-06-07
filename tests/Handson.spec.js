import {test, expect} from '@playwright/test'

test('hands-on', async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
const splitUsernameText = await page.locator('p.oxd-text').first().textContent();
const username = splitUsernameText.split(':')[1].trim();
console.log(username);

const splitpasswordText = await page.locator('p.oxd-text').nth(1).textContent();
const password = splitpasswordText.split(':')[1].trim();
console.log(password);

await page.getByPlaceholder('Username').fill(username);
await page.getByPlaceholder('password').fill(password);
await page.locator('.oxd-button').click();


await page.waitForTimeout(3000);
})