export type Listing = {
  slug: string;
  title: string;
  monthlyUsd: number;
  monthlyVnd: number;
  beds: number;
  baths: number;
  sizeM2: number;
  area: string;
  address: string;
  about: string;
  availability: "Available" | "Rented";
  location: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  images: [string, string, string];
};

export const listings: Listing[] = [
  {
    slug: "studio-an-thuong-26",
    title: "Modern studio near An Thuong",
    availability: "Available",
    about:
      "Bright studio with full kitchen, elevator building, weekly cleaning, and a short walk to cafes and the beach.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1800&q=80",
    ],
    monthlyUsd: 380,
    monthlyVnd: 9500000,
    sizeM2: 35,
    beds: 0,
    baths: 1,
    area: "My An (An Thuong)",
    address: "An Thuong 26, My An, Ngu Hanh Son, Da Nang",
    location: { lat: 16.0549, lng: 108.2403 },
    googleMapsUrl: "https://www.google.com/maps?q=16.0549,108.2403",
  },
  {
    slug: "1br-my-khe-ocean-view",
    title: "1BR apartment near My Khe Beach",
    availability: "Available",
    about:
      "Comfortable 1-bedroom with balcony, strong Wi‑Fi, gym access, and easy beach access. Great for monthly stays.",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1800&q=80",
    ],
    monthlyUsd: 650,
    monthlyVnd: 16500000,
    sizeM2: 55,
    beds: 1,
    baths: 1,
    area: "Son Tra (My Khe)",
    address: "Vo Nguyen Giap, Phuoc My, Son Tra, Da Nang",
    location: { lat: 16.0667, lng: 108.2440 },
    googleMapsUrl: "https://www.google.com/maps?q=16.0667,108.2440",
  },
  {
    slug: "2br-hai-chau-city-center",
    title: "2BR in Hai Chau city center",
    availability: "Available",
    about:
      "Spacious 2-bedroom close to Han Market and the river. Quiet building, easy parking, and modern kitchen.",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1800&q=80",
    ],
    monthlyUsd: 750,
    monthlyVnd: 19000000,
    sizeM2: 75,
    beds: 2,
    baths: 2,
    area: "Hai Chau",
    address: "Hai Chau 1, Hai Chau, Da Nang",
    location: { lat: 16.0682, lng: 108.2238 },
    googleMapsUrl: "https://www.google.com/maps?q=16.0682,108.2238",
  },
  {
    slug: "house-3br-hoa-xuan",
    title: "3BR house in Hoa Xuan",
    availability: "Available",
    about:
      "Family-friendly 3-bedroom house with lots of natural light, nearby parks, and quick access to both beach and city center.",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1800&q=80",
    ],
    monthlyUsd: 900,
    monthlyVnd: 23000000,
    sizeM2: 120,
    beds: 3,
    baths: 3,
    area: "Cam Le (Hoa Xuan)",
    address: "Hoa Xuan, Cam Le, Da Nang",
    location: { lat: 16.0087, lng: 108.2147 },
    googleMapsUrl: "https://www.google.com/maps?q=16.0087,108.2147",
  },
  {
    slug: "2br-river-view-han",
    title: "2BR river-view near Han Bridge",
    availability: "Rented",
    about:
      "Popular 2-bedroom with river view and walkable access to cafes. Currently rented—ask for similar options.",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1800&q=80",
    ],
    monthlyUsd: 820,
    monthlyVnd: 21000000,
    sizeM2: 80,
    beds: 2,
    baths: 2,
    area: "Son Tra (near Han Bridge)",
    address: "An Hai Bac, Son Tra, Da Nang",
    location: { lat: 16.0787, lng: 108.2300 },
    googleMapsUrl: "https://www.google.com/maps?q=16.0787,108.2300",
  },
  {
    slug: "villa-4br-ngu-hanh-son",
    title: "4BR villa near the beach (family)",
    availability: "Available",
    about:
      "Private villa with courtyard space, modern furnishings, and room for longer stays. Great for families and groups.",
    images: [
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=1800&q=80",
    ],
    monthlyUsd: 1600,
    monthlyVnd: 41000000,
    sizeM2: 220,
    beds: 4,
    baths: 4,
    area: "Ngu Hanh Son",
    address: "Ngu Hanh Son, Da Nang",
    location: { lat: 16.0410, lng: 108.2470 },
    googleMapsUrl: "https://www.google.com/maps?q=16.041,108.247",
  },
];

export function getListing(slug: string) {
  return listings.find((l) => l.slug === slug);
}

export function formatUsdCompact(value: number) {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return `$${Math.round(value)}`;
  }
}

export function formatVndCompact(value: number) {
  try {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return `${Math.round(value)}₫`;
  }
}

