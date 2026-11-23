const { test, expect } = require('@playwright/test');

test('sample workspace loads and shows project areas', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page).toHaveTitle(/Little Big Lab/);
  await expect(page.getByRole('heading', { name: /Ideas don't need permission to begin/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Things in motion/i })).toBeVisible();
  await expect(page.locator('.project-card')).toHaveCount(6);
  await expect(page.locator('.showcase-card')).toHaveCount(3);
  await expect(page.locator('.note-item')).toHaveCount(3);
  expect(errors).toEqual([]);
});

test('project filters and project details work with keyboard', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /Experiments/ }).click();
  await expect(page.locator('.project-card')).toHaveCount(2);
  const first = page.locator('.project-card').first();
  await first.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Pixel Garden' })).toBeVisible();
  await page.getByRole('button', { name: 'Close project details' }).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
});

test('mobile layout keeps navigation and project cards usable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Things in motion/i })).toBeVisible();
  await expect(page.locator('.project-card').first()).toBeVisible();
  const dimensions = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
  expect(dimensions.scroll).toBeLessThanOrEqual(dimensions.client);
});