import PageHero from '@/components/ui/PageHero';
import Container from '@/components/ui/Container';
import Pill from '@/components/ui/Pill';
import StatHighlight from '@/components/ui/StatHighlight';
import AboutBlock from '@/components/sobre/AboutBlock';
import Roadmap from '@/components/sobre/Roadmap';
import { roadmapSteps } from '@/data/roadmap';

export default function Sobre() {
  return (
    <>
      <PageHero
        id="contexto"
        label="Contexto & Propósito"
        title={
          <>
            Sobre o <span className="text-cyan">Projeto</span>
          </>
        }
        description="SpotMyDeal nasce da parceria entre estudantes da FIAP e a SoulUp — uma empresa comprometida com a redução de CO₂ e o upcycling de resíduos."
      />

      <section className="py-20 lg:py-24">
        <Container>
          <AboutBlock
            label="A Empresa"
            title="O ecossistema"
            highlight="SoulUp"
            paragraphs={[
              'A SoulUp é uma empresa com missão clara: transformar o descarte correto de resíduos em uma fonte de valor para as pessoas. Seus analytics identificaram um problema crítico — a dificuldade de atrair novos usuários e reativar perfis existentes que haviam abandonado a plataforma.',
              'A análise dos dados revelou oportunidade de usar gatilhos psicológicos para criar engajamento real, transformando uma ação ambiental em uma experiência de disputa e conquista.',
            ]}
            visual={
              <div className="rounded-lg border border-line bg-surface-2 p-8">
                <StatHighlight value="CO₂↓" description="Redução de emissões por descarte correto" />
                <StatHighlight value="♻️" description="Upcycling: lixo → pontos → valor real" />
                <StatHighlight value="+3k" description="Meta de novos usuários ativos" />
              </div>
            }
          >
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Pill>♻️ Upcycling</Pill>
              <Pill>🌱 Redução CO₂</Pill>
              <Pill>⚡ Energia Limpa</Pill>
              <Pill>🚌 Mobilidade</Pill>
            </div>
          </AboutBlock>

          <AboutBlock
            reverse
            label="O Problema"
            title="Por que os usuários"
            highlight="saem?"
            paragraphs={[
              'Os analytics da SoulUp identificaram dois grupos problemáticos: novos usuários que nunca conheceram o app e usuários existentes que se tornaram inativos. Ambos compartilham o mesmo problema — falta de motivação contínua para engajar com a plataforma.',
              'Sem um mecanismo de retenção baseado em comportamento humano real, qualquer esforço de aquisição se perde rapidamente.',
            ]}
            visual={
              <div className="rounded-lg border border-line bg-surface-2 p-8">
                <StatHighlight value="😴" description="Usuários existentes, porém inativos na plataforma" />
                <StatHighlight value="🚫" description="Dificuldade em atrair novos perfis de usuário" />
                <StatHighlight value="📉" description="Baixo engajamento sem mecanismo de disputa" />
              </div>
            }
          />

          <AboutBlock
            label="A Solução"
            title="SpotMyDeal:"
            highlight="Loot Tracker"
            ctaLabel="Ver solução completa →"
            ctaTo="/solucao"
            paragraphs={[
              'O SpotMyDeal é um mecanismo de gamificação baseado em disputa real. Usuários competem entre si pela captura de cupons de desconto disponibilizados por estabelecimentos parceiros da SoulUp.',
              <>
                O sistema usa três gatilhos psicológicos comprovados:{' '}
                <strong className="text-white">ancoragem</strong> (ver o que outros já têm),{' '}
                <strong className="text-white">comparação</strong> (ranking em tempo real) e{' '}
                <strong className="text-white">disputa</strong> (senso de urgência para não ficar de
                fora).
              </>,
            ]}
            visual={
              <div className="rounded-lg border border-line bg-surface-2 p-8">
                <StatHighlight value="🎯" description="Ancoragem: o usuário vê o que pode conquistar" />
                <StatHighlight value="⚔️" description="Disputa: competição em tempo real por cupons" />
                <StatHighlight value="🏆" description="Comparação: ranking que gera desconforto de ausência" />
              </div>
            }
          />

          <Roadmap steps={roadmapSteps} />
        </Container>
      </section>
    </>
  );
}
