import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Aplica elevação e brilho ciano ao passar o mouse. */
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const hoverClasses = hover
    ? 'transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-glow-lg'
    : '';

  return (
    <div
      className={`rounded border border-line bg-surface-2 p-8 ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}
