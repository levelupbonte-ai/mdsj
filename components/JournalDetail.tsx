/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { JournalArticle } from '../types';
import { BRAND_NAME } from '../constants';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0C0A] text-[#F6F3EC] pt-20 animate-fade-in-up">
      <div className="w-full h-[45vh] md:h-[55vh] relative overflow-hidden bg-[#15130F]">
        {!imgError ? (
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-serif italic text-3xl text-[#E5B84B]">{article.title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A] via-[#0D0C0A]/40 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 -mt-28 relative z-10 pb-28">
        <div className="bg-[#15130F] border border-[#E5B84B]/20 p-8 md:p-16">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-10 border-b border-[#E5B84B]/15 pb-6">
            <button
              type="button"
              onClick={onBack}
              className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A89F91] hover:text-[#E5B84B] transition-colors"
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
              Back to Journal
            </button>

            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A89F91]">
              <span className="text-[#E5B84B]">{article.category}</span>
              <span aria-hidden="true">·</span>
              <span>{article.date}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </div>
          </div>

          <h1
            className="text-3xl md:text-5xl font-serif text-[#F6F3EC] mb-4 leading-tight"
            style={{ textWrap: 'balance' }}
          >
            {article.title}
          </h1>

          <p className="font-serif italic text-xl text-[#A89F91] mb-10">{article.subtitle}</p>

          <div className="font-light leading-relaxed text-[#D5CFC2]">{article.content}</div>

          <div className="mt-14 pt-10 border-t border-[#E5B84B]/15 flex justify-between items-center">
            <span className="text-xl font-serif tracking-[0.18em] text-[#E5B84B]">{BRAND_NAME}</span>
            <button
              type="button"
              onClick={onBack}
              className="text-xs uppercase tracking-widest text-[#A89F91] hover:text-[#F6F3EC]"
            >
              Return to Gazette
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalDetail;
