import { test, expect } from '@playwright/test';
import { table } from 'node:console';
import { rootCertificates } from 'node:tls';
test('Handling Tables',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
//Couting no of coulumns and checking if the count is right
    const table = await page.locator('#productTable');
    const columns = await table.locator('thead tr th');
    console.log('No of columns :', await columns.count());
    expect(await columns.count()).toBe(4);

//Counting No of rows and checking if the count is right
    const rows = await table.locator('tbody tr');
    console.log('No of rows :', await rows.count());
    expect(await rows.count()).toBe(5);

    // //selecting particular product from the table and clicking the checkboc
    // const matchedRow = rows.filter({            //.filter we use to filter the items in table
    //     has : page.locator('td'),               // locate all the rows in the table i.e td's
    //     hasText : 'Smartwatch'                  //match the product text, parituclar rows text
    // })
    // await matchedRow.locator('input').check();        //check that matched text
    // await page.waitForTimeout(3000);

    //selecting checkboxes for multiple products by creating resuable function
    await products(page, rows, 'Smartwatch');
    await products(page, rows, 'Laptop');
    await page.waitForTimeout(3000);

    for(let i=0; i< await rows.count(); i++)
    {
        const row = rows.nth(i);
        const tds = row.locator('td');

        for(let j=0; j< await tds.count()-1; j++)
        {
            console.log(await tds.nth(j).textContent())
        }
    }
})

//Reusable function should be decalred outside the test 
async function products(page, rows, name)               //Create resuable function as pass parameters
    {
        const FilteredProduct = rows.filter({           
            has : page.locator('td'),
            hasText : name                              //instead of specifying particular product name, pass the name parameter
    })
        await FilteredProduct.locator('input').check();
    }


