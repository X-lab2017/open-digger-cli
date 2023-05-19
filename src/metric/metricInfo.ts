export type MetricInfoItemType = Record<
  'name' | 'type' | 'from' | 'file',
  string
> & { key: string[] };

export interface MetricInfoType {
  [K: string]: MetricInfoItemType;
}

export const metricInfo: MetricInfoType = {
  openrank: {
    name: 'OpenRank',
    type: 'Index',
    from: 'X-lab',
    file: 'openrank',
    key: ['openrank']
  },
  activity: {
    name: 'Activity',
    type: 'Index',
    from: 'X-lab',
    file: 'activity',
    key: ['activity']
  },
  attention: {
    name: 'Attention',
    type: 'Index',
    from: 'X-lab',
    file: 'attention',
    key: ['attention']
  },
  active_dates_and_times: {
    name: 'Active dates and times',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'active_dates_and_times',
    key: ['active_dates_and_times']
  },
  stars: {
    name: 'Stars',
    type: 'Metric',
    from: 'X-lab',
    file: 'stars',
    key: ['stars']
  },
  technical_fork: {
    name: 'Technical fork',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'technical_fork',
    key: ['technical_fork']
  },
  participants: {
    name: 'Participants',
    type: 'Metric',
    from: 'X-lab',
    file: 'participants',
    key: ['participants']
  },
  new_contributors: {
    name: 'New contributors',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'new_contributors',
    key: ['new_contributors']
  },
  new_contributors_detail: {
    name: 'New contributors (Detail)',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'new_contributors_detail',
    key: ['new_contributors', 'new_contributors_detail']
  },
  inactive_contributors: {
    name: 'Inactive contributors',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'inactive_contributors',
    key: ['inactive_contributors']
  },
  bus_factor: {
    name: 'Bus factor',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'bus_factor',
    key: ['bus_factor']
  },
  bus_factor_detail: {
    name: 'Bus factor (Detail)',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'bus_factor_detail',
    key: ['bus_factor', 'bus_factor_detail']
  },
  issues_new: {
    name: 'Issues new',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'issues_new',
    key: ['issues_new']
  },
  issues_closed: {
    name: 'Issues closed',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'issues_closed',
    key: ['issues_closed']
  },
  issue_comments: {
    name: 'Issue comments',
    type: 'Metric',
    from: 'X-lab',
    file: 'issue_comments',
    key: ['issue_comments']
  },
  issue_response_time: {
    name: 'Issue response time',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'issue_response_time',
    key: ['issue_response_time']
  },
  issue_resolution_duration: {
    name: 'Issue resolution duration',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'issue_resolution_duration',
    key: ['issue_resolution_duration']
  },
  issue_age: {
    name: 'Issue age',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'issue_age',
    key: ['issue_age']
  },
  code_change_lines_add: {
    name: 'Code change lines add',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'code_change_lines_add',
    key: ['code_change_lines_add']
  },
  code_change_lines_remove: {
    name: 'Code change lines',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'code_change_lines_remove',
    key: ['code_change_lines_remove']
  },
  code_change_lines_sum: {
    name: 'Code change lines sum',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'code_change_lines_sum',
    key: ['code_change_lines_sum']
  },
  change_requests: {
    name: 'Change requests (Open PR)',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'change_requests',
    key: ['change_requests']
  },
  change_requests_accepted: {
    name: 'Change requests accepted(Merged PR)',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'change_requests_accepted',
    key: ['change_requests_accepted']
  },
  change_requests_reviews: {
    name: 'Change requests reviews',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'change_requests_reviews',
    key: ['change_requests_reviews']
  },
  change_request_response_time: {
    name: 'Change request response time',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'change_request_response_time',
    key: ['change_request_response_time']
  },
  change_request_resolution_duration: {
    name: 'Change request resolution duration',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'change_request_resolution_duration',
    key: ['change_request_resolution_duration']
  },
  change_request_age: {
    name: 'Change request age',
    type: 'Metric',
    from: 'CHAOSS',
    file: 'change_request_age',
    key: ['change_request_age']
  },
  activity_details: {
    name: 'Activity Details',
    type: 'Metric',
    from: 'X-lab',
    file: 'activity_details',
    key: ['activity_details']
  }
};
