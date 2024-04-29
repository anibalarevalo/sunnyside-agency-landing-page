/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        //primary
        'soft-red': 'hsl(7, 99%, 70%)',
        'yellow': 'hsl(51, 100%, 49%)',
        'dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
        'dark-blue': 'hsl(198, 62%, 26%)',
        'dark-moderate-cyan': 'hsl(168, 34%, 41%)',

        //neutral
        'verydark-desaturated-blue': 'hsl(212, 27%, 19%)',
        'verydark-grayish-blue': 'hsl(213, 9%, 39%)',
        'dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'grayish-blue': 'hsl(210, 4%, 67%)',
      },

      backgroundImage: {
        //desktop
        'desktop-header': 'url("assets/img/desktop/image-header.jpg")',
        'desktop-graphic-design': 'url("assets/img/desktop/image-graphic-design.jpg")',
        'desktop-photography': 'url("assets/img/desktop/image-photography.jpg")',

        //mobile
        'mobile-header': 'url("assets/img/mobile/image-header.jpg")',
        'mobile-graphic-design': 'url("assets/img/mobile/image-graphic-design.jpg")',
        'mobile-photography': 'url("assets/img/mobile/image-photography.jpg")',
      },

      fontFamily: {
        'barlow': 'barlow-semibold',
        'fraunces-bold': 'fraunces-bold',
        'fraunces-black': 'fraunces-black',
      },
    },
  },
  plugins: [],
}