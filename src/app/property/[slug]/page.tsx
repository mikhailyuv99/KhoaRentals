import { redirect } from "next/navigation";

export default async function PropertyRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`/listings/${slug}`);
}

