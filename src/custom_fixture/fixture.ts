import { test as base, expect } from "@playwright/test";
import { loginAction } from "../actions/loginAction/loginAction";
import loginData from "../testdata/login.json";
import { FooterAction } from "../actions/footerAction/footerAction";
import { RegisterationAction } from '../actions/RegistrationAction/registrationAction';
import RegisterationData from "../testdata/registrationData.json";

 
type AppActions = {
    login: loginAction;
    footer: FooterAction;
    register: RegisterationAction;

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
            login: new loginAction(page),
            register: new RegisterationAction(page),
            footer: new FooterAction(page),
        };
        await use(appAction);
    },
});

export { expect } from "@playwright/test";

