/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import PrivateTastings from './components/PrivateTastings';
import About from './components/About';
import Journal from './components/Journal';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import JournalDetail from './components/JournalDetail';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import { Product, ProductVariant, CartItem, TastingReservation, ViewState } from './types';
import { PRODUCTS } from './constants';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      variant: PRODUCTS[0].variants[1],
      quantity: 1
    }
  ]);
  const [reservations, setReservations] = useState<TastingReservation[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (view.type !== 'home') {
      setView({ type: 'home' });
      setTimeout(() => scrollToSection(targetId), 50);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch {
        // Ignore SecurityError in sandboxed iframe
      }
    }
  };

  const addToCart = (product: Product, variant: ProductVariant, quantity: number = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.variant.label === variant.label
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      }
      return [...prev, { product, variant, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  const updateCartQuantity = (index: number, delta: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      const nextQty = updated[index].quantity + delta;
      if (nextQty <= 0) {
        updated.splice(index, 1);
      } else {
        updated[index] = { ...updated[index], quantity: nextQty };
      }
      return updated;
    });
  };

  const removeFromCart = (index: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
  };

  const handleReservationCreated = (reservation: TastingReservation) => {
    setReservations((prev) => [reservation, ...prev]);
  };

  const totalBagCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0D0C0A] font-sans text-[#F6F3EC] selection:bg-[#E5B84B] selection:text-[#0D0C0A]">
      {view.type !== 'checkout' && (
        <Navbar
          onNavClick={handleNavClick}
          cartCount={totalBagCount}
          onOpenCart={() => setIsCartOpen(true)}
        />
      )}

      <main>
        {view.type === 'home' && (
          <>
            <Hero
              onExploreCollection={() => scrollToSection('collection')}
              onBookTasting={() => scrollToSection('tastings')}
            />
            <ProductGrid
              onProductClick={(p) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'product', product: p });
              }}
              onQuickAdd={handleQuickAdd}
            />
            <PrivateTastings onReservationCreated={handleReservationCreated} />
            <About />
            <Journal
              onArticleClick={(a) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'journal', article: a });
              }}
            />
          </>
        )}

        {view.type === 'product' && (
          <ProductDetail
            product={view.product}
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('collection'), 50);
            }}
            onAddToCart={addToCart}
          />
        )}

        {view.type === 'journal' && (
          <JournalDetail
            article={view.article}
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('journal'), 50);
            }}
          />
        )}

        {view.type === 'checkout' && (
          <Checkout
            items={cartItems}
            onBack={() => setView({ type: 'home' })}
            onOrderComplete={() => setCartItems([])}
          />
        )}
      </main>

      {view.type !== 'checkout' && <Footer onLinkClick={handleNavClick} />}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        reservations={reservations}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setView({ type: 'checkout' });
        }}
      />
    </div>
  );
}

export default App;
