/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      Header: ["Merriweather"],
      HomePageHeading: ["Golos+Text"],
      Approved: ["IBM+Plex+Sans"],
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
      top: {
        100: '38rem',
      },
      screens: {
        '3xl': '2000px',
      }
    }
  },
  plugins: [],
}

