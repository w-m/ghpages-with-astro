// @ts-check
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import json5Plugin from 'vite-plugin-json5'

// https://astro.build/config
export default defineConfig({
    // site: 'https://mplabs.github.io',
    // base: 'ghpages-with-astro',
    // Custom domain
    site: 'https://ghpages-with-astro.mplabs.cloud',
    vite: {
        plugins: [json5Plugin(), tailwindcss()],
    },
})
