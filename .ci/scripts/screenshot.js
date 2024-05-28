import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import puppeteer from "puppeteer";

(async () => {
  const args = process.argv.slice(2); // Get command-line arguments excluding "node" and "screenshot.js"
  const prefix = args[0]; // Get the first argument as the path to save the screenshot

  const browser = await puppeteer.launch({
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
    headless: true,
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36 WAIT_UNTIL=load"
  );

  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto("http://localhost:3000/library", {
    waitUntil: "networkidle0",
  });
  await page.screenshot({ path: `${prefix}_library_HD.png` });

  await browser.close();
})();
