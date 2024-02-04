import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

(async () => {
  // ブラウザインスタンスを起動
  const browser = await puppeteer.launch({
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
    headless: "new",
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36 WAIT_UNTIL=load"
  );

  await page.setViewport({ width: 1920, height: 1080 });

  // 対象のURLにアクセス
  await page.goto("http://localhost:3000/library", { waitUntil: ["load"] });
  await page.screenshot({ path: "library_HD.png" });

  // 対象のURLにアクセス
  await page.goto("http://localhost:3000/talk-with-ai", {
    waitUntil: ["load"],
  });
  await page.screenshot({ path: "talk-with-ai_HD.png" });

  // スマホサイズに変更
  // await page.setViewport({ width: 375, height: 667 });

  // ブラウザを閉じる
  await browser.close();
})();
