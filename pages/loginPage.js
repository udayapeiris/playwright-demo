const { expect } = require ('@playwright/test');
exports.loginPage = class loginPage {

  constructor(page) {
      this.page = page
      this.userName_textBox = page.getByPlaceholder('Username')
      this.password_textBox = page.getByPlaceholder('Password')
      this.login_Button = page.getByRole('button', { name: 'Login' })
  }

  async loginToApplication(username, password) {
      await this.userName_textBox.fill(username);
      await this.password_textBox.fill(password);
      await this.login_Button.click();
  }

}