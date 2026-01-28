
export type Category = 'Skincare' | 'Hair Care' | 'Body Care' | 'Personal Care' | 'Beauty Tools' | 'Health & Wellness' | 'Combo Offers';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  discount?: number; // Percentage
  image: string;
  description: string;
  ingredients?: string[];
  usageGuide?: string;
  stockStatus: 'In Stock' | 'Out of Stock';
  stockCount: number;
  isFeatured?: boolean;
  isFlashSale?: boolean;
  variations?: {
    size?: string[];
    color?: string[];
  };
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  isAdmin?: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
  paymentMethod: string;
  deliveryCharge: number;
}
