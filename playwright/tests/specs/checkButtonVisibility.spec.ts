import { test, expect } from '@playwright/test';
import ButtonVisibilityPage from '../pageobjects/buttonVisibility.page';

test.describe('Button visibility across different screen sizes', () => {
  test('Check button visibility based on viewport size', async ({ page }) => {
    const buttonVisibilityPage = new ButtonVisibilityPage(page);
    await buttonVisibilityPage.navigate();

    const viewportSize = page.viewportSize();

    if (viewportSize && viewportSize.width <= 768) {
      await expect(buttonVisibilityPage.button).toBeHidden(); 
    } else {
      await expect(buttonVisibilityPage.button).toBeVisible();
    }
  });
  test('Validate button visibility after margin fix on mobile', async ({ page }) => {
    const buttonVisibilityPage = new ButtonVisibilityPage(page);
    await buttonVisibilityPage.navigate();
    await expect(buttonVisibilityPage.button).toBeVisible();
  });
});
