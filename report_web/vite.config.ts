import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import openDiggerDataPlugin from '../src/plugin/open-digger-data';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    openDiggerDataPlugin({
      '2022-06': 659,
      '2022-07': 441,
      '2022-08': 656,
      '2022-09': 668,
      '2022-10': 536,
      '2022-11': 543,
      '2022-12': 372,
      '2023-01': 365,
      '2023-02': 328,
      '2023-03': 304,
      '2023-04': 312
    })
  ]
});
