const ENDPOINT = import.meta.env.PUBLIC_ORDER_ENDPOINT ?? '';

export type OrderLine = {
  slug: string;
  name: string;
  quantity: number;
};

export type Order = {
  id: string;
  customer: string;
  section: string;
  lines: OrderLine[];
};

export const submitOrder = async (order: Order): Promise<void> => {
  if (!ENDPOINT) return;

  try {
    await fetch(ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(order),
    });
  } catch {
    /* empty */
  }
};

export const newOrderId = (): string =>
  crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;
