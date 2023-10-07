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

export type CliKeys =
  | 'openrank'
  | 'activity'
  | 'attention'
  | 'active_dates_and_times'
  | 'stars'
  | 'technical_fork'
  | 'participants'
  | 'new_contributors'
  | 'new_contributors_detail'
  | 'inactive_contributors'
  | 'bus_factor'
  | 'bus_factor_detail'
  | 'issues_new'
  | 'issues_closed'
  | 'issue_comments'
  | 'issue_response_time'
  | 'issue_resolution_duration'
  | 'issue_age'
  | 'code_change_lines_add'
  | 'code_change_lines_remove'
  | 'code_change_lines_sum'
  | 'change_requests'
  | 'change_requests_accepted'
  | 'change_requests_reviews'
  | 'change_request_response_time'
  | 'change_request_resolution_duration'
  | 'change_request_age'
  | 'activity_details';

export type ConfigExport = Partial<
  Record<'cli', Partial<Record<CliKeys, Function>>>
>;

export function defineConfig(
  config: ConfigExport | Promise<ConfigExport>
): ConfigExport | Promise<ConfigExport> {
  return config;
}
