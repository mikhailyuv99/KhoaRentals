export type Property = {
  slug: string;
  name: string;
  neighborhood: string;
  type: "Apartment" | "Villa" | "Studio" | "Townhouse" | "Penthouse" | "House";
  bedrooms: number; // 0 = studio
  bathrooms: number;
  sizeSqm?: number;
  pricePerMonthUsd: number;
  pricePerMonthVnd?: number;
  shortStayOk?: boolean;
  addressLine: string;
  map: { lat: number; lng: number };
  description: string;
  highlights: string[];
  amenities: string[];
  images: { src: string; alt: string }[];
};

export const USD_TO_VND = 25500;

export function toVndFromUsd(usd: number) {
  return Math.round(usd * USD_TO_VND);
}

export function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatVnd(amount: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const properties: Property[] = [
  {
    slug: "my-khe-boutique-studio",
    name: "My Khe Boutique Studio",
    neighborhood: "Mỹ Khê • Walk to beach",
    type: "Studio",
    bedrooms: 0,
    bathrooms: 1,
    sizeSqm: 42,
    pricePerMonthUsd: 950,
    shortStayOk: true,
    addressLine: "Steps from My Khe Beach, Đà Nẵng",
    map: { lat: 16.0595, lng: 108.2467 },
    description:
      "A bright, efficient studio built for monthly living—quiet sleep setup, strong Wi‑Fi, and an easy beach routine.",
    highlights: ["Beach walkable", "Strong Wi‑Fi", "Quiet sleep setup"],
    amenities: ["Air conditioning", "Kitchenette", "Elevator", "Desk area", "Washer access"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2400&q=80",
        alt: "Studio with bed and seating nook",
      },
      {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=80",
        alt: "Work desk corner with warm lighting",
      },
      {
        src: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=2400&q=80",
        alt: "Sunlit interior with plants",
      },
    ],
  },
  {
    slug: "hai-chau-modern-2br",
    name: "Hai Chau Modern 2BR",
    neighborhood: "Hải Châu • City center",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    sizeSqm: 86,
    pricePerMonthUsd: 1400,
    addressLine: "Central Hai Châu, Đà Nẵng",
    map: { lat: 16.0471, lng: 108.2062 },
    description:
      "Comfortable 2BR in the center—balanced layout for couples, small families, or a dedicated work room.",
    highlights: ["Central location", "Two bathrooms", "Comfortable work setup"],
    amenities: ["Full kitchen", "Washer", "Keyless entry", "Fast Wi‑Fi"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=2400&q=80",
        alt: "Living room with modern sofa and coffee table",
      },
      {
        src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2400&q=80",
        alt: "Bedroom with minimal decor",
      },
      {
        src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=2400&q=80",
        alt: "Kitchen with white cabinetry",
      },
    ],
  },
  {
    slug: "an-thuong-3br-townhouse",
    name: "An Thuong 3BR Townhouse",
    neighborhood: "An Thượng • Expat area",
    type: "Townhouse",
    bedrooms: 3,
    bathrooms: 3,
    sizeSqm: 160,
    pricePerMonthUsd: 2200,
    addressLine: "An Thượng area, Ngũ Hành Sơn, Đà Nẵng",
    map: { lat: 16.0431, lng: 108.247 },
    description:
      "Spacious multi-floor home with a rooftop feel—great for families or shared living.",
    highlights: ["Private rooftop", "Family-friendly layout", "Quiet street"],
    amenities: ["Full kitchen", "Washer", "Parking (limited)", "Fast Wi‑Fi"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=2400&q=80",
        alt: "Modern living space with dining table",
      },
      {
        src: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2a78?auto=format&fit=crop&w=2400&q=80",
        alt: "Bedroom with neutral palette",
      },
      {
        src: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=2400&q=80",
        alt: "Staircase with warm light",
      },
    ],
  },
];

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export function mapsEmbedUrl(lat: number, lng: number) {
  const q = encodeURIComponent(`${lat},${lng}`);
  return `https://www.google.com/maps?q=${q}&z=15&output=embed`;
}

export function mapsDirectionsUrl(lat: number, lng: number) {
  const q = encodeURIComponent(`${lat},${lng}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

