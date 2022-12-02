/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {

        },
        colors:{
            transparent: 'transparent',
            current: 'currentColor',
            black: {
                'dark-my': '#4D606E',
                'dark-navbar': '#0f1821'
            },
            azure:{
                'my':'#3FBAC2'
            },
            gray:{
                'my': '#D3D4D8',
                'light-my': '#F5F5F5',
                'main-theme': '#f4f6f5',
                'non-active': '#8f97a4',
                'active': '#fff'
            },

            green: {
                'active-link': '#39acac',
                'active-icon': '#6cc'
            },

            // white: colors.white,
            // green: colors.emerald,
            // purple: colors.violet,
            // yellow: colors.amber,
            // pink: colors.fuchsia,
            // blue: colors.blue,
            // red: colors.red,
            'red-my': '#EA0000',
        }
    },
    plugins: [],
}