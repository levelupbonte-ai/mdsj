/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, TastingPackage, JournalArticle } from './types';

export const BRAND_NAME = 'MDSJ';
export const BRAND_FOUNDER = 'Marah Rosemond';
export const BRAND_CITY = 'San Diego, California';
export const BRAND_EMAIL = 'maraikarosemond68@gmail.com';
export const BRAND_PHONE = '+1 (619) 310-8637';

export const HERO_IMAGE = '/src/assets/images/hero_gourmet_tasting_1793833824511.jpg';
export const SALON_IMAGE = '/src/assets/images/salon_private_tasting_1793833831573.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'mdsj-01',
    name: 'Imperial Golden Osetra Caviar',
    tagline: 'Malossol-cured amber pearls of exceptional firm grain.',
    description: 'Hand-selected royal amber roe featuring a clean, nutty finish and velvety oceanic creaminess.',
    longDescription: 'Harvested from mature Acipenser gueldenstaedtii sturgeon raised in pristine artesian spring waters, our Imperial Golden Osetra represents the pinnacle of the MDSJ cellar. Only the top 4% of harvests achieve the shimmering old-gold hue and large, firm pearl structure required for our Private Reserve tin. Cured strictly to traditional Malossol standards (less than 3.2% sea salt) and packed to order in our temperature-controlled San Diego vault.',
    origin: 'Caspian Heritage Stock · Lombardy Spring Sanctuary',
    harvestBatch: 'Lot No. 2026-A84',
    tastingNotes: ['Toasted Brioche', 'Roasted Hazelnut', 'Sweet Cream', 'Crisp Brine'],
    pairingSuggestion: 'Serve over crushed glacier ice with a mother-of-pearl spoon alongside warm buckwheat blinis and Vintage Blanc de Blancs or MDSJ Botanical Cuvée.',
    price: 295,
    category: 'Caviar & Roe',
    allocationStatus: 'Limited Allocation',
    imageUrl: '/src/assets/images/product_imperial_caviar_1793833825706.jpg',
    gallery: [
      '/src/assets/images/product_imperial_caviar_1793833825706.jpg',
      '/src/assets/images/hero_gourmet_tasting_1793833824511.jpg'
    ],
    features: [
      'Traditional Malossol Cure (< 3.2% Sea Salt)',
      'Includes Hand-Carved Mother-of-Pearl Tasting Spoon',
      'Overnight Cold-Chain Insulated Courier Delivery'
    ],
    variants: [
      { label: 'Dégustation Tin', weight: '30g (1.05 oz)', price: 185 },
      { label: 'Salon Reserve Tin', weight: '50g (1.75 oz)', price: 295 },
      { label: 'Imperial Master Tin', weight: '125g (4.40 oz)', price: 680 }
    ]
  },
  {
    id: 'mdsj-02',
    name: 'Périgord Black Truffle & 24k Gold Elixir',
    tagline: 'First-press Arbequina olive oil infused with winter Tuber melanosporum.',
    description: 'Cold-pressed estate olive oil suspended with shaved black Périgord truffle and 24-karat edible gold leaf.',
    longDescription: 'Crafted in micro-batches for the discerning table, this luminous finishing oil marries single-estate Southern California cold-pressed olive oil with winter-harvested French Tuber melanosporum and delicate ribbons of 24-karat edible gold leaf. Unfiltered and free of synthetic aromas, each bottle is steeped for six weeks in dark stone vessels to extract the earthy, musky depth of wild black truffle.',
    origin: 'Dordogne Truffle · Santa Ynez Estate Olive',
    harvestBatch: 'Winter Récolte · Batch 19',
    tastingNotes: ['Damp Forest Floor', 'Black Cocoa', 'Roasted Garlic', 'Warm Peppery Olive'],
    pairingSuggestion: 'Drizzle tableside over hand-cut tajarin pasta, seared Hokkaido scallops, or aged Parmigiano-Reggiano.',
    price: 145,
    category: 'Truffle & Elixirs',
    allocationStatus: 'Available',
    imageUrl: '/src/assets/images/product_truffle_elixir_1793833826562.jpg',
    gallery: [
      '/src/assets/images/product_truffle_elixir_1793833826562.jpg',
      '/src/assets/images/hero_gourmet_tasting_1793833824511.jpg'
    ],
    features: [
      '100% Real Winter Tuber Melanosporum Infusion',
      'Certified 24-Karat Edible Gold Leaf Suspension',
      'Heavy UV-Shielded Apothecary Flint Glass'
    ],
    variants: [
      { label: 'Flacon', weight: '100ml (3.4 fl oz)', price: 145 },
      { label: 'Magnum Table Decanter', weight: '250ml (8.4 fl oz)', price: 290 }
    ]
  },
  {
    id: 'mdsj-03',
    name: 'Coastal White Sage, Saffron & Gold Honey',
    tagline: 'Unheated wildflower nectar steeped with Sargol saffron threads.',
    description: 'Raw San Diego coastal sage apiary honey infused with crimson saffron stigmas and 24k gold flake.',
    longDescription: 'Harvested from secluded apiaries along the Torrey Pines and Santa Margarita coastal bluffs, our raw white sage honey is prized for its water-white clarity and lingering botanical silkiness. We hand-infuse each faceted jar with Grade-A Sargol crimson saffron threads and edible gold leaf, creating a radiant, aromatic elixir that balances floral sweetness with warm, earthy spice.',
    origin: 'North County Coastal Bluffs, San Diego · Khorasan Saffron',
    harvestBatch: 'Spring Apiary · Lot 07',
    tastingNotes: ['Wild White Sage', 'Warm Hay & Honeyblossom', 'Spiced Saffron', 'Candied Citrus'],
    pairingSuggestion: 'Pair with triple-cream Brie de Meaux, warm figs, roasted marcona almonds, or spoon into evening herbal infusions.',
    price: 115,
    category: 'Truffle & Elixirs',
    allocationStatus: 'Seasonal Reserve',
    imageUrl: '/src/assets/images/product_saffron_honey_1793833828837.jpg',
    gallery: [
      '/src/assets/images/product_saffron_honey_1793833828837.jpg'
    ],
    features: [
      'Unheated & Unfiltered Raw Single-Apiary Nectar',
      'Whole Crimson Sargol Saffron Threads',
      'Numbered Faceted Presentation Jar with Brass Dipper'
    ],
    variants: [
      { label: 'Faceted Jar', weight: '250g (8.8 oz)', price: 115 },
      { label: 'Collector Reserve Jar', weight: '350g (12.3 oz)', price: 155 }
    ]
  },
  {
    id: 'mdsj-04',
    name: 'Aceto Balsamico Tradizionale 25 Anni',
    tagline: 'Quarter-century solera-aged Trebbiano grape must in five woods.',
    description: 'Syrupy, velvet-dark traditional balsamic aged for 25 years across oak, chestnut, cherry, juniper, and mulberry casks.',
    longDescription: 'Made exclusively from sun-ripened Trebbiano and Lambrusco grape must cooked over open flame and aged for over twenty-five years in a historic Modena acetaia loft. As seasons shift from scorching summers to freezing winters, the balsamic concentrates into a glossy, complex elixir. Hand-bottled and sealed in dark red wax with the MDSJ private cellar crest.',
    origin: 'Modena Hills, Emilia-Romagna, Italy',
    harvestBatch: 'Battery Cask No. 14 · Extra Vecchio',
    tastingNotes: ['Stewed Black Cherry', 'Dark Molasses', 'Smoked Chestnut', 'Velvet Acidity'],
    pairingSuggestion: 'Serve by the drop over dry-aged ribeye, fresh strawberries, artisanal burrata, or dark chocolate ganache.',
    price: 260,
    category: 'Aged Reserves',
    allocationStatus: 'Limited Allocation',
    imageUrl: '/src/assets/images/product_balsamic_reserve_1793833828245.jpg',
    gallery: [
      '/src/assets/images/product_balsamic_reserve_1793833828245.jpg'
    ],
    features: [
      '100% Cooked Trebbiano Must — Zero Added Caramel',
      '25-Year Five-Wood Battery Solera Maturation',
      'Hand-Dipped Wax Seal & Porcelain Tasting Pipette'
    ],
    variants: [
      { label: 'Wax-Sealed Flacon', weight: '100ml (3.4 fl oz)', price: 260 },
      { label: 'Vault Edition with Wooden Case', weight: '100ml + Porcelain Spoon', price: 320 }
    ]
  },
  {
    id: 'mdsj-05',
    name: 'Le Coffret Dégustation d’Or',
    tagline: 'Four-piece artisan tasting flight in bespoke walnut and brass.',
    description: 'Handcrafted American black walnut coffret housing four signature MDSJ culinary reserves.',
    longDescription: 'Designed for unforgettable gifting and at-home tasting rituals, Le Coffret Dégustation d’Or presents four of our most coveted small-batch creations nested in royal midnight velvet inside a solid walnut and brushed brass lockbox. Includes Black Truffle Honey, Fig & 25-Year Balsamic Preserve, Bronte Pistachio Velvet Crema, and Smoked Calabrian Chilli & Gold Jelly.',
    origin: 'Curated in San Diego · European & California Estates',
    harvestBatch: 'Edition Limitée · 250 Coffrets',
    tastingNotes: ['Earthy Truffle', 'Caramelized Fig', 'Roasted Sicilian Pistachio', 'Warm Smoked Chili'],
    pairingSuggestion: 'The definitive centerpiece for artisanal charcuterie boards, artisanal fromageries, and private yacht entertaining.',
    price: 340,
    category: 'Tasting Coffrets',
    allocationStatus: 'Available',
    imageUrl: '/src/assets/images/product_tasting_coffret_1793833830603.jpg',
    gallery: [
      '/src/assets/images/product_tasting_coffret_1793833830603.jpg'
    ],
    features: [
      'Solid Walnut & Brushed Brass Keepsake Case',
      'Includes Brushed Gold Tasting Spoon & Pairing Guide',
      'Complimentary Handwritten Calligraphed Gift Card'
    ],
    variants: [
      { label: 'Four-Jar Flight Coffret', weight: '4 × 85g Jars', price: 340 },
      { label: 'Grand Sommelier Coffret (with Caviar)', weight: '4 × 85g + 30g Osetra', price: 510 }
    ]
  },
  {
    id: 'mdsj-06',
    name: 'Cuvée Botanique d’Or (0.0% ABV)',
    tagline: 'Sparkling verjus, white tea, and coastal botanicals.',
    description: 'Complex zero-proof gastronomic sparkling cuvée crafted from organic early-harvest Chardonnay verjus and silver needle tea.',
    longDescription: 'Created in collaboration with master sommeliers to accompany haute gastronomy without alcohol, Cuvée Botanique d’Or undergoes a slow cold-maceration of organic Sonoma verjus, Fujian white peony tea, Meyer lemon blossom, and toasted oak bark. Fine, persistent pinpoint bubbles and crisp minerality cleanse the palate between courses of caviar and truffle.',
    origin: 'Sonoma Coast Verjus · Blended in California',
    harvestBatch: 'Tirage 2026 · Disgorged Quarterly',
    tastingNotes: ['Crisp Green Apple', 'White Peach Blossom', 'Brioche Crust', 'Saline Minerality'],
    pairingSuggestion: 'Serve chilled at 45°F in crystal tulipe or coupe stems alongside raw bar selections and Imperial Osetra.',
    price: 95,
    category: 'Aged Reserves',
    allocationStatus: 'Available',
    imageUrl: '/src/assets/images/product_champagne_cuvee_1793833832411.jpg',
    gallery: [
      '/src/assets/images/product_champagne_cuvee_1793833832411.jpg'
    ],
    features: [
      '0.0% ABV Gastronomic Sommelier Cuvée',
      'Zero Added Refined Sugars or Artificial Extracts',
      'Gold-Foiled 750ml Champagne Flacon'
    ],
    variants: [
      { label: 'Single Bottle', weight: '750ml', price: 95 },
      { label: 'Two-Bottle Salon Duo', weight: '2 × 750ml', price: 180 },
      { label: 'Six-Bottle Cellar Case', weight: '6 × 750ml', price: 510 }
    ]
  }
];

