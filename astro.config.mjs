// @ts-check
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import json5Plugin from 'vite-plugin-json5'

// https://astro.build/config
export default defineConfig({
    // Optimize remote images (e.g., YouTube thumbnails) at build time so they are
    // served from our own domain instead of i.ytimg.com. This improves
    // Lighthouse/PageSpeed scores by enabling first-party caching and allowing
    // Astro to generate modern formats (WebP/AVIF) and multiple resolutions.
    image: {
        domains: ['i.ytimg.com'],
    },
    // site: 'https://mplabs.github.io',
    // base: 'ghpages-with-astro',
    // Custom domain
    site: 'https://ghpages-with-astro.mplabs.cloud',
    vite: {
        plugins: [json5Plugin(), tailwindcss()],
    },
})
