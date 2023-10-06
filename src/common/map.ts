import { metricInfo } from '../metric/metricInfo';
import { MetricReloEnum } from '../types';

export const getMetricRoleMap = () => {
  const metricMap = new Map<string, MetricReloEnum[]>();
  Object.values(metricInfo).forEach(({ file, role }) => {
    metricMap.set(file, role);
  });
  return metricMap;
};
