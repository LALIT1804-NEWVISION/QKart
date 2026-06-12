import { Page, Locator } from '@playwright/test';

export class RegisterationPage {
  readonly page: Page;
  readonly registerLink: Locator;
  readonly Username: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly registerNowButton: Locator;
  readonly errorMessage: Locator;
  readonly successMessage: Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.registerLink = page.locator("//button[normalize-space()='Register']");
    this.Username = page.getByPlaceholder('Enter Username');
    this.password = page.getByPlaceholder('Enter a password with minimum 6 characters');
    this.confirmPassword = page.getByPlaceholder('Re-enter your password to confirm');
    this.registerNowButton = page.getByRole('button', { name: 'Register Now' });
    this.errorMessage = page.locator('//div[@id="notistack-snackbar"]');
    this.successMessage = page.locator('//div[@id="notistack-snackbar"]');
  }
}