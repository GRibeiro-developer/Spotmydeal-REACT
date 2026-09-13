import type { ReactNode } from 'react';

interface PillProps {
  children: ReactNode;
}

export default function Pill({ children }: PillProps) {
  return (
    <span className="rounded-full border border-line-strong bg-cyan/10 px-4 py-2 font-display text-xs font-bold uppercase tracking-[1.5px] text-cyan">
      {children}
    </span>
  );
}
