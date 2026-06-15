import { test as base, expect } from "@playwright/test";
import { loginAction } from "../actions/loginAction/loginAction";
import loginData from "../testdata/login.json";
import { FooterAction } from "../actions/footerAction/footerAction";
 
type appActions = {
    login: loginAction;
    footer: FooterAction;
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
            footer: new FooterAction(page)
        };
 
        await use(appAction);
    }
});
 
export { expect };