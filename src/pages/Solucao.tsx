<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import './Solucao.css';

export default function Solucao() {
  const { t } = useLanguage();
  usePageMeta("Solução — SpotMyDeal", "Solução SpotMyDeal — Loot Tracker, gatilhos psicológicos e mecanismo de gamificação.");

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">{t('about.solution.label')}</span>
          <h1>
            {t('sol.h1.pre')}
            {" "}
            <span className="block-text">
              {t('sol.h1')}
              {" "}
              <span style={{ color: 'var(--cyan)' }}>{t('sol.h1.hl')}</span>
            </span>
          </h1>
          <p style={{ maxWidth: '600px', marginTop: '16px' }}>{t('sol.hero.desc')}</p>
        </div>
      </section>
      <section className="section" id="gatilhos">
        <div className="container">
          <span className="section-label">{t('sol.triggers.label')}</span>
          <h2 className="section-title">
            Os 3
            {" "}
            <span>{t('sol.triggers.hl')}</span>
            {" "}
            {t('sol.triggers.desc')}
          </h2>
          <p className="section-desc">{t('sol.triggers.sub')}</p>
          <div className="gatilhos-grid grid-3">
            <div className="gatilho-card">
              <div className="gatilho-num">{t('sol.g1.num')}</div>
              <span className="gatilho-emoji">⚓</span>
              <h3>{t('sol.g1.title')}</h3>
              <p>{t('sol.g1.desc')}</p>
            </div>
            <div className="gatilho-card">
              <div className="gatilho-num">{t('sol.g2.num')}</div>
              <span className="gatilho-emoji">📊</span>
              <h3>{t('sol.g2.title')}</h3>
              <p>{t('sol.g2.desc')}</p>
            </div>
            <div className="gatilho-card">
              <div className="gatilho-num">{t('sol.g3.num')}</div>
              <span className="gatilho-emoji">⚔️</span>
              <h3>{t('sol.g3.title')}</h3>
              <p>{t('sol.g3.desc')}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="mecanismo" style={{ background: 'var(--dark2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="section-label">{t('home.how.label')}</span>
          <h2 className="section-title text-center" style={{ textAlign: 'center' }}>
            {t('sol.mech.title')}
            {" "}
            <span>{t('sol.mech.hl')}</span>
          </h2>
          <p className="section-desc text-center" style={{ textAlign: 'center', margin: '0 auto 60px' }}>{t('sol.mech.desc')}</p>
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-circle">♻️</div>
              <h4>{t('sol.step1.title')}</h4>
              <p>{t('sol.step1.desc')}</p>
            </div>
            <div className="step-item">
              <div className="step-circle">🎯</div>
              <h4>{t('sol.g3.title')}</h4>
              <p>{t('sol.step2.desc')}</p>
            </div>
            <div className="step-item">
              <div className="step-circle">🏆</div>
              <h4>{t('sol.step3.title')}</h4>
              <p>{t('sol.step3.desc')}</p>
            </div>
            <div className="step-item">
              <div className="step-circle">💰</div>
              <h4>{t('sol.step4.title')}</h4>
              <p>{t('sol.step4.desc')}</p>
            </div>
          </div>
          <span className="section-label" style={{ marginTop: '40px', display: 'block' }}>{t('sol.cupons.label')}</span>
          <div className="cupom-showcase">
            <div className="cupom-card">
              <div className="cupom-pct">30%</div>
              <div className="cupom-label">{t('sol.c1.label')}</div>
              <div className="cupom-store">🛒 {t('sol.c1.store')}</div>
              <div className="cupom-players">⚡ {t('sol.c1.players')}</div>
              <span className="cupom-status status-live">● {t('home.loot.live')}</span>
            </div>
            <div className="cupom-card">
              <div className="cupom-pct">R$50</div>
              <div className="cupom-label">{t('sol.c2.label')}</div>
              <div className="cupom-store">💡 {t('sol.c2.store')}</div>
              <div className="cupom-players">🔥 {t('sol.c2.players')}</div>
              <span className="cupom-status status-hot">🔥 {t('sol.c2.status')}</span>
            </div>
            <div className="cupom-card">
              <div className="cupom-pct">🎫</div>
              <div className="cupom-label">{t('sol.c3.label')}</div>
              <div className="cupom-store">🚌 {t('sol.c3.store')}</div>
              <div className="cupom-players">⭐ {t('sol.c3.players')}</div>
              <span className="cupom-status status-rare">★ {t('sol.c3.status')}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="section-label">{t('sol.benefits.label')}</span>
          <h2 className="section-title">
            {t('sol.benefits.title')}
            {" "}
            <span>{t('sol.benefits.hl')}</span>
            {" "}
            {t('sol.benefits.desc')}
          </h2>
          <p className="section-desc">{t('sol.benefits.sub')}</p>
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-icon">👤</span>
              <div>
                <h4>{t('sol.b1.title')}</h4>
                <p>{t('sol.b1.desc')}</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🏢</span>
              <div>
                <h4>{t('sol.b2.title')}</h4>
                <p>{t('sol.b2.desc')}</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🤝</span>
              <div>
                <h4>{t('sol.b3.title')}</h4>
                <p>{t('sol.b3.desc')}</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🌍</span>
              <div>
                <h4>{t('sol.b4.title')}</h4>
                <p>{t('sol.b4.desc')}</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <Link to="/demo" className="btn btn-primary">{t('sol.demo.btn')}</Link>
          </div>
        </div>
=======
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
>>>>>>> bcb44fe4966cfb971a1cb0fa7646f57681b9378e
      </section>
    </>
  );
}
