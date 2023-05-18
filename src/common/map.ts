import { metricList } from '../metric/metricList';

export const getMetricRoleMap = () => {
  const metricMap = new Map();
  metricList.forEach(({ key, role }) => {
    metricMap.set(key, role);
  });
  return metricMap;
};
