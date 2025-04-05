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

const talks = defineCollection({
    loader: file('src/data/talks.yml'),
    schema: z.object({
        date: z.string(),
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        videoId: z.string(),
        type: z.string(),
    }),
})

export const collections = { news, talks }
