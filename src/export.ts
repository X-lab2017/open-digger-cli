import puppeteer from 'puppeteer';

export const getPDF = async (url: string) => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36'
  );
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.pdf({ path: 'hn.pdf', printBackground: true, format: 'A4' });

  await browser.close();
};
