const assert = require("assert"),
  puppeteer = require("puppeteer"),
  { v4: uuidv4 } = require("uuid");

let browser, page;
let unique_email = uuidv4() + "@gmail.com";

async function setLargerViewport() {
  await page.setViewport({ width: 1440, height: 767 });
}

beforeEach(async () => {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();

  await page.goto("https://codeone.herokuapp.com/");
});

afterEach(async () => {
  await browser.close();
});

test("get started as guest", async () => {
  await page.click("#intro > div.intro-text > a");
  const url = await page.url();
  assert(url === "https://codeone.herokuapp.com/playground");
});

test("Register modal appears", async () => {
  setLargerViewport();
  await page.click(
    "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link"
  );

  const modal = await page.waitForSelector(
    "body > div.fade.modal.show > div > div > div",
    {
      visible: true
    }
  );

  expect(modal).toBeTruthy();
});

test("Login modal appears", async () => {
  setLargerViewport();
  await page.click(
    "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link"
  );

  const modal = await page.waitForSelector(
    "body > div.fade.modal.show > div > div > div",
    {
      visible: true
    }
  );

  expect(modal).toBeTruthy();
});

test("login to register modal flow", async () => {
  setLargerViewport();
  await page.click(
    "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link"
  );
  await page.waitForSelector("body > div.fade.modal.show > div > div > div", {
    visible: true
  });
  await page.click("body > div.fade.modal.show > div > div > div > p > span");
  await page.waitForSelector("body > div.fade.modal.show > div > div > div", {
    visible: true
  });
  const title = await page.$eval(
    "body > div.fade.modal.show > div > div > div > div",
    e => e.innerHTML
  );
  expect(title).toBe("Register");
});

test("register to login modal flow", async () => {
  setLargerViewport();
  await page.click(
    "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link"
  );
  await page.waitForSelector("body > div.fade.modal.show > div > div > div", {
    visible: true
  });
  await page.click("body > div.fade.modal.show > div > div > div > p > span");
  await page.waitForSelector("body > div.fade.modal.show > div > div > div", {
    visible: true
  });
  const title = await page.$eval(
    "body > div.fade.modal.show > div > div > div > div",
    e => e.innerHTML
  );
  expect(title).toBe("Sign in to your account");
});

test("register account", async () => {
  setLargerViewport();
  await page.click(
    "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link"
  );
  await page.waitForSelector("body > div.fade.modal.show > div > div > div", {
    visible: true
  });

  await page.type(
    "body > div.fade.modal.show > div > div > div > form > div:nth-child(1) > div > input",
    "John Doe"
  );
  await page.type(
    "body > div.fade.modal.show > div > div > div > form > div:nth-child(2) > div > input",
    unique_email
  );
  await page.type(
    "body > div.fade.modal.show > div > div > div > form > div:nth-child(3) > div > input",
    "pwd123456"
  );
  await page.type(
    "body > div.fade.modal.show > div > div > div > form > div:nth-child(4) > div > input",
    "pwd123456"
  );
  await page.click(
    "body > div.fade.modal.show > div > div > div > form > button"
  );
  const userauth = await page.waitForSelector(
    "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > button > img",
    {
      visible: true
    }
  );
  expect(userauth).toBeTruthy();
});

test("log in with created account, get started as user url", async () => {
  setLargerViewport();
  await page.click(
    "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link"
  );
  await page.waitForSelector("body > div.fade.modal.show > div > div > div", {
    visible: true
  });

  await page.type(
    "body > div.fade.modal.show > div > div > div > form > div:nth-child(1) > div > input",
    unique_email
  );
  await page.type(
    "body > div.fade.modal.show > div > div > div > form > div:nth-child(2) > div > input",
    "pwd123456"
  );
  await page.click(
    "body > div.fade.modal.show > div > div > div > button:nth-child(3)"
  );
  const userauth = await page.waitForSelector(
    "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > button > img",
    {
      visible: true
    }
  );
  expect(userauth).toBeTruthy();

  await page.click("#intro > div.intro-text > a");
  const url = await page.url();

  expect(url).toBe("https://codeone.herokuapp.com/profile");
});

test("navigation as logged in user", async () => {
  setLargerViewport();
  await page.click(
    "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link"
  );
  await page.waitForSelector("body > div.fade.modal.show > div > div > div", {
    visible: true
  });

  await page.type(
    "body > div.fade.modal.show > div > div > div > form > div:nth-child(1) > div > input",
    unique_email
  );
  await page.type(
    "body > div.fade.modal.show > div > div > div > form > div:nth-child(2) > div > input",
    "pwd123456"
  );
  await page.click(
    "body > div.fade.modal.show > div > div > div > button:nth-child(3)"
  );
  await page.waitForSelector(
    "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > button > img",
    {
      visible: true
    }
  );
  await page.click(
    "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2)"
  );
  await page.waitForSelector(
    "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > div",
    {
      visible: true
    }
  );

  const username = await page.$eval(
    "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > div > span",
    e => e.innerHTML
  );

  expect(username).toBe("John Doe");

  await page.click(
    "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > div > a.profile-nav-playground.location-home.dropdown-item"
  );
  let url = await page.url();

  expect(url).toBe("https://codeone.herokuapp.com/playground");

  await page.click(
    "#responsive-navbar-nav > div:nth-child(4) > a:nth-child(4) > div"
  );
  await page.waitForSelector(
    "#responsive-navbar-nav > div:nth-child(4) > a:nth-child(4) > div",
    {
      visible: true
    }
  );
  await page.click(
    "#responsive-navbar-nav > div:nth-child(4) > a:nth-child(4) > div > div > a:nth-child(5)"
  );
  url = await page.url();

  expect(url).toBe("https://codeone.herokuapp.com/profile");
});

test("sign out of account", async () => {
  setLargerViewport();
  await page.click(
    "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link"
  );
  await page.waitForSelector("body > div.fade.modal.show > div > div > div", {
    visible: true
  });

  await page.type(
    "body > div.fade.modal.show > div > div > div > form > div:nth-child(1) > div > input",
    unique_email
  );
  await page.type(
    "body > div.fade.modal.show > div > div > div > form > div:nth-child(2) > div > input",
    "pwd123456"
  );
  await page.click(
    "body > div.fade.modal.show > div > div > div > button:nth-child(3)"
  );
  await page.waitForSelector(
    "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > button > img",
    {
      visible: true
    }
  );
  await page.click(
    "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2)"
  );
  await page.waitForSelector(
    "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > div",
    {
      visible: true
    }
  );
  await page.click(
    "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > div > div:nth-child(7) > a"
  );
  const logoutSuccess = await page.waitForSelector(
    "#responsive-navbar-nav > div:nth-child(3) > div",
    { visibile: true }
  );
  expect(logoutSuccess).toBeTruthy();
});
