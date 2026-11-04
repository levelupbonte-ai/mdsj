/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { CartItem } from '../types';
import { BRAND_EMAIL, BRAND_PHONE } from '../constants';

interface CheckoutProps {
  items: CartItem[];
  onBack: () => void;
  onOrderComplete: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack, onOrderComplete }) => {
  const [deliveryMethod, setDeliveryMethod] = useState<'courier' | 'pickup' | 'air'>('courier');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'concierge'>('card');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('San Diego');
  const [postalCode, setPostalCode] = useState('92037');
  const [giftNote, setGiftNote] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);
  const [orderSnapshot, setOrderSnapshot] = useState<{ items: CartItem[]; total: number } | null>(null);

  const subtotal = items.reduce((sum, item) => sum + item.variant.price * item.quantity, 0);
  const shippingCost = subtotal >= 250 || deliveryMethod === 'pickup' ? 0 : 35;
  const total = subtotal + shippingCost;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) return;

    const generatedId = `MDSJ-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderSnapshot({ items: [...items], total });
    setConfirmedOrderId(generatedId);
    onOrderComplete();
  };

  if (confirmedOrderId && orderSnapshot) {
    return (
      <div className="min-h-screen pt-24 pb-24 px-6 bg-[#0D0C0A] text-[#F6F3EC] animate-fade-in-up">
        <div className="max-w-3xl mx-auto bg-[#15130F] border border-[#E5B84B]/30 p-8 md:p-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5B84B] mb-4">
            <span>Order #{confirmedOrderId} Confirmed</span>
            <span aria-hidden="true">·</span>
            <span>Preparing Cold-Chain Dispatch</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif text-[#F6F3EC] mb-4">
            Thank You for Your Acquisition, {firstName}.
          </h1>

          <p className="text-sm text-[#A89F91] font-light leading-relaxed mb-8">
            Your gourmet allocation has been registered with the MDSJ Vault in San Diego. A formal receipt and live cold-chain courier tracking link have been dispatched to{' '}
            <span className="text-[#F6F3EC]">{email}</span>.
          </p>

          <div className="p-6 bg-[#0D0C0A] border border-[#E5B84B]/15 mb-8 space-y-4">
            <div className="flex justify-between text-xs uppercase tracking-widest text-[#E5B84B] pb-3 border-b border-[#E5B84B]/15">
              <span>Allocation Summary</span>
              <span className="font-mono">Receipt #{confirmedOrderId}</span>
            </div>

            {orderSnapshot.items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center text-sm py-1">
                <div>
                  <span className="text-[#F6F3EC] font-serif text-base">{item.product.name}</span>
                  <span className="text-xs text-[#A89F91] block">
                    {item.variant.label} ({item.variant.weight}) × {item.quantity}
                  </span>
                </div>
                <span className="font-mono text-[#F6F3EC] tabular-nums">
                  ${item.variant.price * item.quantity}
                </span>
              </div>
            ))}

            <div className="pt-4 border-t border-[#E5B84B]/15 flex justify-between items-baseline">
              <span className="text-xs uppercase tracking-widest text-[#A89F91]">Total Settled</span>
              <span className="text-2xl font-mono text-[#E5B84B] tabular-nums">
                ${orderSnapshot.total} USD
              </span>
            </div>
          </div>

          {giftNote && (
            <div className="p-5 bg-[#12100C] border border-[#E5B84B]/20 mb-8 text-xs">
              <span className="uppercase tracking-widest text-[#E5B84B] block mb-1">
                Calligraphed Enclosure Card
              </span>
              <p className="font-serif italic text-base text-[#F6F3EC]">“{giftNote}”</p>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E5B84B]/15">
            <div className="text-xs text-[#A89F91]">
              Concierge Support: {BRAND_EMAIL} · {BRAND_PHONE}
            </div>
            <button
              type="button"
              onClick={onBack}
              className="px-8 py-4 bg-[#E5B84B] text-[#0D0C0A] text-xs font-semibold uppercase tracking-widest hover:bg-[#F0C965] transition-colors"
            >
              Return to Maison MDSJ
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-24 px-6 bg-[#0D0C0A] text-[#F6F3EC] animate-fade-in-up">
      <div className="max-w-[1280px] mx-auto">
        <button
          type="button"
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A89F91] hover:text-[#E5B84B] transition-colors mb-10"
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Interactive Checkout Form */}
          <form onSubmit={handleSubmitOrder} className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5B84B] mb-2">
                <span>MDSJ Private Acquisition</span>
                <span aria-hidden="true">·</span>
                <span>Cold-Chain Dispatch</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif text-[#F6F3EC]">
                Client &amp; Delivery Dossier
              </h1>
            </div>

            {/* 1. Dispatch Method */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-[#E5B84B] mb-4">
                01. Select Dispatch Method
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliveryMethod('courier')}
                  className={`p-4 text-left border transition-colors ${
                    deliveryMethod === 'courier'
                      ? 'border-[#E5B84B] bg-[#E5B84B]/10 text-[#F6F3EC]'
                      : 'border-[#E5B84B]/20 bg-[#15130F] text-[#A89F91]'
                  }`}
                >
                  <span className="block text-xs font-semibold text-[#F6F3EC] mb-1">
                    San Diego Chilled Courier
                  </span>
                  <span className="block text-xs text-[#A89F91]">Same-Day White-Glove</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryMethod('pickup')}
                  className={`p-4 text-left border transition-colors ${
                    deliveryMethod === 'pickup'
                      ? 'border-[#E5B84B] bg-[#E5B84B]/10 text-[#F6F3EC]'
                      : 'border-[#E5B84B]/20 bg-[#15130F] text-[#A89F91]'
                  }`}
                >
                  <span className="block text-xs font-semibold text-[#F6F3EC] mb-1">
                    La Jolla Salon Pickup
                  </span>
                  <span className="block text-xs text-[#A89F91]">By Private Appointment</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryMethod('air')}
                  className={`p-4 text-left border transition-colors ${
                    deliveryMethod === 'air'
                      ? 'border-[#E5B84B] bg-[#E5B84B]/10 text-[#F6F3EC]'
                      : 'border-[#E5B84B]/20 bg-[#15130F] text-[#A89F91]'
                  }`}
                >
                  <span className="block text-xs font-semibold text-[#F6F3EC] mb-1">
                    National Priority Air
                  </span>
                  <span className="block text-xs text-[#A89F91]">Overnight Insulated Vault</span>
                </button>
              </div>
            </div>

            {/* 2. Client Information */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-[#E5B84B] mb-4">
                02. Client Contact &amp; Destination
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name *"
                    className="w-full bg-[#15130F] border border-[#E5B84B]/25 px-4 py-3 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none"
                  />
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name *"
                    className="w-full bg-[#15130F] border border-[#E5B84B]/25 px-4 py-3 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address *"
                    className="w-full bg-[#15130F] border border-[#E5B84B]/25 px-4 py-3 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none"
                  />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Mobile telephone for courier *"
                    className="w-full bg-[#15130F] border border-[#E5B84B]/25 px-4 py-3 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none"
                  />
                </div>

                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street address, estate gate code, or marina slip *"
                  className="w-full bg-[#15130F] border border-[#E5B84B]/25 px-4 py-3 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City *"
                    className="w-full bg-[#15130F] border border-[#E5B84B]/25 px-4 py-3 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none"
                  />
                  <input
                    type="text"
                    required
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Postal code *"
                    className="w-full bg-[#15130F] border border-[#E5B84B]/25 px-4 py-3 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none font-mono"
                  />
                </div>

                <input
                  type="text"
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  placeholder="Complimentary calligraphed gift card message (optional)"
                  className="w-full bg-[#15130F] border border-[#E5B84B]/25 px-4 py-3 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none"
                />
              </div>
            </div>

            {/* 3. Payment Method */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-[#E5B84B] mb-4">
                03. Settlement Method
              </h2>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3.5 text-xs uppercase tracking-widest border ${
                    paymentMethod === 'card'
                      ? 'border-[#E5B84B] bg-[#E5B84B]/10 text-[#F6F3EC]'
                      : 'border-[#E5B84B]/20 bg-[#15130F] text-[#A89F91]'
                  }`}
                >
                  Private Card Settlement
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('concierge')}
                  className={`p-3.5 text-xs uppercase tracking-widest border ${
                    paymentMethod === 'concierge'
                      ? 'border-[#E5B84B] bg-[#E5B84B]/10 text-[#F6F3EC]'
                      : 'border-[#E5B84B]/20 bg-[#15130F] text-[#A89F91]'
                  }`}
                >
                  Concierge Wire / COD Upon Courier
                </button>
              </div>

              {paymentMethod === 'card' ? (
                <div className="p-6 border border-[#E5B84B]/25 bg-[#15130F] space-y-4">
                  <input
                    type="text"
                    required
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Card Number (e.g. 4532 •••• •••• 8891)"
                    className="w-full bg-[#0D0C0A] border border-[#E5B84B]/25 px-4 py-3 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none font-mono"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      placeholder="MM / YY"
                      className="w-full bg-[#0D0C0A] border border-[#E5B84B]/25 px-4 py-3 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none font-mono"
                    />
                    <input
                      type="text"
                      required
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      placeholder="Security Code"
                      className="w-full bg-[#0D0C0A] border border-[#E5B84B]/25 px-4 py-3 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none font-mono"
                    />
                  </div>
                </div>
              ) : (
                <div className="p-6 border border-[#E5B84B]/25 bg-[#15130F] text-xs text-[#D5CFC2] leading-relaxed">
                  Your allocation will be reserved immediately. Our San Diego Private Client Desk will verify your delivery window by telephone and arrange direct wire settlement or white-glove payment upon arrival.
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-[#E5B84B] text-[#0D0C0A] uppercase tracking-widest text-xs font-semibold hover:bg-[#F0C965] transition-colors tabular-nums"
            >
              Complete Acquisition — ${total} USD
            </button>
          </form>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-[#15130F] border border-[#E5B84B]/20 p-8 sticky top-28">
              <h2 className="text-2xl font-serif text-[#F6F3EC] mb-6">Allocation Summary</h2>

              <div className="space-y-5 mb-8">
                {items.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <div className="w-16 h-16 bg-[#1C1914] border border-[#E5B84B]/20 relative flex-shrink-0">
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-[#F6F3EC] text-base">{item.product.name}</h3>
                      <p className="text-xs text-[#A89F91]">
                        {item.variant.label} ({item.variant.weight}) × {item.quantity}
                      </p>
                    </div>
                    <span className="text-sm font-mono text-[#F6F3EC] tabular-nums">
                      ${item.variant.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#E5B84B]/15 pt-5 space-y-3 text-xs">
                <div className="flex justify-between text-[#A89F91]">
                  <span>Provisions Subtotal</span>
                  <span className="font-mono text-[#F6F3EC] tabular-nums">${subtotal}</span>
                </div>
                <div className="flex justify-between text-[#A89F91]">
                  <span>Cold-Chain Courier &amp; Ice Vault</span>
                  <span className="font-mono text-[#E5B84B] tabular-nums">
                    {shippingCost === 0 ? 'Complimentary' : `$${shippingCost}`}
                  </span>
                </div>
              </div>

              <div className="border-t border-[#E5B84B]/20 mt-6 pt-6 flex justify-between items-baseline">
                <span className="font-serif text-xl text-[#F6F3EC]">Total</span>
                <span className="font-mono text-2xl text-[#E5B84B] tabular-nums">${total} USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;