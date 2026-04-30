import Link from "next/link";
import { Container } from "@/components/Container";
import { getBlogPost } from "@/content/blog";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return (
      <Container className="max-w-[900px] px-10 py-24">
        <Link href="/blog" className="u-motion text-[17px] text-[color:var(--text2)] hover:text-[color:var(--text)]">
          ← Back to blog
        </Link>
        <h1 className="mt-10 text-[48px] font-medium leading-[1.1] text-[color:var(--text)]">Not found</h1>
      </Container>
    );
  }
  return (
    <Container className="max-w-[900px] px-10 py-24">
      <Link href="/blog" className="u-motion text-[17px] text-[color:var(--text2)] hover:text-[color:var(--text)]">
        ← Back to blog
      </Link>
      <h1 className="mt-10 text-[48px] font-medium leading-[1.1] text-[color:var(--text)]">{post.title}</h1>
      <p className="mt-4 text-[18px] leading-[1.4] text-[color:var(--text2)]">{post.about}</p>
      <div className="mt-8 text-[17px] text-[color:var(--text2)]">
        {post.publishDate} • {post.readTime}
      </div>

      <article
        className="prose mt-10 max-w-none prose-h4:text-[22px] prose-h4:font-medium prose-p:text-[17px] prose-p:leading-[1.6]"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </Container>
  );
}

