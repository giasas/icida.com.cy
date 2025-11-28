/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'icida-navy': '#1e3a8a',
        'icida-blue': '#3b82f6',
        'icida-yellow': '#fbbf24',
        'icida-magenta': '#db2777',
      },
    },
  },
  plugins: [],
}
