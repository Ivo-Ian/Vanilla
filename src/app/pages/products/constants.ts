export interface Product {
  name: string;
  size: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
}

export const PRODUCTS: Product[] = [
  {
    name: 'Grade A Vanilla',
    size: '15-18 cm',
    price: '$100',
    description: 'Premium quality, flexible, aromatic. Ideal for chefs and businesses.',
    features: [
      'Flexible and plump beans',
      'Rich, aromatic fragrance',
      'Moisture content: 30-35%',
      'Perfect for culinary use',
      'Ideal for restaurants and bakeries',
      'Visible vanillin crystals',
    ],
    popular: false,
  },
  {
    name: 'Grade A Gourmet Vanilla',
    size: 'Premium Select',
    price: '$150',
    description: 'Highest quality, thick beans, high vanillin content. Luxury grade.',
    features: [
      'Extra thick and oily beans',
      'Highest vanillin content',
      'Exceptional aroma and flavor',
      'Moisture content: 30-35%',
      'Perfect for high-end applications',
      'Individually selected for perfection',
    ],
    popular: true,
  },
  {
    name: 'TK Vanilla',
    size: 'Basic Grade',
    price: '$80',
    description: 'More affordable, ideal for extracts and bulk use.',
    features: [
      'Great value for money',
      'Perfect for vanilla extract',
      'Suitable for bulk processing',
      'Good aromatic properties',
      'Ideal for manufacturing',
      'Consistent quality',
    ],
    popular: false,
  },
];
