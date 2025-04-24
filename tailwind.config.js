module.exports = {
  content: [
    './src/**/*.{html,ts,scss}',
    './src/app/**/*.{html,ts,scss}'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Avenir LT Std', 'Arial', 'sans-serif']
      },
      fontWeight: {
        book: 200,
        medium: 500,
        heavy: 700,
        black: 900
      }
    }
  },
  plugins: []
};