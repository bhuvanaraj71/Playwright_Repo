import {test, expect} from '@playwright/test';

test('Upload files', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#singleFileInput').
                      setInputFiles('./tests/FilesToUpload/Bhuvana_Passbook.pdf');

    await page.locator('#multipleFilesInput').
                       setInputFiles(['tests/FilesToUpload/Bhuvana_Passbook.pdf',
                                       'tests/FilesToUpload/MedicalCertificate.pdf' 
                       ])
    await page.waitForTimeout(3000);

})