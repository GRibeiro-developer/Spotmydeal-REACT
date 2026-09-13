import Button from '@/components/ui/Button';
import LeaderboardPreview from './LeaderboardPreview';
import { heroLeaderboardPreview } from '@/data/home';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pb-20 pt-40 sm:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 80% 40%, rgba(18,205,222,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(18,205,222,0.06) 0%, transparent 50%)',
        }}
      />
      <div className="relative mx-auto grid max-w-[1140px] gap-14 px-6 lg:grid-cols-[1fr_420px] lg:items-center">
        <div className="max-w-[700px]">
          <div className="mb-7 inline-flex items-center gap-2.5">
            <span className="h-2 w-2 animate-pulseGlow rounded-full bg-cyan" />
            <span className="font-display text-xs uppercase tracking-[4px] text-cyan">
              Gamificação · Sustentabilidade · Cupons
            </span>
          </div>

          <h1 className="mb-2 text-white">
            Encontre <br />
            <span className="text-cyan">Seu Cupom.</span> <br />
            Vença a Disputa.
          </h1>

          <p className="mb-6 font-display text-xl font-semibold uppercase tracking-[2px] text-ink-muted">
            Deal Hunting · SoulUp x FIAP
          </p>

          <p className="mb-10 max-w-[560px] text-lg leading-relaxed text-ink-muted">
            Dispute cupons de desconto em tempo real com outros players. Colete, vença e converta
            seus pontos em benefícios reais — enquanto contribui com o meio ambiente.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button to="/solucao" variant="primary">
              Ver a Solução →
            </Button>
            <Button to="/demo" variant="outline">
              Experimentar Demo
            </Button>
          </div>
        </div>

        <div className="hidden lg:block">
          <LeaderboardPreview players={heroLeaderboardPreview} />
        </div>
      </div>
    </section>
  );
}
