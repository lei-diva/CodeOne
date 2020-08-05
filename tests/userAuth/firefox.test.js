const ppFirefox = require("puppeteer-firefox"),
  viewportAndEmulation = require("./viewportAndEmulation");

let page, browser, context, userauth, logoutSuccess;

beforeAll(async () => {
  browser = await ppFirefox.launch();
});

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
  (name, viewportAndEmulationFunc, uuid) => {
    test(`${name} Get started as guest`, async () => {
      await viewportAndEmulationFunc(page, ppFirefox);
      await page.click("#intro > div.intro-text > a"); //Get Started button
      await page.waitForSelector(".panellist", { visible: true }); //Playground
      const url = await page.url();
      expect(url.toString()).toBe("https://codeone.herokuapp.com/playground");
    });

    test(`${name} Register modal appears`, async () => {
      await viewportAndEmulationFunc(page, ppFirefox);
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
      await page.waitFor(1500);
      const modal = await page.waitForSelector(".sign-up-title", {
        //Open Register Modal
        visible: true
      });

      expect(modal).toBeTruthy();
    });

    test(`${name} Login modal appears`, async () => {
      await viewportAndEmulationFunc(page, ppFirefox);
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
      await page.waitFor(2500);
      const modal = await page.waitForSelector(".sign-in-title", {
        //Sign In modal Title
        visible: true
      });

      expect(modal).toBeTruthy();
    });

    test(`${name} Login to register modal flow`, async () => {
      await viewportAndEmulationFunc(page, ppFirefox);
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
      await page.waitForSelector(".sign-in-title", {
        //Sign In modal Title
        visible: true
      });

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
      await viewportAndEmulationFunc(page, ppFirefox);
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

      await page.waitFor(1500);
      await page.waitForSelector(".sign-up-title", {
        //Open Register Modal
        visible: true
      });
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
      await viewportAndEmulationFunc(page, ppFirefox);
      if (name == "Desktop Viewport:") {
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link" //Register button
        );
      } else {
        await page.click("#root > div > nav > button"); //Responsive menu icon
        await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link" //Register button
        );
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link" //Register button
        );
      }
      await page.waitForSelector(".sign-up-title", {
        //Open Register Modal
        visible: true
      });

      await page.type(
        "body > div.fade.modal.show > div > div > div > form > div:nth-child(1) > div > input", //Display Name
        `Testing-user-${uuid}`
      );
      await page.type(
        "body > div.fade.modal.show > div > div > div > form > div:nth-child(2) > div > input", //Email
        `${uuid}@gmail.com`
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
          "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > button > img", //Profile Icon
          {
            visible: true
          }
        );
      } else {
        //responsive menu
        userauth = await page.waitForSelector(
          "a.sign-out-button.sign-out-display.nav-link", //Sign Out button
          { visible: true }
        );
      }
      expect(userauth).toBeTruthy();
    });

    test(`${name} Log in with created account, get started as user url`, async () => {
      await viewportAndEmulationFunc(page, ppFirefox);
      if (name == "Desktop Viewport:") {
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link" //Sign In button
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
      await page.waitFor(1500);
      await page.waitForSelector(".sign-in-title", {
        //Sign In modal Title
        visible: true
      });

      await page.type(
        "body > div.fade.modal.show > div > div > div > form > div:nth-child(1) > div > input", //email
        `${uuid}@gmail.com`
      );
      await page.type(
        "body > div.fade.modal.show > div > div > div > form > div:nth-child(2) > div > input", //password
        uuid
      );
      await page.click(
        "body > div.fade.modal.show > div > div > div > button:nth-child(3)" //Continue button
      );
      if (name == "Desktop Viewport:") {
        userauth = await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > button > img", //Profile Icon
          {
            visible: true
          }
        );
      } else {
        userauth = await page.waitForSelector(
          "a.sign-out-button.sign-out-display.nav-link", //Sign Out button
          { visible: true }
        );
      }
      expect(userauth).toBeTruthy();
      await page.waitForSelector("#intro > div.intro-text > a"); //Get Started button
      await page.click("#intro > div.intro-text > a"); //Get Started button
      await page.waitForSelector(".profilepage", { visible: true }); //Profile Page
      const url = await page.url();

      expect(url.toString()).toBe("https://codeone.herokuapp.com/profile");
    });

    test(`${name} Navigation as logged in user`, async () => {
      await viewportAndEmulationFunc(page, ppFirefox);
      if (name == "Desktop Viewport:") {
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link" //Sign In button
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

      await page.waitFor(1500);
      await page.waitForSelector(".sign-in-title", {
        //Sign In modal Title
        visible: true
      });

      await page.type(
        "body > div.fade.modal.show > div > div > div > form > div:nth-child(1) > div > input", //email
        `${uuid}@gmail.com`
      );
      await page.type(
        "body > div.fade.modal.show > div > div > div > form > div:nth-child(2) > div > input", //password
        uuid
      );
      await page.click(
        "body > div.fade.modal.show > div > div > div > button:nth-child(3)" //Continue button
      );

      if (name == "Desktop Viewport:") {
        userauth = await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > button > img", //Profile Icon
          {
            visible: true
          }
        );
      } else {
        //responsive menu
        userauth = await page.waitForSelector(
          "a.sign-out-button.sign-out-display.nav-link", //Sign Out button
          { visible: true }
        );
      }
      await expect(userauth).toBeTruthy();
      await page.waitForSelector("#intro > div.intro-text > a"); //Get Started button
      await page.click("#intro > div.intro-text > a"); //Get Started button
      await page.waitForSelector(".profilepage", { visible: true }); //Profile Page

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

      if (name == "Desktop Viewport:") {
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2)" //profile icon
        );
        await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > div", //drop down menu
          {
            visible: true
          }
        );

        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > div > a.profile-nav-playground.location-home.dropdown-item" //playground
        );
        await page.waitForSelector(".panellist", { visible: true }); //Playground
        let url = await page.url();
        expect(url.toString()).toBe("https://codeone.herokuapp.com/playground");

        await page.click(
          "#responsive-navbar-nav > div:nth-child(4) > a:nth-child(4) > div" //profile icon
        );
        await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(4) > a:nth-child(4) > div", //dropdown menu
          {
            visible: true
          }
        );

        await page.click(
          "#responsive-navbar-nav > div:nth-child(4) > a:nth-child(4) > div > div > a:nth-child(5)"
        );

        await page.waitForSelector(".profilepage", { visible: true }); //Profile Page
        url = await page.url();

        expect(url.toString()).toBe("https://codeone.herokuapp.com/profile");
      } else {
        await page.click("#root > div > nav > button"); //Responsive menu
        await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(1)",
          { visible: true }
        ); //Playground button
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(1)"
        ); //Playground button
        await page.waitFor(2500);
        let url = await page.url();
        expect(url.toString()).toBe("https://codeone.herokuapp.com/playground");
        await page.waitForSelector("#root > div > nav > button"); //Responsive menu button
        await page.click("#root > div > nav > button"); //Responsive menu
        await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(4) > a:nth-child(4) > span",
          { visible: true }
        ); //My Projects button
        await page.click(
          "#responsive-navbar-nav > div:nth-child(4) > a:nth-child(4) > span"
        ); //My Projects button
        await page.waitForSelector(".profilepage", { visible: true }); //Profile Page
        url = await page.url();
        expect(url.toString()).toBe("https://codeone.herokuapp.com/profile");
      }
    });

    test(`${name} Sign out of account`, async () => {
      await viewportAndEmulationFunc(page, ppFirefox);
      if (name == "Desktop Viewport:") {
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link" //Sign In button
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
      await page.waitForSelector(".sign-in-title", {
        //Sign In modal Title
        visible: true
      });

      await page.type(
        "body > div.fade.modal.show > div > div > div > form > div:nth-child(1) > div > input", //email
        `${uuid}@gmail.com`
      );
      await page.type(
        "body > div.fade.modal.show > div > div > div > form > div:nth-child(2) > div > input", //password
        uuid
      );
      await page.click(
        "body > div.fade.modal.show > div > div > div > button:nth-child(3)" //Continue button
      );

      if (name == "Desktop Viewport:") {
        userauth = await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > button > img", //Profile Icon
          {
            visible: true
          }
        );
      } else {
        //responsive menu
        userauth = await page.waitForSelector(
          "a.sign-out-button.sign-out-display.nav-link", //Sign Out button
          { visible: true }
        );
      }
      await expect(userauth).toBeTruthy();

      if (name == "Desktop Viewport:") {
        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2)" //profile icon
        );
        await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > div", //drop down menu
          {
            visible: true
          }
        );

        await page.click(
          "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > div > div:nth-child(7) > a" //Sign Out
        );
        logoutSuccess = await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link", //Log In button
          { visibile: true }
        );
      } else {
        await page.click("#root > div > nav > button"); //Responsive menu
        await page.waitForSelector(
          "a.sign-out-button.sign-out-display.nav-link", //Sign Out button
          { visible: true }
        );

        await page.click("a.sign-out-button.sign-out-display.nav-link"); //Sign Out button
        logoutSuccess = await page.waitForSelector(
          "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link", //Sign In button
          { visible: true }
        );
      }
      expect(logoutSuccess).toBeTruthy();
    });
  }
);

module.exports = page;
