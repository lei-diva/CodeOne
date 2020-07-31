const puppeteer = require('puppeteer'),
        assert = require('assert');


let browser, page;

beforeEach(async() => {
    browser = await puppeteer.launch({headless: false});
    page = await browser.newPage();

    await page.goto("https://codeone.herokuapp.com/");
});


afterEach(async() => {
    await browser.close();
});


test("test homepage route", async() => {
    const url = await page.url();
    assert(url==="https://codeone.herokuapp.com/")
});