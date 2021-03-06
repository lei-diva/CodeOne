const viewportAndEmulation = [
  ["Desktop Viewport:", desktopViewport],
  ["Iphone 5s Viewport:", emulateiPhone5s],
  ["Iphone 10 Viewport:", emulateiPhoneX],
  ["Galaxy Viewport:", emulateGalaxy]
];

async function desktopViewport(page) {
  await page.setViewport({ width: 1440, height: 767 });
}

async function emulateiPhone5s(page, browser) {
  const iPhone5s = await browser.devices["iPhone 5"];
  await page.emulate(iPhone5s);
}

async function emulateiPhoneX(page, browser) {
  const iPhoneX = await browser.devices["iPhone X"];
  await page.emulate(iPhoneX);
}

async function emulateGalaxy(page, browser) {
  const galaxy = await browser.devices["Galaxy Note 3"];
  await page.emulate(galaxy);
}

module.exports = viewportAndEmulation;
