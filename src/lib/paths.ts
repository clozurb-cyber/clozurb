const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

export const path = (to: string): string => `${BASE}${to}`;

export const productPath = (slug: string): string => path(`/produits/${slug}`);
