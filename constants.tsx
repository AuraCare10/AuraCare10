
import { Product, Blog, Category, Testimonial, FAQ } from './types.ts';

export const CATEGORIES: { name: Category; icon: string; desc: string }[] = [
  { name: 'Skincare', icon: '✨', desc: 'Divine luminosity' },
  { name: 'Hair Care', icon: '💆‍♀️', desc: 'Silken strands' },
  { name: 'Body Care', icon: '🧼', desc: 'Essential velvet' },
  { name: 'Personal Care', icon: '🧴', desc: 'Daily sanctuary' },
  { name: 'Beauty Tools', icon: '💄', desc: 'Precision art' },
  { name: 'Health & Wellness', icon: '🌿', desc: 'Inner harmony' },
  { name: 'Combo Offers', icon: '🎁', desc: 'Perfected sets' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'AC-001',
    name: 'Obsidian Glow Serum',
    category: 'Skincare',
    price: 3450,
    originalPrice: 4200,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
    description: 'An ethereal infusion of activated charcoal and rare minerals for a glass-skin finish.',
    fullContent: 'Our Obsidian Glow Serum is a masterpiece of modern alchemy.',
    ingredients: ['Activated Charcoal', '24K Gold Dust', 'Hyaluronic Complex'],
    usageSteps: ['Cleanse face', 'Apply 3 drops', 'Massage gently'],
    stockStatus: 'In Stock',
    stockCount: 12,
    isFeatured: true,
    variations: {
      sizes: [
        { name: '30ml', inStock: true },
        { name: '50ml', inStock: true },
        { name: '100ml', inStock: false }
      ]
    }
  },
  {
    id: 'AC-002',
    name: 'Silk Root Infusion',
    category: 'Hair Care',
    price: 1850,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800',
    description: 'A botanical ritual that restores hair architectural integrity.',
    stockStatus: 'Low Stock',
    stockCount: 3,
    isFeatured: true,
    variations: {
      colors: [
        { name: 'Rose Gold', value: '#E0BFB8', inStock: true },
        { name: 'Midnight', value: '#1A1A1A', inStock: false },
        { name: 'Pure White', value: '#F8F9FA', inStock: true }
      ]
    }
  },
  {
    id: 'AC-003',
    name: 'Velvet Body Nectar',
    category: 'Body Care',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1590156221122-c32228515082?auto=format&fit=crop&q=80&w=800',
    description: 'A whipped emulsion of shea butter and orchid extract.',
    stockStatus: 'In Stock',
    stockCount: 25,
    isFeatured: true
  },
  {
    id: 'AC-004',
    name: 'Midnight Bloom Mist',
    category: 'Skincare',
    price: 1550,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
    description: 'Refreshing floral water that calms the skin.',
    stockStatus: 'In Stock',
    stockCount: 15
  },
  {
    id: 'AC-005',
    name: 'Zenith Health Elixir',
    category: 'Health & Wellness',
    price: 4800,
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=800',
    description: 'A potent blend of adaptogens for internal radiance.',
    stockStatus: 'Out of Stock',
    stockCount: 0
  }
];

export const BLOGS: Blog[] = [
  {
    id: 'B-1',
    title: 'The Sacred Science of pH Balancing',
    excerpt: 'Understanding why your skin is a delicate ecosystem that requires precise care.',
    content: 'Long before modern skincare, ancient rituals understood the importance of balance...',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200',
    author: 'Dr. Aura',
    date: 'Oct 24, 2024',
    readTime: '6 min'
  }
];

export const TESTIMONIALS: Testimonial[] = [];
export const FAQS: FAQ[] = [];
