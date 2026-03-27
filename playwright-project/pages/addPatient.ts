import { Page, Locator, expect } from '@playwright/test';

export class AddPatient {
    admissionDateInput: Locator;
    page: Page;
    FirstName: Locator;
    LastName: Locator;
    contactInfoTab: Locator;
    email: Locator;
    admissionInfoTab: Locator;
    facilityDropdown: Locator;
    saveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.FirstName = page.locator('#firstName');
        this.LastName = page.locator('#lastName');
        this.contactInfoTab = page.getByRole('tab', { name: 'Contact Information' });
        this.email = page.locator('#emailPatientDemos');
        this.admissionInfoTab = page.getByRole('tab', { name: 'Admission Information' });
        this.facilityDropdown = page.locator('#ddlCoc');
        this.admissionDateInput = page.locator('#admissionDate');
        this.saveButton = page.locator("//input[@id='btnSave']");
    }

    async fillField(field: Locator, value: string) {
        await expect(field).toBeVisible({ timeout: 10000 });
        await field.fill(value);
    }

    async firstName(firstName: string) {
        await this.fillField(this.FirstName, firstName);
    }

    async lastName(lastName: string) {
        await this.fillField(this.LastName, lastName);
    }

    async contactInformation() {
        await this.contactInfoTab.click();
    }

    async enterEmail(email: string) {
        await this.fillField(this.email, email);
    }

    async admissionInformation() {
        await this.admissionInfoTab.click();
    }

    async selectFacility(facility: string) {
        await this.facilityDropdown.selectOption(facility);
    }
    async admissionDate(admissionDate: string) {
        await this.admissionDateInput.fill(admissionDate);
    }

    async save() {
        await this.saveButton.click();
    }
}