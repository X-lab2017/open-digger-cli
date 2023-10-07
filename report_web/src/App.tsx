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
      <h1 style={{ textAlign: 'center' }}>OpenDigger Data report</h1>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
            Owner:
          </span>
          <a href={`https://github.com/${info.owner}`} target="_blank">
            {info.owner}
          </a>
        </li>

        <li>
          <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
            Repo Name:
          </span>
          <a
            href={`https://github.com/${info.owner}/${info.name}`}
            target="_blank"
          >
            {info.name}
          </a>
        </li>

        <li>
          <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
            GitHub URL:
          </span>
          <a
            href={`https://github.com/${info.owner}/${info.name}`}
            target="_blank"
          >
            https://github.com/{info.owner}/{info.name}
          </a>
        </li>

        {info.time && (
          <li>
            <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
              Time:
            </span>
            {info.time}
          </li>
        )}

        <li>
          <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
            Time to Generate Report:
          </span>
          {new Date().toLocaleDateString()}
        </li>
      </ul>

      {msg.metricData.openrank && (
        <ReactEChartsBasicBar
          title="OpenRank"
          xAxisData={Object.keys(msg.metricData.openrank)}
          seriesData={Object.values(msg.metricData.openrank)}
        />
      )}

      {msg.metricData.activity && (
        <ReactEChartsBasicBar
          title="Activity"
          xAxisData={Object.keys(msg.metricData.activity)}
          seriesData={Object.values(msg.metricData.activity)}
        />
      )}

      {msg.metricData.attention && (
        <ReactEChartsBasicBar
          title="Attention"
          xAxisData={Object.keys(msg.metricData.attention)}
          seriesData={Object.values(msg.metricData.attention)}
        />
      )}

      {msg.metricData.active_dates_and_times && (
        <ReactEChartsHeatmapOnCartesian
          title="Active dates and times"
          inputData={msg.metricData.active_dates_and_times}
        />
      )}

      {msg.metricData.stars && (
        <ReactEChartsStarts title="Stars" data={msg.metricData.stars} />
      )}

      {msg.metricData.technical_fork && (
        <ReactEChartsStarts
          title="Technical fork"
          data={msg.metricData.technical_fork}
        />
      )}

      {msg.metricData.participants && (
        <ReactEChartsBasicLine
          title="Participants"
          xAxisData={Object.keys(msg.metricData.participants).filter(
            key => !key.endsWith('raw')
          )}
          seriesData={Object.keys(msg.metricData.participants)
            .filter(key => !key.endsWith('raw'))
            .map(value => msg.metricData.participants?.[value] ?? 0)}
        />
      )}

      {msg.metricData.participants && msg.metricData.inactive_contributors && (
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
      )}

      {msg.metricData.new_contributors_detail && (
        <NewContributorsDetail
          title="New Contributors Detail"
          data={msg.metricData.new_contributors_detail}
        />
      )}

      {msg.metricData.bus_factor && (
        <ReactEChartsBasicBar
          title="Bus factor"
          xAxisData={Object.keys(msg.metricData.bus_factor)}
          seriesData={Object.values(msg.metricData.bus_factor)}
        />
      )}

      {msg.metricData.bus_factor_detail && (
        <BusFactorDetail
          title="Bus Factor Detail"
          data={msg.metricData.bus_factor_detail}
        />
      )}

      {msg.metricData.issues_new && msg.metricData.issues_closed && (
        <ReactEChartsScaleAreaAddAndRemove
          title="New and closed Issues"
          xAxisData={Object.keys(msg.metricData.issues_new)}
          addData={Object.values(msg.metricData.issues_new)}
          removeData={Object.values(msg.metricData.issues_closed)}
        />
      )}

      {msg.metricData.issue_comments && (
        <ReactEChartsBasicLine
          title="Issue comments"
          xAxisData={Object.keys(msg.metricData.issue_comments).filter(
            key => !key.endsWith('raw')
          )}
          seriesData={Object.keys(msg.metricData.issue_comments)
            .filter(key => !key.endsWith('raw'))
            .map(value => msg.metricData.issue_comments?.[value] ?? 0)}
        />
      )}

      {msg.metricData.issue_response_time && (
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
      )}

      {msg.metricData.issue_resolution_duration && (
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
          avgData={Object.keys(
            msg.metricData.issue_resolution_duration.avg
          ).map(m => msg.metricData.issue_resolution_duration['avg'][m])}
        />
      )}

      {msg.metricData.issue_age && (
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
      )}

      {msg.metricData.code_change_lines_add &&
        msg.metricData.code_change_lines_remov && (
          <ReactEChartsScaleAreaAddAndRemove
            title="Code change lines"
            xAxisData={Object.keys(msg.metricData.code_change_lines_add)}
            addData={Object.values(msg.metricData.code_change_lines_add)}
            removeData={Object.values(msg.metricData.code_change_lines_remove)}
          />
        )}

      {msg.metricData.code_change_lines_sum && (
        <ReactEChartsBasicLine
          title="Code Change Lines Sum"
          xAxisData={Object.keys(msg.metricData.code_change_lines_sum).filter(
            key => !key.endsWith('raw')
          )}
          seriesData={Object.keys(msg.metricData.code_change_lines_sum)
            .filter(key => !key.endsWith('raw'))
            .map(value => msg.metricData.code_change_lines_sum?.[value] ?? 0)}
        />
      )}

      {msg.metricData.participants && msg.metricData.change_requests && (
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
      )}

      {msg.metricData.participants &&
        msg.metricData.change_requests_reviews && (
          <ReactEChartsBasicBar
            title="Change requests reviews"
            xAxisData={Object.keys(msg.metricData.participants).filter(
              key => !key.endsWith('raw')
            )}
            seriesData={Object.keys(msg.metricData.participants)
              .filter(key => !key.endsWith('raw'))
              .map(key => msg.metricData.change_requests_reviews?.[key] ?? 0)}
          />
        )}

      {msg.metricData.change_request_response_time && (
        <ReactEChartsCandlePictureWithAvg
          title="Change request response time"
          xAxisData={Object.keys(
            msg.metricData.change_request_response_time.avg
          )}
          quantileData={Object.keys(
            msg.metricData.change_request_response_time.avg
          ).map(m =>
            [1, 3, 0, 4].map(
              q =>
                msg.metricData.change_request_response_time[`quantile_${q}`][m]
            )
          )}
          avgData={Object.keys(
            msg.metricData.change_request_response_time.avg
          ).map(m => msg.metricData.change_request_response_time['avg'][m])}
        />
      )}

      {msg.metricData.change_request_resolution_duration && (
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
          ).map(
            m => msg.metricData.change_request_resolution_duration['avg'][m]
          )}
        />
      )}

      {msg.metricData.change_request_age && (
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
      )}

      {msg.metricData.activity_details && (
        <ActivityDetail
          title="Activity Details"
          data={msg.metricData.activity_details}
        />
      )}

      <p style={{ marginTop: '2rem' }}>
        This report is generated by{' '}
        <a
          href="https://github.com/stevending1st/open-digger-cli"
          target="_blank"
          style={{ fontWeight: 600 }}
        >
          stevending1st/open-digger-cli
        </a>
        , with data supported by{' '}
        <a
          href="https://github.com/X-lab2017/open-digger"
          target="_blank"
          style={{ fontWeight: 600 }}
        >
          X-lab2017/open-digger
        </a>
        .
      </p>

      <p>
        Refer to{' '}
        <a
          href="https://github.com/X-lab2017/open-digger"
          target="_blank"
          style={{ fontWeight: 600 }}
        >
          this document
        </a>{' '}
        for the meaning of the data.
      </p>

      <p style={{ fontWeight: 600, color: '#999' }}>
        Thanks to the people who worked so hard on this report, and thanks to
        everyone who worked so hard on open source.
      </p>
    </>
  );
}

export default App;
