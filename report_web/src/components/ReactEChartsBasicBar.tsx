import ReactECharts from 'echarts-for-react';
import { FC } from 'react';

export interface ReactEChartsBasicBarProps {
  title: string;
  xAxisData: string[];
  seriesData: unknown[];
}

export const ReactEChartsBasicBar: FC<ReactEChartsBasicBarProps> = ({
  title,
  xAxisData,
  seriesData
}) => {
  const option = {
    title: { text: title, left: 'center' },
    xAxis: {
      type: 'category',
      data: xAxisData
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: seriesData,
        type: 'bar',
        label: {
          show: true,
          position: 'top'
        },
        center: ['50%']
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
