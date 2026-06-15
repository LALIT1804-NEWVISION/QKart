import { test as base, expect, Page } from '@playwright/test';
import { RegisterationAction } from '../actions/RegistrationAction/registrationAction';
import RegisterationData from "../testdata/registrationData.json";
import { CartAction } from '../actions/cartAction/cartAction';
import loginData from '../testdata/login.json';
import { loginAction } from '../actions/loginAction/loginAction';

type AppActions = {
    register: RegisterationAction;
    cart: CartAction;
    login: loginAction;

};

type Fixtures = {
    gotoBaseUrl: void;
    appAction: AppActions;
};

export const test = base.extend<Fixtures>({
    gotoBaseUrl: [
        async ({ page }, use) => {
            await page.goto(RegisterationData.baseUrl);
            await expect(page).toHaveURL(RegisterationData.baseUrl);
            await use();
        },
        { auto: true },
    ],

    appAction: async ({ page }, use) => {
        const appAction: AppActions = {
            register: new RegisterationAction(page), 
            cart: new CartAction(page),
            login: new loginAction(page),
        };
        await use(appAction);
    },
});

export { expect } from "@playwright/test";

