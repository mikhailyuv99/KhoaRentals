import { redirect } from "next/navigation";

export default async function LegacyPropertiesSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`/property/${slug}`);
}

