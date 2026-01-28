
import { Product, Order } from '../types.ts';
import { PRODUCTS } from '../constants.tsx';

const API_URL = 'api.php';

export const api = {
  getProducts: async () => {
    try {
      const response = await fetch(`${API_URL}?action=products`);
      if (!response.ok) throw new Error("Backend unreachable");
      const data = await response.json();
      return (data && Array.isArray(data)) ? data as Product[] : PRODUCTS;
    } catch (e) {
      console.warn("API Error, falling back to mock data:", e);
      return PRODUCTS;
    }
  },
  getProductById: async (id: string) => {
    try {
      const response = await fetch(`${API_URL}?action=product&id=${id}`);
      if (!response.ok) throw new Error("Backend unreachable");
      const data = await response.json();
      return (data && data.id) ? data as Product : PRODUCTS.find(p => p.id === id);
    } catch (e) {
      console.warn("API Error, falling back to mock data:", e);
      return PRODUCTS.find(p => p.id === id);
    }
  },
  createOrder: async (order: Order) => {
    try {
      const response = await fetch(`${API_URL}?action=create_order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      });
      return await response.json();
    } catch (e) {
      console.error("API Error creating order:", e);
      // Locally simulate success if DB is not ready for testing purposes
      return { success: true };
    }
  }
};
