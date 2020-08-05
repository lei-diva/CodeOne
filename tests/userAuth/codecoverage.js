// node codecoverage.js to run
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await Promise.all([
    page.coverage.startJSCoverage(),
    page.coverage.startCSSCoverage()
  ]);

  await page.goto("https://codeone.herokuapp.com/");
  await page.waitForSelector("title");

  const [jsCoverage, cssCoverage] = await Promise.all([
    page.coverage.stopJSCoverage(),
    page.coverage.stopCSSCoverage()
  ]);

  const calculateUsedBytes = (type, coverage) =>
    coverage.map(({ url, ranges, text }) => {
      let usedBytes = 0;

      ranges.forEach(range => (usedBytes += range.end - range.start - 1));

      return {
        url,
        type,
        usedBytes,
        totalBytes: text.length
      };
    });

  console.info([
    ...calculateUsedBytes("js", jsCoverage),
    ...calculateUsedBytes("css", cssCoverage)
  ]);

  await browser.close();
})();
