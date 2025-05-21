import { test, expect } from '@playwright/test';

test.describe('Suite de inicio de sesión fallido', () => {
  test('Login con credenciales inválidas debe fallar', async ({ page }) => {
    await page.goto('https://automationexercise.com');
    await page.click('a[href="/login"]');
    await page.fill('input[data-qa="login-email"]', 'sofia@gmail.com');
    await page.fill('input[data-qa="login-password"]', 'aloha');
    await page.click('button[data-qa="login-button"]');

    const errorMsg = await page.locator('p').innerText();
    expect(errorMsg).toContain('Your email or password is incorrect!');
  });
});
