const puppeteer = require('puppeteer'),
        assert = require('assert');


let browser, page;

async function setLargerViewport() {
    await page.setViewport({ width: 1440, height: 767});
}


beforeEach(async() => {
    browser = await puppeteer.launch({headless: false});
    page = await browser.newPage();

    await page.goto("https://codeone.herokuapp.com/");

});


afterEach(async() => {
    await browser.close();
});


test("default homepage url", async() => {
    const url = await page.url();
    assert(url==="https://codeone.herokuapp.com/")
});

test("logo url routing", async() => {
    await page.click("a.logo.navbar-brand");
    const url = await page.url();
    assert(url==="https://codeone.herokuapp.com/");
});

test("home nav route", async() => {
    await setLargerViewport();
    await page.click("#responsive-navbar-nav > div.mr-auto.home-display.navbar-nav > a:nth-child(1)");
    const url = await page.url();
    assert(url==="https://codeone.herokuapp.com/#top");
});

test("home responsive nav route ", async() => {
    await page.click("#root > div > nav > button");
    await page.click("#responsive-navbar-nav > div.mr-auto.home-display.navbar-nav > a:nth-child(1)");
    const url = await page.url();
    assert(url==="https://codeone.herokuapp.com/#top");
});


test("feautures nav route", async() => {
    await setLargerViewport();
    await page.click("#responsive-navbar-nav > div.mr-auto.home-display.navbar-nav > a:nth-child(2)");
    const url = await page.url();
    assert(url==="https://codeone.herokuapp.com/#features");
});

test("feautures responsive nav route", async() => {
    await page.click("#root > div > nav > button");
    await page.click("#responsive-navbar-nav > div.mr-auto.home-display.navbar-nav > a:nth-child(2)");
    const url = await page.url();
    assert(url==="https://codeone.herokuapp.com/#features");
});

test("blog nav route", async() => {
    await setLargerViewport();
    await page.click("#responsive-navbar-nav > div.mr-auto.home-display.navbar-nav > a:nth-child(3)");
    const url = await page.url();
    assert(url === "https://codeone.herokuapp.com/#blog-section")
});


test("blog responsive nav route", async() => {
    await page.click("#root > div > nav > button");
    await page.click("#responsive-navbar-nav > div.mr-auto.home-display.navbar-nav > a:nth-child(3)");
    const url = await page.url();
    assert(url === "https://codeone.herokuapp.com/#blog-section")
});

test("contact nav route", async() => {
    await setLargerViewport();
    await page.click("#responsive-navbar-nav > div.mr-auto.home-display.navbar-nav > a:nth-child(4)");
    const url = await page.url;
    assert(url, "https://codeone.herokuapp.com/#contact");
});


test("contact responsive nav route", async() => {
    await page.click("#root > div > nav > button");
    await page.click("#responsive-navbar-nav > div.mr-auto.home-display.navbar-nav > a:nth-child(4)");
    const url = await page.url;
    assert(url, "https://codeone.herokuapp.com/#contact");
})


