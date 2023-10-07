import puppeteer from 'puppeteer';
import { createWebServer } from './fe_build';
import { SearchAndExportInput } from './types';
import { checkExampleAndMetricAndTime } from './common/check';
import {
  fetchAndFilterSingleMetricData,
  filterMetricList
} from './common/metric';

export const getPDF = async (url: string, fileName: string) => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36'
  );
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: `${fileName}.pdf`,
    printBackground: true,
    displayHeaderFooter: false,
    format: 'A4',
    width: '23cm',
    margin: {
      top: '3.7cm',
      left: '2.6cm',
      bottom: '3.7cm',
      right: '3.5cm'
    }
  });

  await browser.close();
};

export const exportFun = async ({
  metric,
  time,
  type,
  from,
  example,
  fileName
}: SearchAndExportInput & { fileName?: string }) => {
  await checkExampleAndMetricAndTime({ example, metric, time });

  // const diggerConfig = await loadDiggerConfig();

  const metricList = filterMetricList(metric, type, from);

  const metricData: Record<string, unknown> = {};

  if (example && metricList && metricList.length > 0) {
    for (let metricItem of metricList) {
      const data = await fetchAndFilterSingleMetricData(
        example,
        metricItem,
        time
      );

      metricData[metricItem] = data;
    }
    const [owner, repoName] = example.split('/');

    const server = await createWebServer({
      info: {
        owner,
        name: repoName,
        time
      },
      metricData
    });
    await server.listen();
    server.printUrls();
    const url = server?.resolvedUrls?.local[0];
    const exportFileName =
      fileName || `${owner}-${repoName}-${new Date().getTime()}`;
    if (url) await getPDF(url, exportFileName);
    server.close();
    console.log('Generated files:', exportFileName + '.pdf');
  }
};
