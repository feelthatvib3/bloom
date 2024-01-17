/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '1.25rem',
        },
        screens: {
            sm: '360px',
            md: '480px',
            lg: '768px',
            xl: '1024px',
            '2xl': '1440px',
        },
        extend: {},
    },
    plugins: [],
};
