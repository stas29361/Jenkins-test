import {expect} from '@playwright/test';
import {test, BaseTest} from '../../BaseTest';

test.describe('Mails tests', async () => {
  test.beforeEach(async ({pageManager, apiManager}) => {
    BaseTest.setFeatureSuite.mails();
    await apiManager.mailsAPI.DeleteMailsViaAPI(BaseTest.userForLogin.login);
    await pageManager.sideMenu.OpenMenuTab(pageManager.sideMenu.SideMenuTabs.Mail);
  });

  test.afterEach(async ({page, apiManager}) => {
    await apiManager.mailsAPI.DeleteMailsViaAPI(BaseTest.userForLogin.login);
    await page.close();
  });

  test('TC201. Open Mail tab. User`s login should be visible in the secondary sidebar. @smoke', async ({pageManager}) => {
    BaseTest.setSuite.smoke();
    await pageManager.sideMenu.OpenMenuTab(pageManager.sideMenu.SideMenuTabs.Mail);
    await expect(pageManager.sideSecondaryMailMenu.Containers.MainContainer.locator(`"${BaseTest.userForLogin.login}"`), 'User`s login should be visible in the secondary sidebar').not.toBeVisible();
  });
});
