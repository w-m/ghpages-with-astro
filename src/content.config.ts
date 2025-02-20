import { defineCollection, z } from 'astro:content'
import { file } from 'astro/loaders'

const news = defineCollection({
    loader: file('src/data/news.yml'),
    schema: z.object({
        date: z.string(),
        slug: z.string(),
        title: z.string(),
        href: z.string().optional(),
    }),
})

export const collections = { news }
