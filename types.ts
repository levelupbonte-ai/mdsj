/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface ProductVariant {
  label: string;
  weight: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  origin: string;
  harvestBatch: string;
  tastingNotes: string[];
  pairingSuggestion: string;
  price: number;
  category: 'Caviar & Roe' | 'Truffle & Elixirs' | 'Aged Reserves' | 'Tasting Coffrets';
  allocationStatus: 'Limited Allocation' | 'Available' | 'Seasonal Reserve';
  imageUrl: string;
  gallery?: string[];
  features: string[];
  variants: ProductVariant[];
}

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface TastingPackage {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  locationType: 'La Jolla Coastal Salon' | 'Private Residence' | 'Yacht & Estate';
  pricePerGuest: number;
  minGuests: number;
  maxGuests: number;
  courses: string[];
  description: string;
}

export interface TastingReservation {
  id: string;
  packageTitle: string;
  date: string;
  timeSlot: string;
  guests: number;
  venue: string;
  dietaryNotes: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  totalEstimate: number;
  createdAt: string;
}

export interface JournalArticle {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  image: string;
  content: React.ReactNode;
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'product'; product: Product }
  | { type: 'journal'; article: JournalArticle }
  | { type: 'checkout' };
