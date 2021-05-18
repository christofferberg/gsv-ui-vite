import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import { getAliases } from 'vite-aliases'

// Get tsconfig path aliases
const aliases = getAliases()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: aliases,
  },
})
