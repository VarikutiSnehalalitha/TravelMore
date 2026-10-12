/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#c25e3e', // Terracotta warm accent
          600: '#a84c2f',
          700: '#893c24',
          800: '#6d301d',
          900: '#4a2013',
        },
        emerald: {
          950: '#06281e',
        },
        sand: {
          50: '#fcfbf7',
          100: '#f7f4ea',
          200: '#eee7d5',
          300: '#ded3b8',
          400: '#c5b48e',
          500: '#aa9568',
        }
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'elevated': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
        'floating': '0 20px 40px -10px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
