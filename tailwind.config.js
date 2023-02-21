/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    mode: "jit",
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            colors: {
                primary: '#5500FF',
                secondary: '#6D27F9',
                tertiary: '#9F09FB',
                lightGray: '#787878',
                darkGray: '#646464'
            },
            boxShadow: {
                normal: "0 0px 10px rgba(0, 0, 0, 0.15)",
                insetview: "inset 0 5px 10px rgba(0, 0, 0, 0.15)",
            },
            borderRadius: {
                normal: '25px'
            }
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
