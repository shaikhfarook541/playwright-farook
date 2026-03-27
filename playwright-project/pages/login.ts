import { Page, Locator } from '@playwright/test';

export class LoginPage {
    page: Page;
    username: Locator;
    password: Locator;
    loginBtn: Locator;
    addMenu: Locator;
    addPatient: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('#Username');
        this.password = page.locator('#Password');
        this.loginBtn = page.locator('//input[@id="Login"]');
        this.addMenu = page.locator('a', { hasText: /^Add$/ });
        this.addPatient = page.locator('a', { hasText: 'Add Patient' });

    }

    async gotoLoginPage() {
        await this.page.goto('https://woundexpert-integration.nhsinc.com/Security/Login?ReturnUrl=%2f#/scheduler');
    }

    async login(username: string, password: string) {
        await this.username.waitFor({ state: 'visible' });
        await this.username.fill(username);
        await this.password.waitFor({ state: 'visible' });
        await this.password.fill(password);
        await this.loginBtn.waitFor({ state: 'visible' });
        await this.loginBtn.click();
        await this.loginBtn.waitFor({ state: 'visible' });
        await this.loginBtn.click();
    }

    async clickAdd() {
        await this.addMenu.waitFor({ state: 'visible' });
        await this.addMenu.click();
    }

    async clickAddPatient() {
        await this.addPatient.waitFor({ state: 'visible' });
        await this.addPatient.click({ force: true });
    

    }
};