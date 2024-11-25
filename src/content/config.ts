import { z, defineCollection } from "astro:content";

const bearCollect = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
    })
});

export const collections = {
    'bear' : bearCollect,
}