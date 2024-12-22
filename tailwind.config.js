/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9B8E6C',       // Основной цвет
        secondary: '#6D6967',     // Вспомогательный цвет, для текста
        surfaceLight: '#F5F0EA', // Светлый фон для секций
        accent: '#B38E6A',        // Акцентный цвет для элементов
        accentHover: '#C59B77',  // Hover-состояние для акцентов
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        fancy: ['"Great Vibes"', 'sans-serif'],
      },
      fontSize: { // D - desktop, L - laptop, T - tablet, TS - tablet small, P - phone
        'h1_D': ['98px', '96px'],
        //'h1_L': [], the same
        'h1_T': ['60px', '1'],
        'h1_TS': ['46px', '1'],
        'h1_P': ['98px', '1'], // TODO: write correct size font
  
        'h2_D': ['48px', '55px'],
        //'h2_L': [], the same
        'h2_T': ['40px', '1'],
        'h2_TS': ['35px', '1'],
        'h2_P': ['48px', '1'], // TODO: write correct size font
  
        'h4_D': ['24px', '1'],
        //'h4_L': [],
        //'h4_T': [], the same
        'h4_TS': ['22px', '1'],
        'h4_P': ['24px', '1'], // TODO: write correct size font. Mb 20 px
  
        'subtitle_D': ['20px', '30px'],
        //'subtitle_L': [],
        //'subtitle_T': [],
        'subtitle_TS': ['18px', '1'],
        'subtitle_P': ['20px', '1'],  // TODO: write correct size font. Mb 16 px
  
        'heading_of_section_D': ['18px', '1'],
        //'heading_of_section_L': [],
        //'heading_of_section_T': [],
        //'heading_of_section_TS': [],
        'heading_of_section_P': ['18px', '1'], // TODO: write correct size font. Mb 16 px
  
        'text_D': ['16px', '24px'],
        //'text_L': [],
        //'text_T': [],
        'text_TS': ['14px', '22px'],
        'text_P': ['16px', '20px'], // TODO: write correct size font. Mb 12 px
  
        'text_footer_D': ['14px', '24px'],
        //'text_footer_L': [],
        //'text_footer_T': [],
        'text_footer_TS': ['13px', '1'],
        'text_footer_P': ['12px', '1'],  // TODO: write correct size font. Mb 12 px
  
      },
      screens: {
        'D': '1440px',
        'L': '1200px',
        'T': '1024px',
        'TS': '780px',
        'P': '480px',
      },
    },
  },
  plugins: [],
}

