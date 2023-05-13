/// <reference types="vite/client" />

// DEPENDENCY
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
})
