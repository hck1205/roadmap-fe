import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        roadmap: {
          page: '#f6f7f2',
          surface: '#ffffff',
          subtle: '#f1f5f4',
          ink: '#172033',
          muted: '#5f6b7a',
          primary: '#2563eb',
          fork: '#0f766e',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

