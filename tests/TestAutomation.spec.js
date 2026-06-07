import {test, expect} from '@playwright/test';

test('test1', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

// //to check if button is visible, then perform click
// const primaryAction = await page.getByRole('button',{name:'Primary Action'});
// if(await primaryAction.isVisible()){        //.isVisible() : to check if element is visble on screen
//     await primaryAction.click();
// }else{
//     console.log('button not visible');
// }

// const toggleButton = await page.getByRole('button',{name:'Toggle Button'});
// if(await toggleButton.isVisible()){
//     toggleButton.click();
// }else{
//     console.log('button not visible');
// }

// //to check the value in inputbox and fill if empty.
// const username = page.getByRole('textbox',{name:'Username:'});
// const value = await username.inputValue();     //inputvalue() : to fetch the value inside a textbox.
// if(value === ''){                              //checking if field is empty.
//     await username.fill('Bhuvi');
// }else{
//     console.log('field is not empty');
// }

// //to check if checkbox is checked, then check if not.
// const checkbox = await page.getByRole('checkbox',{name:'Accept terms'})
// if (!(await checkbox.isChecked())){
//     await checkbox.check();
// }else{
//     console.log('already checked')
// }

// //to check if the filled value in email is matches with given string.
// const email = page.locator('#email')
// await email.fill('abc@gmail.com');
// if(email.inputValue('abc@gmail.com')){
//     console.log('email matched!');
// }else{
//     console.log('work your ass out');
// }
//------------------------------------------------------------------------------------------------------------------------

await page.getByRole('link',{name:'Home'}).first().click();

//------------------------------------------------------------------------------------------------------------------------


//to check number of options in select drowpdown
const options = await page.$$('#country option');
//await expect(options).toHaveCount(10);          //toHaveCount() : validating to have 10 options in it.
let status = false;
for(const option of options){                   //storing individual value
    console.log(await option.textContent());    //printing the stored individual value
    let value = await option.textContent();     //storing the printed value
    if(value.includes('France')){               //if condition to validate if the value is present in options
        status=true;
        break;
    }
}
await expect(status).toBeTruthy();
//await page.locator('#country').selectOption('India');     select option by visible text
await page.selectOption('#country','France');                //select option by text

//-----------------------------------------------------------------------------------------------------------------------

//select option from dropdown using loop
// for(const option1 of options){                   //storing individual value
//     let value1 = await option1.textContent();    //storing the printed value
//     if(value1.includes('Japan')){                //if condition to validate if the value is present in options
//         await page.selectOption('#country', value1);  
//         break;
//     }
// }





await page.waitForTimeout(3000);
})
