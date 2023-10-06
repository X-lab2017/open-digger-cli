import prompts from 'prompts';
import { metricInfo } from './metric/metricInfo';
import { search } from './search';

export const chat = async () => {
  const chatInput = await prompts([
    {
      type: 'text',
      name: 'example',
      message: `Please enter the id of user or repository, owner/repo or owner (e.g., X-lab2017/open-digger, torvalds)?`
    },
    {
      type: 'autocompleteMultiselect',
      name: 'metric',
      message: `Pick metrics`,
      choices: Object.values(metricInfo).map(({ name, file }) => ({
        title: name,
        value: file
      })),
      hint: '- Space to select. Return to submit'
    },
    {
      type: 'text',
      name: 'time',
      message: `The time range of the query, the format is yyyyMM or yyyyMM-yyyyMM, (e.g., 202203, 201912-202212)`
    }
  ]);

  search(chatInput);
};
