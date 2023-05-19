import { exit } from 'node:process';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import pkginfo from '../package.json';
import { metricList } from './metric/metricList';
import { checkExample, checkMetric, checkTime } from './common/check';

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
        choices: metricList.map(({ key }) => key),
        array: true
      })
      .option('time', {
        alias: 't',
        type: 'string',
        describe:
          'The time range of the query, the format is yyyyMM or yyyyMM-yyyyMM, (e.g., 202203, 201912-202212)'
      })
      .check(({ example, metric, time }) => {
        try {
          if (example) {
            checkExample(example);
            if (metric) checkMetric(metric, example);
          }

          if (time) checkTime(time);
        } catch (error: any) {
          console.log((error as Error).message);
          exit(1);
        }
        return true;
      })
      .strict()
      .help(),
  ({ metric, time, example }) => {
    console.log('digger:', example, metric, time);
  }
);

cli.command(
  'chat',
  'Query metrics through conversation',
  args => args.strict().help(),
  () => {
    console.log('chat');
  }
);

cli
  .showHelpOnFail(false, 'Specify --help for available options')
  .help()
  .parse();
