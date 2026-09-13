import type { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import GlowDivider from '@/components/ui/GlowDivider';

interface CtaBannerProps {
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}

/** Banner de chamada para ação, reutilizável ao final de qualquer página. */
export default function CtaBanner({ title, description, children }: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden border-t border-line bg-gradient-to-br from-surface-2 to-surface-3 py-20 text-center lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/15 blur-3xl"
      />
      <Container className="relative">
        <GlowDivider className="mx-auto mb-6" />
        <h2 className="mx-auto mb-4 max-w-2xl text-white">{title}</h2>
        {description && (
          <p className="mx-auto mb-10 max-w-[500px] text-base leading-relaxed text-ink-muted">
            {description}
          </p>
        )}
        {children && <div className="flex flex-wrap items-center justify-center gap-4">{children}</div>}
      </Container>
    </section>
  );
}
