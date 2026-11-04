/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { BRAND_NAME } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, cartCount, onOpenCart }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    onNavClick(e, targetId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0C0A]/90 backdrop-blur-md border-b border-[#E5B84B]/15">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            onNavClick(e, '');
          }}
          className="text-2xl md:text-3xl font-serif font-semibold tracking-[0.18em] text-[#F6F3EC] hover:text-[#E5B84B] transition-colors whitespace-nowrap shrink-0"
        >
          {BRAND_NAME}
        </a>

        {/* Zone 2: 4–5 concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-normal text-[#A89F91]">
          <a
            href="#collection"
            onClick={(e) => handleLinkClick(e, 'collection')}
            className="hover:text-[#F6F3EC] hover:underline underline-offset-8 decoration-[#E5B84B] transition-colors whitespace-nowrap shrink-0"
          >
            Collection
          </a>
          <a
            href="#tastings"
            onClick={(e) => handleLinkClick(e, 'tastings')}
            className="hover:text-[#F6F3EC] hover:underline underline-offset-8 decoration-[#E5B84B] transition-colors whitespace-nowrap shrink-0"
          >
            Private Tastings
          </a>
          <a
            href="#maison"
            onClick={(e) => handleLinkClick(e, 'maison')}
            className="hover:text-[#F6F3EC] hover:underline underline-offset-8 decoration-[#E5B84B] transition-colors whitespace-nowrap shrink-0"
          >
            La Maison
          </a>
          <a
            href="#concierge"
            onClick={(e) => handleLinkClick(e, 'concierge')}
            className="hover:text-[#F6F3EC] hover:underline underline-offset-8 decoration-[#E5B84B] transition-colors whitespace-nowrap shrink-0"
          >
            Bespoke Service
          </a>
          <a
            href="#journal"
            onClick={(e) => handleLinkClick(e, 'journal')}
            className="hover:text-[#F6F3EC] hover:underline underline-offset-8 decoration-[#E5B84B] transition-colors whitespace-nowrap shrink-0"
          >
            Journal
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            onClick={onOpenCart}
            className="px-5 py-2.5 text-xs font-medium tracking-wider uppercase bg-[#E5B84B] text-[#0D0C0A] hover:bg-[#F0C965] transition-colors whitespace-nowrap shrink-0 tabular-nums"
          >
            Tasting Bag ({cartCount})
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
