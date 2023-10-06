import { Plugin } from 'vite';

export default function openDiggerDataPlugin(data?: Object): Plugin {
  const virtualModuleId = 'virtual:open-digger-data';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  const metricsData = data || {};

  return {
    name: 'open-digger-data',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export const data = ${JSON.stringify(
          metricsData
        )}; export default data;`;
      }
    }
  };
}
