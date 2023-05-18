import { MetricReloEnum } from '../types';

export const getExampleType = (example: string) =>
  example.includes('/') ? MetricReloEnum.REPO : MetricReloEnum.USER;
