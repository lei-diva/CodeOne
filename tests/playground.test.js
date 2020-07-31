const puppeteer = require("puppeteer"),
  assert = require("assert");

let browser, page;

async function setLargerViewport() {
  await page.setViewport({ width: 1440, height: 767 });
}

beforeEach(async () => {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();

  await page.goto("https://codeone.herokuapp.com/playground");
});

afterEach(async () => {
  await browser.close();
});

test("Toggle HTML display Buttons", async () => {
  setLargerViewport();

  await page.click(
    "#responsive-navbar-nav > div.mr-auto.display.navbar-nav > a:nth-child(1)"
  );
  const hidden = await page.waitForSelector(
    "#root > div > div > div.panels.row.no-gutters > div:nth-child(1)",
    { hidden: true }
  );
  expect(hidden).toBeTruthy();
});
