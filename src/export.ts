import puppeteer from 'puppeteer';

export const getPDF = async (url: string) => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36'
  );
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: 'hn.pdf',
    printBackground: true,
    displayHeaderFooter: false,
    format: 'A4',
    margin: {
      top: '3.7cm',
      left: '2.6cm',
      bottom: '3.7cm',
      right: '3.5cm'
    }
  });

  await browser.close();
};
