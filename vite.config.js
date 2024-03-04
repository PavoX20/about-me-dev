import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Cambia 'dist' a 'build' o a cualquier otro nombre de carpeta que prefieras
  },
  base: './', // Cambia '/react-vite/' por el nombre de la carpeta que prefieras
})
