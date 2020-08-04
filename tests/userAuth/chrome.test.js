const ppChrome = require("puppeteer"),
  { v4: uuidv4 } = require("uuid");

let page, browser, context, userauth;
const uuid = uuidv4();
const unique_email = uuid + "@gmail.com";
const viewportAndEmulation = [
  ["Desktop Viewport:", desktopViewport],
  ["Iphone 5s Viewport:", emulateiPhone5s],
  ["Iphone 10 Viewport:", emulateiPhoneX],
  ["Galaxy Viewport:", emulateGalaxy]
];

beforeAll(async () => {
  browser = await ppChrome.launch();
});

async function desktopViewport() {
  await page.setViewport({ width: 1440, height: 767 });
}

async function emulateiPhone5s() {
  const iPhone5s = await ppChrome.devices["iPhone 5"];
  await page.emulate(iPhone5s);
}

async function emulateiPhoneX() {
  const iPhoneX = await ppChrome.devices["iPhone X"];
  await page.emulate(iPhoneX);
}

async function emulateGalaxy() {
  const galaxy = await ppChrome.devices["Galaxy Note 3"];
  await page.emulate(galaxy);
}

beforeEach(async () => {
  context = await browser.createIncognitoBrowserContext();
  page = await context.newPage();
  await page.goto("https://codeone.herokuapp.com/");
});

afterEach(async () => {
  await context.close();
});

afterAll(async () => {
  await browser.close();
});

describe.each(viewportAndEmulation)(
  "Chrome User Authentication tests with Screen Size Emulation",
  (name, viewportAndEmulationFunc) => {
    test(`${name} Get started as guest`, async () => {
      await viewportAndEmulationFunc();
      await page.click("#intro > div.intro-text > a"); //Get Started button
      await page.waitFor(".panellist", { visible: true }); //Playground
      const url = await page.url();
      expect(url.toString()).toBe("https://codeone.herokuapp.com/playground");
    });

    test(`${name} Register modal appears`, async () => {
      await viewportAndEmulationFunc();
      if (name == "Desktop Viewport:") {
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link" //Register button
        );
      } else {
        await page.click("#root > div > nav > button"); //Responsive menu icon
        await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link" //Register button on menu
        );
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link" //Register button on menu
        );
      }
      const modal = await page.waitForSelector(
        "body > div.fade.modal.show > div > div > div", //Register Modal
        {
          visible: true
        }
      );

      expect(modal).toBeTruthy();
    });

    test(`${name} Login modal appears`, async () => {
      await viewportAndEmulationFunc();
      if (name == "Desktop Viewport:") {
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link" //Sign In button
        );
      } else {
        await page.click("#root > div > nav > button"); //Responsive Menu Icon
        await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link" //Sign In button
        );
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link" //Sign In button
        );
      }

      const modal = await page.waitForSelector(
        "body > div.fade.modal.show > div > div > div", //Sign In Modal
        {
          visible: true
        }
      );

      expect(modal).toBeTruthy();
    });

    test(`${name} Login to register modal flow`, async () => {
      await viewportAndEmulationFunc();
      if (name == "Desktop Viewport:") {
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link" //Login button
        );
      } else {
        await page.click("#root > div > nav > button"); //Responsive menu icon
        await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link" //Sign In button
        );
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link" //Sign In button
        );
      }
      await page.waitForSelector(
        "body > div.fade.modal.show > div > div > div",
        {
          //Sign In modal
          visible: true
        }
      );
      await page.click(
        "body > div.fade.modal.show > div > div > div > p > span"
      ); //"Dont have an account? Register here"

      await page.waitFor(1500);

      const title = await page.waitForSelector(".sign-up-title", {
        //Open Register Modal
        visible: true
      });

      expect(title).toBeTruthy;
    });

    test(`${name} Register to login modal flow`, async () => {
      await viewportAndEmulationFunc();
      if (name == "Desktop Viewport:") {
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link" //Register button
        );
      } else {
        await page.click("#root > div > nav > button"); //Responsive menu icon
        await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link" //RegisterIn button
        );
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link" //Register In button
        );
      }
      await page.waitForSelector(
        "body > div.fade.modal.show > div > div > div",
        {
          //Register modal visible
          visible: true
        }
      );
      await page.click(
        "body > div.fade.modal.show > div > div > div > p > span"
      ); //"Already have an account? Log in"

      await page.waitFor(1500);

      const title = await page.waitForSelector(".sign-in-title", {
        //Sign In modal Title
        visible: true
      });

      expect(title).toBeTruth;
    });

    test(`${name} Register an account`, async () => {
      await viewportAndEmulationFunc();
      if (name == "Desktop Viewport:") {
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link" //Register button
        );
      } else {
        await page.click("#root > div > nav > button"); //Responsive menu icon
        await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link" //RegisterIn button
        );
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link" //Register In button
        );
      }
      await page.waitForSelector(
        "body > div.fade.modal.show > div > div > div", //Register Modal
        {
          visible: true
        }
      );

      await page.type(
        "body > div.fade.modal.show > div > div > div > form > div:nth-child(1) > div > input", //Display Name
        `Testing-user-${uuid}`
      );
      await page.type(
        "body > div.fade.modal.show > div > div > div > form > div:nth-child(2) > div > input", //Email
        unique_email
      );
      await page.type(
        "body > div.fade.modal.show > div > div > div > form > div:nth-child(3) > div > input", //Password
        uuid
      );
      await page.type(
        "body > div.fade.modal.show > div > div > div > form > div:nth-child(4) > div > input", //Confirm Password
        uuid
      );
      await page.click(
        "body > div.fade.modal.show > div > div > div > form > button" //Continue Button
      );
      if (name == "Desktop Viewport:") {
        userauth = await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > button > img",
          {
            visible: true
          }
        );
      } else {
        userauth = await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(3) > div > a",
          { visible: true }
        );
      }
      expect(userauth).toBeTruthy();
    });
  }
);
/*


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
*/
