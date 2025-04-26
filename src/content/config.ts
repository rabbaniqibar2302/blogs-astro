import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(), 
    description: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
