import { metricList } from '../metric/metricList';
import { MetricReloEnum } from '../types';

export const getMetricRoleMap = () => {
  const metricMap = new Map<string, MetricReloEnum[]>();
  metricList.forEach(({ key, role }) => {
    metricMap.set(key, role);
  });
  return metricMap;
};
