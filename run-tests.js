#!/usr/bin/env node

/**
 * Test Runner - Runs the cart tests with proper setup
 * This script bypasses PowerShell execution policy issues
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const authFilePath = path.join(projectRoot, 'auth.json');

console.log('🧪 QKart Test Runner');
console.log('='.repeat(50));

// Check if auth.json exists
if (fs.existsSync(authFilePath)) {
    const stats = fs.statSync(authFilePath);
    const ageInHours = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
    console.log(`✓ auth.json exists (${ageInHours.toFixed(1)} hours old)`);
    
    if (ageInHours >= 24) {
        console.log('⟳ Auth is older than 24 hours, will refresh...');
    }
} else {
    console.log('→ auth.json will be created during global setup');
}

console.log('\n📋 Starting Playwright Tests...\n');

try {
    // Run Playwright tests
    execSync('npx playwright test', {
        cwd: projectRoot,
        stdio: 'inherit',
        shell: 'cmd.exe'
    });
    
    console.log('\n✓ Tests completed successfully!');
    console.log('📊 View results: npx playwright show-report');
} catch (error) {
    console.error('\n✗ Tests failed with error:', error.message);
    process.exit(1);
}
