interface SectionHeadingProps {
  label?: string;
  title: string;
  /** Trecho do título renderizado em destaque (cyan). */
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  highlight,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div className={`${isCentered ? 'text-center' : 'text-left'} ${className}`}>
      {label && (
        <span className="mb-3 block font-display text-xs uppercase tracking-[4px] text-cyan">
          {label}
        </span>
      )}
      <h2 className="mb-4 text-[clamp(2rem,4vw,3.2rem)] leading-tight">
        {title} {highlight && <span className="text-cyan">{highlight}</span>}
      </h2>
      {description && (
        <p
          className={`max-w-[600px] text-base leading-relaxed text-ink-muted ${
            isCentered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
