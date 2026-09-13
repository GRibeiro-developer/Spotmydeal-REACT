import type { StatData } from '@/types';
import Container from '@/components/ui/Container';

interface StatsBarProps {
  stats: StatData[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-surface-2 px-6 py-8 text-center">
            <span className="block font-display text-4xl font-black leading-none text-cyan sm:text-5xl">
              {stat.value}
            </span>
            <span className="mt-1 block text-xs uppercase tracking-wide text-ink-muted">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
}
