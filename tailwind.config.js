/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      Header: ["Source Serif Pro"],
      HomePageHeading: ["Golos+Text"],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        homePagePic:
          "url('./imgs/homePagePic.jpg')",
        placeHolder:
          "url('./imgs/placeHolderFundraiserPic.jpg')",
      },
      height: {
        100: '36rem',
      },
    }
  },
  plugins: [],
}

