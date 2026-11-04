/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from './ProductCard';

const categories = ['All', 'Caviar & Roe', 'Truffle & Elixirs', 'Aged Reserves', 'Tasting Coffrets'];

interface ProductGridProps {
  onProductClick: (product: Product) => void;
  onQuickAdd: (product: Product, e: React.MouseEvent) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick, onQuickAdd }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tastingNotes.some((n) => n.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="collection" className="py-24 px-6 md:px-12 bg-[#0D0C0A] border-b border-[#E5B84B]/15">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 pb-8 border-b border-[#E5B84B]/15">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5B84B] mb-3">
              <span>01. Epicurean Vault</span>
              <span aria-hidden="true">·</span>
              <span>Small-Batch Provisions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#F6F3EC]">The Gourmet Collection</h2>
          </div>

          {/* Search & Interactive Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search caviar, truffle, tasting notes..."
                aria-label="Search gourmet products"
                className="w-full sm:w-64 bg-[#15130F] border border-[#E5B84B]/25 px-4 py-2.5 text-xs text-[#F6F3EC] placeholder-[#A89F91]/60 focus:border-[#E5B84B] outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A89F91] hover:text-[#F6F3EC]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-widest transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === cat
                  ? 'bg-[#E5B84B] text-[#0D0C0A] font-semibold'
                  : 'bg-[#15130F] text-[#A89F91] border border-[#E5B84B]/15 hover:text-[#F6F3EC] hover:border-[#E5B84B]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-[#15130F] border border-[#E5B84B]/15 p-8">
            <p className="font-serif text-2xl text-[#F6F3EC] mb-2">No provisions match your filter.</p>
            <p className="text-sm text-[#A89F91] mb-6">
              Try clearing your search query or explore our complete seasonal vault.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-[#E5B84B] text-[#0D0C0A] text-xs font-semibold uppercase tracking-widest"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={onProductClick}
                onQuickAdd={onQuickAdd}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
