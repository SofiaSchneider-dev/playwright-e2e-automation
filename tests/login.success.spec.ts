import { test, expect } from '@playwright/test';

test.describe('Suite de inicio de sesión exitoso', () => {
  test('Login con credenciales válidas debe tener éxito', async ({ page }) => {
    await page.goto('https://automationexercise.com');

    await page.click('a[href="/login"]');
    await page.fill('input[data-qa="login-email"]', 'sofia@gmail.com');
    await page.fill('input[data-qa="login-password"]', '123');
    await page.click('button[data-qa="login-button"]');

    const loggedInText = await page.locator('a:has-text("Logged in as")').innerText();
    expect(loggedInText).toContain('Logged in as');
  });
});
