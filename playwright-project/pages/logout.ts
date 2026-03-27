import { Page, Locator, expect } from "@playwright/test";


export class LogoutPage {
    readonly page: Page;
    readonly logoutButton: Locator;
    readonly confirmYesButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoutButton = page.locator('//span[@class="login-bar-link" and normalize-space()="log out"]');
        this.confirmYesButton = page.locator('#confirmLogoutModal a').filter({ hasText: 'Yes' });
    }

    async logout() {
        await this.logoutButton.waitFor({ state: 'visible' });
        await this.logoutButton.click();
       // await this.confirmYesButton.waitFor({ state: 'visible' });
        await this.confirmYesButton.click();
    }
}