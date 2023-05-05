/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-0': {
      transform: 'rotateX(0deg)',
    },
    '.rotate-x-45': {
      transform: 'rotateX(45deg)',
    },
    '.rotate-x-60': {
      transform: 'rotateX(60deg)',
    },
    '.rotate-x-90': {
      transform: 'rotateX(90deg)',
    },
  })
})
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-0': {
      transform: 'rotateY(0deg)',
    },
    '.rotate-y-45': {
      transform: 'rotateY(45deg)',
    },
    '.rotate-y-60': {
      transform: 'rotateY(60deg)',
    },
    '.rotate-y-90': {
      transform: 'rotateY(90deg)',
    },
  })
})

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [rotateX, rotateY],
}

