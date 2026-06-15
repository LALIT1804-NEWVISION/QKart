# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Qkart\loginSpec\login.spec.ts >> TC_06 Verify logout functionality
- Location: tests\Qkart\loginSpec\login.spec.ts:39:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//button[contains(text() , "Login")]')

```

```
Error: browserContext.close: Target page, context or browser has been closed
```