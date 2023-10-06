import './App.css';

import msg from 'virtual:open-digger-data';
import { ReactEChartsBasicBar } from './components/ReactEChartsBasicBar';
import { ReactEChartsHeatmapOnCartesian } from './components/ReactEChartsHeatmapOnCartesian';
import { ReactEChartsStarts } from './components/ReactEChartsStarts';
import { ReactEChartsScaleAreaAddAndRemove } from './components/ReactEChartsScaleAreaAddAndRemove';
import { ReactEChartsBasicLine } from './components/ReactEChartsBasicLine';
import { ReactEChartsCandlePictureWithAvg } from './components/ReactEChartsCandlePictureWithAvg';
import { NewContributorsDetail } from './components/NewContributorsDetail';
import { BusFactorDetail } from './components/BusFactorDetail';
import { ActivityDetail } from './components/ActivityDetail';

function App() {
  console.log('virtual:open-digger-data: ', msg);

  const { info } = msg;

  return (
    <>
      <h1>{info ? `${info.owner}/${info.name}` : '--'}</h1>

      <button onClick={() => window.print()}>print</button>

      <ReactEChartsBasicBar
        title="OpenRank"
        xAxisData={Object.keys(msg.metricData.openrank)}
        seriesData={Object.values(msg.metricData.openrank)}
      />

      <ReactEChartsBasicBar
        title="Activity"
        xAxisData={Object.keys(msg.metricData.activity)}
        seriesData={Object.values(msg.metricData.activity)}
      />

      <ReactEChartsBasicBar
        title="Attention"
        xAxisData={Object.keys(msg.metricData.attention)}
        seriesData={Object.values(msg.metricData.attention)}
      />

      <ReactEChartsHeatmapOnCartesian
        title="Active dates and times"
        inputData={msg.metricData.active_dates_and_times}
      />

      <ReactEChartsStarts title="Stars" data={msg.metricData.stars} />

      <ReactEChartsStarts
        title="Technical fork"
        data={msg.metricData.technical_fork}
      />

      <ReactEChartsBasicLine
        title="Participants"
        xAxisData={Object.keys(msg.metricData.participants).filter(
          key => !key.endsWith('raw')
        )}
        seriesData={Object.keys(msg.metricData.participants)
          .filter(key => !key.endsWith('raw'))
          .map(value => msg.metricData.participants?.[value] ?? 0)}
      />

      <ReactEChartsScaleAreaAddAndRemove
        title="New and inactive contributors"
        xAxisData={Object.keys(msg.metricData.participants).filter(
          key => !key.endsWith('raw')
        )}
        addData={Object.keys(msg.metricData.participants)
          .filter(key => !key.endsWith('raw'))
          .map(value => msg.metricData.new_contributors?.[value] ?? 0)}
        removeData={Object.keys(msg.metricData.participants)
          .filter(key => !key.endsWith('raw'))
          .map(value => msg.metricData.inactive_contributors?.[value] ?? 0)}
      />

      <NewContributorsDetail
        title="New Contributors Detail"
        data={msg.metricData.new_contributors_detail}
      />

      <ReactEChartsBasicBar
        title="Bus factor"
        xAxisData={Object.keys(msg.metricData.bus_factor)}
        seriesData={Object.values(msg.metricData.bus_factor)}
      />

      <BusFactorDetail
        title="Bus Factor Detail"
        data={msg.metricData.bus_factor_detail}
      />

      <ReactEChartsScaleAreaAddAndRemove
        title="New and closed Issues"
        xAxisData={Object.keys(msg.metricData.issues_new)}
        addData={Object.values(msg.metricData.issues_new)}
        removeData={Object.values(msg.metricData.issues_closed)}
      />

      <ReactEChartsBasicLine
        title="Issue comments"
        xAxisData={Object.keys(msg.metricData.issue_comments).filter(
          key => !key.endsWith('raw')
        )}
        seriesData={Object.keys(msg.metricData.issue_comments)
          .filter(key => !key.endsWith('raw'))
          .map(value => msg.metricData.issue_comments?.[value] ?? 0)}
      />

      <ReactEChartsCandlePictureWithAvg
        title="Issue response time"
        xAxisData={Object.keys(msg.metricData.issue_response_time.avg)}
        quantileData={Object.keys(msg.metricData.issue_response_time.avg).map(
          m =>
            [1, 3, 0, 4].map(
              q => msg.metricData.issue_response_time[`quantile_${q}`][m]
            )
        )}
        avgData={Object.keys(msg.metricData.issue_response_time.avg).map(
          m => msg.metricData.issue_response_time['avg'][m]
        )}
      />

      <ReactEChartsCandlePictureWithAvg
        title="Issue resolution duration"
        xAxisData={Object.keys(msg.metricData.issue_resolution_duration.avg)}
        quantileData={Object.keys(
          msg.metricData.issue_resolution_duration.avg
        ).map(m =>
          [1, 3, 0, 4].map(
            q => msg.metricData.issue_resolution_duration[`quantile_${q}`][m]
          )
        )}
        avgData={Object.keys(msg.metricData.issue_resolution_duration.avg).map(
          m => msg.metricData.issue_resolution_duration['avg'][m]
        )}
      />

      <ReactEChartsCandlePictureWithAvg
        title="Issue age"
        xAxisData={Object.keys(msg.metricData.issue_age.avg)}
        quantileData={Object.keys(msg.metricData.issue_age.avg).map(m =>
          [1, 3, 0, 4].map(q => msg.metricData.issue_age[`quantile_${q}`][m])
        )}
        avgData={Object.keys(msg.metricData.issue_age.avg).map(
          m => msg.metricData.issue_age['avg'][m]
        )}
      />

      <ReactEChartsScaleAreaAddAndRemove
        title="Code change lines"
        xAxisData={Object.keys(msg.metricData.code_change_lines_add)}
        addData={Object.values(msg.metricData.code_change_lines_add)}
        removeData={Object.values(msg.metricData.code_change_lines_remove)}
      />

      <ReactEChartsBasicLine
        title="Code Change Lines Sum"
        xAxisData={Object.keys(msg.metricData.code_change_lines_sum).filter(
          key => !key.endsWith('raw')
        )}
        seriesData={Object.keys(msg.metricData.code_change_lines_sum)
          .filter(key => !key.endsWith('raw'))
          .map(value => msg.metricData.code_change_lines_sum?.[value] ?? 0)}
      />

      <ReactEChartsScaleAreaAddAndRemove
        title="Change requests(Open PR and Merged PR)"
        xAxisData={Object.keys(msg.metricData.participants).filter(
          key => !key.endsWith('raw')
        )}
        addData={Object.keys(msg.metricData.participants)
          .filter(key => !key.endsWith('raw'))
          .map(key => msg.metricData.change_requests?.[key] ?? 0)}
        removeData={Object.keys(msg.metricData.participants)
          .filter(key => !key.endsWith('raw'))
          .map(key => msg.metricData.change_requests_accepted?.[key] ?? 0)}
        addColor="#238636"
        removeColor="#8957e5"
      />

      <ReactEChartsBasicBar
        title="Change requests reviews"
        xAxisData={Object.keys(msg.metricData.participants).filter(
          key => !key.endsWith('raw')
        )}
        seriesData={Object.keys(msg.metricData.participants)
          .filter(key => !key.endsWith('raw'))
          .map(key => msg.metricData.change_requests_reviews?.[key] ?? 0)}
      />

      <ReactEChartsCandlePictureWithAvg
        title="Change request response time"
        xAxisData={Object.keys(msg.metricData.change_request_response_time.avg)}
        quantileData={Object.keys(
          msg.metricData.change_request_response_time.avg
        ).map(m =>
          [1, 3, 0, 4].map(
            q => msg.metricData.change_request_response_time[`quantile_${q}`][m]
          )
        )}
        avgData={Object.keys(
          msg.metricData.change_request_response_time.avg
        ).map(m => msg.metricData.change_request_response_time['avg'][m])}
      />

      <ReactEChartsCandlePictureWithAvg
        title="Change request resolution duration"
        xAxisData={Object.keys(
          msg.metricData.change_request_resolution_duration.avg
        )}
        quantileData={Object.keys(
          msg.metricData.change_request_resolution_duration.avg
        ).map(m =>
          [1, 3, 0, 4].map(
            q =>
              msg.metricData.change_request_resolution_duration[
                `quantile_${q}`
              ][m]
          )
        )}
        avgData={Object.keys(
          msg.metricData.change_request_resolution_duration.avg
        ).map(m => msg.metricData.change_request_resolution_duration['avg'][m])}
      />

      <ReactEChartsCandlePictureWithAvg
        title="Change request age"
        xAxisData={Object.keys(msg.metricData.change_request_age.avg)}
        quantileData={Object.keys(msg.metricData.change_request_age.avg).map(
          m =>
            [1, 3, 0, 4].map(
              q => msg.metricData.change_request_age[`quantile_${q}`][m]
            )
        )}
        avgData={Object.keys(msg.metricData.change_request_age.avg).map(
          m => msg.metricData.change_request_age['avg'][m]
        )}
      />

      {/**
       * TODO:
       * Activity Details
       */}
      <ActivityDetail
        title="Activity Details"
        data={msg.metricData.activity_details}
      />
    </>
  );
}

export default App;
