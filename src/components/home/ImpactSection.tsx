import type { ImpactItemData } from '@/types';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ImpactItem from './ImpactItem';

interface ImpactSectionProps {
  items: ImpactItemData[];
}

export default function ImpactSection({ items }: ImpactSectionProps) {
  return (
    <section className="border-y border-line bg-surface-2 py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="mb-3 block font-display text-xs uppercase tracking-[4px] text-cyan">
              Impacto Real
            </span>
            <h2 className="mb-4 text-white">
              Além dos <span className="text-cyan">cupons</span>
            </h2>
            <p className="mb-8 max-w-[560px] text-base leading-relaxed text-ink-muted">
              O SpotMyDeal nasce da visão da SoulUp de transformar o lixo em valor real — para o
              usuário e para o planeta.
            </p>
            <Button to="/sobre" variant="outline">
              Saiba mais sobre o projeto
            </Button>
          </div>

          <div className="rounded-lg border border-line bg-surface-3 p-6 sm:p-10">
            {items.map((item) => (
              <ImpactItem
                key={item.title}
                emoji={item.emoji}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
