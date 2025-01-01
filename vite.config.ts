import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  return {
    server: {
      host: 'localhost',
      port: 3001
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    // only for framework lib
    plugins: [dts({ include: ['lib'] })],
    build: {
      lib: {
        fileName: 'index',
        entry: resolve(__dirname, 'lib/index.ts'),
        formats: ['es', 'umd', 'cjs'],
        name: 'lib'
      },
      rollupOptions: {
        external: []
      }
    }
  };
});
