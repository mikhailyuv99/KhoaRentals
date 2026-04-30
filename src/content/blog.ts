export type BlogPost = {
  slug: string;
  title: string;
  about: string;
  readTime: string;
  publishDate: string;
  image: string;
  writerImage: string;
  writerName: string;
  writerRole: string;
  contentHtml: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "high-end-properties",
    title: "High-end properties",
    about: "Luxury homebuyers and sellers are navigating changing market conditions",
    readTime: "7 min read",
    publishDate: "June 10, 2024",
    image: "https://framerusercontent.com/images/PjHJMX19p4rUgEbsFA6rEDDges.png",
    writerImage: "https://framerusercontent.com/images/5U7azVaVT6ogBk23qZv9AtdLy5c.png",
    writerName: "Dylan Carter",
    writerRole: "Senior Housing Economist",
    contentHtml:
      "<h4>Higher expectations for quality</h4><p>Luxury buyers are looking for turnkey properties with premium finishes, modern amenities, and exceptional design. Homes that don’t meet these standards are staying on the market longer.</p><h4>Pricing strategies are shifting</h4><p>Sellers are adjusting their pricing to match today's realities. While luxury properties still command strong prices, realistic listing values are crucial to attract serious buyers.</p><h4>Customization is a priority</h4><p>Buyers are seeking homes that offer personalization options, from custom layouts to bespoke finishes. Flexibility is becoming a key selling point in the luxury market.</p>",
  },
  {
    slug: "market-trends",
    title: "Market trends",
    about: "Stay ahead of the curve with insights into the key trends shaping the real estate landscape",
    readTime: "7 min read",
    publishDate: "April 9, 2025",
    image: "https://framerusercontent.com/images/Z225duIP6ydu7YFVXpBmr3DJA.png",
    writerImage: "https://framerusercontent.com/images/V3tbjGqhAS0IoDwAQrdbzAa1Q1U.png",
    writerName: "John Murphy",
    writerRole: "Real Estate Blogger",
    contentHtml:
      "<h4>Embracing technology</h4><p>Smart home features, virtual tours, and AI-driven tools are becoming standard.</p>",
  },
  {
    slug: "housing-inventory",
    title: "Housing inventory",
    about: "With housing supply at historic lows, buyers and sellers are adapting fast—here’s how it’s shaping the market",
    readTime: "8 min read",
    publishDate: "March 10, 2025",
    image: "https://framerusercontent.com/images/8oQwCyYztEqHQA4bPR5y2wJe1ak.png",
    writerImage: "https://framerusercontent.com/images/6NcSiU2m7nvaXBeOhCkonjXifLg.png",
    writerName: "Sam Nash",
    writerRole: "Real Estate Market Researcher",
    contentHtml:
      "<h4>Limited inventory means faster decisions</h4><p>With fewer homes available, buyers are moving quickly to make competitive offers.</p>",
  },
  {
    slug: "the-right-property",
    title: "The right property",
    about: "Get expert advice on how to find the perfect home or investment property",
    readTime: "5 min read",
    publishDate: "April 10, 2024",
    image: "https://framerusercontent.com/images/YuMxsp5oKaTyUe1sxeM2PKV8poA.png",
    writerImage: "https://framerusercontent.com/images/NuQCqxT4LofiDMtYcX1zA2Tew.png",
    writerName: "Alexander royce",
    writerRole: "Senior real estate consultant",
    contentHtml:
      "<h4>Rushing the search</h4><p>Jumping into a purchase too quickly can lead to missed opportunities.</p>",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

