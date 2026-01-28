
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Shop from './pages/Shop.tsx';
import ProductDetails from './pages/ProductDetails.tsx';
import CartPage from './pages/Cart.tsx';
import CheckoutPage from './pages/Checkout.tsx';
import WishlistPage from './pages/Wishlist.tsx';
import LoginPage from './pages/Login.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Admin from './pages/Admin.tsx';
import AboutPage from './pages/About.tsx';
import ContactPage from './pages/Contact.tsx';
import FAQPage from './pages/FAQ.tsx';
import BlogPage from './pages/Blog.tsx';
import BlogDetails from './pages/BlogDetails.tsx';
import CartDrawer from './components/CartDrawer.tsx';
import Footer from './components/Footer.tsx';
import FloatingActions from './components/FloatingActions.tsx';
import { CartItem, Product, User, Order, Review } from './types.ts';
import { storage } from './utils/storage.ts';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => storage.get('auracare_cart', []));
  const [user, setUser] = useState<User | null>(() => storage.get('auracare_user', null));
  const [orders, setOrders] = useState<Order[]>(() => storage.get('auracare_orders', []));
  const [wishlist, setWishlist] = useState<string[]>(() => storage.get('auracare_wishlist', []));
  const [reviews, setReviews] = useState<Review[]>(() => storage.get('auracare_reviews', []));
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => storage.set('auracare_cart', cart), [cart]);
  useEffect(() => storage.set('auracare_user', user), [user]);
  useEffect(() => storage.set('auracare_orders', orders), [orders]);
  useEffect(() => storage.set('auracare_wishlist', wishlist), [wishlist]);
  useEffect(() => storage.set('auracare_reviews', reviews), [reviews]);

  const addToCart = (product: Product, quantity: number = 1, selectedSize?: string, selectedColor?: string) => {
    setCart(prev => {
      const existing = prev.find(item => 
        item.id === product.id && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
      );
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor) 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prev, { ...product, quantity, selectedSize, selectedColor }];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item).filter(i => i.quantity > 0));
  };

  const removeFromCart = (id: string) => setCart(prev => prev.filter(item => item.id !== id));
  
  const toggleWishlist = (productId: string) => {
    setWishlist(prev => prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]);
  };

  const addReview = (review: Review) => {
    setReviews(prev => [review, ...prev]);
  };

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-[#fdfcfb]">
        <Navbar cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} user={user} onOpenCart={() => setIsCartOpen(true)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/shop" element={<Shop cart={cart} addToCart={addToCart} updateCartQuantity={updateCartQuantity} removeFromCart={removeFromCart} clearCart={() => setCart([])} />} />
            <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} toggleWishlist={toggleWishlist} isWishlisted={(id) => wishlist.includes(id)} reviews={reviews} />} />
            <Route path="/cart" element={<CartPage cart={cart} updateQuantity={updateCartQuantity} remove={removeFromCart} />} />
            <Route path="/checkout" element={<CheckoutPage cart={cart} user={user} setOrders={setOrders} clearCart={() => setCart([])} />} />
            <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} toggleWishlist={toggleWishlist} addToCart={addToCart} />} />
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
            <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} orders={orders} reviews={reviews} addReview={addReview} />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart} onUpdateQuantity={updateCartQuantity} onRemove={removeFromCart} onCheckout={() => setIsCartOpen(false)} />
      </div>
    </HashRouter>
  );
}
