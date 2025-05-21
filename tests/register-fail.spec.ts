import { test, expect } from '@playwright/test';

test.describe('Suite de registro fallido', () => {
  test('Registro con correo ya registrado debe fallar', async ({ page }) => {
    await page.goto('https://automationexercise.com');
    await page.click('a[href="/login"]');

    await page.fill('input[data-qa="signup-name"]', 'sofia');
    await page.fill('input[data-qa="signup-email"]', 'sofia@gmail.com'); 
    await page.click('button[data-qa="signup-button"]');

    const errorMsg = await page.locator('p').innerText();
    expect(errorMsg).toContain('Email Address already exist!');
  });
});
