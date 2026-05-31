import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom plugin to handle /app routing in dev server
const devServerPlugin = () => ({
  name: 'configure-server',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // If the request is for /app or /app/* and doesn't have an extension
      if (req.url === '/app') {
        req.url = '/app/';
      }
      if (req.url.startsWith('/app/') && !req.url.includes('.')) {
        req.url = '/app/index.html';
      }
      next();
    });
  }
});

export default defineConfig({
  plugins: [react(), devServerPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        app: './app/index.html'
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
