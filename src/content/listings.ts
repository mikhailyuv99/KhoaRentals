export type Listing = {
  slug: string;
  title: string;
  priceUsdMonth: number;
  beds: number;
  baths: number;
  sizeSqft: number;
  neighborhood: string;
  description: string;
  image: string;
};

export const listings: Listing[] = [
  {
    slug: "my-khe-boutique-studio",
    title: "My Khe Boutique Studio",
    priceUsdMonth: 950,
    beds: 0,
    baths: 1,
    sizeSqft: 452,
    neighborhood: "Mỹ Khê",
    description: "Beach routine, strong Wi‑Fi, and an easy monthly setup.",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2400&q=80",
  },
  {
    slug: "hai-chau-modern-2br",
    title: "Hai Chau Modern 2BR",
    priceUsdMonth: 1400,
    beds: 2,
    baths: 2,
    sizeSqft: 925,
    neighborhood: "Hải Châu",
    description: "Central, practical layout for living and working.",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=2400&q=80",
  },
  {
    slug: "an-thuong-3br-townhouse",
    title: "An Thuong 3BR Townhouse",
    priceUsdMonth: 2200,
    beds: 3,
    baths: 3,
    sizeSqft: 1722,
    neighborhood: "An Thượng",
    description: "Family-friendly townhouse with a rooftop feel.",
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=2400&q=80",
  },
];

export function getListing(slug: string) {
  return listings.find((l) => l.slug === slug);
}

export function formatUsdCompact(amount: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount);
}

