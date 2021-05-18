// vite.config.ts
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'
var vite_config_default = defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
})
export { vite_config_default as default }
