import { z } from 'zod';

export const allowedLocales = ['en-gb', 'en-us', 'fr', 'it', 'es'] as const;
export const allowedBrands = ['mamashelter', 'hoxton', '25hours'] as const;

export const localeSchema = z.enum(allowedLocales);
export const brandSchema = z.enum(allowedBrands);

export const paramsSchema = z.object({
  brand: brandSchema,
  locale: localeSchema,
});

export type Locale = (typeof allowedLocales)[number];
export type Brand = (typeof allowedBrands)[number];
