import fetch from 'node-fetch';
import { bgRed, lightYellow, red } from 'kolorist';

import { metricInfo } from '../metric/metricInfo';

export async function fetchMetricData<T>(
  example: string,
  metric: string
): Promise<T> {
  const response = await fetch(
    `https://oss.x-lab.info/open_digger/github/${example}/${metricInfo[metric].file}.json`
  );

  if (!response.ok)
    throw new Error(
      `${bgRed('ERROR:')} ${lightYellow(example)}${red("'s")} ${lightYellow(
        metric
      )} ${red('is invalid.')}`
    );

  return response.json() as T;
}

export async function fetchMetaData<T>(owner: string): Promise<T> {
  const response = await fetch(
    `https://oss.x-lab.info/open_digger/github/${owner}/meta.json`
  );

  if (!response.ok)
    throw new Error(
      `${bgRed('ERROR:')} ${red('The data for')} ${lightYellow(owner)} ${red(
        'does not exist.'
      )}`
    );

  return response.json() as T;
}
