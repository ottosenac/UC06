import { test, expect } from '@playwright/test';

test('voltar e cancelar saem do empréstimo sem gravar dados', async ({ page }) => {
  await page.goto('/');
  const nav = page.getByRole('navigation', { name: 'Navegação principal' });
  await expect(page.getByRole('button', { name: /Novo empréstimo/ })).toHaveCount(1);
  await nav.getByRole('button', { name: /Cadastros/ }).click();
  await nav.getByRole('button', { name: /Novo empréstimo/ }).click();
  await expect(page.getByRole('heading', { name: 'Novo empréstimo' })).toBeVisible();
  await page.getByRole('button', { name: '← Voltar' }).click();
  await expect(page.getByRole('heading', { name: 'Cadastro de livro' })).toBeVisible();

  await nav.getByRole('button', { name: /Novo empréstimo/ }).click();
  const cancel = page.getByRole('button', { name: 'Cancelar', exact: true });
  await expect(cancel).toBeVisible();
  await cancel.click();
  await expect(page.getByRole('heading', { name: 'Cadastro de livro' })).toBeVisible();
});
