import puppeteer from "puppeteer";

describe("show/hide an event details", () => {  
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch({
      headless: false,
      ignoreDefaultArgs: ['--disable-extensions'],
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      executablePath: "/usr/bin/chromium-browser"
    });   
    page = await browser.newPage(); 
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event"); // wait for the Event component to be loaded, otherwise there will be nothing to test
  });

  afterAll(() => {
    browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeNull();
  });
});