const { test, expect } = require('@playwright/test');
import AxeBuilder from '@axe-core/playwright';

test('home page', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Home')).toBeVisible()
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
  expect(accessibilityScanResults.violations).toEqual([]); 
});

test('projects page', async ({ page }) => {
  await page.goto('/projects.html');
  await expect(page.getByText('Home')).toBeVisible()

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
  expect(accessibilityScanResults.violations).toEqual([]); 
});

test('guides page', async ({ page }) => {
  await page.goto('/guides.html');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
  expect(accessibilityScanResults.violations).toEqual([]); 
});

test('blogs page', async ({ page }) => {
  await page.goto('/blogs.html');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
  expect(accessibilityScanResults.violations).toEqual([]); 
});

test('about page', async ({ page }) => {
  await page.goto('/about.html');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
  expect(accessibilityScanResults.violations).toEqual([]); 
});

