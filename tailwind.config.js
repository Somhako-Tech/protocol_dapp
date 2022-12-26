/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                somhakohr: "#936CE0",
                somhakohr2: "#7D45ED",
            },
        },
    },
    plugins: [],
};
