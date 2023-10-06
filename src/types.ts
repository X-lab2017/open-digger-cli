export enum MetricReloEnum {
  REPO = 'repo',
  USER = 'user'
}

export enum MetricTypeEnum {
  Index = 'index',
  Metric = 'metric',
  Network = 'network'
}

export const MetricValues = [MetricTypeEnum.Index, MetricTypeEnum.Metric];

export enum MetricFromEnum {
  XLab = 'x-lab',
  CHAOSS = 'chaoss'
}

export const MetricFroms = [MetricFromEnum.XLab, MetricFromEnum.CHAOSS];

export type SearchAndExportInput = Partial<
  Record<'example' | 'time', string> & {
    metric: string[];
    type: MetricTypeEnum[];
    from: MetricFromEnum[];
  }
>;
