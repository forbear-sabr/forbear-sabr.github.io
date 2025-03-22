import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const post = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/content/posts"}),
    schema: z.object({
        title : z.string(),
        pubDate: z.date()
    }),
});

export const collections = { post };