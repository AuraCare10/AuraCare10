
export type Category = 'Skincare' | 'Hair Care' | 'Body Care' | 'Personal Care' | 'Beauty Tools' | 'Health & Wellness' | 'Combo Offers';

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface VariationOption {
  name: string;
  inStock: boolean;
  value?: string; // For colors (hex/name)
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  image: string;
  gallery?: string[];
  description: string;
  fullContent?: string;
  ingredients?: string[];
  usageSteps?: string[];
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  stockCount: number;
  isFeatured?: boolean;
  isFlashSale?: boolean;
  flashSaleEnds?: string;
  variations?: {
    sizes?: VariationOption[];
    colors?: VariationOption[];
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
  avatar?: string;
  orderHistory?: string[];
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
  paymentDetails: {
    method: 'bKash' | 'Nagad' | 'Rocket' | 'Card' | 'COD';
    transactionId?: string;
  };
  shippingDetails: {
    name: string;
    phone: string;
    address: string;
    area: string;
  };
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
