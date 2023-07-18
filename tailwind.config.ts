import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      keyframes: {
        'wave': {
          '0%, 100%': { transform: 'rotate(0deg) '},
          '50%': { transform: 'rotate(25deg)' },
        }
      },
      animation: {
        'wave': 'wave 0.2s ease-in-out 4'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
} satisfies Config;
