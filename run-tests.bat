@echo off
REM QKart Test Runner Batch File
REM This bypasses PowerShell execution policy issues

echo.
echo ========================================
echo QKart Playwright Test Runner
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    if %ERRORLEVEL% neq 0 (
        echo Error: npm install failed
        exit /b 1
    )
    echo.
)

REM Check auth.json
if exist "auth.json" (
    echo ^✓ auth.json found
) else (
    echo ^→ auth.json will be created during global setup
)

echo.
echo Starting tests...
echo.

REM Run Playwright tests
call npx playwright test

if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================
    echo ^✓ Tests completed successfully!
    echo ========================================
    echo.
    echo View HTML report: npx playwright show-report
    echo.
) else (
    echo.
    echo ========================================
    echo ^✗ Tests failed!
    echo ========================================
    echo.
    exit /b 1
)

pause
