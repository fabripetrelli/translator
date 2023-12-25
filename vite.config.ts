import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import config_paths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/translator/',
  plugins: [react(), config_paths()],
})
