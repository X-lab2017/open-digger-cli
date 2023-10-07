import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import pkginfo from '../package.json';
import { exportFun } from './export';
import { metricInfo } from './metric/metricInfo';
import { MetricFroms, MetricValues } from './types';
import { search } from './search';
import { chat } from './chat';

const cli = yargs(hideBin(process.argv))
  .scriptName('digger')
  .usage('$0 [args]')
  .version(pkginfo.version)
  .strict()
  .showHelpOnFail(false)
  .alias('h', 'help')
  .alias('v', 'version');

cli.command(
  '* [example]',
  'Query metrics data for a repository or a user',
  args =>
    args
      .positional('example', {
        type: 'string',
        describe:
          'User or repository, owner/repo or owner (e.g., X-lab2017/open-digger, torvalds)'
      })
      .option('metric', {
        alias: 'm',
        type: 'string',
        describe: 'The metrics for the query',
        choices: Object.values(metricInfo).map(({ file }) => file),
        array: true
      })
      .option('type', {
        alias: 'T',
        type: 'string',
        describe: 'Filter indicator type',
        choices: MetricValues,
        array: true
      })
      .option('from', {
        alias: 'f',
        type: 'string',
        describe: 'Filter Metric sources',
        choices: MetricFroms,
        array: true
      })
      .option('time', {
        alias: 't',
        type: 'string',
        describe:
          'The time range of the query, the format is yyyyMM or yyyyMM-yyyyMM, (e.g., 202203, 201912-202212)'
      })
      .strict()
      .help(),
  input => search(input)
);

cli.command(
  'chat',
  'Query metrics through conversation',
  args => args.strict().help(),
  chat
);

cli.command(
  'export [example]',
  'Export a static file',
  args =>
    args
      .positional('example', {
        type: 'string',
        describe:
          'User or repository, owner/repo or owner (e.g., X-lab2017/open-digger, torvalds)'
      })
      .option('metric', {
        alias: 'm',
        type: 'string',
        describe: 'The metrics for the query',
        choices: Object.values(metricInfo).map(({ file }) => file),
        array: true
      })
      .option('type', {
        alias: 'T',
        type: 'string',
        describe: 'Filter indicator type',
        choices: MetricValues,
        array: true
      })
      .option('from', {
        alias: 'f',
        type: 'string',
        describe: 'Filter Metric sources',
        choices: MetricFroms,
        array: true
      })
      .option('time', {
        alias: 't',
        type: 'string',
        describe:
          'The time range of the query, the format is yyyyMM or yyyyMM-yyyyMM, (e.g., 202203, 201912-202212)'
      })
      .option('fileName', {
        alias: 'F',
        type: 'string',
        describe: 'Export file name'
      })
      .strict()
      .help(),
  input => exportFun(input)
);

cli
  .showHelpOnFail(false, 'Specify --help for available options')
  .help()
  .parse();
