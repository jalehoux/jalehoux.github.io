import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    context: z.string(), // e.g. "Wayfair" or "Personal project"
    role: z.string(),
    period: z.string(),
    stack: z.array(z.string()),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    // Employer work: no repo/demo links, shows a short confidentiality note.
    confidential: z.boolean().default(false),
    links: z
      .object({ repo: z.string().url().optional(), demo: z.string().url().optional() })
      .default({}),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
