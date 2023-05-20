import { fetchSingleMetricData } from './fetch';
import {
  MetricDataByTimeIndexType,
  filterMetricDataByTime,
  filterRawMetricData
} from './filter';

export const fetchAndFilterSingleMetricData = async (
  example: string,
  metric: string,
  time?: string
) => {
  const primitiveData = await fetchSingleMetricData<MetricDataByTimeIndexType>(
    example,
    metric
  );
  return time
    ? filterMetricDataByTime(primitiveData, time)
    : filterRawMetricData(primitiveData);
};
