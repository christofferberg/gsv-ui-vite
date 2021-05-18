import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import typescript2 from 'rollup-plugin-typescript2'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    {
      ...typescript2(),
      apply: 'build',
    },
  ],
  build: {
    target: ['chrome80'],
    lib: {
      name: 'gsv-ui',
      fileName: 'index',
      entry: path.resolve(__dirname, 'src/main.ts'),
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        },
      },
    },
  },
})
