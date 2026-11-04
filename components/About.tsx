/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { BRAND_FOUNDER, BRAND_CITY, BRAND_EMAIL, BRAND_PHONE } from '../constants';

const About: React.FC = () => {
  const [inquiryType, setInquiryType] = useState('Private Cellar Allocation');
  const [guestScale, setGuestScale] = useState('10–25 Guests / Coffrets');
  const [budgetRange, setBudgetRange] = useState('$2,500 – $5,000');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submittedDossierId, setSubmittedDossierId] = useState<string | null>(null);

  const handleConciergeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;
    const refId = `MDSJ-VIP-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmittedDossierId(refId);
  };

  return (
    <section id="maison" className="bg-[#0D0C0A] border-b border-[#E5B84B]/15">
      {/* Part 1: La Maison Story & Quantitative Craftsmanship Proof */}
      <div className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5B84B] mb-4">
              <span>03. La Maison MDSJ</span>
              <span aria-hidden="true">·</span>
              <span>{BRAND_CITY}</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-serif text-[#F6F3EC] leading-tight mb-6"
              style={{ textWrap: 'balance' }}
            >
              Where European Cellar Heritage Meets Pacific Coast Hospitality.
            </h2>
            <p className="text-sm text-[#A89F91] uppercase tracking-widest">
              Founded by {BRAND_FOUNDER} · San Diego
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="text-base md:text-lg text-[#D5CFC2] font-light leading-relaxed">
              MDSJ was conceived in San Diego with an uncompromising singular mission: to offer discerning collectors, hosts, and culinary enthusiasts direct access to rarefied gourmet provisions alongside deeply personal white-glove service.
            </p>
            <p className="text-base text-[#A89F91] font-light leading-relaxed">
              Every tin of our Malossol Imperial Osetra, every flacon of 24-karat Périgord truffle oil, and every wax-sealed Modena balsamic reserve is selected from single-estate harvests. Beyond our online vault, we curate private tastings and bespoke culinary concierge programs tailored to each client’s palate.
            </p>

            {/* Attributable Testimonial / Claim-to-Proof Adjacency */}
            <div className="mt-8 p-8 bg-[#15130F] border border-[#E5B84B]/20">
              <p className="font-serif italic text-xl text-[#F6F3EC] leading-relaxed mb-4">
                “Before discovering MDSJ, sourcing true Malossol Golden Osetra and 25-year traditional Modena balsamic for our Rancho Santa Fe dinners meant coordinating three separate European importers. Marah and her sommelier team transformed our anniversary into an effortless five-course private salon.”
              </p>
              <div className="flex items-center gap-2 text-xs text-[#A89F91]">
                <span className="text-[#E5B84B] font-medium">Julian &amp; Elena Vance</span>
                <span aria-hidden="true">·</span>
                <span>Private Collectors &amp; Estate Hosts, Rancho Santa Fe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Personalized Service & Custom Quote Lead Capture (#concierge) */}
      <div id="concierge" className="py-24 px-6 md:px-12 bg-[#12100C] border-t border-[#E5B84B]/15">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5B84B] mb-3">
                <span>04. Personalized Service</span>
                <span aria-hidden="true">·</span>
                <span>Custom Quotes &amp; Allocations</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-[#F6F3EC] mb-6 leading-tight">
                Request a Bespoke Culinary Quote or Private Allocation
              </h3>
              <p className="text-sm text-[#A89F91] font-light leading-relaxed mb-8">
                Whether you are commissioning custom engraved walnut tasting coffrets for executive clients, provisioning a private aircraft or superyacht in San Diego, or requesting a seasonal cellar allocation, our concierge prepares tailored proposals within 24 hours.
              </p>
            </div>

            <div className="p-6 bg-[#0D0C0A] border border-[#E5B84B]/15 space-y-4 text-xs">
              <div>
                <span className="uppercase tracking-widest text-[#E5B84B] block mb-1">
                  Direct Concierge Desk
                </span>
                <span className="text-[#F6F3EC] font-medium">{BRAND_FOUNDER} — Founder &amp; Director</span>
              </div>
              <div className="flex items-center justify-between border-t border-[#E5B84B]/10 pt-3">
                <span className="text-[#A89F91]">Electronic Mail</span>
                <a href={`mailto:${BRAND_EMAIL}`} className="text-[#F6F3EC] hover:text-[#E5B84B]">
                  {BRAND_EMAIL}
                </a>
              </div>
              <div className="flex items-center justify-between border-t border-[#E5B84B]/10 pt-3">
                <span className="text-[#A89F91]">Direct Line</span>
                <a href="tel:16193108637" className="font-mono text-[#F6F3EC] hover:text-[#E5B84B]">
                  {BRAND_PHONE}
                </a>
              </div>
              <div className="flex items-center justify-between border-t border-[#E5B84B]/10 pt-3">
                <span className="text-[#A89F91]">Sanctuary Location</span>
                <span className="text-[#F6F3EC]">La Jolla · San Diego, United States</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#15130F] border border-[#E5B84B]/25 p-8 md:p-10">
            {submittedDossierId ? (
              <div className="py-12 text-center space-y-6">
                <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#E5B84B]">
                  <span>Custom Quote Request Registered</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{submittedDossierId}</span>
                </div>
                <h4 className="text-3xl font-serif text-[#F6F3EC]">
                  Thank You, {fullName}. Your Dossier Is Under Review.
                </h4>
                <p className="text-sm text-[#A89F91] max-w-lg mx-auto font-light leading-relaxed">
                  Our San Diego culinary concierge has received your inquiry regarding{' '}
                  <span className="text-[#F6F3EC]">{inquiryType}</span> ({budgetRange}). We will reach out to{' '}
                  <span className="text-[#F6F3EC]">{email}</span> with a personalized proposal and tasting allocation options.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedDossierId(null);
                    setNotes('');
                  }}
                  className="px-6 py-3 border border-[#E5B84B]/40 text-xs uppercase tracking-widest text-[#F6F3EC] hover:border-[#E5B84B]"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleConciergeSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A89F91] mb-2">
                      Service Category
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full bg-[#0D0C0A] border border-[#E5B84B]/25 px-3 py-3 text-xs text-[#F6F3EC] focus:border-[#E5B84B] outline-none"
                    >
                      <option value="Private Cellar Allocation">Private Cellar Allocation</option>
                      <option value="Bespoke Event & Estate Catering">Bespoke Event &amp; Estate Catering</option>
                      <option value="Corporate & Diplomatic Gifting">Corporate &amp; Diplomatic Gifting</option>
                      <option value="Yacht & Private Aviation Provisioning">Yacht &amp; Aviation Provisioning</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A89F91] mb-2">
                      Estimated Scale
                    </label>
                    <select
                      value={guestScale}
                      onChange={(e) => setGuestScale(e.target.value)}
                      className="w-full bg-[#0D0C0A] border border-[#E5B84B]/25 px-3 py-3 text-xs text-[#F6F3EC] focus:border-[#E5B84B] outline-none"
                    >
                      <option value="Individual Collector">Individual Collector</option>
                      <option value="10–25 Guests / Coffrets">10–25 Guests / Coffrets</option>
                      <option value="25–75 Guests / Coffrets">25–75 Guests / Coffrets</option>
                      <option value="75+ Gala or Corporate Batch">75+ Gala or Corporate Batch</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A89F91] mb-2">
                      Target Budget
                    </label>
                    <select
                      value={budgetRange}
                      onChange={(e) => setBudgetRange(e.target.value)}
                      className="w-full bg-[#0D0C0A] border border-[#E5B84B]/25 px-3 py-3 text-xs text-[#F6F3EC] focus:border-[#E5B84B] outline-none"
                    >
                      <option value="Custom Quote Requested">I Want a Custom Quote</option>
                      <option value="$1,000 – $2,500">$1,000 – $2,500</option>
                      <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                      <option value="$5,000 – $15,000+">$5,000 – $15,000+</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A89F91] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full Name"
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@domain.com"
                      className="w-full bg-[#0D0C0A] border border-[#E5B84B]/25 px-4 py-3 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A89F91] mb-2">
                      Telephone (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (619) 000-0000"
                      className="w-full bg-[#0D0C0A] border border-[#E5B84B]/25 px-4 py-3 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A89F91] mb-2">
                    Tell Us About Your Event, Palate Preferences, or Custom Gifting Needs
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Specify preferred harvest dates, custom engraving, delivery timeline, or culinary pairings..."
                    className="w-full bg-[#0D0C0A] border border-[#E5B84B]/25 p-4 text-sm text-[#F6F3EC] placeholder-[#A89F91]/50 focus:border-[#E5B84B] outline-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <span className="text-xs text-[#A89F91]">
                    Direct response from our San Diego Private Client Desk.
                  </span>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#E5B84B] text-[#0D0C0A] text-xs font-semibold uppercase tracking-widest hover:bg-[#F0C965] transition-colors whitespace-nowrap shrink-0"
                  >
                    Request Custom Quote
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

export default About;