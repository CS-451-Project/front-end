/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        Header: ["Source Serif Pro"],
        HomePageHeading: ["Golos+Text"],
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
      },
    },
    plugins: [],
  }
}
