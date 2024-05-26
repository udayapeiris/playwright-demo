const { expect } = require('@playwright/test');
exports.employeePage = class employeePage {
    constructor(page) {
        this.page = page
        this.addEmployee_button = page.locator('//button[text()=" Add "]')
        this.firstName_textBox = page.getByPlaceholder('First Name')
        this.middleName_textBox = page.getByPlaceholder('Middle Name')
        this.lastName_textBox = page.getByPlaceholder('Last Name')
        this.save_button = page.getByRole('button', { name: 'Save' })
        this.imageUpload_input = page.locator('input[type="file"]')
        this.empNumber_textbox = page.locator('//label[text()="Employee Id"]/following::input[1]')
        this.secondSave_button = page.locator('(//button[text()=" Save "])[2]')
        this.nickname_textbox = page.locator('//label[text()="Nickname"]/following::input[1]')
        this.otherID_textbox = page.locator('//label[text()="Other Id"]/following::input[1]')
        this.driverLicNumber_textbox = page.locator("//*[contains(text(),'License Number')]/following::input[1]")
        this.licenExpDate_textbox = page.locator("//label[text()='License Expiry Date']/following::input[1]")
        this.ssnNumber_textbox = page.locator("//label[text()='SSN Number']/following::input[1]")
        this.sinNumber_textbox = page.locator("//label[text()='SIN Number']/following::input[1]")
        this.nationality_dropdown = page.locator("//label[text()='Nationality']/following::i[1]")
        this.maritalStatus_dropdown = page.locator("//label[text()='Marital Status']/following::i[1]")
        this.dob_textbox = page.locator("//label[text()='Date of Birth']/following::input[1]")
        this.male_option = page.locator("//label[text()='Male']//following::input[1]")
        this.female_option = page.locator("//label[text()='Female']//following::input[1]")
        this.militaryService_textbox = page.locator("//label[text()='Military Service']/following::input[1]")
        this.blodType_dropdown = page.locator("//label[text()='Blood Type']/following::i[1]")
        this.smoker_option = page.locator("//label[text()='Smoker']/following::i[1]")
        this.menu_employeeList = page.locator('//a[text()="Employee List"]')
        this.empFname_textBox = page.locator('//label[text()="Employee Full Name"]/following::input[1]')
        this.empMname_textBox = page.locator('//label[text()="Employee Full Name"]/following::input[2]')
        this.empLname_textBox = page.locator('//label[text()="Employee Full Name"]/following::input[3]')

    }

    async clickOnAddEmployee() {
        await this.addEmployee_button.click();
    }

    async specifyFirstName(value) {
        await this.firstName_textBox.fill(value);
    }

    async specifyMiddleName(value) {
        await this.middleName_textBox.fill(value);
    }

    async specifyLastName(value) {
        await this.lastName_textBox.fill(value);
    }

    async clickOnSave() {
        await this.save_button.click();
    }

    async clickOnSecondSave() {
        await this.secondSave_button.click();
    }

    async uploadEmpImage() {
        await this.imageUpload_input.setInputFiles('./testdata/emp_photo.JPG');;
    }
    async specifyEmpNumber(value) {
        await this.empNumber_textbox.fill(value);
    }

    async specifyNickname(value) {
        await this.nickname_textbox.fill(value);
    }

    async specifyOtherID(value) {
        await this.otherID_textbox.fill(value);
    }

    async specifyLicenNumber(value) {
        await this.driverLicNumber_textbox.fill(value);
    }


    async specifyLicenExpDate(value) {
        await this.licenExpDate_textbox.fill(value);
    }

    async specifySsnNumber(value) {
        await this.ssnNumber_textbox.fill(value);
    }

    async specifySinNumber(value) {
        await this.sinNumber_textbox.fill(value);
    }

    async specifyNationality(value) {
        await this.nationality_dropdown.click()
        await this.page.getByRole('option', { name: value }).click();
    }

    async specifyMaritalStatus(value) {
        await this.maritalStatus_dropdown.click()
        await this.page.getByRole('option', { name: value }).click();
    }

    async specifyDOB(value) {
        await this.dob_textbox.fill(value);
    }

    async specifyGender(value) {
        if (value == "Male") {
            await this.male_option.click();
        }

        else {
            await this.female_option.click();
        }
    }
    async specifyMilitaryService(value) {
        await this.militaryService_textbox.fill(value);
    }

    async specifyBloodType(value) {
        await this.blodType_dropdown.click()
        await this.page.getByRole('option', { name: value }).click();
    }

    async specifySmoker(value) {
        if (value == "Yes") {
            await this.smoker_option.click();
        }
    }

    async openMenuEmpList() {
        await this.menu_employeeList.click();
    }

    async getEmployeeID() {
        let value = await this.empNumber_textbox.inputValue()
        return value
    }

    async getFname() {
        let value = await this.empFname_textBox.inputValue()
        return value
    }

    async getMname() {
        let value = await this.empMname_textBox.inputValue()
        return value
    }

    async getLname() {
        let value = await this.empLname_textBox.inputValue()
        return value
    }

    async assertFname(value) {
        await expect(this.page.getByPlaceholder('First Name')).toHaveValue(value);

    }

    async assertMname(value) {
        await expect(this.page.getByPlaceholder('Middle Name')).toHaveValue(value);
    }

    async assertLname(value) {
        await expect(this.page.getByPlaceholder('Last Name')).toHaveValue(value);
    }

    //await expect(page.getByPlaceholder('First Name')).toHaveValue('bala');

}