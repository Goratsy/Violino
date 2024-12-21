/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9B8E6C',
        secondary: '#6D6967',
        bgSection: '#F5F0EA',
        bgElements: '#B38E6A',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        fancy: ['"Great Vibes"', 'sans-serif'],
      }
    },
    fontSize: { // D - desktop, L - laptop, T - tablet, TS - tablet small, P - phone
      'h1_D': ['98px', '96px'],
      //'h1_L': [], the same
      'h1_T': ['60px', 'auto'],
      'h1_TS': ['46px', 'auto'],
      'h1_P': ['98px', 'auto'], // TODO: write correct size font

      'h2_D': ['48px', '55px'],
      //'h2_L': [], the same
      'h2_T': ['40px', 'auto'],
      'h2_TS': ['35px', 'auto'],
      'h2_P': ['48px', 'auto'], // TODO: write correct size font

      'h4_D': ['24px', 'auto'],
      //'h4_L': [],
      //'h4_T': [], the same
      'h4_TS': ['22px', 'auto'],
      'h4_P': ['24px', 'auto'], // TODO: write correct size font. Mb 20 px

      'subtitle_D': ['20px', '30px'],
      //'subtitle_L': [],
      //'subtitle_T': [],
      'subtitle_TS': ['18px', 'auto'],
      'subtitle_P': ['20px', 'auto'],  // TODO: write correct size font. Mb 16 px

      'heading_of_section_D': ['18px', 'auto'],
      //'heading_of_section_L': [],
      //'heading_of_section_T': [],
      //'heading_of_section_TS': [],
      'heading_of_section_P': ['18px', 'auto'], // TODO: write correct size font. Mb 16 px

      'text_D': ['16px', '24px'],
      //'text_L': [],
      //'text_T': [],
      'text_TS': ['14px', '22px'],
      'text_P': ['16px', '20px'], // TODO: write correct size font. Mb 12 px

      'text_footer_D': ['14px', '24px'],
      //'text_footer_L': [],
      //'text_footer_T': [],
      //'text_footer_TS': [],
      'text_footer_P': ['12px', 'auto'],

    },
    screens: {
      'D': '1440px',
      'L': '1200px',
      'T': '1024px',
      'TS': '780px',
      'P': '480px',
    },
    
  },
  plugins: [],
}

