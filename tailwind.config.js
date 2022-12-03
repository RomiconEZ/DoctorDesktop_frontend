/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors:{
                our: {
                    'dark': '#4D606E',
                    'dark-navbar': '#0f1821',
                    'greenish-300': '#6cc',
                    'greenish-400': '#3FBAC2',
                    'greenish-500': '#39acac',
                    'gray-main-theme': '#f4f6f5',
                    'red': '#EA0000',
                }
            }
        },

    },
    plugins: [],
}