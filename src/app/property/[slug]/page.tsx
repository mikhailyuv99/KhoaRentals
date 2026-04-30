import { redirect } from "next/navigation";

export default async function PropertyAliasPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/properties/${slug}`);
}

