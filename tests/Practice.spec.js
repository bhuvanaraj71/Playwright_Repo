import { test, expect } from '@playwright/test';

test('Pratice', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    const TitleName = await page.title()
    await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice")

    //PRIMARY BUTTON(getByText)Locator
    const btnPrimary = page.getByText('Primary Action')
    const btnPrimaryText = await btnPrimary.textContent()
    expect(btnPrimaryText).toBe("Primary Action")

    const btnToggle = page.getByText('Toggle Button')
    const btnToggleText = await btnToggle.textContent()
    expect(btnToggleText).toBe("Toggle Button")

    //1.GET BY ROLE LOCATORS
    const userName = page.locator('#username')
    await userName.fill('Bhuvi')
    await expect(userName).toHaveValue('Bhuvi')
    const checkbox = page.locator("input[role='checkbox']")
    await checkbox.click()
    await expect(checkbox).toBeChecked()




})