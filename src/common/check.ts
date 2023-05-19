import { bgRed, lightYellow, red } from 'kolorist';

import { getExampleType, getStartAndEndFromTime } from './analyze';
import { checkDateIsyyyyMM, checkMonthIsBefore } from './day';
import { getMetricRoleMap } from './map';
import { MetricReloEnum } from '../types';

export const checkExample = (example: string) => {
  const flag =
    getExampleType(example) === MetricReloEnum.REPO
      ? /^[^\/]+\/[^\/]+$/g.test(example)
      : /^[^\/]+$/.test(example);
  if (!flag)
    throw new Error(
      `${bgRed('ERROR:')} ${red('Please confirm that the')} ${lightYellow(
        example
      )} ${red('is correct.')}`
    );
};

export const checkMetric = (metric: string[], example: string) => {
  const exampleType = getExampleType(example);
  const metricRoleMap = getMetricRoleMap();
  const flag = metric.some(item =>
    metricRoleMap.get(item).includes(exampleType)
  );
  if (flag)
    throw new Error(
      `${bgRed('ERROR:')} ${lightYellow(example)} ${red(
        'does not have the specified metric.'
      )}`
    );
};

export const checkTime = (time: string) => {
  if (!/^(20\d{4})(-20\d{4})?$/g.test(time))
    throw new Error(
      `${bgRed('ERROR:')} ${lightYellow(time)} ${red(
        'does not conform to format (YYYYMM or YYYYMM-YYYYMM)'
      )}`
    );

  const [startMonth, endMonth] = getStartAndEndFromTime(time);

  const isStartMonthyyyyMM = startMonth ? checkDateIsyyyyMM(startMonth) : true;
  const isEndMonthyyyyMM = endMonth ? checkDateIsyyyyMM(endMonth) : true;
  if (!isStartMonthyyyyMM || !isEndMonthyyyyMM)
    throw new Error(
      `${bgRed('ERROR:')} ${lightYellow(time)} ${red('is invalid.')}`
    );

  if (!checkMonthIsBefore(`${startMonth}01`, `${endMonth}01`))
    throw new Error(
      `${bgRed('ERROR:')} ${red('The')} ${lightYellow(startMonth)} ${red(
        'is not before the'
      )} ${lightYellow(endMonth)}${red('.')}`
    );
};
