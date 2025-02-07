import { test, expect } from '@playwright/test';
import ButtonVisibilityPage from '../pageobjects/buttonVisibility.page';

test.describe('Button visibility across different screen sizes', () => {
  test('Validate button visibility after margin fix on mobile', async ({ page }) => {
    const buttonVisibilityPage = new ButtonVisibilityPage(page);
    await buttonVisibilityPage.navigate();
    await expect(buttonVisibilityPage.button).toBeInViewport();
    await expect(buttonVisibilityPage.button).toHaveCSS('margin-left', '0px');
  });
});
