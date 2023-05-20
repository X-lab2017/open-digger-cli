export type MetricInfoItemType = Record<
  'name' | 'type' | 'from' | 'file',
  string
> & { key: string[]; dataIndexBy: DataIndexByEnum };

export interface MetricInfoType {
  [K: string]: MetricInfoItemType;
}

export enum DataIndexByEnum {
  TIME = 'time',
  TAG_AND_TIME = 'tag_and_time',
  NODES_AND_EDGES = 'nodes_and_edges',
  NODES_AND_LINK = 'nodes_and_link'
}

export const metricInfo: MetricInfoType = {
  openrank: {
    name: 'OpenRank',
    type: 'Index',
    from: 'X-lab',
    file: 'openrank',
    key: ['openrank'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  activity: {
    name: 'Activity',
    type: 'Index',
    from: 'X-lab',
    file: 'activity',
    key: ['activity'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  attention: {
    name: 'Attention',
    type: 'Index',
    from: 'X-lab',
    file: 'attention',
    key: ['attention'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  active_dates_and_times: {
    name: 'Active dates and times',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'active_dates_and_times',
    key: ['active_dates_and_times'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  stars: {
    name: 'Stars',
    type: 'Metric',
    from: 'X-lab',
    file: 'stars',
    key: ['stars'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  technical_fork: {
    name: 'Technical fork',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'technical_fork',
    key: ['technical_fork'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  participants: {
    name: 'Participants',
    type: 'Metric',
    from: 'X-lab',
    file: 'participants',
    key: ['participants'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  new_contributors: {
    name: 'New contributors',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'new_contributors',
    key: ['new_contributors'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  new_contributors_detail: {
    name: 'New contributors (Detail)',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'new_contributors_detail',
    key: ['new_contributors', 'new_contributors_detail'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  inactive_contributors: {
    name: 'Inactive contributors',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'inactive_contributors',
    key: ['inactive_contributors'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  bus_factor: {
    name: 'Bus factor',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'bus_factor',
    key: ['bus_factor'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  bus_factor_detail: {
    name: 'Bus factor (Detail)',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'bus_factor_detail',
    key: ['bus_factor', 'bus_factor_detail'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  issues_new: {
    name: 'Issues new',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'issues_new',
    key: ['issues_new'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  issues_closed: {
    name: 'Issues closed',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'issues_closed',
    key: ['issues_closed'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  issue_comments: {
    name: 'Issue comments',
    type: 'Metric',
    from: 'X-lab',
    file: 'issue_comments',
    key: ['issue_comments'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  issue_response_time: {
    name: 'Issue response time',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'issue_response_time',
    key: ['issue_response_time'],
    dataIndexBy: DataIndexByEnum.TAG_AND_TIME
  },
  issue_resolution_duration: {
    name: 'Issue resolution duration',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'issue_resolution_duration',
    key: ['issue_resolution_duration'],
    dataIndexBy: DataIndexByEnum.TAG_AND_TIME
  },
  issue_age: {
    name: 'Issue age',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'issue_age',
    key: ['issue_age'],
    dataIndexBy: DataIndexByEnum.TAG_AND_TIME
  },
  code_change_lines_add: {
    name: 'Code change lines add',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'code_change_lines_add',
    key: ['code_change_lines_add'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  code_change_lines_remove: {
    name: 'Code change lines',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'code_change_lines_remove',
    key: ['code_change_lines_remove'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  code_change_lines_sum: {
    name: 'Code change lines sum',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'code_change_lines_sum',
    key: ['code_change_lines_sum'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  change_requests: {
    name: 'Change requests (Open PR)',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'change_requests',
    key: ['change_requests'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  change_requests_accepted: {
    name: 'Change requests accepted(Merged PR)',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'change_requests_accepted',
    key: ['change_requests_accepted'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  change_requests_reviews: {
    name: 'Change requests reviews',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'change_requests_reviews',
    key: ['change_requests_reviews'],
    dataIndexBy: DataIndexByEnum.TIME
  },
  change_request_response_time: {
    name: 'Change request response time',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'change_request_response_time',
    key: ['change_request_response_time'],
    dataIndexBy: DataIndexByEnum.TAG_AND_TIME
  },
  change_request_resolution_duration: {
    name: 'Change request resolution duration',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'change_request_resolution_duration',
    key: ['change_request_resolution_duration'],
    dataIndexBy: DataIndexByEnum.TAG_AND_TIME
  },
  change_request_age: {
    name: 'Change request age',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'change_request_age',
    key: ['change_request_age'],
    dataIndexBy: DataIndexByEnum.TAG_AND_TIME
  },
  activity_details: {
    name: 'Activity Details',
    type: 'Metric',
    from: 'X-lab',
    file: 'activity_details',
    key: ['activity_details'],
    dataIndexBy: DataIndexByEnum.TIME
  }
};
