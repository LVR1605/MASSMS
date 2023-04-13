/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily:
    {
      poppins: "'Poppins','serif'"
    },
    fontWeight:
    {
      xtrbld: 800,
      bld: 700,
      semibld: 600,
      med: 500,
      reg: 400,
      lght: 300,
      xtrlght: 200
    },
    extend: {},
  },
  plugins: [],
}

