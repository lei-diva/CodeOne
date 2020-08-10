async function registerAccount(uuid, page) {
  await page.waitForSelector(
    "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link",
    { visible: true }
  ); //register
  await Promise.all([
    page.click(
      "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-up-button.nav-link" //register
    ),
    page.waitForSelector(".modal", { visible: true }) //wait for modal to pop up
  ]);

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

  await Promise.all([
    page.click(
      "body > div.fade.modal.show > div > div > div > form > button" //Continue Button
    ),
    (userauth = await page.waitForSelector(
      "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > button > img", //Profile Icon
      {
        visible: true
      }
    ))
  ]);
  return userauth;
}

async function loginAccount(uuid, page) {
  await page.waitForSelector(
    "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link", //Sign In button
    { visible: true }
  );
  await Promise.all([
    page.click(
      "#responsive-navbar-nav > div:nth-child(3) > div > a.nav.sign-in-button.nav-link" //Sign In button
    ),
    page.waitForSelector(".modal", { visible: true }) //wait for modal to pop up
  ]);

  await page.type(
    "body > div.fade.modal.show > div > div > div > form > div:nth-child(1) > div > input", //email
    `${uuid}@gmail.com`
  );
  await page.type(
    "body > div.fade.modal.show > div > div > div > form > div:nth-child(2) > div > input", //password
    uuid
  );
  await Promise.all([
    page.click(
      "body > div.fade.modal.show > div > div > div > button:nth-child(3)" //Continue Button
    ),
    (userauth = await page.waitForSelector(
      "#responsive-navbar-nav > div:nth-child(3) > a:nth-child(2) > div > button > img", //Profile Icon
      {
        visible: true
      }
    ))
  ]);

  return userauth;
}

module.exports = { registerAccount, loginAccount };
