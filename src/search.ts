import { exit } from 'node:process';
import { checkExampleAndMetricAndTime } from './common/check';
import {
  fetchAndFilterSingleMetricData,
  filterMetricList
} from './common/metric';
import { loadDiggerConfig } from './common/loadDiggerConfig';
import { CliKeys, SearchAndExportInput } from './types';

export const search = async ({
  metric,
  time,
  type,
  from,
  example
}: SearchAndExportInput) => {
  try {
    await checkExampleAndMetricAndTime({ example, metric, time });

    const diggerConfig = await loadDiggerConfig();

    const metricList = filterMetricList(metric, type, from);

    if (example && metricList && metricList.length > 0) {
      console.log('=======================');
      if (example.includes('/')) {
        const [owner, name] = example?.split('/');
        console.log(`repo.owner: ${owner}`);
        console.log(`repo.name: ${name}`);
      } else {
        console.log(`user: ${example}`);
      }
      console.log(`repo.url:https://github.com/${example}`);
      if (time) console.log(`month: ${time}`);
      for (let metricItem of metricList) {
        const data = await fetchAndFilterSingleMetricData(
          example,
          metricItem,
          time
        );

        diggerConfig?.cli?.[metricItem as CliKeys]?.({
          metricList,
          time,
          example,
          data
        }) ||
          console.log(
            `${example.includes('/') ? 'repo' : 'user'}.${metricItem}: `,
            data
          );
      }
    }
  } catch (error: any) {
    console.log((error as Error).message);
    exit(1);
  }
};
