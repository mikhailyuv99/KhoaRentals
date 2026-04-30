export type Listing = {
  slug: string;
  title: string;
  price: string;
  beds: number;
  baths: number;
  size: string;
  address: string;
  completionYear: string;
  floors: number;
  about: string;
  availability: "For sale" | "For rent";
  images: [string, string, string];
};

export const listings: Listing[] = [
  {
    slug: "crestview-estate",
    title: "Crestview estate",
    availability: "For sale",
    about:
      "Offering modern luxury and charm, this home features spacious interiors, high ceilings, a gourmet kitchen, and a private outdoor space.",
    images: [
      "https://framerusercontent.com/images/j2QYWllgUp5uE041LD3o4xPMUIM.png",
      "https://framerusercontent.com/images/K3nhTCEPHAqCEAUh14X6j0DdczQ.jpg",
      "https://framerusercontent.com/images/ijNsvMrB01PYB3U2c5Bbp6AmzY.png",
    ],
    price: "$270.000",
    size: "2,650 sq.ft",
    address: "4821 Cedar ridge drive, NC",
    completionYear: "2025",
    floors: 3,
    beds: 4,
    baths: 5,
  },
  {
    slug: "sunset-bluff",
    title: "Sunset bluff",
    availability: "For rent",
    about:
      "Bright and inviting, this home offers an open layout, luxury finishes, a spa-like primary suite, and a peaceful backyard oasis.",
    images: [
      "https://framerusercontent.com/images/6XIqzXeMR6YgzkiQNI8aNpNt9Yo.png",
      "https://framerusercontent.com/images/QsK0Wa19ixHsubAp0p5S0t5S5w.png",
      "https://framerusercontent.com/images/ZUgAXt4WbSwkvj6EyPHhKxg5vMo.png",
    ],
    price: "$22.500",
    size: "1,850 sq.ft",
    address: "7125 Sycamore boulevard, GA",
    completionYear: "2022",
    floors: 1,
    beds: 2,
    baths: 3,
  },
  {
    slug: "silver-birch",
    title: "Silver birch",
    availability: "For rent",
    about:
      "This stylish home boasts an open layout, high ceilings, and a bright, airy feel. A gourmet kitchen, cozy fireplace, and serene backyard make it perfect for modern living.",
    images: [
      "https://framerusercontent.com/images/rDUuK6TPTafFezTpUu0H4njdJ8.png",
      "https://framerusercontent.com/images/f1BoyBAUb7v56qlSKfmD52BmChY.png",
      "https://framerusercontent.com/images/oEE6UImbMYP4sS2e6InJtPHDaS0.png",
    ],
    price: "$12.000",
    size: "1,450 sq.ft",
    address: "6789 Maple avenue, TX",
    completionYear: "2019",
    floors: 2,
    beds: 4,
    baths: 3,
  },
  {
    slug: "nova-residence",
    title: "Nova residence",
    availability: "For rent",
    about:
      "A modern yet cozy home with high ceilings, large windows, and a gourmet kitchen. The private backyard is perfect for entertaining or quiet relaxation.",
    images: [
      "https://framerusercontent.com/images/5rbBnU4EZudjdrSDJqFkv0L6wk.png",
      "https://framerusercontent.com/images/qjwAvYEozr6t1IMJuJKUOjVhk0g.png",
      "https://framerusercontent.com/images/aBNdRRfoCs4n1jaQM51t1jvvCNE.png",
    ],
    price: "$14.500",
    size: "1,550 sq.ft",
    address: "1573 Birch lane, WA",
    completionYear: "2021",
    floors: 2,
    beds: 3,
    baths: 2,
  },
  {
    slug: "misty-meadows",
    title: "Misty meadows",
    availability: "For sale",
    about:
      "Featuring spacious interiors, sleek finishes, and abundant natural light, this home offers a gourmet kitchen, a cozy fireplace, and a private backyard retreat.",
    images: [
      "https://framerusercontent.com/images/h47Rv2shExyEhkfIVA3PIrL5bY.png",
      "https://framerusercontent.com/images/MS80W0sxz4jGITNqDTXdRZDT40k.png",
      "https://framerusercontent.com/images/Yx0i61oZSbtRM8MWusQDx81Wvw.png",
    ],
    price: "$125.000",
    size: "2,150 sq.ft",
    address: "342 Pinecrest road, FL",
    completionYear: "2024",
    floors: 2,
    beds: 3,
    baths: 4,
  },
  {
    slug: "rosewood-manor",
    title: "Rosewood manor",
    availability: "For sale",
    about:
      "This elegant home features an open floor plan, high ceilings, and abundant natural light. A gourmet kitchen, cozy fireplace, and luxurious primary suite add comfort, while the landscaped backyard offers a perfect space to relax.",
    images: [
      "https://framerusercontent.com/images/wAdSPQGdzEABwWjwwWOqCZX5pQ.png",
      "https://framerusercontent.com/images/r5SLvXiUOw1r08u56p0rDtBoxU.png",
      "https://framerusercontent.com/images/1nqhq5KhaD6OCufbGLQNTjR0Q9M.png",
    ],
    price: "$320.000",
    size: "1,850 sq.ft",
    address: "215 Oakwood drive, CA",
    completionYear: "2017",
    floors: 1,
    beds: 3,
    baths: 2,
  },
  {
    slug: "diamond-crest",
    title: "Diamond crest",
    availability: "For rent",
    about:
      "This charming home blends contemporary style with comfort, offering open living spaces, a chef’s kitchen, and a tranquil outdoor retreat.",
    images: [
      "https://framerusercontent.com/images/QSxpletV1pAh5fbUXfkmyftm2Kg.png",
      "https://framerusercontent.com/images/YiD35zRrctolK0YV3h4eH2CMY.jpg",
      "https://framerusercontent.com/images/knfsFIlyfT9xTG8oPAno7tDQNw.png",
    ],
    price: "$17.600",
    size: "1,680 sq.ft",
    address: "5047 Elm street, CO",
    completionYear: "2018",
    floors: 1,
    beds: 3,
    baths: 4,
  },
];

export function getListing(slug: string) {
  return listings.find((l) => l.slug === slug);
}

export function formatUsdCompact(value: string) {
  return value;
}

