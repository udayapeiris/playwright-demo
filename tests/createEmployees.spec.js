import { test, expect } from '@playwright/test'
const assert = require('assert');
import jsonEnviornment from '../testData/enviornmentData.json'
import { readExcel } from '../common/readExcel'
import { randomDataGenerator } from '../common/randomDataGenerator'
import { loginPage } from '../pages/loginPage'
import { homePage } from '../pages/homePage'
import { employeePage } from '../pages/employeePage'
import { employeeListPage } from '../pages/employeeListPage'

// Read the json file to get enviornment details 
const envUrl = jsonEnviornment.url
const userName = jsonEnviornment.username
const password = jsonEnviornment.password

test('Create Employee', async ({ page }) => {
    const read_Excel = new readExcel()
    const home_Page = new homePage(page)
    const login_Page = new loginPage(page)
    const employeePage_Page = new employeePage(page)
    const employeeListPage_Page = new employeeListPage(page)
    const random_DataGenerator = new randomDataGenerator()
    const employeesDataJson = read_Excel.readExcelSheet("employees.xlsx", 0)

    await page.goto(envUrl);
    await login_Page.loginToApplication(userName, password)
    await home_Page.openMenuPIM()
    await employeePage_Page.clickOnAddEmployee()
    await employeePage_Page.specifyFirstName(employeesDataJson[0].firstname)
    await employeePage_Page.specifyMiddleName(employeesDataJson[0].middlename)
    await employeePage_Page.specifyLastName(employeesDataJson[0].lastname)
    await employeePage_Page.uploadEmpImage()

    let empNumber = random_DataGenerator.getRandomNumber(5)
    empNumber = "0" + empNumber.toUpperCase();
    await employeePage_Page.specifyEmpNumber(empNumber)
    await employeePage_Page.clickOnSave()
    //await employeePage_Page.specifyNickname(employeesDataJson[0].nickname)
    await employeePage_Page.specifyOtherID(employeesDataJson[0].otherid)
    await employeePage_Page.specifyLicenNumber(employeesDataJson[0].drlicennumber)

    const drlicenexpDate = new Date(Math.round((employeesDataJson[0].drlicenexp - 25569) * 86400 * 1000))
    let licDate = new Date(drlicenexpDate);
    let licYear = licDate.getFullYear();
    let licMonth = licDate.getMonth() + 1; // Adding 1 because months are zero-indexed
    let licDay = licDate.getDate();
    // Format the date as "month/day/year"
    let formattedlicDate = licYear + "-" + licMonth + "-" + licDay;
    await employeePage_Page.specifyLicenExpDate(formattedlicDate)

    // await employeePage_Page.specifySsnNumber(employeesDataJson[0].ssnnumber)
    // await employeePage_Page.specifySinNumber(employeesDataJson[0].sinnumber)
    await employeePage_Page.specifyNationality(employeesDataJson[0].nationality)
    await employeePage_Page.specifyMaritalStatus(employeesDataJson[0].maritalstatus)

    const dateOfBirthDate = new Date(Math.round((employeesDataJson[0].dob - 25569) * 86400 * 1000))
    let dobDate = new Date(drlicenexpDate);
    let dobYear = licDate.getFullYear();
    let dobMonth = licDate.getMonth() + 1; // Adding 1 because months are zero-indexed
    let dobDay = licDate.getDate();
    // Format the date as "month/day/year"
    let formattedDob = licYear + "-" + licMonth + "-" + licDay;
    await employeePage_Page.specifyDOB(formattedDob)

    //await employeePage_Page.specifyMilitaryService(employeesDataJson[0].militaryservice)
    await employeePage_Page.specifyBloodType(employeesDataJson[0].bloodtype)
    //await employeePage_Page.specifySmoker(employeesDataJson[0].smoker)
    let employeeNumber = await employeePage_Page.getEmployeeID()
    employeeNumber = employeeNumber.trim()
    await employeePage_Page.clickOnSecondSave()

    //Open the Employee List page
    await employeePage_Page.openMenuEmpList()
    await employeeListPage_Page.specifyEmpNumber(empNumber)
    await employeeListPage_Page.clickOnSearch()
    await employeeListPage_Page.clickOnTableRow(empNumber)

    await employeePage_Page.assertFname(employeesDataJson[0].firstname)
    await employeePage_Page.assertMname(employeesDataJson[0].middlename)
    await employeePage_Page.assertLname(employeesDataJson[0].lastname)

})

