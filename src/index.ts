import pkginfo from '../package.json';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { metricList } from './metric/metricList';
import { checkExample, checkMetric, checkTime } from './common/check';
import { lightRed, lightYellow } from 'kolorist';
import { getExampleType } from './common/analyze';

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
        console.log(
          '--->check repo, user, metric, time ',
          example,
          metric,
          time
        );
        if (example) {
          if (!checkExample(example))
            return `${lightRed('ERROR:')} Please confirm that the ${lightYellow(
              example
            )} is correct.`;

          if (metric && !checkMetric(metric, getExampleType(example)))
            return `${lightRed('ERROR:')} ${lightYellow(
              example
            )} does not have the specified metric.`;
        }

        if (time) {
          if (time && !checkTime(time))
            return `${lightRed('ERROR:')} ${lightYellow(
              time
            )} does not conform to format (yyyyMM or yyyyMM-yyyyMM)`;
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
