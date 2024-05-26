const { expect } = require('@playwright/test');
exports.employeeListPage = class employeeListPage {

    constructor(page) {
        this.page = page
        this.empId_textBox = page.locator('//label[text()="Employee Id"]/following::input[1]')
        this.menu_employeeList = page.locator('//a[text()="Employee List"]')
        this.search_button = page.locator('//button[text()=" Search "]')

    }

    async specifyEmpNumber(value) {
        await this.empId_textBox.fill(value);
    }

    async clickOnSearch() {
        await this.search_button.click();
    }
    async clickOnTableRow(value) {
        await this.page.getByText(value).click();
    }
}