import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { compiler } from './abstrcat-lib';

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  return {
    server: {
      host: 'localhost',
      port: 3001
    },
    resolve: {
      alias: {
        '~': resolve(__dirname),
        '@': resolve(__dirname),
        '@pages': resolve(__dirname, 'pages'),
        '@assets': resolve(__dirname, 'assets'),
        '@components': resolve(__dirname, 'components'),
        '@utils': resolve(__dirname, 'utils')
      }
    },
    // only for framework lib
    plugins: [compiler.compilerVitePlugin(), dts({ include: ['abstrcat-lib'] })],
    build: {
      copyPublicDir: false,
      outDir: 'abstrcat-dist',
      lib: {
        fileName: 'index',
        entry: resolve(__dirname, './abstrcat-lib/index.ts'),
        formats: ['es', 'umd', 'cjs'],
        name: 'abstrcat-core'
      },
      rollupOptions: {
        // dependencies of the lib itself
        external: []
      }
    }
  };
});
