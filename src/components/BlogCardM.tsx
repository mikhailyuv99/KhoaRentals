import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/content/blog";

export function BlogCardM({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}#nav`} className="u-motion block overflow-hidden rounded-[18px]">
      <div className="relative h-[300px] w-full overflow-hidden rounded-[18px]">
        <Image src={post.image} alt={post.title} fill sizes="(max-width: 1024px) 92vw, 444px" className="object-cover" />
      </div>
      <div className="pt-4">
        <div className="text-[22px] font-medium leading-[1.1] text-[color:var(--text)]">{post.title}</div>
        <div className="mt-2 text-[17px] leading-[1.4] text-[color:var(--text2)]">{post.publishDate}</div>
      </div>
    </Link>
  );
}

