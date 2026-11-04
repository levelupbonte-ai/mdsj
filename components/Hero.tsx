/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { HERO_IMAGE } from '../constants';

interface HeroProps {
  onExploreCollection: () => void;
  onBookTasting: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreCollection, onBookTasting }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-20 bg-[#0D0C0A] border-b border-[#E5B84B]/15">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 lg:py-20">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Editorial Narrative & Primary CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs text-[#E5B84B] tracking-widest uppercase mb-6">
              <span>Maison de Haute Gastronomie</span>
              <span aria-hidden="true">·</span>
              <span>San Diego, California</span>
            </div>

            <h1
              className="font-serif text-[#F6F3EC] font-normal leading-[1.08] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 4.2vw, 4rem)', textWrap: 'balance' }}
            >
              Rarefied Harvests &amp; Private Culinary Salons, <span className="italic text-[#E5B84B]">Curated in Gold.</span>
            </h1>

            <p className="text-[#A89F91] text-base md:text-lg font-light leading-relaxed max-w-xl mb-10">
              MDSJ brings single-harvest Imperial Osetra caviar, 24-karat Périgord truffle elixirs, and quarter-century aged Modena reserves directly to your table—accompanied by intimate sommelier-led tastings across San Diego.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <button
                onClick={onExploreCollection}
                className="px-8 py-4 bg-[#E5B84B] text-[#0D0C0A] text-xs font-semibold uppercase tracking-widest hover:bg-[#F0C965] transition-colors whitespace-nowrap shrink-0"
              >
                Explore the Collection
              </button>
              <button
                onClick={onBookTasting}
                className="px-8 py-4 border border-[#E5B84B]/40 text-[#F6F3EC] text-xs font-medium uppercase tracking-widest hover:border-[#E5B84B] hover:text-[#E5B84B] transition-colors whitespace-nowrap shrink-0"
              >
                Reserve a Private Tasting
              </button>
            </div>
          </div>

          {/* Right Column: Hero Imagery */}
          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[520px] bg-[#161410] border border-[#E5B84B]/20 overflow-hidden">
            {!imgError ? (
              <img
                src={HERO_IMAGE}
                alt="MDSJ luxury caviar and truffle tasting table overlooking the San Diego coast"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full lg:h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-[#1A1712] to-[#0D0C0A] text-center">
                <span className="font-serif italic text-3xl text-[#E5B84B] mb-2">MDSJ Reserve</span>
                <span className="text-xs text-[#A89F91] uppercase tracking-widest">La Jolla Coastal Tasting Table</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs text-[#F6F3EC]/90">
              <div>
                <p className="font-serif italic text-lg text-[#F6F3EC]">Autumn / Winter Allocation 2026</p>
                <p className="text-[#A89F91]">La Jolla Coastal Sanctuary · Private Appointments Available</p>
              </div>
              <span className="font-mono text-[#E5B84B] tabular-nums">32.8328° N, 117.2713° W</span>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Provenance & Service Strip below the Hero Split */}
        <div className="mt-14 pt-10 border-t border-[#E5B84B]/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#E5B84B] mb-1">01. Provenance</p>
            <p className="font-serif text-xl text-[#F6F3EC] mb-1">Top 4% Harvest Selection</p>
            <p className="text-xs text-[#A89F91] leading-relaxed">
              Numbered micro-lots sourced directly from sustainable European sanctuaries and California coastal apiaries.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#E5B84B] mb-1">02. Cold-Chain Steward</p>
            <p className="font-serif text-xl text-[#F6F3EC] mb-1">Same-Day San Diego Courier</p>
            <p className="text-xs text-[#A89F91] leading-relaxed">
              White-glove chilled hand delivery across San Diego County and overnight insulated air dispatch nationwide.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#E5B84B] mb-1">03. Private Salons</p>
            <p className="font-serif text-xl text-[#F6F3EC] mb-1">Sommelier-Guided Tastings</p>
            <p className="text-xs text-[#A89F91] leading-relaxed">
              Reserve an intimate evening in our La Jolla salon, your private residence, or aboard a Pacific charter.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#E5B84B] mb-1">04. Personalized Service</p>
            <p className="font-serif text-xl text-[#F6F3EC] mb-1">Direct Culinary Concierge</p>
            <p className="text-xs text-[#A89F91] leading-relaxed">
              Tailored cellar allocations, bespoke corporate gifting coffrets, and private event menu curation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
