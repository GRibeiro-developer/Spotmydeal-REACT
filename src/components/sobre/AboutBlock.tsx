import type { ReactNode } from 'react';
import Button from '@/components/ui/Button';

interface AboutBlockProps {
  label: string;
  title: string;
  highlight: string;
  paragraphs: ReactNode[];
  visual: ReactNode;
  /** Inverte a ordem visual (texto/imagem) em telas grandes. */
  reverse?: boolean;
  ctaLabel?: string;
  ctaTo?: string;
  children?: ReactNode;
}

/**
 * Bloco de conteúdo em duas colunas (texto + visual), reutilizado três vezes
 * na página Sobre com dados diferentes via props — evita repetição de markup.
 */
export default function AboutBlock({
  label,
  title,
  highlight,
  paragraphs,
  visual,
  reverse = false,
  ctaLabel,
  ctaTo,
  children,
}: AboutBlockProps) {
  return (
    <div className="mb-20 grid grid-cols-1 items-center gap-10 lg:mb-24 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? 'lg:order-2' : 'lg:order-1'}>
        <span className="mb-3 block font-display text-xs uppercase tracking-[4px] text-cyan">
          {label}
        </span>
        <h2 className="mb-4 text-white">
          {title} <span className="text-cyan">{highlight}</span>
        </h2>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`text-base leading-relaxed text-ink-muted ${index > 0 ? 'mt-4' : ''}`}
          >
            {paragraph}
          </p>
        ))}
        {children}
        {ctaLabel && ctaTo && (
          <Button to={ctaTo} variant="primary" className="mt-7">
            {ctaLabel}
          </Button>
        )}
      </div>
      <div className={reverse ? 'lg:order-1' : 'lg:order-2'}>{visual}</div>
    </div>
  );
}
