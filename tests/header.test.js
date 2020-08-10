const ppChrome = require("puppeteer"),
  viewportAndEmulation = require("./viewportAndEmulation.util");

let page, browser, context;

beforeAll(async () => {
  browser = await ppChrome.launch({ headless: false });
});

afterAll(async () => {
  await browser.close();
});

describe.each(viewportAndEmulation)(
  "Chrome User Authentication tests with Screen Size Emulation",
  (name, viewportAndEmulationFunc, uuid) => {
    beforeEach(async () => {
      context = await browser.createIncognitoBrowserContext();
      page = await context.newPage();
      await viewportAndEmulationFunc(page, ppChrome);
      await page.goto("https://codeone.herokuapp.com/");
    });

    afterEach(async () => {
      await context.close();
    });
    test("default homepage url", async () => {
      const url = await page.url();
      expect(url.toString()).toBe("https://codeone.herokuapp.com/");
    });

    test("logo url routing", async () => {
      await page.click("a.logo.navbar-brand");
      const url = await page.url();
      expect(url.toString()).toBe("https://codeone.herokuapp.com/");
    });

    test(`${name} home nav route`, async () => {
      if (name != "Desktop Viewport:") {
        await page.click("#root > div > nav > button");
      }
      await page.waitForSelector(
        "#responsive-navbar-nav > div.mr-auto.home-display.navbar-nav > a:nth-child(1)",
        { visible: true }
      );
      await Promise.all([
        page.click(
          "#responsive-navbar-nav > div.mr-auto.home-display.navbar-nav > a:nth-child(1)"
        ),
        page.waitForNavigation()
      ]);

      const url = await page.url();
      expect(url.toString()).toBe("https://codeone.herokuapp.com/#top");
    });

    test(`${name} feautures nav route`, async () => {
      if (name != "Desktop Viewport:") {
        await page.click("#root > div > nav > button");
      }
      await page.waitForSelector(
        "#responsive-navbar-nav > div.mr-auto.home-display.navbar-nav > a:nth-child(2)",
        { visible: true }
      );
      await Promise.all([
        page.click(
          "#responsive-navbar-nav > div.mr-auto.home-display.navbar-nav > a:nth-child(2)"
        ),
        page.waitForNavigation()
      ]);
      const url = await page.url();
      expect(url.toString()).toBe("https://codeone.herokuapp.com/#features");
    });

    test(`${name} blog nav route`, async () => {
      if (name != "Desktop Viewport:") {
        await page.click("#root > div > nav > button");
      }
      await page.waitForSelector(
        "#responsive-navbar-nav > div.mr-auto.home-display.navbar-nav > a:nth-child(3)",
        { visible: true }
      );

      await Promise.all([
        page.click(
          "#responsive-navbar-nav > div.mr-auto.home-display.navbar-nav > a:nth-child(3)"
        ),
        page.waitForNavigation()
      ]);
      const url = await page.url();
      expect(url.toString()).toBe(
        "https://codeone.herokuapp.com/#blog-section"
      );
    });

    test(`${name} contact nav route`, async () => {
      if (name != "Desktop Viewport:") {
        await page.click("#root > div > nav > button");
      }
      await page.waitForSelector(
        "#responsive-navbar-nav > div.mr-auto.home-display.navbar-nav > a:nth-child(4)",
        { visible: true }
      );
      await Promise.all([
        page.click(
          "#responsive-navbar-nav > div.mr-auto.home-display.navbar-nav > a:nth-child(4)"
        ),
        page.waitForNavigation()
      ]);

      const url = await page.url();
      expect(url.toString()).toBe("https://codeone.herokuapp.com/#contact");
    });
  }
);
