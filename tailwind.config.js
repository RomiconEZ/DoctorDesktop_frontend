/** @type {DefaultColors} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",

    ],
    theme: {
        extend: {},
        colors:{
            transparent: 'transparent',
            current: 'currentColor',
            black: {
                'dark-my': '#4D606E'
            },
            azure:{
                'my':'#3FBAC2'
            },
            gray:{
                'my': '#D3D4D8',
                'light-my': '#F5F5F5',
            },
            white: colors.white,
            green: colors.emerald,
            purple: colors.violet,
            yellow: colors.amber,
            pink: colors.fuchsia,
            blue: colors.blue,
            red: colors.red,
            'red-my': '#EA0000',
        }
    },
    plugins: [],
}