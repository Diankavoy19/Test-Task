import { expect, Locator, Page } from '@playwright/test';

class ButtonVisibilityPage  {
    readonly page: Page;
    readonly button: Locator;
    /**
     * @param {Page} page
     */
    constructor(page: Page) {
        this.page = page,
        this.button = page.locator('[data-testid="test-button"]');
        
    }

    async navigate(): Promise<void> {
        await this.page.goto('/');
        await this.page.waitForLoadState('networkidle');
    };

    
}
export default ButtonVisibilityPage;