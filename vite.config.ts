import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/traffic-police-style-test/',
  plugins: [react()],
});
