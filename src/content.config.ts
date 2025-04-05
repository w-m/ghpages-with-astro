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

const publications = defineCollection({
    loader: file('src/data/publications.yml'),
    schema: z.object({
        date: z.union([z.number(), z.string()]),
        slug: z.string(),
        title: z.string(),
        authors: z.string(),
        venue: z.string(),
        description: z.string(),
        image: z.string(),
        badge: z.string(),
        figcaption: z.string(),
        special: z.string().optional(),
        tags: z.array(z.string()).optional(),
        links: z.array(z.object({
            title: z.string(),
            href: z.string()
        }))
    }),
})

export const collections = { news, talks, publications }
