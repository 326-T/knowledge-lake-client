import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

(async () => {
  // ブラウザインスタンスを起動
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: "new",
  });
  const page = await browser.newPage();

  // 対象のURLにアクセス
  await page.goto("http://localhost:3000/library");
  await page.pdf({ path: "library_HD.pdf", format: "A4" });

  // 対象のURLにアクセス
  await page.goto("http://localhost:3000/talk-with-ai");
  await page.pdf({ path: "talk-with-ai_HD.pdf", format: "A4" });

  // スマホサイズに変更
  // await page.setViewport({ width: 375, height: 667 });

  // ブラウザを閉じる
  await browser.close();
})();
