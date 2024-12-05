/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primaryDark: "#331A15",
                primayLight: "#D2B48C",
                background: "#F4F3F0",
            },
            fontFamily: {
                rancho: ["Rancho", "cursive"],
                raleway: ["Raleway", "sans-serif"],
            },
            backgroundImage: {
                pattern: 'url("https://i.ibb.co.com/m8rPVGL/11.png")',
            },
        },
    },
    plugins: [daisyui],
};
