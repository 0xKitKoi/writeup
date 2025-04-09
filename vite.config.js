import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      // Do not externalize react and react-dom if you want them bundled.
      // external: ['react', 'react-dom', 'react-router-dom'],  // REMOVE THIS LINE IF YOU WANT REACT BUNDLED
      input: {
        main: path.resolve(__dirname, 'index.html'), // Use path.resolve
        // If you need separate HTML files for projects (less common with React)
        // projectA: path.resolve(__dirname, 'src/Projects/MicroController/index.html'),
        // projectB: path.resolve(__dirname, 'src/projectB.html'),
      },
    },
    outDir: 'dist', // Explicitly define the output directory
    emptyOutDir: true, // Ensure the output directory is empty before building
  },
  base: './', //  Base public path when served in production.
  server: {
    open: true, // Automatically open in the browser
  },
});
