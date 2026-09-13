import PageHero from '@/components/ui/PageHero';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import TriggerCard from '@/components/solucao/TriggerCard';
import StepTimeline from '@/components/solucao/StepTimeline';
import CouponPreviewCard from '@/components/solucao/CouponPreviewCard';
import BenefitCard from '@/components/solucao/BenefitCard';
import { triggers, mechanismSteps, couponsShowcase, benefits } from '@/data/solucao';

export default function Solucao() {
  return (
    <>
      <PageHero
        label="A Solução"
        title={
          <>
            Sistema
            <br />
            Loot <span className="text-cyan">Tracker</span>
          </>
        }
        description="Um mecanismo de gamificação que transforma a coleta de cupons em disputa real entre players — usando gatilhos psicológicos para criar engajamento genuíno."
      />

      <section id="gatilhos" className="py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="Psicologia por trás"
            title="Os 3"
            highlight="gatilhos do sistema"
            description="Não é sorte — é ciência comportamental. Cada gatilho foi escolhido para gerar uma resposta psicológica específica no usuário."
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {triggers.map((trigger) => (
              <TriggerCard key={trigger.title} {...trigger} />
            ))}
          </div>
        </Container>
      </section>

      <section id="mecanismo" className="border-y border-line bg-surface-2 py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="Como funciona"
            title="O mecanismo"
            highlight="passo a passo"
            description="Do descarte do resíduo até a conversão do cupom em benefício real."
            align="center"
            className="mb-14"
          />

          <StepTimeline steps={mechanismSteps} />

          <span className="mb-6 block font-display text-xs uppercase tracking-[4px] text-cyan">
            Cupons em disputa agora
          </span>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {couponsShowcase.map((coupon) => (
              <CouponPreviewCard key={coupon.id} {...coupon} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="Benefícios do sistema"
            title="Por que o"
            highlight="SpotMyDeal funciona"
            description="Resultado para os três lados do ecossistema: usuário, empresa e planeta."
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button to="/demo" variant="primary">
              Testar a Demo Interativa →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
