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
      "https://framerusercontent.com/images/j2QYWllgUp5uE041LD3o4xPMUIM.png",
      "https://framerusercontent.com/images/K3nhTCEPHAqCEAUh14X6j0DdczQ.jpg",
      "https://framerusercontent.com/images/ijNsvMrB01PYB3U2c5Bbp6AmzY.png",
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
      "https://framerusercontent.com/images/6XIqzXeMR6YgzkiQNI8aNpNt9Yo.png",
      "https://framerusercontent.com/images/QsK0Wa19ixHsubAp0p5S0t5S5w.png",
      "https://framerusercontent.com/images/ZUgAXt4WbSwkvj6EyPHhKxg5vMo.png",
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
      "https://framerusercontent.com/images/rDUuK6TPTafFezTpUu0H4njdJ8.png",
      "https://framerusercontent.com/images/f1BoyBAUb7v56qlSKfmD52BmChY.png",
      "https://framerusercontent.com/images/oEE6UImbMYP4sS2e6InJtPHDaS0.png",
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
      "https://framerusercontent.com/images/5rbBnU4EZudjdrSDJqFkv0L6wk.png",
      "https://framerusercontent.com/images/qjwAvYEozr6t1IMJuJKUOjVhk0g.png",
      "https://framerusercontent.com/images/aBNdRRfoCs4n1jaQM51t1jvvCNE.png",
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
      "https://framerusercontent.com/images/h47Rv2shExyEhkfIVA3PIrL5bY.png",
      "https://framerusercontent.com/images/MS80W0sxz4jGITNqDTXdRZDT40k.png",
      "https://framerusercontent.com/images/Yx0i61oZSbtRM8MWusQDx81Wvw.png",
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
      "https://framerusercontent.com/images/wAdSPQGdzEABwWjwwWOqCZX5pQ.png",
      "https://framerusercontent.com/images/r5SLvXiUOw1r08u56p0rDtBoxU.png",
      "https://framerusercontent.com/images/1nqhq5KhaD6OCufbGLQNTjR0Q9M.png",
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

