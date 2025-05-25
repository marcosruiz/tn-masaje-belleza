import { defineCollection, z } from "astro:content";

const optionSchema = z.object({
  name: z.string(),
  price: z.string(),
});


const details = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string().url(),
    description: z.string(),
    options: z.array(optionSchema),
  })
})

export const collections = { details }