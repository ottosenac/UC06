import { test, expect } from '@playwright/test';

test('seletores de empréstimo permitem pesquisar e escolher data no celular', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await page.getByRole('navigation').getByRole('button', { name: /Novo empréstimo/ }).click();
  const reader = page.getByRole('combobox', { name: 'Leitor' });
  await expect(reader).toBeVisible();
  await reader.fill('Demonstração - Ana');
  await page.getByRole('option', { name: 'Demonstração - Ana' }).click();
  await page.getByRole('button', { name: /Data de retirada:/ }).click();
  const calendar = page.locator('.calendar-popover');
  await expect(calendar).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
  await page.keyboard.press('Escape');
  await expect(calendar).toBeHidden();
});
