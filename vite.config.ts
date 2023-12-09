import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';
import pkgJSON from './package.json';
import react from '@vitejs/plugin-react';
import {resolve} from 'path';
import visualizer from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    dts(),
    visualizer({
      template: 'treemap',
      open: true,
      filename: './dist/stats.html',
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: [...Object.keys(pkgJSON.peerDependencies), 'react/jsx-runtime'],
    },
  },
});
