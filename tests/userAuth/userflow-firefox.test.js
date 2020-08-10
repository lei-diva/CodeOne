const ppFirefox = require("puppeteer-firefox"),
  viewportAndEmulation = require("../viewportAndEmulation.util");

let page, browser, context, modal;

describe.each(viewportAndEmulation)(
  "Chrome User Authentication tests with Screen Size Emulation",
  (name, viewportAndEmulationFunc, uuid) => {
    beforeEach(async () => {
      browser = await ppFirefox.launch({ headless: false });
      page = await browser.newPage();
      await viewportAndEmulationFunc(page, ppFirefox);
      await page.goto("https://codeone.herokuapp.com/");
    });

    afterEach(async () => {
      await browser.close();
    });
    test(`${name} Get started as guest`, async done => {
      await Promise.all([
        page.click(".home-button.get-started"),
        page.waitForSelector(".panellist", { visible: true }) //Playground
      ]);

      const url = await page.url();
      expect(url.toString()).toBe("https://codeone.herokuapp.com/playground");
      done();
    });

    test(`${name} Testing register and login modal flow`, async done => {
      if (name == "Desktop Viewport:") {
        await Promise.all([
          page.click(
            "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link" //register
          ),
          page.waitForSelector(".modal", { visible: true }) //wait for modal to pop up
        ]);
      } else {
        await page.click(".toggle-icon"); //Responsive menu icon
        await page.waitForSelector(
          ".sign-up-button.nav-link", //Register button on menu
          { visible: true }
        );

        await Promise.all([
          page.click(
            ".sign-up-button.nav-link" //register
          ),
          (modal = page.waitForSelector(".modal", { visible: true })) //wait for modal to pop up
        ]);
      }

      expect(modal).toBeTruthy;

      await page.waitForSelector(".here", { visible: true });
      await Promise.all([
        page.click(
          "body > div.fade.modal.show > div > div > div > p > span" //"Already have an account? Log in"
        ),
        (modal = page.waitForSelector(".modal", { visible: true })) //wait for modal to pop up
      ]);

      expect(modal).toBeTruthy;

      await page.waitForSelector(".here", { visible: true });
      await Promise.all([
        page.click(
          "body > div.fade.modal.show > div > div > div > p > span" //"Register here"
        ),
        (modal = page.waitForSelector(".modal", { visible: true })) //wait for modal to pop up
      ]);

      expect(modal).toBeTruthy;
      done();
    });
  }
);
