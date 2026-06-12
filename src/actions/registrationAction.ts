import { Page, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { writeFileSync } from "fs";
import { RegisterationPage } from "../pages/registrationPage";
import RegisterationData from "../testdata/registrationData.json";


type Data = {
    username: string;
    password: string;
    confirmpassword: string;
};

export class RegisterationAction {
    readonly registerationPage: RegisterationPage;

    constructor(page: any) {
        this.registerationPage = new RegisterationPage(page);
    }

    async Click_On_RegisterLink() {
        await this.registerationPage.registerLink.click();
    }

    async registeration_details() {
        const randomNumber = faker.number.int({ min: 10000, max: 99999 });
        const username = faker.person.firstName();
        const updatedUserData = {
            username: `${username}${randomNumber}`,
            password: `Test@${randomNumber}`,
            confirmpassword: `Test@${randomNumber}`,
        };
        const existingUsers = Array.isArray(RegisterationData.generatedUserData)
            ? RegisterationData.generatedUserData
            : [];
        let updatedUsers;

        if (existingUsers.length >= 10) {
            updatedUsers = [updatedUserData]; // fresh start
        } else {
            updatedUsers = [...existingUsers, updatedUserData];
        }
        const updatedJsonData = {
            ...RegisterationData,
            generatedUserData: updatedUsers,
        };
        writeFileSync(
            "src/Testdata/registerationdata.json",
            JSON.stringify(updatedJsonData, null, 2)
        );

        //Print Random generated Details
        console.log("UserName:", updatedUserData.username);
        console.log("Password:", updatedUserData.password);
        console.log("ConfirmPassword:", updatedUserData.confirmpassword);
        await this.registerationPage.Username.fill(updatedUserData.username);
        await this.registerationPage.password.fill(updatedUserData.password);
        await this.registerationPage.confirmPassword.fill(updatedUserData.confirmpassword);
        await this.registerationPage.registerNowButton.click();
    }

    async verifyRegistrationSuccessMessage() {

        await expect(this.registerationPage.successMessage).toHaveText("Registered Successfully");
    }
}