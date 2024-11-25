---
title: 'Content Collection'
---

Content collections are the way to organize and author content in Astro project such as :

- Organize document
- Validate frontmatter
- Provide automatic TyperScript type-safety for content

## Defining Collection

Create a `src/content/config.ts` file in project.


```javascript
import { defineCollection } from `astro:content`

const bearCollect = defineCollection({/*..*/});

export const collections = {
    'bear' : bearCollection,
}
```

## Defining a collection Schema

1. Import the proper utilities from `astro:content`.
2. Define each collection, have 2 include : 
- **Type**
    - Content - To collection content use format like Markdown
    - Data - To JSON or YAML.
- **Schema**
Define the shape of your frontmatter or entry data.

## Defining datatypes with Zod

Astro uses Zod to power its content schemas.

```javascript
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
```

Import the `z` utility from `astro:content`.