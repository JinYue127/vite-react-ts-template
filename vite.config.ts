import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression'

import { handleEnv } from './build/utils/helper'
import { buildOptions } from './build/vite/build'
import { createProxy } from './build/vite/proxy'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const viteEnv = handleEnv(env)
  const { VITE_SERVER_PORT, VITE_PROXY } = viteEnv
  return {
    plugins: [
      react(),
      {
        ...viteCompression(),
        apply: 'build',
      },
      visualizer({ open: true }),
    ],
    resolve: {
      alias: {
        '@': '/src',
        '#': '/types',
      },
    },
    server: {
      open: true,
      host: true,
      port: VITE_SERVER_PORT,
      proxy: createProxy(VITE_PROXY),
    },
    build: buildOptions(),
  }
})
