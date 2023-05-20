import { getStartAndEndFromTime } from './analyze';
import { isSameOrBeforeMonthRangeyyyyMM } from './day';

export interface MetricDataByTimeIndexType {
  [key: string]: any;
}

export const filterMetricDataByTime = (
  data: MetricDataByTimeIndexType,
  time: string
) => {
  const [startMonth, endMonth] = getStartAndEndFromTime(time);

  return Object.keys(data)
    .filter(item => {
      if (item.includes('raw')) return false;

      const itemyyyyMM = item.replace('-', '');

      if (time.includes('-')) {
        return isSameOrBeforeMonthRangeyyyyMM(itemyyyyMM, startMonth, endMonth);
      } else {
        return itemyyyyMM === time;
      }
    })
    .reduce((pre, cur) => ({ ...pre, [cur]: data[cur] }), {});
};
