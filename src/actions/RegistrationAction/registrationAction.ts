import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { writeFileSync } from "fs";
import { RegisterationPage } from "../../pages/RegistrationPage/registrationPage";
import RegisterationData from "../../testdata/registrationData.json";

export class RegisterationAction {
  readonly registerationPage: RegisterationPage;

  constructor(page: any) {
    this.registerationPage = new RegisterationPage(page);
  }

  async Click_On_RegisterLink() {
    await this.registerationPage.registerLink.click();
  }

  private generateUserData() {
    const randomNumber = faker.number.int({min: 10000,max: 99999,});
    return {
      username: `${faker.person.firstName()}${randomNumber}`,
      password: `Test@${randomNumber}`,
      confirmpassword: `Test@${randomNumber}`,
    };
  }

  private saveUserData(userData: any) {
    const existingUsers = Array.isArray(
      RegisterationData.generatedUserData
    )
      ? RegisterationData.generatedUserData
      : [];

    const updatedUsers =
      existingUsers.length >= 10
        ? [userData]
        : [...existingUsers, userData];

    const updatedJsonData = {
      ...RegisterationData,
      generatedUserData: updatedUsers,
    };

    writeFileSync(
      "src/testdata/registrationData.json",
      JSON.stringify(updatedJsonData, null, 2)
    );
  }

  async registeration_details() {
    const userData = this.generateUserData();
    this.saveUserData(userData);
    console.log("Username:", userData.username);
    console.log("Password:", userData.password);
    await this.registerationPage.Username.fill(userData.username);
    await this.registerationPage.password.fill(userData.password);
    await this.registerationPage.confirmPassword.fill(userData.confirmpassword);
    await this.registerationPage.registerNowButton.click();
  }
  
  async registerWithBlankUsername() {
    const userData = this.generateUserData();
    await this.registerationPage.password.fill(userData.password);
    await this.registerationPage.confirmPassword.fill(userData.confirmpassword);
    await this.registerationPage.registerNowButton.click();
  }

  async registerWithBlankPassword() {
    const userData = this.generateUserData();
    await this.registerationPage.Username.fill(userData.username);
    await this.registerationPage.confirmPassword.fill(userData.confirmpassword);
    await this.registerationPage.registerNowButton.click();
  }
  async registerWithAllBlankFields() {
    await this.registerationPage.registerNowButton.click();
  }

  async registerWithShortUsername() {
    const userData = this.generateUserData();
    await this.registerationPage.Username.fill(userData.username.substring(0, 5));
    await this.registerationPage.password.fill(userData.password);
    await this.registerationPage.confirmPassword.fill(userData.confirmpassword);
    await this.registerationPage.registerNowButton.click();
  }
  async registerWithShortPassword() {
    const userData = this.generateUserData();
    await this.registerationPage.Username.fill(userData.username);
    await this.registerationPage.password.fill("Pass1");
    await this.registerationPage.confirmPassword.fill("Pass1");
    await this.registerationPage.registerNowButton.click();
  }

 
  async registerWithPasswordMismatch() {
    const userData = this.generateUserData();
    await this.registerationPage.Username.fill(userData.username);
    await this.registerationPage.password.fill(userData.password);
    await this.registerationPage.confirmPassword.fill(`${userData.password}123`);
    await this.registerationPage.registerNowButton.click();
  }
  async registerWithExistingUsername() {
    const existingUsers = RegisterationData.generatedUserData;
    const existingUser =existingUsers && existingUsers.length > 0 ? existingUsers[0]: null;
    if (!existingUser) {
      throw new Error("No existing user found in registrationData.json");
    }
    await this.registerationPage.Username.fill(existingUser.username);
    await this.registerationPage.password.fill(existingUser.password);
    await this.registerationPage.confirmPassword.fill(existingUser.confirmpassword);
    await this.registerationPage.registerNowButton.click();
  }

  async verifyRegistrationSuccessMessage() {
    await expect(this.registerationPage.successMessage).toHaveText("Registered Successfully");
  }

  async verifyErrorMessage(message: string) {
    await expect(this.registerationPage.errorMessage).toContainText(message);
  }
}

