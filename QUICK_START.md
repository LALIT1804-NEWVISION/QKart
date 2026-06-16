# Quick Start Guide - Running Tests with StorageState Authentication

## Prerequisites

✅ Ensure you have:
- Node.js installed
- Dependencies installed: `npm install`
- Valid login credentials in `src/testdata/login.json`

## Running Tests

### First Time Setup (Recommended)

```bash
# Install dependencies
npm install

# Run tests (global setup will execute, create auth.json, then run tests)
npx playwright test
```

**What happens:**
1. ✓ Global setup (`auth.setup.ts`) runs first
2. ✓ Login is performed using your `loginAction` POM
3. ✓ Authentication state saved to `auth.json` (gitignored)
4. ✓ All tests run with pre-loaded authentication

### Running Tests Normally

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/Qkart/loginSpec/cart/cart.spec.ts

# Run tests in headed mode (see browser)
npx playwright test --headed

# Run tests with debug mode
npx playwright test --debug

# Run single test
npx playwright test -g "testcases 01"
```

### Running Specific Projects

```bash
# Run only chromium (has storageState configured)
npx playwright test --project chromium

# Run tests with specific configuration
npx playwright test --project=chromium --headed
```

## Troubleshooting

### Issue: "Cannot find auth.json"
**Solution:**
```bash
# Delete existing auth.json and regenerate
rm auth.json
npx playwright test
```

### Issue: Tests still show "not authenticated"
**Solution:**
```bash
# Force refresh auth state
rm auth.json

# Verify credentials in src/testdata/login.json are correct

# Re-run setup
npx playwright test
```

### Issue: "Failed to navigate to application"
**Solution:**
```bash
# Check if the application is running
# Verify BaseURL in src/testdata/login.json is correct
# Check internet connectivity
```

### Issue: Global setup doesn't run
**Solution:**
```bash
# Ensure auth.setup.ts exists in root directory
# Check tsconfig.json exists and includes auth.setup.ts
# Verify playwright.config.ts has: globalSetup: './auth.setup.ts'
```

## Viewing Test Results

```bash
# Open HTML report
npx playwright show-report

# Open Allure report
allure serve allure-results
```

## File Structure

```
.
├── auth.setup.ts                    # Global setup - performs login once
├── playwright.config.ts             # Config with globalSetup + storageState
├── tsconfig.json                    # TypeScript config
├── src/
│   ├── actions/
│   │   └── loginAction/            # POM - used by global setup
│   ├── pages/
│   ├── custom_fixture/
│   │   └── fixture.ts              # Updated to handle auth
│   └── testdata/
│       └── login.json              # Credentials for login
├── tests/
│   └── Qkart/loginSpec/
│       └── cart/
│           └── cart.spec.ts        # Cleaned - no manual login calls
└── auth.json                        # Generated on first run (gitignored)
```

## Key Points

✅ **Authentication is pre-loaded** via storageState
✅ **No login calls needed** in individual tests (except for specific test cases)
✅ **Faster test execution** - login happens once
✅ **Clean test code** - focuses on testing features, not login
✅ **Secure** - credentials in `login.json`, tokens in gitignored `auth.json`

## Advanced Usage

### Refresh Authentication (24+ hours old)
```bash
# Automatically refreshes if auth.json is older than 24 hours
npx playwright test

# Or force refresh
rm auth.json && npx playwright test
```

### Run with Multiple Users (Advanced)
Create separate setup files and projects in `playwright.config.ts` (see AUTHENTICATION_SETUP.md)

### CI/CD Integration
```bash
# In CI environment - global setup runs, creates auth.json, tests use it
npx playwright test
```

## Notes

- Global setup runs in separate browser context (not shared with tests)
- Each test gets fresh isolated context with same authentication state
- If auth expires during test run, manually delete auth.json and re-run
- storageState includes cookies, localStorage, and sessionStorage
