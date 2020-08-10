const ppFirefox = require("puppeteer-firefox"),
  { v4: uuidv4 } = require("uuid"),
  { registerAccount, loginAccount } = require("./account.util");

const uuid = uuidv4();
let page, browser, context, userauth, logoutSuccess;

beforeEach(async () => {
  browser = await ppFirefox.launch({ headless: false, defaultViewport: null });
  page = await browser.newPage();
  await page.goto("https://codeone.herokuapp.com/");
});

afterEach(async () => {
  await browser.close();
});

test("Register an account", async done => {
  userauth = await registerAccount(uuid, page);
  expect(userauth).toBeTruthy();

  done();
});

test("Log in with created account", async done => {
  userauth = await loginAccount(uuid, page);

  expect(userauth).toBeTruthy();
  await page.waitForSelector("#intro > div.intro-text > a"); //Get Started button

  await Promise.all([
    page.click("#intro > div.intro-text > a"), //Get Started button
    page.waitForNavigation()
  ]);

  await page.waitForSelector(".profilepage", { visible: true }); //Profile Page
  const url = await page.url();

  expect(url.toString()).toBe("https://codeone.herokuapp.com/profile");
  done();
});

test("Get started as logged in user", async done => {
  await loginAccount(uuid, page);

  await page.waitForSelector("#intro > div.intro-text > a"); //Get Started button

  await Promise.all([
    page.click("#intro > div.intro-text > a"), //Get Started button
    page.waitForNavigation()
  ]);

  await page.waitForSelector(".profilepage", { visible: true }); //Profile Page
  const url = await page.url();

  expect(url.toString()).toBe("https://codeone.herokuapp.com/profile");
  done();
});

test("Navigation as logged in user", async done => {
  await loginAccount(uuid, page);
  await page.click(
    "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > button"
  ); //profile drop down menu
  await page.waitForSelector(".dropdown-name", { visible: true });

  await Promise.all([
    await page.click(
      "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > div > a:nth-child(5)"
    ), // My projects
    await page.waitForSelector(".profilepage", { visible: true })
  ]);
  await page.waitForSelector(
    ".loading-page", //Display Name
    {
      hidden: true
    }
  );

  const username = await page.$eval(
    "#root > div > div.display-name > div > div > h2",
    e => e.innerHTML
  );

  expect(username).toBe(`Testing-user-${uuid}`);

  await page.click(
    "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2)" //profile icon
  );
  await page.waitForSelector(".dropdown-name", { visible: true });
  await Promise.all([
    page.click(
      "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > div > a.profile-nav-playground.location-home.dropdown-item" //playground
    ),
    page.waitForNavigation()
  ]);

  let url = await page.url();
  expect(url.toString()).toBe("https://codeone.herokuapp.com/playground");

  await page.click(
    "#responsive-navbar-nav > div:nth-child(4) > a:nth-child(4) > div > button" //profile icon
  );
  await page.waitForSelector(
    ".dropdown-name", //dropdown menu
    {
      visible: true
    }
  );
  await Promise.all([
    page.click(
      "#responsive-navbar-nav > div:nth-child(4) > a:nth-child(4) > div > div > a.profile-nav-home.location-playground.dropdown-item" //Home
    ),
    page.waitForNavigation()
  ]);

  url = await page.url();

  expect(url.toString()).toBe("https://codeone.herokuapp.com/");
  done();
});

test("Sign out of account", async done => {
  await loginAccount(uuid, page);

  await page.click(
    "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2)" //profile icon
  );
  await page.waitForSelector(
    "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > div", //drop down menu
    {
      visible: true
    }
  );
  await Promise.all([
    page.click(
      "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > div > div:nth-child(7) > a" //Sign Out
    ),
    (logoutSuccess = await page.waitForSelector(
      "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link", //Log In button
      { visibile: true }
    ))
  ]);

  expect(logoutSuccess).toBeTruthy();
  done();
});
