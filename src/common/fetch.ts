import fetch from 'node-fetch';
import { bgRed, lightYellow, red } from 'kolorist';

import { metricInfo } from '../metric/metricInfo';

export const fetchMetricData = async (example: string, metric: string) => {
  const response = await fetch(
    `https://oss.x-lab.info/open_digger/github/${example}/${metricInfo[metric].file}.json`
  );

  if (!response.ok)
    throw new Error(
      `${bgRed('ERROR:')} ${lightYellow(example)}${red("'s")} ${lightYellow(
        metric
      )} ${red('is invalid.')}`
    );

  return response.json();
};
