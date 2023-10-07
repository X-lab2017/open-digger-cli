import { loadConfig } from 'unconfig';
import { ConfigExport } from '../types';

export const loadDiggerConfig = async () => {
  try {
    const { config, sources } = await loadConfig<ConfigExport>({
      sources: [
        {
          files: 'digger.config',
          extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs', 'json', '']
        }
      ],
      merge: false
      // cwd: 'D:/Demo/digger-plugin'
    });
    sources?.forEach(item => console.log('Read configuration file: ', item));
    return config;
  } catch (error) {
    console.log('err', error);
  }
};
