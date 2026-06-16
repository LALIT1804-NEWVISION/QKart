import { test as base, expect } from "@playwright/test";
import { loginAction } from "../actions/loginAction/loginAction";
import loginData from "../testdata/login.json";
import { FooterAction } from "../actions/footerAction/footerAction";
import { RegistrationAction } from '../actions/RegistrationAction/registrationAction';
import RegistrationData from "../testdata/registrationData.json";
import { CartAction } from "../actions/cartAction/cartAction";
import { CheckoutAction } from "../actions/checkoutAction/checkoutAction";

type AppActions = {
    login: loginAction;
    footer: FooterAction;
    register: RegistrationAction;
    cart: CartAction;
   
    checkout: CheckoutAction;
};

type Fixtures = {
    gotoBaseUrl: void;
    appAction: AppActions;
};

export const test = base.extend<Fixtures>({
    gotoBaseUrl: [
        async ({ page }, use) => {
            await page.goto(RegistrationData.baseUrl);
            await expect(page).toHaveURL(RegistrationData.baseUrl);
            await use();
        },
        { auto: true },
    ],

    appAction: async ({ page }, use) => {
    
        await page.goto(loginData.BaseURL);
 
        const appAction: AppActions = {
            login: new loginAction(page),
            footer: new FooterAction(page),
            register: new RegistrationAction(page),
            cart: new CartAction(page)
            checkout: new CheckoutAction(page)
        };
        await use(appAction);
    },
});

export { expect } from "@playwright/test";