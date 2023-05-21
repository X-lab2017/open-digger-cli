import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import openDiggerDataPlugin from '../src/plugin/open-digger-data';
import metricData from '../mock/metricData.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), openDiggerDataPlugin(metricData)]
});
