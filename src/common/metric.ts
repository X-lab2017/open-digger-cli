import { DataIndexByEnum, metricInfo } from '../metric/metricInfo';
import { fetchMetricData } from './fetch';
import {
  MetricDataIndexByTime,
  filterIndexByTagAndTimeMetricDataByTime,
  filterIndexByTimeMetricDataByTime,
  filterIndexByTimeRawMetricData
} from './filter';

export const fetchAndFilterSingleMetricData = async (
  example: string,
  metric: string,
  time?: string
) => {
  const primitiveData = await fetchMetricData<MetricDataIndexByTime>(
    example,
    metric
  );

  if (metricInfo[metric]?.dataIndexBy === DataIndexByEnum.TIME)
    return time
      ? filterIndexByTimeMetricDataByTime(primitiveData, time)
      : filterIndexByTimeRawMetricData(primitiveData);

  if (metricInfo[metric]?.dataIndexBy === DataIndexByEnum.TAG_AND_TIME)
    return time
      ? filterIndexByTagAndTimeMetricDataByTime(primitiveData, time)
      : primitiveData;
};
