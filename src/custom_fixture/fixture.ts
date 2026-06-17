<<<<<<< HEAD
import { test as base, expect, Page } from '@playwright/test';
import {RegisterationAction} from "../actions/RegistrationAction/registrationAction";
import RegisterationData from "../testdata/registrationData.json";
import { CartAction } from '../actions/cartAction/cartAction';
import loginData from '../testdata/login.json';
import { loginAction } from '../actions/loginAction/loginAction';
import { CheckoutAction } from "../actions/checkoutAction";
=======
import { test as base, expect } from "@playwright/test";
import { loginAction } from "../actions/loginAction/loginAction";
import loginData from "../testdata/login.json";
import { FooterAction } from "../actions/footerAction/footerAction";
import { RegistrationAction } from '../actions/RegistrationAction/registrationAction';
import RegistrationData from "../testdata/registrationData.json";
import { CartAction } from "../actions/cartAction/cartAction";
import { SearchAction } from '../actions/searchAction/searchAction';
import { ProductAction } from '../actions/ProductListing/productAction';



type AppActions = {
    login: loginAction;
<<<<<<< HEAD
    checkout: CheckoutAction;
=======
    footer: FooterAction;
    register: RegistrationAction;
    cart: CartAction;
    search: SearchAction
    product: ProductAction;


   

>>>>>>> 78868000af4b81d4b1c88f9e47c046a2018f3421
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
<<<<<<< HEAD
            register: new RegisterationAction(page),
            cart: new CartAction(page),
            login: new loginAction(page),
            checkout: new CheckoutAction(page)
=======
            login: new loginAction(page),
            footer: new FooterAction(page),
            register: new RegistrationAction(page),
            cart: new CartAction(page),
            search: new SearchAction(page),
            product: new ProductAction(page),
          
        };
        await use(appAction);
    },
});

export { expect } from "@playwright/test";