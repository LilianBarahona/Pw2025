import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
const DEPLOY_BASE_URL = process.env.DEPLOY_BASE_URL || '';

// https://vite.dev/config/
export default defineConfig({
  base: DEPLOY_BASE_URL,
  plugins: [
    react(),
    tailwindcss(),
  ],
})
