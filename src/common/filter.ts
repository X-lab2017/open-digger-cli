import { getStartAndEndFromTime } from './analyze';
import { isSameOrBeforeMonthRangeyyyyMM } from './day';

export interface MetricDataIndexByTime {
  [key: string]: any;
}

export interface MetricDataIndexByTagAndTime {
  [key: string]: MetricDataIndexByTime;
}

export const filterIndexByTimeRawMetricData = (data: MetricDataIndexByTime) =>
  Object.keys(data)
    .filter(k => k.length === 7)
    .reduce((pre, cur) => ({ ...pre, [cur]: data[cur] }), {});

export const filterIndexByTimeMetricDataByTime = (
  data: MetricDataIndexByTime,
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

export const filterIndexByTagAndTimeMetricDataByTime = async (
  data: MetricDataIndexByTagAndTime,
  time: string
) =>
  Object.keys(data).reduce(
    (pre, cur) => ({
      ...pre,
      [cur]: filterIndexByTimeMetricDataByTime(data[cur], time)
    }),
    {}
  );
