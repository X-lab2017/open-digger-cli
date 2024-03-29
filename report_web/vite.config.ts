import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import openDiggerDataPlugin from '../src/plugin/open-digger-data';
import metricData from '../mock/metricData.json';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {}
  },
  plugins: [
    react(),
    openDiggerDataPlugin({
      info: {
        owner: 'testOwner',
        name: 'testName',
        time: '202201-202212'
      },
      metricData
    })
  ]
});
