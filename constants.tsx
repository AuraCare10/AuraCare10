
import { Product } from './types';

export const CATEGORIES = [
  { name: 'Skincare', icon: '✨' },
  { name: 'Hair Care', icon: '💇‍♀️' },
  { name: 'Body Care', icon: '🧼' },
  { name: 'Personal Care', icon: '🧴' },
  { name: 'Beauty Tools', icon: '💄' },
  { name: 'Health & Wellness', icon: '🌿' },
  { name: 'Combo Offers', icon: '🎁' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Advanced Glow Serum',
    category: 'Skincare',
    price: 1250,
    originalPrice: 1500,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
    description: 'A revolutionary serum designed to brighten skin and reduce dark spots using Vitamin C and Niacinamide.',
    ingredients: ['Vitamin C', 'Niacinamide', 'Hyaluronic Acid'],
    usageGuide: 'Apply 2-3 drops to clean face morning and night.',
    stockStatus: 'In Stock',
    stockCount: 45,
    isFeatured: true,
    isFlashSale: true,
    variations: {
      size: ['30ml', '50ml']
    }
  },
  {
    id: '2',
    name: 'Organic Hair Oil',
    category: 'Hair Care',
    price: 850,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800',
    description: 'Pure essential oils blended to promote hair growth and scalp health.',
    stockStatus: 'In Stock',
    stockCount: 20,
    isFeatured: true,
    variations: {
      size: ['100ml', '250ml']
    }
  },
  {
    id: '3',
    name: 'Hydrating Body Lotion',
    category: 'Body Care',
    price: 650,
    originalPrice: 800,
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&q=80&w=800',
    description: 'Deep hydration for all-day softness. Infused with shea butter and aloe vera.',
    stockStatus: 'In Stock',
    stockCount: 15,
    variations: {
      size: ['200ml', '500ml']
    }
  },
  {
    id: '4',
    name: 'Matte Finish Foundation',
    category: 'Personal Care',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&q=80&w=800',
    description: 'Full coverage foundation that lasts 24 hours without clogging pores.',
    stockStatus: 'In Stock',
    stockCount: 5,
    isFeatured: true,
    variations: {
      color: ['#F5F5DC', '#FFE4C4', '#D2B48C']
    }
  },
  {
    id: '5',
    name: 'Rose Quartz Roller',
    category: 'Beauty Tools',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800',
    description: 'Natural stone roller to reduce puffiness and improve lymphatic drainage.',
    stockStatus: 'In Stock',
    stockCount: 12,
    variations: {
      color: ['Rose Pink', 'Jade Green']
    }
  },
  {
    id: '6',
    name: 'Vitamin C Cleanser',
    category: 'Skincare',
    price: 950,
    originalPrice: 1100,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
    description: 'Energizing daily cleanser that removes impurities and boosts skin radiance.',
    stockStatus: 'In Stock',
    stockCount: 30,
    variations: {
      size: ['150ml']
    }
  },
  {
    id: '7',
    name: 'Keratin Repair Mask',
    category: 'Hair Care',
    price: 1400,
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=800',
    description: 'Intensive treatment to restore strength and shine to damaged hair.',
    stockStatus: 'In Stock',
    stockCount: 18,
    variations: {
      size: ['250g', '500g']
    }
  },
  {
    id: '8',
    name: 'Lavender Bath Salt',
    category: 'Body Care',
    price: 450,
    image: 'https://images.unsplash.com/photo-1563804447971-6e113ab80713?auto=format&fit=crop&q=80&w=800',
    description: 'Therapeutic soak to relax the mind and soothe tired muscles.',
    stockStatus: 'In Stock',
    stockCount: 25,
  },
  {
    id: '9',
    name: 'Sunscreen SPF 50+',
    category: 'Personal Care',
    price: 1350,
    image: 'https://images.unsplash.com/photo-1554350342-84cbb65fd7c6?auto=format&fit=crop&q=80&w=800',
    description: 'Broad-spectrum protection with a non-greasy, invisible finish.',
    stockStatus: 'In Stock',
    stockCount: 40,
    isFeatured: true,
  },
  {
    id: '10',
    name: 'Sonic Face Brush',
    category: 'Beauty Tools',
    price: 2200,
    originalPrice: 3000,
    image: 'https://images.unsplash.com/photo-1600428791234-1718c66a4bc2?auto=format&fit=crop&q=80&w=800',
    description: 'Electronic cleaning device for a deeper, more refined skin texture.',
    stockStatus: 'In Stock',
    stockCount: 8,
  },
  {
    id: '11',
    name: 'Herbal Detox Tea',
    category: 'Health & Wellness',
    price: 550,
    image: 'https://images.unsplash.com/photo-1544787210-282aa06536f3?auto=format&fit=crop&q=80&w=800',
    description: 'A blend of organic herbs designed to cleanse the system and boost energy.',
    stockStatus: 'In Stock',
    stockCount: 50,
  },
  {
    id: '12',
    name: 'Ultimate Radiance Kit',
    category: 'Combo Offers',
    price: 3500,
    originalPrice: 4500,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    description: 'Everything you need for a complete morning and evening ritual.',
    stockStatus: 'In Stock',
    stockCount: 10,
    isFlashSale: true,
  },
  {
    id: '13',
    name: 'Retinol Night Cream',
    category: 'Skincare',
    price: 1650,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800',
    description: 'Overnight renewal treatment to reduce fine lines and even skin tone.',
    stockStatus: 'In Stock',
    stockCount: 22,
  },
  {
    id: '14',
    name: 'Anti-Frizz Serum',
    category: 'Hair Care',
    price: 980,
    image: 'https://images.unsplash.com/photo-1531300180531-9c60f2524a87?auto=format&fit=crop&q=80&w=800',
    description: 'Lightweight formula that tames flyaways and provides a silky finish.',
    stockStatus: 'In Stock',
    stockCount: 14,
  },
  {
    id: '15',
    name: 'Cooling Eye Gel',
    category: 'Skincare',
    price: 750,
    image: 'https://images.unsplash.com/photo-1592136957897-b2b6ca21e10d?auto=format&fit=crop&q=80&w=800',
    description: 'Soothing gel that reduces puffiness and dark circles instantly.',
    stockStatus: 'In Stock',
    stockCount: 35,
  }
];
