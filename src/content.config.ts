import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const html = defineCollection({
    loader: glob({ pattern: "**/*.md" , base: "./src/content/html"}),
    schema: z.object({
        title: z.string(),
        tag: z.string()
    })
})

export const collections = {
    html
}