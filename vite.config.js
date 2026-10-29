import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vionix Web Studio. base './' lets the built site run from any folder or host.
export default defineConfig({
  base: './',
  plugins: [react()],
})
