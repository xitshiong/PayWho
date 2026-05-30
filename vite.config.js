import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        info: './info.html'
      },
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'supabase': ['@supabase/supabase-js'],
          'qr': ['qrcode.react']
        }
      }
    },
    chunkSizeWarningLimit: 600
  },
  server: {
    port: 3000
  }
})
