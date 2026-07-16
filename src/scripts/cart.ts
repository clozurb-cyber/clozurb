const STORAGE_KEY = 'zurba.cart.v1';
const MAX_QUANTITY = 99;

export type CartLine = {
  slug: string;
  quantity: number;
};

const target = new EventTarget();

const isCartLine = (value: unknown): value is CartLine =>
  typeof value === 'object' &&
  value !== null &&
  typeof (value as CartLine).slug === 'string' &&
  Number.isInteger((value as CartLine).quantity) &&
  (value as CartLine).quantity > 0;

export const read = (): CartLine[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isCartLine) : [];
  } catch {
    return [];
  }
};

const write = (lines: CartLine[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    /* empty */
  }

  target.dispatchEvent(new CustomEvent('change', { detail: lines }));
};

export const count = (): number => read().reduce((total, line) => total + line.quantity, 0);

export const add = (slug: string, quantity = 1): void => {
  const lines = read();
  const existing = lines.find((line) => line.slug === slug);

  if (existing) {
    existing.quantity = Math.min(existing.quantity + quantity, MAX_QUANTITY);
  } else {
    lines.push({ slug, quantity: Math.min(quantity, MAX_QUANTITY) });
  }

  write(lines);
};

export const setQuantity = (slug: string, quantity: number): void => {
  if (quantity <= 0) {
    remove(slug);
    return;
  }

  const lines = read();
  const existing = lines.find((line) => line.slug === slug);
  if (!existing) return;

  existing.quantity = Math.min(Math.trunc(quantity), MAX_QUANTITY);
  write(lines);
};

export const remove = (slug: string): void => {
  write(read().filter((line) => line.slug !== slug));
};

export const clear = (): void => {
  write([]);
};

export const subscribe = (listener: (lines: CartLine[]) => void): (() => void) => {
  const handler = (event: Event) => listener((event as CustomEvent<CartLine[]>).detail);
  target.addEventListener('change', handler);

  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) listener(read());
  };
  window.addEventListener('storage', onStorage);

  listener(read());

  return () => {
    target.removeEventListener('change', handler);
    window.removeEventListener('storage', onStorage);
  };
};
