import { exit } from 'node:process';
import { loadConfig } from 'unconfig';
import { checkExample, checkMetric, checkTime } from './common/check';
import {
  fetchAndFilterSingleMetricData,
  filterMetricList
} from './common/metric';
import { MetricFromEnum, MetricTypeEnum } from './types';

export type SearchInput = Partial<
  Record<'example' | 'time', string> & {
    metric: string[];
    type: MetricTypeEnum[];
    from: MetricFromEnum[];
  }
>;

export const search = async ({
  metric,
  time,
  type,
  from,
  example
}: SearchInput) => {
  try {
    if (example) {
      await checkExample(example);
      if (metric) checkMetric(metric, example);
    }

    if (time) checkTime(time);

    let diggerConfig;
    try {
      console.log('process.cwd()', process.cwd());
      const { config, sources } = await loadConfig<{ beforAll?: Function }>({
        sources: [
          {
            files: 'digger.config',
            extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs', 'json', '']
          }
        ],
        merge: false
        // cwd: 'D:/Demo/digger-plugin'
      });
      console.log('==========>', config, sources);
      diggerConfig = config;
    } catch (error) {
      console.log('err', error);
    }

    const metricList = filterMetricList(metric, type, from);
    if (example && metricList && metricList.length > 0) {
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

        diggerConfig?.beforAll?.({ metricList, time, example, data }) ||
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
  console.log('digger:', example, metric, type, from, time);
};
