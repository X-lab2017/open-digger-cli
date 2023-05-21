import { Plugin } from 'vite';

export default function openDiggerDataPlugin(data?: Object): Plugin {
  const virtualModuleId = 'virtual:open-digger-data';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'open-digger-data',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export const data = ${
          data ? JSON.stringify(data) : '{}'
        }; export default data;`;
      }
    }
  };
}
