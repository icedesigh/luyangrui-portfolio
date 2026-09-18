import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/luyangrui-portfolio/',
  server: {
    port: 5173
  }
})
