import ReactECharts from 'echarts-for-react';
import { FC } from 'react';

export interface ReactEChartsHeatmapOnCartesianProps {
  title: string;
  inputData: { [key: string]: number[] };
}

export const ReactEChartsHeatmapOnCartesian: FC<
  ReactEChartsHeatmapOnCartesianProps
> = ({ title, inputData }) => {
  // prettier-ignore
  const hours = [
    '12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a', '10a', '11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'
  ];
  // prettier-ignore
  const days = [
    'Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'
  ];

  let values = Object.values(inputData).reduce(
    (p, c) => p.map((v, i) => v + c[i]),
    Array(24 * 7).fill(0)
  );
  const max = Math.max(...values);
  values = values.map(v => Math.ceil((v * 10) / max));

  const seriesData = [];
  for (var d = 0; d < 7; d++) {
    for (var h = 0; h < 24; h++) {
      seriesData.push([h, 6 - d, values[d * 24 + h] || '-']);
    }
  }

  const option = {
    title: {
      text: title,
      left: 'center'
    },
    grid: {
      height: '50%',
      top: '10%'
    },
    xAxis: {
      type: 'category',
      data: hours,
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: days,
      splitArea: {
        show: true
      }
    },
    visualMap: {
      min: 0,
      max: 10,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%'
    },
    series: [
      {
        type: 'heatmap',
        data: seriesData,
        label: {
          show: true
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: 400, maxWidth: 1000, margin: '0 auto' }}
      opts={{ renderer: 'svg' }}
      onEvents={{
        resize: () => resizeBy(100, 10000)
      }}
    />
  );
};
