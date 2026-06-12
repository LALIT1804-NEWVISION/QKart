import { test } from "../../../src/custom_fixture/fixture";

test.describe("Registration Functionality", () => {
  test("REG_001 - Verify Registration with Valid Details", async ({appAction}) => {
    await appAction.register.Click_On_RegisterLink();
    await appAction.register.registeration_details();
    await appAction.register.verifyRegistrationSuccessMessage();
  });

  test("REG_002 - Verify Error Message for Blank Username Field", async ({appAction}) => {
    await appAction.register.Click_On_RegisterLink();
    await appAction.register.registerWithBlankUsername();
    await appAction.register.verifyErrorMessage("Username is a required field");
  });

  test("REG_003 - Verify Error Message for Blank Password Field", async ({appAction}) => {
    await appAction.register.Click_On_RegisterLink();
    await appAction.register.registerWithBlankPassword();
    await appAction.register.verifyErrorMessage("Password is a required field");
  });

  test("REG_004 - Verify Error Message for All Blank Fields", async ({appAction}) => {
    await appAction.register.Click_On_RegisterLink();
    await appAction.register.registerWithAllBlankFields();
    await appAction.register.verifyErrorMessage("Username is a required field");
  });

  test("REG_005 - Verify Username Minimum Length Validation", async ({appAction}) => {
    await appAction.register.Click_On_RegisterLink();
    await appAction.register.registerWithShortUsername();
    await appAction.register.verifyErrorMessage("Username must be at least 6 characters");
  });

  test("REG_006 - Verify Password Minimum Length Validation", async ({appAction}) => {
    await appAction.register.Click_On_RegisterLink();
    await appAction.register.registerWithShortPassword();
    await appAction.register.verifyErrorMessage("Password must be at least 6 characters");
  });

  test("REG_007 - Verify Password and Confirm Password Mismatch", async ({appAction}) => {
    await appAction.register.Click_On_RegisterLink();
    await appAction.register.registerWithPasswordMismatch();
    await appAction.register.verifyErrorMessage("Passwords do not match");
  });

  test("REG_008 - Verify Registration with Existing Username", async ({appAction}) => {
    await appAction.register.Click_On_RegisterLink();
    await appAction.register.registerWithExistingUsername();
    await appAction.register.verifyErrorMessage("Username already exists");
  });
});
