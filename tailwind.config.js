/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                somhako: "#936CE0",
                somhako2: "#7D45ED",
            },
        },
    },
    plugins: [],
};
