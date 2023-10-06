import ReactECharts from 'echarts-for-react';
import { FC } from 'react';

export interface ReactEChartsScaleAreaAddAndRemoveProps {
  title: string;
  xAxisData: string[];
  addData: number[];
  removeData: number[];
  addColor?: string;
  removeColor?: string;
}

export const ReactEChartsScaleAreaAddAndRemove: FC<
  ReactEChartsScaleAreaAddAndRemoveProps
> = ({
  title,
  xAxisData,
  addData,
  removeData,
  addColor = 'green',
  removeColor = 'red'
}) => {
  const option = {
    title: { text: title, left: 'center' },
    xAxis: {
      type: 'category',
      data: xAxisData
    },
    yAxis: { type: 'value' },
    series: [
      {
        type: 'line',
        data: Object.values(addData),
        symbol: 'none',
        areaStyle: { color: addColor }
      },
      {
        type: 'line',
        data: Object.values(removeData).map(v => -v),
        symbol: 'none',
        areaStyle: { color: removeColor }
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
