import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: "**/*.tsx",
  })],
  server: {
    host: true,
    port: 8080,
    hmr: {
      protocol: 'ws', // websocket protocol parameter, added because hmr wouldn't work on running docker container
      host: 'localhost',
    },
    watch: {
      usePolling: true
    },
    strictPort: true,
  }
})
