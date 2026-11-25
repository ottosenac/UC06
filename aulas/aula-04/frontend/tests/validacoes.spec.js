import { test, expect } from '@playwright/test';

test('cadastros rejeitam campos inválidos e preservam dados em erro do servidor', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('navigation').getByRole('button', { name: /Cadastros/ }).click();
  await page.getByRole('button', { name: 'Cadastrar livro' }).click();
  await expect(page.getByText('Informe um título com ao menos 2 caracteres.')).toBeVisible();
  await page.getByRole('button', { name: 'Cadastrar leitor' }).click();
  await expect(page.getByText('Informe um telefone válido com ao menos 8 dígitos.')).toBeVisible();

  await page.route('**/rest/v1/livros', route => route.request().method() === 'POST'
    ? route.fulfill({ status: 409, contentType: 'application/json', body: JSON.stringify({ code: '23505', message: 'duplicate key' }) })
    : route.continue());
  await page.locator('#titulo').fill('Livro de teste');
  await page.locator('#autor').fill('Autora de teste');
  await page.locator('#codigo').fill('COD-TESTE');
  await page.getByRole('button', { name: 'Cadastrar livro' }).click();
  await expect(page.getByText('Já existe um livro com esse código. Informe outro código.')).toBeVisible();
  await expect(page.locator('#titulo')).toHaveValue('Livro de teste');
});
