import { test, expect } from '@playwright/test';

test('fluxo completo: cadastrar livro, leitor e empréstimo', async ({ page }) => {
  const id = Date.now().toString().slice(-6);
  const livro = `Livro E2E ${id}`;
  const codigo = `E2E-${id}`;
  const leitor = `Leitor E2E ${id}`;

  await page.goto('/');
  await page.getByRole('button', { name: /Cadastros/ }).click();

  await page.locator('#titulo').fill(livro);
  await page.locator('#autor').fill('Teste Automatizado');
  await page.locator('#codigo').fill(codigo);
  await page.getByRole('button', { name: 'Cadastrar livro' }).click();
  await expect(page.getByText('Livro cadastrado com sucesso.')).toBeVisible();

  await page.locator('#leitor-nome').fill(leitor);
  await page.locator('#leitor-telefone').fill('48999990000');
  await page.getByRole('button', { name: 'Cadastrar leitor' }).click();
  await expect(page.getByText('Leitor cadastrado com sucesso.')).toBeVisible();

  await page.getByRole('navigation').getByRole('button', { name: /Novo empréstimo/ }).click();
  await expect(page.getByRole('heading', { name: 'Novo empréstimo' })).toBeVisible();
  await page.getByLabel('Leitor', { exact: true }).fill(leitor);
  await page.getByRole('option', { name: leitor }).click();
  await page.getByLabel('Livro disponível').fill(codigo);
  await page.getByRole('option', { name: `${codigo} - ${livro}` }).click();
  await page.getByRole('button', { name: 'Confirmar empréstimo' }).click();
  await expect(page.getByText('Empréstimo registrado. O livro foi marcado como emprestado.')).toBeVisible();

  await page.getByRole('navigation').getByRole('button', { name: /^Empréstimos/ }).click();
  const itemDoEmprestimo = page.getByRole('listitem').filter({ hasText: `${codigo} - ${livro}` });
  await expect(itemDoEmprestimo).toBeVisible();
  await expect(itemDoEmprestimo.getByText('Em dia')).toBeVisible();
});
