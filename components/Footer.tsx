/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { BRAND_NAME, BRAND_FOUNDER, BRAND_CITY, BRAND_EMAIL, BRAND_PHONE } from '../constants';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribeStatus('success');
    setEmail('');
  };

  return (
    <footer className="bg-[#090806] pt-20 pb-12 px-6 md:px-12 text-[#A89F91] border-t border-[#E5B84B]/20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand Column */}
        <div className="md:col-span-4">
          <h4 className="text-2xl font-serif tracking-[0.18em] text-[#F6F3EC] mb-4">
            {BRAND_NAME}
          </h4>
          <p className="text-sm font-light leading-relaxed max-w-xs mb-6">
            Maison de Haute Gastronomie in {BRAND_CITY}. Rarefied caviar, black truffle elixirs, aged Modena reserves, and private sommelier tasting salons.
          </p>
          <div className="text-xs space-y-1 text-[#D5CFC2]">
            <p>Founder &amp; Director: {BRAND_FOUNDER}</p>
            <p>
              <a href={`mailto:${BRAND_EMAIL}`} className="hover:text-[#E5B84B] transition-colors">
                {BRAND_EMAIL}
              </a>
            </p>
            <p className="font-mono">{BRAND_PHONE}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-2">
          <h4 className="text-xs font-semibold text-[#E5B84B] mb-5 tracking-widest uppercase">
            The Vault
          </h4>
          <ul className="space-y-3 text-sm font-light">
            <li>
              <a
                href="#collection"
                onClick={(e) => onLinkClick(e, 'collection')}
                className="hover:text-[#F6F3EC] transition-colors"
              >
                Imperial Caviar
              </a>
            </li>
            <li>
              <a
                href="#collection"
                onClick={(e) => onLinkClick(e, 'collection')}
                className="hover:text-[#F6F3EC] transition-colors"
              >
                Truffle &amp; Gold Elixirs
              </a>
            </li>
            <li>
              <a
                href="#collection"
                onClick={(e) => onLinkClick(e, 'collection')}
                className="hover:text-[#F6F3EC] transition-colors"
              >
                25-Year Aged Reserves
              </a>
            </li>
            <li>
              <a
                href="#collection"
                onClick={(e) => onLinkClick(e, 'collection')}
                className="hover:text-[#F6F3EC] transition-colors"
              >
                Tasting Coffrets
              </a>
            </li>
          </ul>
        </div>

        {/* Private Services */}
        <div className="md:col-span-2">
          <h4 className="text-xs font-semibold text-[#E5B84B] mb-5 tracking-widest uppercase">
            Hospitality
          </h4>
          <ul className="space-y-3 text-sm font-light">
            <li>
              <a
                href="#tastings"
                onClick={(e) => onLinkClick(e, 'tastings')}
                className="hover:text-[#F6F3EC] transition-colors"
              >
                La Jolla Tasting Salon
              </a>
            </li>
            <li>
              <a
                href="#tastings"
                onClick={(e) => onLinkClick(e, 'tastings')}
                className="hover:text-[#F6F3EC] transition-colors"
              >
                Estate Table Service
              </a>
            </li>
            <li>
              <a
                href="#concierge"
                onClick={(e) => onLinkClick(e, 'concierge')}
                className="hover:text-[#F6F3EC] transition-colors"
              >
                Custom Quotes &amp; Gifting
              </a>
            </li>
            <li>
              <a
                href="#journal"
                onClick={(e) => onLinkClick(e, 'journal')}
                className="hover:text-[#F6F3EC] transition-colors"
              >
                The Culinary Gazette
              </a>
            </li>
          </ul>
        </div>

        {/* Private Allocation Registry */}
        <div className="md:col-span-4">
          <h4 className="text-xs font-semibold text-[#E5B84B] mb-4 tracking-widest uppercase">
            Private Harvest Registry
          </h4>
          <p className="text-xs font-light leading-relaxed mb-4">
            Receive priority invitations to seasonal caviar allocations and candlelit San Diego salon seatings.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribeStatus === 'success'}
              className="flex-1 bg-[#15130F] border border-[#E5B84B]/25 px-4 py-3 text-xs text-[#F6F3EC] outline-none focus:border-[#E5B84B] transition-colors placeholder-[#A89F91]/50"
            />
            <button
              type="submit"
              disabled={subscribeStatus === 'success'}
              className="px-6 py-3 bg-[#E5B84B] text-[#0D0C0A] text-xs font-semibold uppercase tracking-widest hover:bg-[#F0C965] transition-colors whitespace-nowrap shrink-0"
            >
              {subscribeStatus === 'idle' ? 'Join Registry' : 'Registered'}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-[#E5B84B]/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#A89F91]/70">
        <p>© {new Date().getFullYear()} MDSJ — Maison de Haute Gastronomie. San Diego, United States.</p>
        <p>All allocations shipped via temperature-controlled vault courier.</p>
      </div>
    </footer>
  );
};

export default Footer;
