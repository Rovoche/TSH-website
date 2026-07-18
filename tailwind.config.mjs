/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Warm paper — background. Unbleached, not stark white.
        paper: {
          DEFAULT: '#F7F2E9',
          dim: '#EFE7D8',
        },
        // Near-black warm ink — primary text.
        ink: {
          DEFAULT: '#241E19',
          soft: '#4A4038',
        },
        // Ember — pulled from recurring warm tones in the meetup photography.
        ember: {
          50: '#FBEDE7',
          200: '#E7B8A3',
          400: '#C97A54',
          600: '#A8482E',
          700: '#8A3823',
        },
        // Deep teal-green — second temperature, values/journey sections.
        haven: {
          50: '#E8EEEB',
          200: '#9DBBAE',
          400: '#3F6E58',
          600: '#1F3B33',
          700: '#152A24',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['"General Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '38rem',
        narrow: '48rem',
        standard: '72rem',
        wide: '90rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
