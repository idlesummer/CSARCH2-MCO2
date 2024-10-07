import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/common/components',
      common: '/src/common',
      config: '/src/config',
      constants: '/src/common/constants',
      features: '/src/features',
      utils: '/src/common/utils',
    },
  },
})
