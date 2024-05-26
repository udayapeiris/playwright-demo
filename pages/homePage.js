const { expect } = require ('@playwright/test');
exports.homePage = class homePage {

    constructor(page) {
        this.page = page
        this.menu_PIM=page.getByRole('link', { name: 'PIM' })
        this.menu_employeeList=page.locator('//a[text()="Employee List"]')
    }

    async openMenuPIM(username, password) {
        await this.menu_PIM.click();
    }

    async openMenuEmpList() {
        await this.menu_PIM.click(menu_employeeList);
    }

}