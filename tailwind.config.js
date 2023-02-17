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
                somhakohr: "#936CE0",
                somhakohr2: "#7D45ED",
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
    plugins: [],
};
