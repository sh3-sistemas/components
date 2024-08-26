import { fileURLToPath, URL } from 'node:url'
import { resolve } from "path";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true
      }
    }),
    vueDevTools(),
    cssInjectedByJsPlugin(),
    dts({
      copyDtsFiles: true,
      tsconfigPath: './tsconfig.build.json',
      exclude: ['src/ignore'],
      compilerOptions: {
        declarationMap: true
      },
      entryRoot: resolve(__dirname, 'src'),
      outDir: resolve(__dirname, 'dist', 'types'),
    })
  ],
  build: {
    sourcemap: true,
    target: 'esnext',
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: resolve(__dirname, "src/index.ts"),
      name: "sh3-components",
      // the name of the output files when the build is run
      formats: ['es'], // adding 'umd' requires globals set to every external module
      // fileName: (format) => `sh3-components.${format}.js`,
      fileName: "sh3-components",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue", "primevue"],
      output: {
        // disable warning on src/index.ts using both default and named export
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
    emptyOutDir: false, // to retain the types folder generated by tsc
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
