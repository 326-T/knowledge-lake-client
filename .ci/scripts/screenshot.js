const puppeteer = require("puppeteer");

(async () => {
  // ブラウザインスタンスを起動
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: "new", // または "new" に変更してみてください
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });

  // 対象のURLにアクセス
  await page.goto(`http://${process.env.HOSTNAME}:3000/library`);
  await page.screenshot({ path: "library_HD.png" });

  // 対象のURLにアクセス
  await page.goto(`http://${process.env.HOSTNAME}:3000/talk-with-ai`);
  await page.screenshot({ path: "talk-with-ai_HD.png" });

  // スマホサイズに変更
  // await page.setViewport({ width: 375, height: 667 });

  // ブラウザを閉じる
  await browser.close();
})();
