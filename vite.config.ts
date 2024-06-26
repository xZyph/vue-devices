import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src')
        }
      },
      optimizeDeps: {
        include: ['vue', 'devices.css']
      }
    };
  } else {
    // build configuration
    return {
      plugins: [vue(), cssInjectedByJsPlugin()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/main.ts'),
          name: 'VueDevices',
          fileName: (format) => `vue-devices.${format}.js`,
          formats: ['es', 'umd']
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue'
            },
            exports: 'named'
          }
        }
      }
    };
  }
});
