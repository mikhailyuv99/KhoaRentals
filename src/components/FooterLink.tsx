import Link from "next/link";

export function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const inner = (
    <span className="group relative inline-flex items-center gap-2 text-[17px] text-white">
      <span className="inline-flex h-5 w-5 items-center justify-center">
        <svg viewBox="0 0 24 24" className="h-4 w-4 rotate-180" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h12" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      </span>
      <span>{label}</span>
      <span className="u-motion absolute -bottom-[5px] left-[3px] h-px w-2 bg-white opacity-0 group-hover:w-6 group-hover:opacity-100" />
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return <Link href={href}>{inner}</Link>;
}

