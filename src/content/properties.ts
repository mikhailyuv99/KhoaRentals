export type Property = {
  slug: string;
  name: string;
  neighborhood: string;
  type: "Apartment" | "Villa" | "Studio" | "Townhouse" | "Penthouse";
  bedrooms: number;
  bathrooms: number;
  guests: number;
  sizeSqm?: number;
  pricePerMonthUsd: number;
  pricePerMonthVnd?: number;
  addressLine: string;
  map: {
    lat: number;
    lng: number;
    label: string;
  };
  highlights: string[];
  description: string;
  images: { src: string; alt: string }[];
  amenities: string[];
};

const mapsLabel = (name: string) => `KHOA Rentals — ${name}`;

export const USD_TO_VND = 25500;

export const properties: Property[] = [
  {
    slug: "son-tra-oceanview-penthouse",
    name: "Son Tra Oceanview Penthouse",
    neighborhood: "Son Trà • Sea-facing",
    type: "Penthouse",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    sizeSqm: 118,
    pricePerMonthUsd: 2500,
    addressLine: "Near Vo Nguyen Giap beach road, Son Trà, Đà Nẵng",
    map: {
      lat: 16.0627,
      lng: 108.2439,
      label: mapsLabel("Son Tra Oceanview Penthouse"),
    },
    highlights: [
      "Panoramic ocean balcony",
      "Quiet elevator building",
      "Designer furnishings & warm lighting",
    ],
    description:
      "A calm, high-floor penthouse designed for long stays and late sunsets. Expect clean lines, natural textures, and an open-plan living space that frames the coastline. Perfect for couples, founders, and anyone who wants a premium base in Son Trà.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2400&q=80",
        alt: "Bright luxury living room with large windows",
      },
      {
        src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2400&q=80",
        alt: "Bedroom with modern neutral tones",
      },
      {
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=2400&q=80",
        alt: "Minimal kitchen and dining area",
      },
      {
        src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=2400&q=80",
        alt: "Cozy lounge seating with textures",
      },
    ],
    amenities: [
      "Fast Wi‑Fi",
      "Washer",
      "Equipped kitchen",
      "Smart TV",
      "Weekly cleaning (optional)",
      "24/7 self check‑in",
    ],
  },
  {
    slug: "my-khe-boutique-studio",
    name: "My Khe Boutique Studio",
    neighborhood: "Mỹ Khê • Walk to beach",
    type: "Studio",
    bedrooms: 0,
    bathrooms: 1,
    guests: 2,
    sizeSqm: 42,
    pricePerMonthUsd: 950,
    addressLine: "Steps from My Khe Beach, Đà Nẵng",
    map: {
      lat: 16.0595,
      lng: 108.2467,
      label: mapsLabel("My Khe Boutique Studio"),
    },
    highlights: ["Beach walkable", "Coffee & gyms nearby", "Hotel-grade linen"],
    description:
      "A boutique studio with a crisp, airy feel—made for short stays and easy living. Start mornings with a beach walk, then work from the built-in desk area with strong Wi‑Fi and calm natural light.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2400&q=80",
        alt: "Studio with bed and seating nook",
      },
      {
        src: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=2400&q=80",
        alt: "Sunlit interior with plants",
      },
      {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=80",
        alt: "Work desk corner with warm lighting",
      },
    ],
    amenities: ["Fast Wi‑Fi", "Air conditioning", "Kitchenette", "Elevator", "Reception hours"],
  },
  {
    slug: "hai-chau-modern-2br",
    name: "Hai Chau Modern 2BR",
    neighborhood: "Hải Châu • City center",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    sizeSqm: 86,
    pricePerMonthUsd: 1400,
    addressLine: "Central Hai Châu, Đà Nẵng",
    map: {
      lat: 16.0471,
      lng: 108.2062,
      label: mapsLabel("Hai Chau Modern 2BR"),
    },
    highlights: ["Central location", "Comfortable work setup", "Easy airport access"],
    description:
      "A refined city apartment with thoughtful details for business travelers and families. Balanced lighting, a comfortable sofa, and a clean kitchen make it easy to settle in for a week—or a month.",
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
    amenities: ["Fast Wi‑Fi", "Washer", "Full kitchen", "Two bathrooms", "Keyless entry"],
  },
  {
    slug: "an-thuong-3br-townhouse",
    name: "An Thuong 3BR Townhouse",
    neighborhood: "An Thượng • Expat area",
    type: "Townhouse",
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    sizeSqm: 160,
    pricePerMonthUsd: 2200,
    addressLine: "An Thượng area, Ngũ Hành Sơn, Đà Nẵng",
    map: {
      lat: 16.0431,
      lng: 108.247,
      label: mapsLabel("An Thuong 3BR Townhouse"),
    },
    highlights: ["Private rooftop", "Family-friendly layout", "Quiet street"],
    description:
      "A spacious multi-floor home with a rooftop for evenings and a layout that works for friends or families. Walk to restaurants in An Thượng while keeping the calm of a residential street.",
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
    amenities: ["Fast Wi‑Fi", "Full kitchen", "Rooftop", "Washer", "Parking (limited)"],
  },
  {
    slug: "non-nuoc-garden-villa",
    name: "Non Nuoc Garden Villa",
    neighborhood: "Non Nước • Resort side",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 4,
    guests: 8,
    sizeSqm: 320,
    pricePerMonthUsd: 4500,
    addressLine: "Near Non Nuoc Beach, Đà Nẵng",
    map: {
      lat: 15.9966,
      lng: 108.267,
      label: mapsLabel("Non Nuoc Garden Villa"),
    },
    highlights: ["Private pool feel", "Outdoor dining", "Ideal for groups"],
    description:
      "A high-end villa atmosphere with indoor-outdoor flow, greenery, and a layout built for groups. Host relaxed dinners, unwind after beach days, and enjoy a premium stay close to resort areas.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=2400&q=80",
        alt: "Luxury villa living room with large glass doors",
      },
      {
        src: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=2400&q=80",
        alt: "Outdoor seating area",
      },
      {
        src: "https://images.unsplash.com/photo-1505849871410-3f64f3b6190d?auto=format&fit=crop&w=2400&q=80",
        alt: "Bedroom with hotel-grade styling",
      },
    ],
    amenities: [
      "Fast Wi‑Fi",
      "Full kitchen",
      "Outdoor area",
      "Multiple bathrooms",
      "Airport transfer (optional)",
    ],
  },
  {
    slug: "riverfront-luxe-1br",
    name: "Riverfront Luxe 1BR",
    neighborhood: "Han River • Night skyline",
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    sizeSqm: 58,
    pricePerMonthUsd: 1200,
    addressLine: "Near Han River, Đà Nẵng",
    map: {
      lat: 16.0752,
      lng: 108.2234,
      label: mapsLabel("Riverfront Luxe 1BR"),
    },
    highlights: ["River views", "Walkable dining", "Quiet bedroom"],
    description:
      "A luxe one-bedroom with a relaxed mood and a river-facing view—perfect for a comfortable mid-length stay. Enjoy the city’s evening energy while keeping a calm, premium interior.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=2400&q=80",
        alt: "Living area with modern couch and warm lighting",
      },
      {
        src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2400&q=80",
        alt: "Bedroom with soft textiles",
      },
      {
        src: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=2400&q=80",
        alt: "Kitchen counter with stools",
      },
    ],
    amenities: ["Fast Wi‑Fi", "Air conditioning", "Kitchen", "Blackout curtains", "Gym access (building)"],
  },
];

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export const featuredProperties = properties.slice(0, 3);

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

export function toVndFromUsd(usd: number) {
  return Math.round(usd * USD_TO_VND);
}

export function mapsEmbedUrl(lat: number, lng: number) {
  const q = encodeURIComponent(`${lat},${lng}`);
  return `https://www.google.com/maps?q=${q}&z=15&output=embed`;
}

export function mapsDirectionsUrl(lat: number, lng: number, label?: string) {
  const destination = `${lat},${lng}`;
  const query = label ? `${label} (${destination})` : destination;
  const q = encodeURIComponent(query);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}
