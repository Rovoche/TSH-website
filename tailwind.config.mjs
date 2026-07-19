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
        // Deep navy — pulled directly from the crest's flagpole (#042862).
        // Used for dark sections instead of a flat color wash.
        navy: {
          DEFAULT: '#0B2447',
          deep: '#071A34',
          mid: '#15355F',
        },
        // The three colors already living in the TSH flag itself —
        // used in small, rotating doses as accents, never as a full background.
        flag: {
          blue: '#3A6EA5',
          green: '#5AAD80',
          red: '#E05555',
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
