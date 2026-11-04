/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  onQuickAdd: (product: Product, e: React.MouseEvent) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, onQuickAdd }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      onClick={() => onClick(product)}
      className="group cursor-pointer bg-[#15130F] border border-[#E5B84B]/15 hover:border-[#E5B84B]/45 transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between"
    >
      <div>
        {/* Product Image: 4:3 uniform aspect ratio */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#1C1914]">
          {!imgError ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#1C1914] text-center">
              <span className="font-serif italic text-xl text-[#E5B84B]">{product.name}</span>
              <span className="text-xs text-[#A89F91] mt-1">{product.category}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A]/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
        </div>

        {/* Clean Unboxed Metadata & Title */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 text-xs text-[#A89F91] uppercase tracking-wider mb-2">
            <span>{product.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#E5B84B]">{product.allocationStatus}</span>
          </div>

          <h3 className="text-2xl font-serif font-medium text-[#F6F3EC] group-hover:text-[#E5B84B] transition-colors mb-2 leading-snug">
            {product.name}
          </h3>

          <p className="text-sm text-[#A89F91] font-light leading-relaxed line-clamp-2 mb-4">
            {product.description}
          </p>

          <div className="flex items-center gap-2 text-xs text-[#A89F91]/80">
            <span>{product.variants[0]?.weight}</span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{product.tastingNotes.slice(0, 3).join(' / ')}</span>
          </div>
        </div>
      </div>

      {/* Footer Price & Quick Action */}
      <div className="px-6 pb-6 pt-4 border-t border-[#E5B84B]/10 flex items-center justify-between gap-4">
        <div>
          <span className="text-xs text-[#A89F91] block">From</span>
          <span className="text-lg font-mono font-medium text-[#F6F3EC] tabular-nums">
            ${product.price}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={(e) => onQuickAdd(product, e)}
            className="px-4 py-2 bg-[#E5B84B]/10 border border-[#E5B84B]/40 text-[#E5B84B] hover:bg-[#E5B84B] hover:text-[#0D0C0A] text-xs font-medium uppercase tracking-wider transition-colors whitespace-nowrap shrink-0"
          >
            Acquire
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
