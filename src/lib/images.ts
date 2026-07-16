import type { ImageMetadata } from 'astro';

const ASSETS_DIR = '/src/assets/products';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/products/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

export const productImageAsset = (image: string | null): ImageMetadata | null =>
  image ? (files[`${ASSETS_DIR}/${image}`]?.default ?? null) : null;
