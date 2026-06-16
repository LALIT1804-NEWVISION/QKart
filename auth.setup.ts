import { chromium } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { loginAction } from './src/actions/loginAction/loginAction';
import loginData from './src/testdata/login.json';

/**
 * Global Setup: Performs login once and saves authentication state
 * This runs before any tests to establish and cache the authenticated session
 * 
 * Note: Global setup runs in a separate browser context, so we use chromium directly
 */

async function globalSetup() {
    // Skip setup if auth.json already exists and is recent (less than 24 hours old)
    const authFilePath = path.resolve('auth.json');
    if (fs.existsSync(authFilePath)) {
        const stats = fs.statSync(authFilePath);
        const ageInHours = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
        if (ageInHours < 24) {
            console.log('✓ Using existing auth.json (less than 24 hours old)');
            return;
        }
        console.log('⟳ Refreshing auth.json (older than 24 hours)');
    }

    console.log('🔐 Performing global login...');
    
    // Launch browser for setup
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        // Navigate to the application
        await page.goto(loginData.BaseURL);

        // Initialize loginAction using existing POM
        const login = new loginAction(page);

        // Perform login using your existing method
        await login.loginUser(loginData.LoginDetails);

        // Wait for any post-login network activity
        await page.waitForLoadState('networkidle');

        // Save the authenticated state (cookies, localStorage, sessionStorage, etc.)
        // This state will be reused by all tests
        await context.storageState({ path: authFilePath });
        
        console.log('✓ Authentication successful! State saved to auth.json');
    } catch (error) {
        console.error('✗ Authentication failed:', error);
        throw error;
    } finally {
        await context.close();
        await browser.close();
    }
}

export default globalSetup;
