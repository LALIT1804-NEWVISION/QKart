import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { writeFileSync } from "fs";
import { RegistrationPage } from "../../pages/RegistrationPage/registrationPage";
import RegistrationData from "../../testdata/registrationData.json";

export class RegistrationAction {
  readonly registrationPage: RegistrationPage;

  constructor(page: any) {
    this.registrationPage = new RegistrationPage(page);
  }

  async Click_On_RegisterLink() {
    await this.registrationPage.registerLink.click();
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
      RegistrationData.generatedUserData
    )
      ? RegistrationData.generatedUserData
      : [];

    const updatedUsers =
      existingUsers.length >= 10
        ? [userData]
        : [...existingUsers, userData];

    const updatedJsonData = {
      ...RegistrationData,
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
    await this.registrationPage.Username.fill(userData.username);
    await this.registrationPage.password.fill(userData.password);
    await this.registrationPage.confirmPassword.fill(userData.confirmpassword);
    await this.registrationPage.registerNowButton.click();
  }
  
  async registerWithBlankUsername() {
    const userData = this.generateUserData();
    await this.registrationPage.password.fill(userData.password);
    await this.registrationPage.confirmPassword.fill(userData.confirmpassword);
    await this.registrationPage.registerNowButton.click();
  }

  async registerWithBlankPassword() {
    const userData = this.generateUserData();
    await this.registrationPage.Username.fill(userData.username);
    await this.registrationPage.confirmPassword.fill(userData.confirmpassword);
    await this.registrationPage.registerNowButton.click();
  }
  async registerWithAllBlankFields() {
    await this.registrationPage.registerNowButton.click();
  }

  async registerWithShortUsername() {
    const userData = this.generateUserData();
    await this.registrationPage.Username.fill(userData.username.substring(0, 5));
    await this.registrationPage.password.fill(userData.password);
    await this.registrationPage.confirmPassword.fill(userData.confirmpassword);
    await this.registrationPage.registerNowButton.click();
  }
  async registerWithShortPassword() {
    const userData = this.generateUserData();
    await this.registrationPage.Username.fill(userData.username);
    await this.registrationPage.password.fill("Pass1");
    await this.registrationPage.confirmPassword.fill("Pass1");
    await this.registrationPage.registerNowButton.click();
  }

 
  async registerWithPasswordMismatch() {
    const userData = this.generateUserData();
    await this.registrationPage.Username.fill(userData.username);
    await this.registrationPage.password.fill(userData.password);
    await this.registrationPage.confirmPassword.fill(`${userData.password}123`);
    await this.registrationPage.registerNowButton.click();
  }
  async registerWithExistingUsername() {
    const existingUsers = RegistrationData.generatedUserData;
    const existingUser =existingUsers && existingUsers.length > 0 ? existingUsers[0]: null;
    if (!existingUser) {
      throw new Error("No existing user found in registrationData.json");
    }
    await this.registrationPage.Username.fill(existingUser.username);
    await this.registrationPage.password.fill(existingUser.password);
    await this.registrationPage.confirmPassword.fill(existingUser.confirmpassword);
    await this.registrationPage.registerNowButton.click();
  }

  async verifyRegistrationSuccessMessage() {
    await expect(this.registrationPage.successMessage).toHaveText("Registered Successfully");
  }

  async verifyErrorMessage(message: string) {
    await expect(this.registrationPage.errorMessage).toContainText(message);
  }
}

