import {test} from "../../../src/custom_fixture/fixture"
import { ProductAction  } from "../../../src/actions/ProductListing/productAction"

test("TC-001-Product Listing: Home Page Load and Navigation Verification", async ({page, appAction}) => {
    await appAction.product.verifyPageLoadState();
    await appAction.product.verifyLoginButtonVisibiltyAndNavigation();
    await page.goBack();
    await appAction.product.verifyRegisterButtonVisibiltyAndNavigation();
})

test("TC-003-Prodyct Listing: Banner Image and Title Visibilty", async ({appAction}) => {
    await appAction.product.verifyHomePageBannerVisibilty();
    await appAction.product.verifyBannerTitleVisibilty();
})
