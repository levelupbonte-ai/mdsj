/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Product, ProductVariant } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, variant: ProductVariant, quantity: number) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [imgError, setImgError] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-28 min-h-screen bg-[#0D0C0A] text-[#F6F3EC] animate-fade-in-up">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-24">
        {/* Back Navigation */}
        <button
          type="button"
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A89F91] hover:text-[#E5B84B] transition-colors mb-10 whitespace-nowrap shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Return to Vault Collection
        </button>

        {/* Contiguous Purchase Module Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Sticky Product Gallery */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="w-full aspect-[4/3] bg-[#15130F] border border-[#E5B84B]/20 overflow-hidden">
              {!imgError ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center">
                  <span className="font-serif italic text-3xl text-[#E5B84B]">{product.name}</span>
                </div>
              )}
            </div>

            {/* Provenance & Batch Specification Bar */}
            <div className="mt-6 p-6 bg-[#15130F] border border-[#E5B84B]/15 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#A89F91] block mb-1">Provenance</span>
                <span className="text-sm text-[#F6F3EC] font-medium">{product.origin}</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#A89F91] block mb-1">Harvest Allocation</span>
                <span className="text-sm font-mono text-[#E5B84B] tabular-nums">{product.harvestBatch}</span>
              </div>
            </div>
          </div>

          {/* Right: Contiguous Purchase Module */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5B84B] mb-3">
              <span>{product.category}</span>
              <span aria-hidden="true">·</span>
              <span>{product.allocationStatus}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif text-[#F6F3EC] mb-3 leading-tight">
              {product.name}
            </h1>

            <p className="font-serif italic text-xl text-[#A89F91] mb-6">{product.tagline}</p>

            <div className="flex items-baseline gap-4 pb-6 mb-6 border-b border-[#E5B84B]/15">
              <span className="text-3xl font-mono text-[#F6F3EC] tabular-nums">
                ${selectedVariant.price * quantity}
              </span>
              <span className="text-xs text-[#A89F91] uppercase tracking-wider">
                {selectedVariant.label} ({selectedVariant.weight})
              </span>
            </div>

            <p className="text-[#D5CFC2] leading-relaxed font-light text-base mb-8">
              {product.longDescription}
            </p>

            {/* Variant Selection */}
            <div className="mb-8">
              <span className="block text-xs uppercase tracking-widest text-[#A89F91] mb-3">
                Select Presentation Format
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {product.variants.map((variant) => {
                  const isSelected = selectedVariant.label === variant.label;
                  return (
                    <button
                      key={variant.label}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`p-4 text-left border transition-colors ${
                        isSelected
                          ? 'border-[#E5B84B] bg-[#E5B84B]/10 text-[#F6F3EC]'
                          : 'border-[#E5B84B]/20 bg-[#15130F] text-[#A89F91] hover:border-[#E5B84B]/50'
                      }`}
                    >
                      <span className="block text-xs font-semibold text-[#F6F3EC] mb-1">
                        {variant.label}
                      </span>
                      <span className="block text-xs text-[#A89F91] mb-2">{variant.weight}</span>
                      <span className="block text-sm font-mono text-[#E5B84B] tabular-nums">
                        ${variant.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity & Primary Add to Bag CTA */}
            <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-10">
              <div className="flex items-center justify-between border border-[#E5B84B]/30 bg-[#15130F] px-4 py-3 sm:w-36">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-[#A89F91] hover:text-[#F6F3EC] px-2 text-lg"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="font-mono text-sm text-[#F6F3EC] tabular-nums">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-[#A89F91] hover:text-[#F6F3EC] px-2 text-lg"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 py-4 px-8 bg-[#E5B84B] text-[#0D0C0A] uppercase tracking-widest text-xs font-semibold hover:bg-[#F0C965] transition-colors whitespace-nowrap shrink-0 tabular-nums"
              >
                Add to Tasting Bag — ${selectedVariant.price * quantity}
              </button>
            </div>

            {/* Tasting Notes & Sommelier Pairing */}
            <div className="space-y-6 pt-8 border-t border-[#E5B84B]/15">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#E5B84B] mb-2">
                  Tasting Profile
                </h3>
                <p className="text-sm text-[#F6F3EC]">
                  {product.tastingNotes.join('  ·  ')}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#E5B84B] mb-2">
                  Sommelier Service Ritual
                </h3>
                <p className="text-sm text-[#A89F91] font-light leading-relaxed">
                  {product.pairingSuggestion}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#E5B84B] mb-3">
                  Specifications &amp; Cold-Chain Guarantee
                </h3>
                <ul className="space-y-2 text-sm text-[#D5CFC2]">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-[#E5B84B]">—</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
