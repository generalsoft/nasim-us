import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
	title: z.string(),
	description: z.string(),
	publishDate: z.coerce.date(),
	tags: z.array(z.string()),
	img: z.string(),
	img_alt: z.string().optional(),
	lang: z.enum(['en', 'ar']).optional().default('en'),
});

export const collections = {
	work: defineCollection({ schema: baseSchema }),
	blog: defineCollection({ schema: baseSchema }),
	hobby: defineCollection({ schema: baseSchema }),
};