export const TASTING_PACKAGES: TastingPackage[] = [
  {
    id: 'tasting-salon',
    title: 'La Jolla Twilight Caviar & Truffle Salon',
    subtitle: 'Intimate guided tasting at the MDSJ Coastal Sanctuary',
    duration: '2.5 Hours',
    locationType: 'La Jolla Coastal Salon',
    pricePerGuest: 245,
    minGuests: 2,
    maxGuests: 10,
    courses: [
      'Welcome Pour of Chilled Cuvée Botanique d’Or or Vintage Champagne',
      'Comparative Flight: Imperial Golden Osetra vs. Kaluga Hybrid Reserve',
      'Warm Artisanal Buckwheat Blinis, Cultured Normandy Butter & Chive Blossom',
      'Hand-Shaved Black Périgord Truffle over Stracciatella & Aged 25-Year Balsamic',
      'Coastal White Sage & Saffron Honey Pairing with Triple-Cream Fromage'
    ],
    description: 'Hosted overlooking the Pacific horizon in our candlelit La Jolla tasting salon, this five-course sensory exploration is led by an MDSJ Gastronomy Director.'
  },
  {
    id: 'tasting-estate',
    title: 'Private Residence & Estate Table Service',
    subtitle: 'Bespoke chef & sommelier tasting brought to your dining room',
    duration: '3.5 Hours',
    locationType: 'Private Residence',
    pricePerGuest: 390,
    minGuests: 4,
    maxGuests: 16,
    courses: [
      'Full Crystal, Mother-of-Pearl & Brass Table Scaping by MDSJ Concierge',
      'Royal Caviar Service on Hand-Carved Ice Plinths',
      'Tableside Shaved Truffle & 24k Gold Elixir Pasta Course',
      '25-Year Modena Balsamic & Wagyu A5 Medallion Degustation',
      'Take-Home Numbered Jar of Saffron & Gold Honey for Each Guest'
    ],
    description: 'Transform your San Diego, Rancho Santa Fe, or Del Mar residence into a private Michelin-caliber tasting room with full white-glove service and custom menu design.'
  },
  {
    id: 'tasting-yacht',
    title: 'Pacific Charter & Superyacht Provisioning',
    subtitle: 'Curated sunset deck service & luxury galley provisioning',
    duration: 'Half-Day / Sunset',
    locationType: 'Yacht & Estate',
    pricePerGuest: 475,
    minGuests: 4,
    maxGuests: 20,
    courses: [
      'Dockside Cold-Chain Delivery to San Diego Bay or Coronado Marinas',
      'Dedicated Onboard Caviar & Sommelier Steward',
      '125g Imperial Master Tin Service with Traditional Accompaniments',
      'Le Coffret Dégustation d’Or Artisanal Grazing Architecture',
      'Custom-Engraved Walnut Coffret Keepsake for the Host'
    ],
    description: 'Tailored for private vessels and coastal charters departing San Diego, delivering effortless maritime indulgence from the first mooring to sunset.'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 1,
    title: 'The Architecture of Malossol: Why Salt Is the Silent Master of Caviar',
    subtitle: 'Inside the delicate equilibrium between preservation and pure oceanic terroir.',
    date: 'November 2026',
    readTime: '4 min read',
    category: 'Savoir-Faire',
    excerpt: 'Why a fraction of a percent of sea salt determines whether sturgeon roe whispers of toasted hazelnut or loses its soul.',
    image: '/src/assets/images/product_imperial_caviar_1793833825706.jpg',
    content: React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'p',
        { className: 'mb-6 text-[#D5CFC2] leading-relaxed text-lg' },
        'In Russian culinary lexicon, the word "Malossol" translates simply to "little salt." Yet behind that modest phrase lies the most unforgiving craft in haute gastronomy. Before refrigeration, sturgeon roe was heavily salted to survive long overland journeys, masking the delicate nuances of the pearl beneath a wall of brine.'
      ),
      React.createElement(
        'p',
        { className: 'mb-8 text-[#D5CFC2] leading-relaxed text-lg' },
        'At MDSJ, our master curers work within a razor-thin margin of 2.8% to 3.2% pure sea salt. At this exact threshold, the salt acts as an acoustic amplifier rather than a mask—drawing out the buttery, hazelnut, and sweet-cream notes native to mature Golden Osetra.'
      ),
      React.createElement(
        'div',
        { className: 'my-10 p-8 bg-[#14120E] border border-[#E5B84B]/25 text-center font-serif italic text-2xl text-[#F6F3EC]' },
        '"Never let silver touch the pearl. Metal oxidizes the roe in seconds; only mother-of-pearl, horn, or gold preserves its quiet symphony."'
      ),
      React.createElement(
        'p',
        { className: 'mb-6 text-[#D5CFC2] leading-relaxed text-lg' },
        'When you open an MDSJ reserve tin in San Diego, we recommend letting it rest on crushed ice for five minutes before the first spoonful. As the temperature rises slightly from 29°F to 36°F, the natural lipids bloom on the palate.'
      )
    )
  },
  {
    id: 2,
    title: 'Twenty-Five Winters in Modena: The Solera Ritual of Traditional Balsamic',
    subtitle: 'How five distinct woods transform cooked Trebbiano grape must into black gold.',
    date: 'October 2026',
    readTime: '5 min read',
    category: 'Provenance',
    excerpt: 'Up in the silent attics of Emilia-Romagna, time and extreme seasonal shifts concentrate grape must drop by drop.',
    image: '/src/assets/images/product_balsamic_reserve_1793833828245.jpg',
    content: React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'p',
        { className: 'mb-6 text-[#D5CFC2] leading-relaxed text-lg' },
        'Commercial balsamic vinegar is made in hours by blending wine vinegar with caramel coloring. True Aceto Balsamico Tradizionale contains only one ingredient: sun-ripened Trebbiano grape must, simmered over open fires and aged for a quarter-century in a diminishing progression of wooden casks.'
      ),
      React.createElement(
        'p',
        { className: 'mb-8 text-[#D5CFC2] leading-relaxed text-lg' },
        'Each wood in the battery imparts its signature: oak lends vanilla structure, chestnut contributes dark tannins, cherry softens with fruit sweetness, juniper breathes resinous spice, and mulberry concentrates the elixir into velvet.'
      )
    )
  },
  {
    id: 3,
    title: 'Hosting the Modern Coastal Salon in San Diego',
    subtitle: 'Founder Marah Rosemond on bringing unhurried European tasting rituals to the Pacific coast.',
    date: 'October 2026',
    readTime: '3 min read',
    category: 'Private Dining',
    excerpt: 'From La Jolla twilight terraces to private estates, how to compose an unforgettable multi-sensory tasting table.',
    image: '/src/assets/images/salon_private_tasting_1793833831573.jpg',
    content: React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'p',
        { className: 'mb-6 text-[#D5CFC2] leading-relaxed text-lg' },
        'San Diego possesses one of the most extraordinary natural settings in the world—where warm coastal sage meets the cool marine layer of the Pacific. Yet true luxury entertaining requires more than a view; it demands intimacy, provenance, and unhurried pacing.'
      ),
      React.createElement(
        'p',
        { className: 'mb-8 text-[#D5CFC2] leading-relaxed text-lg' },
        'When we founded MDSJ, our vision was to bridge the gap between a rarefied European epicurean house and personalized private hospitality. Whether you are acquiring a single tin of Imperial Osetra for an anniversary evening or commissioning our sommeliers for a twelve-guest estate tasting, every detail is choreographed.'
      )
    )
  }
];