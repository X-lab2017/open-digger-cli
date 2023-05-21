import { PluginOption, createServer, mergeConfig } from 'vite';
import defaultViteConfig from '../report_web/vite.config';
import openDiggerDataPlugin from './plugin/open-digger-data';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('../report_web', import.meta.url));

export const getViteConfig = (data?: Object) => {
  console.log('__dirname', __dirname);
  const { plugins, ...otherViteConfig } = mergeConfig(defaultViteConfig, {});
  return {
    ...otherViteConfig,
    plugins: [
      ...(plugins as PluginOption[]).filter(
        item =>
          !item ||
          Array.isArray(item) ||
          item instanceof Promise ||
          item?.name !== 'open-digger-data'
      ),
      openDiggerDataPlugin(data)
    ]
  };
};

export const createWebServer = async (data?: Object) => {
  const viteConfig = getViteConfig(data);
  const server = await createServer({
    ...viteConfig,
    configFile: false,
    root: __dirname
  });
  await server.listen();
  server.printUrls();
};
