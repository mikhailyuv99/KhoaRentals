import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/content/blog";

export function BlogCardL({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}#nav`}
      className="u-motion grid overflow-hidden rounded-[18px] border border-[color:var(--ui3)] bg-[color:var(--ui2)] lg:grid-cols-2"
    >
      <div className="relative h-[460px] w-full">
        <Image src={post.image} alt={post.title} fill sizes="(max-width: 1024px) 92vw, 560px" className="object-cover" />
      </div>
      <div className="flex h-full flex-col justify-between gap-6 p-6">
        <div className="grid gap-6">
          <span className="inline-flex w-fit rounded-[17px] bg-[color:var(--text)] px-4 py-[7px] text-[14px] tracking-[0.02em] text-white">
            {post.readTime}
          </span>
          <div className="grid gap-3">
            <div className="text-[18px] leading-[1.2] text-[color:var(--text2)]">{post.about}</div>
            <div className="text-[32px] font-medium leading-[1.1] text-[color:var(--text)]">{post.title}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative h-[34px] w-[34px] overflow-hidden rounded-full">
            <Image src={post.writerImage} alt={post.writerName} fill sizes="34px" className="object-cover" />
          </div>
          <div className="grid">
            <div className="text-[17px] text-[color:var(--text)]">{post.writerName}</div>
            <div className="text-[14px] text-[color:var(--text2)]">{post.writerRole}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

