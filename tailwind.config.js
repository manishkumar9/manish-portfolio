/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#F8F9FA',
          100: '#F2F4F7',
          200: '#E4E7EC',
          300: '#D0D5DD',
        },
        ink: {
          900: '#0F172A',
          700: '#334155',
          500: '#64748B',
        },
        archBlue: {
          DEFAULT: '#1A365D',
          hover: '#0F2342',
          light: '#EBF2FA',
        },
        ochre: {
          DEFAULT: '#C05621',
          light: '#FEEBC8',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        fadeInBlueprint: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'blueprint-entrance': 'fadeInBlueprint 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    },
  },
  plugins: [],
}