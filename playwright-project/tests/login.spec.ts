import { test } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { AddPatient } from '../pages/addPatient';
import { RandomUtils } from '../utils/randomUtils';
import { LogoutPage } from '../pages/logout';



test('login.spec test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const addPatient = new AddPatient(page);
    const logoutPage = new LogoutPage(page);

    const firstName = RandomUtils.firstName();
    const lastName = RandomUtils.lastName();

    await loginPage.gotoLoginPage();
    await loginPage.login('pbiswas', 'Simplify!12345');
    await loginPage.clickAdd();
    await loginPage.clickAddPatient();
    await addPatient.firstName(firstName);
    await addPatient.lastName(lastName);
    await addPatient.contactInformation();
    await addPatient.enterEmail(RandomUtils.email());
    await addPatient.admissionInformation();
    await addPatient.selectFacility('again');
    await addPatient.admissionDate(RandomUtils.getTodayDate());
    await addPatient.save();
    await logoutPage.logout();
    await page.close();

});