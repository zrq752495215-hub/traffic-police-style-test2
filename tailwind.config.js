/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#10233f',
        civic: '#17456f',
        road: '#f6a441',
        signal: '#f6cf4b',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(16, 35, 63, 0.14)',
      },
    },
  },
  plugins: [],
};
