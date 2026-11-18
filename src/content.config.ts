import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    context: z.string(), // e.g. "Wayfair" or "Personal project"
    role: z.string(),
    period: z.string().optional(),
    stack: z.array(z.string()),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    // Employer work: no repo/demo links, shows a short confidentiality note.
    confidential: z.boolean().default(false),
    links: z
      .object({ repo: z.string().url().optional(), demo: z.string().url().optional() })
      .default({}),
    order: z.number(),
    draft: z.boolean().default(false),
    // 'in-progress' ships the card and summary with a "write-up in progress" note;
    // the body (and any placeholder notes in it) is not rendered.
    status: z.enum(['published', 'in-progress']).default('published'),
  }),
});

export const collections = { work };
