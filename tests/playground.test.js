const puppeteer = require("puppeteer"),
  assert = require("assert");

let browser, page;

async function setLargerViewport() {
  await page.setViewport({ width: 1440, height: 767 });
}

beforeEach(async () => {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();

  await page.goto("https://codeone.herokuapp.com/");
  setLargerViewport();
  await page.click("#intro > div.intro-text > a > button");
});

afterEach(async () => {
  await browser.close();
});

test("Toggle HTML display Button", async () => {
  await page.click(
    "#responsive-navbar-nav > div.mr-auto.display.navbar-nav > a:nth-child(1)"
  );
  const hidden = await page.waitForSelector(
    "#root > div > div > div.panels.row.no-gutters > div:nth-child(1)",
    { hidden: true }
  );
  expect(hidden).toBeTruthy();
  await page.click(
    "#responsive-navbar-nav > div.mr-auto.display.navbar-nav > a.hide.display-button.nav-link"
  );
  const visible = await page.waitForSelector(
    "#root > div > div > div.panels.row.no-gutters > div:nth-child(1)",
    { visible: true }
  );
  expect(visible).toBeTruthy();
});

test("Toggle CSS display Button", async () => {
  await page.click(
    "#responsive-navbar-nav > div.mr-auto.display.navbar-nav > a:nth-child(2)"
  );
  const hidden = await page.waitForSelector(
    "#root > div > div > div.panels.row.no-gutters > div:nth-child(2)",
    { hidden: true }
  );
  expect(hidden).toBeTruthy();
  const visible = await page.waitForSelector(
    "#responsive-navbar-nav > div.mr-auto.display.navbar-nav > a.hide.display-button.nav-link",
    { visible: true }
  );
  expect(visible).toBeTruthy();
});

test("Toggle JS display Button", async () => {
  await page.click(
    "#responsive-navbar-nav > div.mr-auto.display.navbar-nav > a:nth-child(3)"
  );
  const hidden = await page.waitForSelector(
    "#root > div > div > div.panels.row.no-gutters > div:nth-child(3)",
    { hidden: true }
  );
  expect(hidden).toBeTruthy();
  const visible = await page.waitForSelector(
    "#responsive-navbar-nav > div.mr-auto.display.navbar-nav > a.hide.display-button.nav-link",
    { visible: true }
  );
  expect(visible).toBeTruthy();
});

test("Check if output updates to HTML,CSS, JSS content", async () => {
  await page.type(
    "#root > div > div > div.panels.row.no-gutters > div:nth-child(1) > textarea.codearea.form-control",
    "<p> Hello Testing </p>"
  );
  await page.type(
    "#root > div > div > div.panels.row.no-gutters > div:nth-child(2) > textarea.codearea.form-control",
    "p{color: red}"
  );
  await page.type(
    "#root > div > div > div.panels.row.no-gutters > div:nth-child(3) > textarea.codearea.form-control",
    'document.querySelector("p").innerHTML="Hello World"'
  );
  const handler = await page.$("#out");
  const frame = await handler.contentFrame();
  const html = await frame.$eval("body", e => e.innerHTML);
  const css = await frame.$eval("head > style", e => e.innerHTML);

  expect(html).toBe("<p>Hello World</p>");
  expect(css).toBe("p{color: red}");
});
