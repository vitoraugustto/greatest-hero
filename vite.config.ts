/// <reference types="vitest" />
/// <reference types="vite/client" />
import path from 'path';
import { InlineConfig, UserConfig, defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@common': path.resolve(__dirname, './src/common/'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@screens': path.resolve(__dirname, './src/screens/'),
      '@services': path.resolve(__dirname, './src/services/'),
    },
  },
  plugins: [react()],
  test: { globals: true, environment: 'jsdom' },
} as VitestConfigExport);
