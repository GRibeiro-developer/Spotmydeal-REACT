import type { ReactNode } from 'react';

interface PageHeroProps {
  id?: string;
  label?: string;
  title: ReactNode;
  description?: string;
  eyebrow?: ReactNode;
}

/**
 * Cabeçalho interno padronizado, reaproveitado em todas as páginas secundárias
 * (Sobre, Solução, Demo, FAQ, Integrantes, Contato) — equivalente ao `.page-hero`
 * do site original, agora como componente único e configurável via props.
 */
export default function PageHero({ id, label, title, description, eyebrow }: PageHeroProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden border-b border-line bg-gradient-to-b from-surface-2 to-surface pb-16 pt-36 sm:pt-40"
    >
      <div className="pointer-events-none absolute -top-24 right-[-100px] h-[500px] w-[500px] rounded-full bg-cyan/10 blur-3xl" />
      <div className="relative mx-auto max-w-[1140px] px-6">
        {eyebrow && <div className="mb-5">{eyebrow}</div>}
        {label && (
          <span className="mb-3 block font-display text-xs uppercase tracking-[4px] text-cyan">
            {label}
          </span>
        )}
        <h1 className="text-[clamp(2.4rem,6vw,4.2rem)] leading-tight">{title}</h1>
        {description && (
          <p className="mt-4 max-w-[600px] text-base leading-relaxed text-ink-muted">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
