export function TagPill({ children }: { children: string }) {
  return (
    <span className="inline-flex rounded-[15px] bg-[color:var(--accent)] px-3 py-1 text-[14px] tracking-[0.02em] text-white">
      {children}
    </span>
  );
}

