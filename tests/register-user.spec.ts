import { test, expect } from '@playwright/test';

test.describe('Suite de registro de usuario', () => {
  test('Registro exitoso de un nuevo usuario', async ({ page }) => {
    await page.goto('https://automationexercise.com');
    await page.click('a[href="/login"]');
    await page.fill('input[data-qa="signup-name"]', 'Juan Pérez');
    await page.fill('input[data-qa="signup-email"]', 'juan' + Date.now() + '@test.com');
    await page.click('button[data-qa="signup-button"]');

    await page.waitForSelector('input[id="id_gender1"]');
    await page.click('input[id="id_gender1"]');
    await page.fill('input[id="password"]', 'Test1234');
    await page.selectOption('#days', '10');
    await page.selectOption('#months', '5');
    await page.selectOption('#years', '2000');
    await page.click('#newsletter');
    await page.click('#optin');
    await page.fill('#first_name', 'Juan');
    await page.fill('#last_name', 'Pérez');
    await page.fill('#address1', 'Calle Falsa 123');
    await page.selectOption('#country', 'Canada');
    await page.fill('#state', 'Ontario');
    await page.fill('#city', 'Toronto');
    await page.fill('#zipcode', 'A1B2C3');
    await page.fill('#mobile_number', '1234567890');
    await page.click('button[data-qa="create-account"]');

    const successMsg = await page.locator('h2[data-qa="account-created"]').innerText();
    expect(successMsg).toContain('ACCOUNT CREATED!');
  });
});
