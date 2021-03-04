import { puppeteer } from "puppeteer";

describe("show/hide an event details", () => {
  test("An event element is collapsed by default", async () => {
    const browser = await puppeteer.launch({
      ignoreDefaultArgs: ['--disable-extensions'],
      executablePath: "/usr/bin/chromium-browser"
    });

    const page = await browser.newPage();
    await page.goto("https://localhost:3000/");

    await page.waitForSelector(".event"); // wait for the Event component to be loaded, otherwise there will be nothing to test

    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeNull();
    browser.close();
  });
});