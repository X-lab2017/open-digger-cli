import { loadConfig } from 'unconfig';

export const loadDiggerConfig = async () => {
  try {
    console.log('process.cwd()', process.cwd());
    const { config, sources } = await loadConfig<{ beforAll?: Function }>({
      sources: [
        {
          files: 'digger.config',
          extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs', 'json', '']
        }
      ],
      merge: false
      // cwd: 'D:/Demo/digger-plugin'
    });
    console.log('==========>', config, sources);
    return config;
  } catch (error) {
    console.log('err', error);
  }
};
