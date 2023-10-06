import { bgRed, lightYellow, red } from 'kolorist';

import { getExampleType, getStartAndEndFromTime } from './analyze';
import { checkDateIsValidyyyyMM, checkMonthIsBeforeyyyyMM } from './day';
import { getMetricRoleMap } from './map';
import { MetricReloEnum, SearchAndExportInput } from '../types';
import { fetchMetaData } from './fetch';

export type CheckExampleAndMetricAndTimeInput = Pick<
  SearchAndExportInput,
  'example' | 'metric' | 'time'
>;

export const checkExample = async (example: string) => {
  const isRepo = getExampleType(example) === MetricReloEnum.REPO;
  const flag = isRepo
    ? /^[^\/]+\/[^\/]+$/g.test(example)
    : /^[^\/]+$/.test(example);
  if (!flag)
    throw new Error(
      `${bgRed('ERROR:')} ${red('Please confirm that the')} ${lightYellow(
        example
      )} ${red('is correct.')}`
    );

  const [owner, repoName] = example.split('/');
  const metaData = await fetchMetaData<{
    repos?: Array<{ name: string; id: number }>;
  }>(owner);

  if (repoName) {
    const isEffectiveExample = metaData?.repos?.some(
      ({ name }) => name === example
    );
    if (!isEffectiveExample)
      throw new Error(
        `${bgRed('ERROR:')} ${lightYellow(owner)}${red("'s")} ${lightYellow(
          repoName
        )} ${red('has no data for the time being.')}`
      );
  }
};

export const checkMetric = (metric: string[], example: string) => {
  const exampleType = getExampleType(example);
  const metricRoleMap = getMetricRoleMap();
  const flag = metric
    .filter(Boolean)
    .some(item => !!metricRoleMap.get(item)?.includes(exampleType));
  if (!flag)
    throw new Error(
      `${bgRed('ERROR:')} ${lightYellow(example)} ${red(
        'does not have the specified metric.'
      )}`
    );
};

export const checkTime = (time: string) => {
  if (!/^(\d{6}-?)$|^(-?\d{6})$|^(\d{6}-\d{6})$/g.test(time))
    throw new Error(
      `${bgRed('ERROR:')} ${lightYellow(time)} ${red(
        'does not conform to format (YYYYMM, -YYYYMM, YYYYMM- or YYYYMM-YYYYMM).'
      )}`
    );

  const [startMonth, endMonth] = getStartAndEndFromTime(time);

  const isStartMonthyyyyMM = startMonth
    ? checkDateIsValidyyyyMM(startMonth)
    : true;
  const isEndMonthyyyyMM = endMonth ? checkDateIsValidyyyyMM(endMonth) : true;
  if (!isStartMonthyyyyMM || !isEndMonthyyyyMM)
    throw new Error(
      `${bgRed('ERROR:')} ${lightYellow(time)} ${red('is invalid.')}`
    );

  if (startMonth && endMonth && !checkMonthIsBeforeyyyyMM(startMonth, endMonth))
    throw new Error(
      `${bgRed('ERROR:')} ${red('The')} ${lightYellow(startMonth)} ${red(
        'is not before the'
      )} ${lightYellow(endMonth)}${red('.')}`
    );
};

export const checkExampleAndMetricAndTime = async ({
  example,
  metric,
  time
}: CheckExampleAndMetricAndTimeInput) => {
  if (example) {
    await checkExample(example);
    if (metric) checkMetric(metric, example);
  }

  if (time) checkTime(time);
};
