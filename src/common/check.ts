import { MetricReloEnum } from '../types';
import { getExampleType } from './analyze';
import { getMetricRoleMap } from './map';

export const checkExample = (example: string) =>
  getExampleType(example) === MetricReloEnum.REPO
    ? /^[^\/]+\/[^\/]+$/g.test(example)
    : /^[^\/]+$/.test(example);

export const checkMetric = (metric: string[], exampleType: MetricReloEnum) => {
  const metricRoleMap = getMetricRoleMap();

  return metric.some(item => metricRoleMap.get(item).includes(exampleType));
};

export const checkTime = (time: string) => /^(20\d{4})(-20\d{4})?$/g.test(time);
