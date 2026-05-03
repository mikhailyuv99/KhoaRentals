export type LandingListing = {
  id: number;
  title: string;
  location: string;
  area: string;
  type: string;
  beds: number;
  baths: number;
  price: number;
  features: string;
  badge?: string;
  images: string[];
  /** Google Maps embed iframe `src` */
  mapSrc: string;
  keywords: string;
  description: string;
};

export const landingListings: LandingListing[] = [
  {
    id: 1,
    title: "Modern Studio near My Khe Beach",
    location: "My Khe, Son Tra",
    area: "my-khe",
    type: "studio",
    beds: 1,
    baths: 1,
    price: 250,
    features: "WiFi • AC • Kitchen • Balcony",
    badge: "Popular",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=600&q=80",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.8!2d108.241!3d16.054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b27a45e5!2zTeG7uSBI4bqhaSwgxJDDoCBO4bq1bmc!5e0!3m2!1sen!2s!4v1699000000000",
    keywords: "studio beach my khe modern cheap",
    description:
      "Bright modern studio just 5 minutes walk to My Khe Beach. Perfect for digital nomads or singles. Includes high-speed WiFi, AC, kitchenette, and a private balcony with city views.",
  },
  {
    id: 2,
    title: "2BR Apartment Hai Chau Center",
    location: "Hai Chau District",
    area: "hai-chau",
    type: "apartment",
    beds: 2,
    baths: 1,
    price: 350,
    features: "Furnished • Gym • Pool • Security",
    badge: "New",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.3!2d108.221!3d16.068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142188a0a3c0d7d%3A0xc2c5b5b5b5b5b5b5!2zSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5n!5e0!3m2!1sen!2s!4v1699000000000",
    keywords: "apartment city center hai chau furnished pool",
    description:
      "Spacious furnished apartment in the heart of Hai Chau. Building has gym, pool, and 24/7 security. Walking distance to Han Market and Dragon Bridge.",
  },
  {
    id: 3,
    title: "Cozy House in Son Tra",
    location: "Son Tra Peninsula",
    area: "son-tra",
    type: "house",
    beds: 3,
    baths: 2,
    price: 450,
    features: "Garden • Parking • Pet Friendly • AC",
    badge: "Hot",
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.2!2d108.261!3d16.059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a14%3A0x2df0cb4b27a45e6!2zU8ahbiBUcsOgLCBEYSBOYW5n!5e0!3m2!1sen!2s!4v1699000000000",
    keywords: "house son tra garden pet friendly family",
    description:
      "Charming 3-bedroom house in quiet Son Tra neighborhood. Features a large garden, parking, and pets are welcome. Perfect for families or couples wanting extra space.",
  },
  {
    id: 4,
    title: "Budget Studio An Thuong",
    location: "An Thuong, Ngu Hanh Son",
    area: "ngu-hanh-son",
    type: "studio",
    beds: 1,
    baths: 1,
    price: 200,
    features: "WiFi • AC • Shared Kitchen",
    badge: "Budget",
    images: [
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=600&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.5!2d108.251!3d16.048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a16%3A0x5df0cb4b27a45e8!2zQW4gVGjGsOG7o25nLCBEYSBOYW5n!5e0!3m2!1sen!2s!4v1699000000000",
    keywords: "studio budget cheap an thuong expat area",
    description:
      "Affordable studio in the popular An Thuong expat area. Close to restaurants, cafes, and a short drive to the beach. Great for budget-conscious foreigners.",
  },
  {
    id: 5,
    title: "3BR Family House My Khe",
    location: "My Khe Beach Area",
    area: "my-khe",
    type: "house",
    beds: 3,
    baths: 2,
    price: 550,
    features: "Full Kitchen • Garden • Parking • Near Beach",
    badge: "Family",
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.9!2d108.242!3d16.055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b27a45e5!2zTeG7uSBI4bqhaSwgxJDDoCBO4bq1bmc!5e0!3m2!1sen!2s!4v1699000000000",
    keywords: "house family beach my khe large garden",
    description:
      "Spacious 3-bedroom house perfect for families, just 3 minutes walk to My Khe Beach. Full kitchen, garden, and private parking included.",
  },
  {
    id: 6,
    title: "1BR Apartment Dragon Bridge",
    location: "Hai Chau, Near Dragon Bridge",
    area: "hai-chau",
    type: "apartment",
    beds: 1,
    baths: 1,
    price: 280,
    features: "River View • Gym • WiFi • AC",
    badge: "View",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.3!2d108.227!3d16.061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a15%3A0x1df0cb4b27a45e7!2zQ-G6p3UgUsO0bmcsIMSQw6AgTuG6tW5n!5e0!3m2!1sen!2s!4v1699000000000",
    keywords: "apartment river view dragon bridge city",
    description:
      "Modern 1-bedroom apartment with stunning Han River and Dragon Bridge views. Building amenities include gym and secure parking.",
  },
  {
    id: 7,
    title: "Penthouse Studio Son Tra",
    location: "Son Tra District",
    area: "son-tra",
    type: "studio",
    beds: 1,
    baths: 1,
    price: 320,
    features: "Sea View • Rooftop • Gym • Pool",
    badge: "Premium",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.1!2d108.255!3d16.062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a14%3A0x2df0cb4b27a45e6!2zU8ahbiBUcsOgLCBEYSBOYW5n!5e0!3m2!1sen!2s!4v1699000000000",
    keywords: "studio penthouse sea view rooftop premium",
    description:
      "Luxury penthouse studio with panoramic sea views. Access to rooftop pool, gym, and 24-hour security. Ideal for professionals wanting a premium experience.",
  },
  {
    id: 8,
    title: "2BR House Near Marble Mountain",
    location: "Ngu Hanh Son",
    area: "ngu-hanh-son",
    type: "house",
    beds: 2,
    baths: 2,
    price: 380,
    features: "Mountain View • Garden • Quiet • Parking",
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.4!2d108.256!3d16.042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a17%3A0x9df0cb4b27a45e9!2zTmfFqSBIw6BuaCBTxqFuLCBEYSBOYW5n!5e0!3m2!1sen!2s!4v1699000000000",
    keywords: "house marble mountain quiet garden nature",
    description:
      "Peaceful 2-bedroom house near Marble Mountains. Surrounded by nature but only 10 minutes to the city. Perfect for those wanting tranquility.",
  },
  {
    id: 9,
    title: "Apartment Near Han Market",
    location: "Hai Chau Center",
    area: "hai-chau",
    type: "apartment",
    beds: 2,
    baths: 1,
    price: 300,
    features: "Central • Market Nearby • AC • WiFi",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.3!2d108.221!3d16.068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142188a0a3c0d7d%3A0xc2c5b5b5b5b5b5b5!2zSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5n!5e0!3m2!1sen!2s!4v1699000000000",
    keywords: "apartment central market han city convenient",
    description:
      "Convenient apartment steps from Han Market. Everything you need within walking distance - shops, restaurants, and public transport.",
  },
  {
    id: 10,
    title: "Beachfront Studio My Khe",
    location: "My Khe Beachfront",
    area: "my-khe",
    type: "studio",
    beds: 1,
    baths: 1,
    price: 280,
    features: "Beachfront • Balcony • AC • WiFi",
    badge: "Beach",
    images: [
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=600&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.8!2d108.241!3d16.054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b27a45e5!2zTeG7uSBI4bqhaSwgxJDDoCBO4bq1bmc!5e0!3m2!1sen!2s!4v1699000000000",
    keywords: "studio beachfront my khe balcony sea",
    description:
      "Wake up to ocean views! Beachfront studio with private balcony overlooking My Khe Beach. The ultimate Da Nang beach lifestyle.",
  },
  {
    id: 11,
    title: "Affordable 1BR An Thuong",
    location: "An Thuong, Ngu Hanh Son",
    area: "ngu-hanh-son",
    type: "apartment",
    beds: 1,
    baths: 1,
    price: 220,
    features: "Expat Area • WiFi • AC • Clean",
    badge: "Value",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.5!2d108.251!3d16.048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a16%3A0x5df0cb4b27a45e8!2zQW4gVGjGsOG7o25nLCBEYSBOYW5n!5e0!3m2!1sen!2s!4v1699000000000",
    keywords: "apartment affordable budget an thuong expat",
    description:
      "Great value 1-bedroom in the heart of An Thuong expat quarter. Clean, well-maintained, and surrounded by international restaurants and cafes.",
  },
  {
    id: 12,
    title: "Large 3BR House Son Tra",
    location: "Son Tra District",
    area: "son-tra",
    type: "house",
    beds: 3,
    baths: 3,
    price: 600,
    features: "Large Garden • Parking • Pets OK • Near Beach",
    badge: "Large",
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.2!2d108.261!3d16.059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a14%3A0x2df0cb4b27a45e6!2zU8ahbiBUcsOgLCBEYSBOYW5n!5e0!3m2!1sen!2s!4v1699000000000",
    keywords: "house large family son tra garden pets",
    description:
      "The largest rental in our portfolio - a beautiful 3BR house with massive garden, 3 bathrooms, and parking for multiple vehicles. Perfect for large families or groups.",
  },
];
