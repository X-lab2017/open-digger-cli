import ReactECharts from 'echarts-for-react';
import { FC } from 'react';

export interface ReactEChartsCandlePictureWithAvgProps {
  title: string;
  xAxisData: string[];
  quantileData: unknown[];
  avgData: unknown[];
}

export const ReactEChartsCandlePictureWithAvg: FC<
  ReactEChartsCandlePictureWithAvgProps
> = ({ title, xAxisData, quantileData, avgData }) => {
  const option = {
    title: { text: title, left: 'center' },
    legend: {
      padding: 40
    },
    xAxis: {
      type: 'category',
      data: xAxisData
    },
    yAxis: {
      type: 'value',
      name: 'days'
    },
    series: [
      {
        type: 'candlestick',
        name: 'quantiles box plot',
        data: quantileData,
        itemStyle: {
          color: 'rgba(0, 0, 180, 0.4)',
          color0: 'rgba(0, 0, 180, 0.4)',
          borderColor: 'rgba(0, 0, 180, 0.4)',
          borderColor0: 'rgba(0, 0, 180, 0.4)'
        }
      },
      {
        type: 'line',
        name: 'average',
        data: avgData,
        smooth: true,
        showSymbol: false
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
