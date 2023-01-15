/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react';
import { InlineConfig, UserConfig, defineConfig } from 'vite';
import viteSvgr from 'vite-plugin-svgr';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [react(), viteSvgr()],
  test: { globals: true, environment: 'jsdom' },
} as VitestConfigExport);
