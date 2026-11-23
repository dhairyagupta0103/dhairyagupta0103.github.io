const { test, expect } = require('@playwright/test');

const portfolioFixture = {
  schema_version: 1,
  projects: [
    {
      project_id: 'planet-quiz',
      version: '1.0.0',
      tag: 'project/planet-quiz/v1.0.0',
      title: 'Planet Quiz',
      summary: 'A friendly quiz about the planets.',
      category: 'Learning',
      featured: true
    },
    {
      project_id: 'pixel-garden',
      version: '1.1.0',
      tag: 'project/pixel-garden/v1.1.0',
      title: 'Pixel Garden',
      summary: 'A tiny interactive garden made of pixels.',
      category: 'Creative',
      featured: false
    }
  ]
};

async function openPortfolio(page) {
  await page.route('**/portfolio/portfolio.json', route =>
    route.fulfill({ json: portfolioFixture })
  );
  await page.goto('/');
}

test('portfolio loads selected releases and featured work', async ({ page }, testInfo) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await openPortfolio(page);
  await expect(page).toHaveTitle(/Selected projects/);
  await expect(page.getByRole('heading', { name: /Made with curiosity/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Things to explore/i })).toBeVisible();
  await expect(page.locator('.project-card')).toHaveCount(2);
  await expect(page.locator('.showcase-card')).toHaveCount(1);
  expect(errors).toEqual([]);
  await page.screenshot({ path: testInfo.outputPath('portfolio-homepage.png'), fullPage: true });
});

test('featured filter and project launch details work with keyboard', async ({ page }) => {
  await openPortfolio(page);
  await page.getByRole('button', { name: /Featured/ }).click();
  await expect(page.locator('.project-card')).toHaveCount(1);
  await page.getByRole('button', { name: /Everything/ }).click();
  const first = page.locator('.project-card').first();
  await first.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.locator('#dialog-title')).toHaveText('Planet Quiz');
  const launch = page.getByRole('link', { name: /Launch project/ });
  await expect(launch).toHaveAttribute('href', './projects/planet-quiz/');
  await page.getByRole('button', { name: 'Close project details' }).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
});

test('mobile layout keeps navigation and project cards usable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await openPortfolio(page);
  await expect(page.getByRole('heading', { name: /Things to explore/i })).toBeVisible();
  await expect(page.locator('.project-card').first()).toBeVisible();
  const dimensions = await page.evaluate(() => ({
    scroll: document.documentElement.scrollWidth,
    client: document.documentElement.clientWidth
  }));
  expect(dimensions.scroll).toBeLessThanOrEqual(dimensions.client);
});
