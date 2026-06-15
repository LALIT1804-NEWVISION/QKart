import { test as base, expect } from "@playwright/test";
import { loginAction } from "../actions/loginAction/loginAction";
import loginData from "../testdata/login.json";
import { RegisterationAction } from '../actions/RegistrationAction/registrationAction';
import RegisterationData from "../testdata/registrationData.json";
 
type appActions = {
    register: RegisterationAction;
    login: loginAction;
};
 
type Fixtures = {
    gotoBaseUrl: void;
    appAction: appActions;
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
        const appAction: appActions = {
            register: new RegisterationAction(page), 
            login: new loginAction(page),
        };
        await use(appAction);
    },
});

export { expect } from "@playwright/test";