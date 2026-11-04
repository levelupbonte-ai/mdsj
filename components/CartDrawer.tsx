/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { CartItem, TastingReservation } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  reservations: TastingReservation[];
  onUpdateQuantity: (index: number, delta: number) => void;
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  reservations,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  const productsSubtotal = items.reduce(
    (sum, item) => sum + item.variant.price * item.quantity,
    0
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Slide-Over Drawer */}
      <aside
        aria-label="Tasting Bag"
        className={`fixed inset-y-0 right-0 w-full md:w-[460px] bg-[#12100C] text-[#F6F3EC] z-[70] shadow-2xl transform transition-transform duration-300 ease-out border-l border-[#E5B84B]/25 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5B84B]/15">
          <div>
            <h2 className="text-2xl font-serif text-[#F6F3EC]">
              Your Tasting Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </h2>
            <p className="text-xs text-[#A89F91]">
              Complimentary Cold-Chain Courier on Allocations Over $250
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#A89F91] hover:text-[#E5B84B] transition-colors p-1"
            aria-label="Close bag"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 && reservations.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <p className="font-serif text-2xl text-[#F6F3EC]">Your Tasting Bag Is Empty</p>
              <p className="text-xs text-[#A89F91] max-w-xs leading-relaxed">
                Explore our Imperial Osetra caviar, Périgord truffle elixirs, or reserve a private San Diego tasting salon.
              </p>
            </div>
          ) : (
            <>
              {items.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.variant.label}`}
                  className="flex gap-4 pb-6 border-b border-[#E5B84B]/10"
                >
                  <div className="w-20 h-20 bg-[#1C1914] border border-[#E5B84B]/15 flex-shrink-0 overflow-hidden">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-serif text-lg text-[#F6F3EC] leading-snug">
                          {item.product.name}
                        </h3>
                        <span className="text-sm font-mono text-[#E5B84B] tabular-nums">
                          ${item.variant.price * item.quantity}
                        </span>
                      </div>
                      <p className="text-xs text-[#A89F91] mt-0.5">
                        {item.variant.label} · {item.variant.weight}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5B84B]/25 bg-[#0D0C0A]">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(idx, -1)}
                          className="px-2.5 py-1 text-xs text-[#A89F91] hover:text-[#F6F3EC]"
                        >
                          −
                        </button>
                        <span className="px-2 font-mono text-xs text-[#F6F3EC] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(idx, 1)}
                          className="px-2.5 py-1 text-xs text-[#A89F91] hover:text-[#F6F3EC]"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(idx)}
                        className="text-xs text-[#A89F91] hover:text-[#E5B84B] underline underline-offset-4 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {reservations.length > 0 && (
                <div className="pt-2">
                  <span className="block text-xs uppercase tracking-widest text-[#E5B84B] mb-3">
                    Logged Private Salon Reservations
                  </span>
                  {reservations.map((res) => (
                    <div
                      key={res.id}
                      className="p-4 bg-[#15130F] border border-[#E5B84B]/25 mb-3 text-xs space-y-1"
                    >
                      <div className="flex justify-between text-[#F6F3EC] font-medium">
                        <span>{res.packageTitle}</span>
                        <span className="font-mono text-[#E5B84B]">${res.totalEstimate}</span>
                      </div>
                      <p className="text-[#A89F91]">
                        {res.date} · {res.timeSlot} ({res.guests} Guests)
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#E5B84B]/20 bg-[#0D0C0A]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs uppercase tracking-widest text-[#A89F91]">
              Provisions Subtotal
            </span>
            <span className="text-2xl font-mono text-[#F6F3EC] tabular-nums">
              ${productsSubtotal}
            </span>
          </div>
          <p className="text-xs text-[#A89F91] mb-6">
            Includes insulated ice-pack vault packaging and mother-of-pearl tasting accoutrements.
          </p>
          <button
            type="button"
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full py-4 bg-[#E5B84B] text-[#0D0C0A] uppercase tracking-widest text-xs font-semibold hover:bg-[#F0C965] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Proceed to Acquisition &amp; Payment
          </button>
        </div>
      </aside>
    </>
  );
};

export default CartDrawer;
