/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { TASTING_PACKAGES, SALON_IMAGE } from '../constants';
import { TastingPackage, TastingReservation } from './../types';

interface PrivateTastingsProps {
  onReservationCreated: (reservation: TastingReservation) => void;
}

const TIME_SLOTS = ['5:30 PM — Sunset Seating', '7:30 PM — Candlelight Salon', '8:30 PM — Late Sommelier Table'];

const PrivateTastings: React.FC<PrivateTastingsProps> = ({ onReservationCreated }) => {
  const [selectedPackage, setSelectedPackage] = useState<TastingPackage>(TASTING_PACKAGES[0]);
  const [date, setDate] = useState<string>('2026-12-05');
  const [timeSlot, setTimeSlot] = useState<string>(TIME_SLOTS[0]);
  const [guests, setGuests] = useState<number>(4);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [dietaryNotes, setDietaryNotes] = useState<string>('');
  const [confirmedReservation, setConfirmedReservation] = useState<TastingReservation | null>(null);
  const [imgError, setImgError] = useState(false);

  const totalEstimate = selectedPackage.pricePerGuest * guests;

  const handleSelectPackage = (pkg: TastingPackage) => {
    setSelectedPackage(pkg);
    if (guests < pkg.minGuests) setGuests(pkg.minGuests);
    if (guests > pkg.maxGuests) setGuests(pkg.maxGuests);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerEmail.trim()) return;

    const newReservation: TastingReservation = {
      id: `MDSJ-SALON-${Math.floor(1000 + Math.random() * 9000)}`,
      packageTitle: selectedPackage.title,
      date,
      timeSlot,
      guests,
      venue: selectedPackage.locationType,
      dietaryNotes: dietaryNotes.trim() || 'Standard Sommelier Pairing',
      customerName: customerName.trim(),
      customerEmail: customerEmail.trim(),
      customerPhone: customerPhone.trim() || 'Provided upon confirmation',
      totalEstimate,
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    };

    setConfirmedReservation(newReservation);
    onReservationCreated(newReservation);
  };

  return (
    <section id="tastings" className="py-24 px-6 md:px-12 bg-[#12100C] border-b border-[#E5B84B]/15">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#E5B84B]/15">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5B84B] mb-3">
              <span>02. Private Salon &amp; Estate Bookings</span>
              <span aria-hidden="true">·</span>
              <span>San Diego, California</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#F6F3EC]">
              Book a Private Tasting Experience
            </h2>
          </div>
          <p className="text-sm text-[#A89F91] max-w-md font-light leading-relaxed">
            Reserve an intimate multi-course caviar and truffle degustation in our La Jolla coastal sanctuary, at your private residence, or aboard your yacht.
          </p>
        </div>

        {/* 3 Tasting Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {TASTING_PACKAGES.map((pkg) => {
            const isActive = selectedPackage.id === pkg.id;
            return (
              <div
                key={pkg.id}
                onClick={() => handleSelectPackage(pkg)}
                className={`cursor-pointer p-8 transition-all duration-200 flex flex-col justify-between border ${
                  isActive
                    ? 'bg-[#1A1711] border-[#E5B84B]'
                    : 'bg-[#15130F] border-[#E5B84B]/15 hover:border-[#E5B84B]/45'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs uppercase tracking-widest text-[#E5B84B] mb-3">
                    <span>{pkg.locationType}</span>
                    <span aria-hidden="true">·</span>
                    <span>{pkg.duration}</span>
                  </div>

                  <h3 className="text-2xl font-serif text-[#F6F3EC] mb-2">{pkg.title}</h3>
                  <p className="text-xs text-[#A89F91] mb-6">{pkg.subtitle}</p>
                  <p className="text-sm text-[#D5CFC2] font-light leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  <div className="border-t border-[#E5B84B]/15 pt-5 mb-6">
                    <span className="block text-xs uppercase tracking-widest text-[#A89F91] mb-3">
                      Tasting Menu Highlights
                    </span>
                    <ul className="space-y-2 text-xs text-[#D5CFC2]">
                      {pkg.courses.map((course, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#E5B84B]">·</span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5B84B]/15 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-mono text-[#F6F3EC] tabular-nums">
                      ${pkg.pricePerGuest}
                    </span>
                    <span className="text-xs text-[#A89F91] block">
                      per guest · {pkg.minGuests}–{pkg.maxGuests} guests
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleSelectPackage(pkg)}
                    className={`px-4 py-2 text-xs uppercase tracking-widest font-medium transition-colors whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[#E5B84B] text-[#0D0C0A]'
                        : 'border border-[#E5B84B]/40 text-[#E5B84B] hover:bg-[#E5B84B] hover:text-[#0D0C0A]'
                    }`}
                  >
                    {isActive ? 'Selected' : 'Select Experience'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Booking Console & Salon Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch bg-[#15130F] border border-[#E5B84B]/25 p-8 md:p-12">
          {/* Left: Salon Visual & Atmosphere */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="w-full aspect-[16/9] bg-[#1C1914] overflow-hidden mb-6 border border-[#E5B84B]/15">
                {!imgError ? (
                  <img
                    src={SALON_IMAGE}
                    alt="MDSJ La Jolla Private Tasting Salon overlooking the ocean"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6 text-center">
                    <span className="font-serif italic text-xl text-[#E5B84B]">
                      MDSJ Coastal Tasting Salon
                    </span>
                  </div>
                )}
              </div>

              <span className="text-xs uppercase tracking-widest text-[#E5B84B] block mb-2">
                Selected Experience
              </span>
              <h3 className="text-3xl font-serif text-[#F6F3EC] mb-3">{selectedPackage.title}</h3>
              <p className="text-sm text-[#A89F91] font-light leading-relaxed mb-6">
                Every private tasting includes dedicated sommelier stewardship, custom calligraphed menus, mother-of-pearl service ware, and optional wine or zero-proof Cuvée Botanique pairings.
              </p>
            </div>

            <div className="p-6 bg-[#0D0C0A] border border-[#E5B84B]/20">
              <div className="flex justify-between items-center text-xs text-[#A89F91] mb-2">
                <span>Selected Venue</span>
                <span className="text-[#F6F3EC]">{selectedPackage.locationType}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#A89F91] mb-2">
                <span>Party Size</span>
                <span className="font-mono text-[#F6F3EC] tabular-nums">
                  {guests} Guests × ${selectedPackage.pricePerGuest}
                </span>
              </div>
              <div className="pt-3 mt-3 border-t border-[#E5B84B]/15 flex justify-between items-baseline">
                <span className="text-xs uppercase tracking-widest text-[#E5B84B]">
                  Estimated Salon Total
                </span>
                <span className="text-2xl font-mono text-[#F6F3EC] tabular-nums">
                  ${totalEstimate}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Reservation Form or Instant Confirmation */}
          <div className="lg:col-span-7">
            {confirmedReservation ? (
              <div className="h-full flex flex-col justify-center p-8 bg-[#0D0C0A] border border-[#E5B84B]/40">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5B84B] mb-3">
                  <span>Private Salon Dossier Confirmed</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{confirmedReservation.id}</span>
                </div>
                <h3 className="text-3xl font-serif text-[#F6F3EC] mb-4">
                  We Look Forward to Welcoming You, {confirmedReservation.customerName}.
                </h3>
                <p className="text-sm text-[#A89F91] font-light leading-relaxed mb-8">
                  Your private tasting request has been logged with Founder Marah Rosemond and the MDSJ Sommelier Concierge in San Diego. A formal itinerary and cellar pairing sheet has been prepared for{' '}
                  <span className="text-[#F6F3EC]">{confirmedReservation.customerEmail}</span>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-[#15130F] border border-[#E5B84B]/15 mb-8 text-xs">
                  <div>
                    <span className="text-[#A89F91] block mb-1">Experience</span>
                    <span className="text-[#F6F3EC] font-medium">
                      {confirmedReservation.packageTitle}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#A89F91] block mb-1">Date &amp; Seating</span>
                    <span className="text-[#F6F3EC] font-mono tabular-nums">
                      {confirmedReservation.date} · {confirmedReservation.timeSlot}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#A89F91] block mb-1">Party Size &amp; Venue</span>
                    <span className="text-[#F6F3EC] tabular-nums">
                      {confirmedReservation.guests} Guests · {confirmedReservation.venue}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#A89F91] block mb-1">Estimated Total</span>
                    <span className="text-[#E5B84B] font-mono text-sm tabular-nums">
                      ${confirmedReservation.totalEstimate} USD
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => setConfirmedReservation(null)}
                    className="px-6 py-3 border border-[#E5B84B]/40 text-xs uppercase tracking-widest text-[#F6F3EC] hover:border-[#E5B84B]"
                  >
                    Modify or Book Another Date
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h4 className="text-2xl font-serif text-[#F6F3EC] mb-2">
                  Reserve Your Seating &amp; Sommelier Consultation
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A89F91] mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      min="2026-11-05"
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full bg-[#0D0C0A] border border-[#E5B84B]/25 px-4 py-3 text-xs text-[#F6F3EC] focus:border-[#E5B84B] outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A89F91] mb-2">
                      Seating Time
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full bg-[#0D0C0A] border border-[#E5B84B]/25 px-4 py-3 text-xs text-[#F6F3EC] focus:border-[#E5B84B] outline-none"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A89F91] mb-2">
                      Number of Guests ({selectedPackage.minGuests}–{selectedPackage.maxGuests})
                    </label>
                    <div className="flex items-center justify-between bg-[#0D0C0A] border border-[#E5B84B]/25 px-4 py-2.5">
                      <button
                        type="button"
                        onClick={() => setGuests(Math.max(selectedPackage.minGuests, guests - 1))}
                        className="text-[#E5B84B] px-2 text-base"
                      >
                        −
                      </button>
                      <span className="font-mono text-xs text-[#F6F3EC] tabular-nums">
                        {guests} Guests
                      </span>
                      <button
                        type="button"
                        onClick={() => setGuests(Math.min(selectedPackage.maxGuests, guests + 1))}
                        className="text-[#E5B84B] px-2 text-base"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A89F91] mb-2">
                      Host Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Marah Rosemond"
                      className="w-full bg-[#0D0C0A] border border-[#E5B84B]/25 px-4 py-3 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A89F91] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full bg-[#0D0C0A] border border-[#E5B84B]/25 px-4 py-3 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A89F91] mb-2">
                      Direct Telephone
                    </label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="+1 (619) 000-0000"
                      className="w-full bg-[#0D0C0A] border border-[#E5B84B]/25 px-4 py-3 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A89F91] mb-2">
                      Dietary Preferences or Vintage Requests
                    </label>
                    <input
                      type="text"
                      value={dietaryNotes}
                      onChange={(e) => setDietaryNotes(e.target.value)}
                      placeholder="Allergies, Champagne vs. Zero-Proof, Estate Address..."
                      className="w-full bg-[#0D0C0A] border border-[#E5B84B]/25 px-4 py-3 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#A89F91]">
                    No immediate charge. Our San Diego concierge confirms availability within 4 hours.
                  </p>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#E5B84B] text-[#0D0C0A] text-xs font-semibold uppercase tracking-widest hover:bg-[#F0C965] transition-colors whitespace-nowrap shrink-0 tabular-nums"
                  >
                    Confirm Tasting Booking — ${totalEstimate}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateTastings;
