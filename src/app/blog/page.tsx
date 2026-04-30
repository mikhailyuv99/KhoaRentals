import { Container } from "@/components/Container";
import { blogPosts } from "@/content/blog";
import { BlogCardL } from "@/components/BlogCardL";
import { BlogCardM } from "@/components/BlogCardM";
import { TagPill } from "@/components/TagPill";

export default function BlogIndex() {
  return (
    <Container className="max-w-[1300px] px-10 py-24">
      <TagPill>Blog</TagPill>
      <h1 className="mt-6 text-[48px] font-medium leading-[1.1] text-[color:var(--text)]">
        Explore our latest blogs for real estate insights
      </h1>

      <div className="mt-[42px] grid gap-4">
        <BlogCardL post={blogPosts[0]!} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(1).map((p) => (
            <BlogCardM key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </Container>
  );
}

