import { DataIndexByEnum, metricInfo } from '../metric/metricInfo';
import { MetricFromEnum, MetricTypeEnum } from '../types';
import { fetchMetricData } from './fetch';
import {
  MetricDataIndexByTime,
  filterIndexByTagAndTimeMetricDataByTime,
  filterIndexByTimeMetricDataByTime,
  filterIndexByTimeRawMetricData
} from './filter';

export const filterMetricList = (
  inputMetric?: string[],
  inputType?: MetricTypeEnum[],
  inputFrom?: MetricFromEnum[]
) => {
  const metricMap = new Map<string, boolean>();
  inputMetric?.forEach(value => metricMap.set(value, true));
  return Object.values(metricInfo)
    .filter(({ type, from, file }) => {
      const isIncludeMetric =
        inputMetric && inputMetric.length > 0 ? metricMap.get(file) : true;
      const isIncludeType =
        inputType && inputType.length > 0 ? inputType.includes(type) : true;
      const isIncludeFrom =
        inputFrom && inputFrom.length > 0 ? inputFrom.includes(from) : true;
      return isIncludeMetric && isIncludeType && isIncludeFrom;
    })
    .map(({ file }) => file);
};

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
