/** @type {import('tailwindcss').Config} */
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

            'red-my': '#EA0000',
        }
    },
    plugins: [],
}
