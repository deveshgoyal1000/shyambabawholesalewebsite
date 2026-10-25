/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E5D08E',
          dark: '#9A7E2E',
          soft: '#F8F3E6',
        },
        maroon: {
          DEFAULT: '#6B1A2A',
          dark: '#4A101C',
          light: '#8E283C',
          wine: '#800020',
        },
        cream: {
          DEFAULT: '#FDF8F3',
          dark: '#F5F0EB',
          border: '#E8DFD5',
        },
        charcoal: {
          DEFAULT: '#121212',
          light: '#2B2B2B',
          muted: '#666666',
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(107, 26, 42, 0.1)',
        'luxury-hover': '0 20px 40px -15px rgba(201, 168, 76, 0.25)',
      },
    },
  },
  plugins: [],
}
