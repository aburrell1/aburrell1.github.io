import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // for username.github.io
});

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
