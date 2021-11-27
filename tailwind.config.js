module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'schedule-BG': "url(https://picsum.photos/1920/1080/?blur)",
      }),
      
      colors: {
        'litho-light-blue': '#658493',
        'litho-light-gray': '#d3d3d3',
        'litho-blue': '#455a64',
        'litho-grey': '#313131',
        'litho-grey-light':'#f3f3f3',
        'headerColor':'#e3e3e3',
        'headerButtonColor':'#A7A7A7',
        'headerButtonColorShadow':'#838383',
      },
    }, 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
