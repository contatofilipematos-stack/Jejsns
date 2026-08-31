export interface Product {
  id: string;
  name: string;
  badge: string;
  imageUrl?: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  lockedFeatures?: string[];
  bonuses?: string[];
  ctaText: string;
  checkoutUrl?: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatarUrl?: string;
  location: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface BookletPage {
  pageNumber: number;
  title: string;
  subTitle: string;
  contentLines: string[];
  illustrationDesc: string;
  graphicStyle: 'candle' | 'cross' | 'angel' | 'rosary' | 'dove';
}

export interface VSLSlide {
  timeStart: number; // in seconds
  caption: string;
  slideTitle: string;
  slideBody: string;
  highlightWords: string[];
}
