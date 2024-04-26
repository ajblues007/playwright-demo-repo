import {test, expect} from "@playwright/test";

test.describe("Add to cart test", () => {
    test("Add to cart test 1", async ({page}) => {
        await page.goto('https://askomdch.com/');
        await page.getByRole('link', { name: 'Store' }).click();
        await page.getByPlaceholder('Search products…').click();
        await page.getByPlaceholder('Search products…').fill('Blue Shoes');
        await page.getByRole('button', { name: 'Search' }).click();
        await page.getByRole('button', { name: 'Add to cart' }).click();
        await page.getByRole('link', { name: 'View cart' }).click();
        await expect(page.locator('#post-1220')).toContainText('Blue Shoes');
    });
});