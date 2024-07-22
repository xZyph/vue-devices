import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
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
    const isDemo = mode === 'demo';
    const isLibrary = mode === 'library'; // New mode for library build
    const entrypoint = isDemo ? 'index.html' : 'src/main.ts';
    const output = isDemo ? 'dist-demo' : 'dist';

    console.log("Entrypoint: ", entrypoint);
    console.log("Output Directory: ", output);

    return {
      root: '.',
      plugins: [vue(), cssInjectedByJsPlugin()],
      build: {
        outDir: output,
        rollupOptions: {
          input: resolve(__dirname, entrypoint),
          external: isLibrary ? ['vue'] : [], // Only exclude vue for library builds
          output: [
            {
              format: 'es',
              entryFileNames: isDemo ? '[name].js' : 'vue-devices.es.js',
              globals: {
                vue: 'Vue'
              },
              exports: 'named'
            },
            {
              format: 'umd',
              entryFileNames: isDemo ? '[name].js' : 'vue-devices.umd.js',
              globals: {
                vue: 'Vue'
              },
              name: 'VueDevices',
              exports: 'named'
            }
          ]
        }
      }
    };
  }
});
