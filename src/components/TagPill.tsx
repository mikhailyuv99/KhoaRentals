export function TagPill({ children }: { children: string }) {
  return (
    <span className="inline-flex rounded-[15px] bg-[color:var(--accent)] px-[12px] py-[4px] text-[14px] tracking-[0.02em] text-white">
      {children}
    </span>
  );
}

