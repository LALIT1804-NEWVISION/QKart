import { test as base, expect } from "@playwright/test";
import { loginAction } from "../actions/loginAction/loginAction";
import loginData from "../testdata/login.json";
import { CartAction } from "../actions/cartAction/cartAction";
 
type appActions = {
    login: loginAction;
    cart: CartAction;
};
 
type Fixtures = {
    appAction: appActions;
};
 
export const test = base.extend<Fixtures>({
    appAction: async ({ page }, use) => {
       
        // Navigate BEFORE using actions
        await page.goto(loginData.BaseURL);
 
        const appAction: appActions = {
            login: new loginAction(page),
            cart: new CartAction(page)
        };
 
        await use(appAction);
    }
});
 
export { expect };
 