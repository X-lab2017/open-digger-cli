import { defineBuildConfig } from 'unbuild';

import packageJson from './package.json';

export default defineBuildConfig({
  entries: ['src/index'],
  clean: true,
  declaration: true,
  dependencies: Object.keys(packageJson.dependencies),
  rollup: {
    emitCJS: true,
    inlineDependencies: true
  }
});
