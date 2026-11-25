import { test, expect } from '@playwright/test';

test('tema é alterado, persiste e cabe na tela do celular', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const root = page.locator('html');
  const dark = page.getByRole('button', { name: 'Ativar modo escuro' });
  if (await dark.isVisible()) await dark.click();
  await expect(root).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(root).toHaveAttribute('data-theme', 'dark');
  await expect(page.getByRole('navigation', { name: 'Navegação principal' })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
  await page.getByRole('button', { name: 'Ativar modo claro' }).click();
  await expect(root).toHaveAttribute('data-theme', 'light');
});
