/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick }) => {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  return (
    <section id="journal" className="bg-[#0D0C0A] py-24 px-6 md:px-12 border-b border-[#E5B84B]/15">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-[#E5B84B]/15">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5B84B] mb-3">
              <span>05. Editorial &amp; Provenance</span>
              <span aria-hidden="true">·</span>
              <span>The Culinary Gazette</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#F6F3EC]">The MDSJ Journal</h2>
          </div>
          <p className="text-sm text-[#A89F91] max-w-md font-light mt-4 md:mt-0">
            Field notes on Malossol curing, Modena acetaia aging lofts, and the art of hosting coastal tasting salons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onArticleClick(article)}
              className="group cursor-pointer flex flex-col justify-between bg-[#15130F] border border-[#E5B84B]/15 hover:border-[#E5B84B]/45 transition-colors"
            >
              <div>
                <div className="w-full aspect-[4/3] overflow-hidden bg-[#1C1914]">
                  {!imgErrors[article.id] ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      referrerPolicy="no-referrer"
                      onError={() => setImgErrors((prev) => ({ ...prev, [article.id]: true }))}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-6 text-center">
                      <span className="font-serif italic text-xl text-[#E5B84B]">
                        {article.category}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#A89F91] uppercase tracking-wider mb-3">
                    <span className="text-[#E5B84B]">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-serif text-[#F6F3EC] mb-3 leading-snug group-hover:text-[#E5B84B] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm text-[#A89F91] font-light leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-[#E5B84B]/10">
                <span className="text-xs uppercase tracking-widest text-[#E5B84B] group-hover:underline underline-offset-4">
                  Read Dispatch →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
