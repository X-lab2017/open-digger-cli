import ReactECharts from 'echarts-for-react';
import { FC } from 'react';

export interface ReactEChartsStartsProps {
  title: string;
  data: { [key: string]: number };
}

export const ReactEChartsStarts: FC<ReactEChartsStartsProps> = ({
  title,
  data
}) => {
  const dataArr = Object.values(data);
  const accArr = dataArr.reduce<number[]>((pre, cur) => {
    if (!pre.length) {
      pre.push(cur);
      return pre;
    }
    pre.push(pre[pre.length - 1] + cur);
    return pre;
  }, []);

  const option = {
    title: { text: title, left: 'center' },
    xAxis: {
      type: 'category',
      data: Object.keys(data)
    },
    yAxis: [{ type: 'value' }, { type: 'value' }],
    series: [
      {
        type: 'bar',
        data: dataArr
      },
      {
        type: 'line',
        yAxisIndex: 1,
        data: accArr,
        smooth: true
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
