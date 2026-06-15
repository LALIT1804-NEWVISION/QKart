import { test as base, expect } from "@playwright/test";
import { loginAction } from "../actions/loginAction/loginAction";
import loginData from "../testdata/login.json";
 
type appActions = {
    login: loginAction;
};
 
type Fixtures = {
    appAction: appActions;
};
 
export const test = base.extend<Fixtures>({
    appAction: async ({ page }, use) => {
       
        // Navigate BEFORE using actions
        await page.goto(loginData.BaseURL);
 
        const appAction: appActions = {
            login: new loginAction(page)
        };
 
        await use(appAction);
    }
});
 
export { expect };