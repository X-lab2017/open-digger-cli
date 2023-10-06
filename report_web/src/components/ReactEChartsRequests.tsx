import ReactECharts from 'echarts-for-react';
import { FC } from 'react';

export interface ReactEChartsBasicBarProps {
  title: string;
  xAxisData: string[];
  changeRequests: number[];
  changeRequestsAccepted: number[];
  changeRequestsReviews: number[];
}

export const ReactEChartsBasicBar: FC<ReactEChartsBasicBarProps> = ({
  title,
  xAxisData
}) => {
  const option = {
    title: { text: title, left: 'center' },
    xAxis: {
      type: 'category',
      data: xAxisData
    },
    legend: {
      data: ['opened', 'merged', 'reviews']
    },
    yAxis: { type: 'value' }
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
