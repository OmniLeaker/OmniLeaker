import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'


export default defineConfig({
  
  
  
  
  
  define: {
    'process.env': process.env,
    global: 'window'
  },
  plugins: [react(), svgr({
    svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true },
    include: '**/*.svg'
  })],
  esbuild: {
    supported: {
      'top-level-await': true
    }
  }
})
