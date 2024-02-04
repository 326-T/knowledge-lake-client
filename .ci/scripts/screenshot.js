import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

(async () => {
  // ブラウザインスタンスを起動
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: "new",
  });
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on("request", (request) => {
    if (
      ["image", "stylesheet", "font", "script"].indexOf(
        request.resourceType()
      ) !== -1
    ) {
      request.abort();
    } else {
      request.continue();
    }
  });

  await page.setViewport({ width: 1920, height: 1080 });

  // 対象のURLにアクセス
  await page.goto("http://localhost:3000/library");
  await page.screenshot({ path: "library_HD.png" });

  // 対象のURLにアクセス
  await page.goto("http://localhost:3000/talk-with-ai");
  await page.screenshot({ path: "talk-with-ai_HD.png" });

  // スマホサイズに変更
  // await page.setViewport({ width: 375, height: 667 });

  // ブラウザを閉じる
  await browser.close();
})();
