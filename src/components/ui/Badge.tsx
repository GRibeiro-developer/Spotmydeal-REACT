import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-cyan/10 px-3.5 py-1.5 font-display text-[11px] font-bold uppercase tracking-[2px] text-cyan ${className}`}
    >
      {children}
    </span>
  );
}
