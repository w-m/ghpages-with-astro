/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors.js'

export default {
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: colors.white,
            black: colors.black,
            gray: colors.gray,
            blue: colors.blue,
            green: colors.green,
            red: colors.red,
        },
        extend: {},
    },
}
