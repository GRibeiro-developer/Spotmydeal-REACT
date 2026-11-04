<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import './Sobre.css';

export default function Sobre() {
  const { t } = useLanguage();
  usePageMeta("Sobre — SpotMyDeal", "Sobre o SpotMyDeal — Contexto SoulUp, problema, solução e tecnologias.");

  return (
    <>
      <section className="page-hero" id="contexto">
        <div className="container">
          <span className="section-label">{t('about.label')}</span>
          <h1>
            {t('about.h1')}
            {" "}
            <span style={{ color: 'var(--cyan)' }}>{t('footer.project')}</span>
          </h1>
          <p style={{ maxWidth: '600px', marginTop: '16px' }}>{t('about.hero.desc')}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="about-block">
            <div>
              <span className="section-label">{t('about.company.label')}</span>
              <h2 className="section-title">
                {t('about.company.title')}
                {" "}
                <span>SoulUp</span>
              </h2>
              <p>{t('about.company.desc')}</p>
              <p style={{ marginTop: '16px' }}>{t('about.company.desc2')}</p>
              <div className="pill-list">
                <span className="pill">♻️ {t('home.i2.title')}</span>
                {" "}
                <span className="pill">🌱 {t('about.x01')}</span>
                {" "}
                <span className="pill">⚡ {t('about.x02')}</span>
                {" "}
                <span className="pill">🚌 {t('about.x03')}</span>
              </div>
            </div>
            <div className="about-visual">
              <div className="stat-highlight">
                <span className="stat-big">{t('home.stat3.num')}</span>
                {" "}
                <span className="stat-desc">{t('about.x04')}</span>
              </div>
              <div className="stat-highlight">
                <span className="stat-big">♻️</span>
                {" "}
                <span className="stat-desc">{t('about.x05')}</span>
              </div>
              <div className="stat-highlight">
                <span className="stat-big">+3k</span>
                {" "}
                <span className="stat-desc">{t('about.x06')}</span>
              </div>
            </div>
          </div>
          <div className="about-block reverse">
            <div className="about-visual">
              <div className="stat-highlight">
                <span className="stat-big">😴</span>
                {" "}
                <span className="stat-desc">{t('about.x07')}</span>
              </div>
              <div className="stat-highlight">
                <span className="stat-big">🚫</span>
                {" "}
                <span className="stat-desc">{t('about.x08')}</span>
              </div>
              <div className="stat-highlight">
                <span className="stat-big">📉</span>
                {" "}
                <span className="stat-desc">{t('about.x09')}</span>
              </div>
            </div>
            <div>
              <span className="section-label">{t('about.problem.label')}</span>
              <h2 className="section-title">
                {t('about.problem.title')}
                {" "}
                <span>{t('about.problem.hl')}</span>
              </h2>
              <p>{t('about.problem.desc')}</p>
              <p style={{ marginTop: '16px' }}>{t('about.x10')}</p>
            </div>
          </div>
          <div className="about-block">
            <div>
              <span className="section-label">{t('about.solution.label')}</span>
              <h2 className="section-title">
                {t('about.solution.title')}
                {" "}
                <span>{t('footer.loot')}</span>
              </h2>
              <p>{t('about.solution.desc')}</p>
              <p style={{ marginTop: '16px' }}>
                {t('about.x14')}
                {" "}
                <strong style={{ color: 'var(--white)' }}>{t('about.x15')}</strong>
                {" "}
                {t('about.x16')}
                {" "}
                <strong style={{ color: 'var(--white)' }}>{t('about.x17')}</strong>
                {" "}
                {t('about.x18')}
                {" "}
                <strong style={{ color: 'var(--white)' }}>{t('about.x19')}</strong>
                {" "}
                {t('about.x20')}
              </p>
              <Link to="/solucao" className="btn btn-primary" style={{ marginTop: '28px' }}>{t('about.solution.btn')}</Link>
            </div>
            <div className="about-visual">
              <div className="stat-highlight">
                <span className="stat-big">🎯</span>
                {" "}
                <span className="stat-desc">{t('about.x11')}</span>
              </div>
              <div className="stat-highlight">
                <span className="stat-big">⚔️</span>
                {" "}
                <span className="stat-desc">{t('about.x12')}</span>
              </div>
              <div className="stat-highlight">
                <span className="stat-big">🏆</span>
                {" "}
                <span className="stat-desc">{t('about.x13')}</span>
              </div>
            </div>
          </div>
          <div className="roadmap">
            <p className="roadmap-title">— {t('about.roadmap.label')}</p>
            <div className="roadmap-list">
              <div className="roadmap-item">
                <div className="roadmap-dot done">✓</div>
                <div className="roadmap-content">
                  <h4>{t('about.rd1.title')}</h4>
                  <p>{t('about.rd1.desc')}</p>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-dot done">✓</div>
                <div className="roadmap-content">
                  <h4>{t('about.rd2.title')}</h4>
                  <p>{t('about.rd2.desc')}</p>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-dot done">✓</div>
                <div className="roadmap-content">
                  <h4>{t('about.rd3.title')}</h4>
                  <p>{t('about.rd3.desc')}</p>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-dot">→</div>
                <div className="roadmap-content">
                  <h4>{t('about.rd4.title')}</h4>
                  <p>{t('about.rd4.desc')}</p>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-dot">→</div>
                <div className="roadmap-content">
                  <h4>{t('about.rd5.title')}</h4>
                  <p>{t('about.rd5.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
=======
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
>>>>>>> bcb44fe4966cfb971a1cb0fa7646f57681b9378e
      </section>
    </>
  );
}
