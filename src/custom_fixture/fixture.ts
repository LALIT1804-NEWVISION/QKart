


import { test as base, expect, Page } from '@playwright/test';
import { RegisterationAction } from '../actions/RegistrationAction/registrationAction';
import RegisterationData from "../testdata/registrationData.json";
import { CartAction } from '../actions/cartAction/cartAction';
import loginData from '../testdata/login.json';
import { loginAction } from '../actions/loginAction/loginAction';
import { SearchAction } from '../actions/searchAction/searchAction';
import { FooterAction } from '../actions/footerAction/footerAction';




type AppActions = {
    
    
    register: RegisterationAction;
    cart: CartAction;
    login: loginAction;
    search: SearchAction;
    footer:FooterAction;
    


}
 
type Fixtures = {
    appAction: AppActions;
};
 
export const test = base.extend<Fixtures>({
    appAction: async ({ page }, use) => {

       
        // Navigate BEFORE using actions
        await page.goto(loginData.BaseURL);
 


    
        await page.goto(loginData.BaseURL);
 
        const appAction: AppActions = {
            login: new loginAction(page),
            search: new SearchAction(page),
            footer: new FooterAction(page),
            register: new RegisterationAction(page),
            cart: new CartAction(page)
        };
 
        await use(appAction);
    }
});
 
export { expect };