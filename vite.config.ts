import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {Agent} from 'node:http';
import * as path from "node:path";
import viteCompression from 'vite-plugin-compression'
import visualizer from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      ...viteCompression(),
      apply: 'build',
    },
    visualizer({open: true}),
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    }
  },
  server: {
    open: true,
    host: true,
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',// todo
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1'),
        agent: new Agent({keepAlive: true, keepAliveMsecs: 20000}),
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          antd: ['antd'],
        },
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
      },
    },
  },
})
