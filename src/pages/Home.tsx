import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import './Home.css';

// 1. Tipagem TypeScript obrigatória para a Sprint
interface Loja {
  id?: number;
  nome?: string;
  nomeFantasia?: string;
  categoria?: string;
  endereco?: string;
}

export default function Home() {
  const { t } = useLanguage();
  usePageMeta(
    'SpotMyDeal — Encontre Seu Cupom',
    'SpotMyDeal — Encontre seu cupom. Gamificação de cupons de desconto com loot tracker. Projeto FIAP x SoulUp.'
  );

  // 2. Hooks useState tipados sem 'any'
  const [lojas, setLojas] = useState<Loja[]>([]);
  const [carregandoLojas, setCarregandoLojas] = useState<boolean>(true);
  const [erroLojas, setErroLojas] = useState<string | null>(null);

  // 3. Hook useEffect consumindo a API Java do Render automaticamente
  useEffect(() => {
    // Se a variável da Vercel falhar, usa a URL direta do Render como fallback
    const API_URL = import.meta.env.VITE_API_URL || 'https://spotmydeal-sprint4.onrender.com';

    fetch(`${API_URL}/lojas`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data: Loja[]) => {
        setLojas(data);
        setCarregandoLojas(false);
      })
      .catch((err) => {
        console.error('Falha ao consumir /lojas:', err);
        setErroLojas('Não foi possível carregar as lojas da base de dados.');
        setCarregandoLojas(false);
      });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid-bg" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <div className="hero-dot" />
              <span>{t('home.eyebrow')}</span>
            </div>
            <h1>
              <span>{t('home.h1.line1')}</span>
              <br />
              <span className="highlight">{t('home.h1.line2')}</span>
              <br />
              <span>{t('home.h1.line3')}</span>
            </h1>
            <p className="hero-sub">DEAL HUNTING · SoulUp x FIAP</p>
            <p>{t('home.desc')}</p>
            <div className="hero-actions">
              <Link to="/solucao" className="btn btn-primary">{t('home.btn.solution')}</Link>{' '}
              <Link to="/demo" className="btn btn-outline">{t('home.btn.demo')}</Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="loot-card">
              <div className="loot-header">
                <span className="loot-title">Deal Hunter</span>{' '}
                <span className="loot-live">{t('home.loot.live')}</span>
              </div>
              <div className="player-row">
                <span className="player-rank rank-1">🥇</span>
                <img className="player-avatar" src="/img/EU.jpeg" alt="Avatar do usuário" />
                <div className="player-info">
                  <div className="player-name">Gabriel A.</div>
                  <div className="player-pts">2.340 {t('home.loot.pts')}</div>
                </div>
                <span className="player-cupons">12 {t('impacto_titulo_2')}</span>
              </div>
              <div className="player-row">
                <span className="player-rank rank-2">🥈</span>
                <img className="player-avatar" src="/img/escobar.png" alt="Avatar do usuário" />
                <div className="player-info">
                  <div className="player-name">Nycolas M.</div>
                  <div className="player-pts">1.890 {t('home.loot.pts')}</div>
                </div>
                <span className="player-cupons">9 {t('impacto_titulo_2')}</span>
              </div>
              <div className="player-row">
                <span className="player-rank rank-3">🥉</span>
                <img className="player-avatar" src="/img/rodrigo.png" alt="Avatar do usuário" />
                <div className="player-info">
                  <div className="player-name">Rodrigo B.</div>
                  <div className="player-pts">1.540 {t('home.loot.pts')}</div>
                </div>
                <span className="player-cupons">7 {t('impacto_titulo_2')}</span>
              </div>
              <div className="player-row">
                <span className="player-rank rank-other">4°</span>
                <img className="player-avatar" src="/img/tay.png" alt="Avatar do usuário" />
                <div className="player-info">
                  <div className="player-name">Tayna J.</div>
                  <div className="player-pts">1.120 {t('home.loot.pts')}</div>
                </div>
                <span className="player-cupons">5 {t('impacto_titulo_2')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section style={{ padding: '0' }}>
        <div className="container">
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">{t('home.stat1.num')}</span>{' '}
              <span className="stat-label">{t('home.stat1.label')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">{t('home.stat2.num')}</span>{' '}
              <span className="stat-label">{t('home.stat2.label')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">{t('home.stat3.num')}</span>{' '}
              <span className="stat-label">{t('home.stat3.label')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <span className="section-label">{t('home.how.label')}</span>
          <h2 className="section-title">
            <span>{t('home.how.title')}</span>{' '}
            <span>{t('home.how.title.hl')}</span>
          </h2>
          <p className="section-desc">{t('home.how.desc')}</p>
          <div className="how-grid grid-3">
            <div className="how-card">
              <div className="how-num">01</div>
              <div className="card-icon">♻️</div>
              <h3>{t('home.step1.title')}</h3>
              <p>{t('home.step1.desc')}</p>
            </div>
            <div className="how-card">
              <div className="how-num">02</div>
              <div className="card-icon">🎯</div>
              <h3>{t('home.step2.title')}</h3>
              <p>{t('home.step2.desc')}</p>
            </div>
            <div className="how-card">
              <div className="how-num">03</div>
              <div className="card-icon">💰</div>
              <h3>{t('home.step3.title')}</h3>
              <p>{t('home.step3.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="section impact-section">
        <div className="container">
          <div className="impact-grid">
            <div>
              <span className="section-label">{t('home.impact.label')}</span>
              <h2 className="section-title">
                <span className="inline-home-1">{t('impacto_titulo_1')}</span>{' '}
                <span>{t('impacto_titulo_2')}</span>
              </h2>
              <p className="section-desc">{t('home.impact.desc')}</p>
              <Link to="/sobre" className="btn btn-outline" style={{ marginTop: '8px' }}>
                {t('home.impact.btn')}
              </Link>
            </div>
            <div className="impact-visual">
              <div className="impact-item">
                <div className="impact-icon">🌱</div>
                <div className="impact-info">
                  <strong>{t('home.i1.title')}</strong>{' '}
                  <span>{t('home.i1.desc')}</span>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">🔄</div>
                <div className="impact-info">
                  <strong>{t('home.i2.title')}</strong>{' '}
                  <span>{t('home.i2.desc')}</span>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">⚡</div>
                <div className="impact-info">
                  <strong>{t('home.i3.title')}</strong>{' '}
                  <span>{t('home.i3.desc')}</span>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">🎮</div>
                <div className="impact-info">
                  <strong>{t('home.i4.title')}</strong>{' '}
                  <span>{t('home.i4.desc')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section cta-section">
        <div className="container">
          <div className="glow-line" style={{ margin: '0 auto 24px' }} />
          <h2 className="section-title">
            <span>{t('home.cta.title')}</span>{' '}
            <span className="inline-home-2">{t('home.cta.hl')}</span>
          </h2>
          <p style={{ margin: '0 auto 40px', maxWidth: '500px' }}>{t('home.cta.desc')}</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/demo" className="btn btn-primary">{t('home.hero.btn_demo')}</Link>
            <Link to="/solucao" className="btn btn-outline">{t('home.hero.btn_solution')}</Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO OBRIGATÓRIA DA SPRINT: CONSUMO DA API JAVA / BANCO ORACLE */}
      <section className="section" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label">INTEGRAÇÃO COM API JAVA (SPRING BOOT)</span>
          <h2 className="section-title" style={{ marginBottom: '24px' }}>
            Lojas <span>Parceiras</span>
          </h2>

          {carregandoLojas && (
            <p style={{ color: '#aaa' }}>Conectando com a API no Render e buscando lojas...</p>
          )}

          {erroLojas && (
            <p style={{ color: '#ff4d4f' }}>{erroLojas}</p>
          )}

          {!carregandoLojas && !erroLojas && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '20px',
                maxWidth: '1000px',
                margin: '0 auto'
              }}
            >
              {lojas.map((loja, index) => (
                <div
                  key={loja.id || index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(18, 205, 222, 0.25)',
                    borderRadius: '12px',
                    padding: '20px',
                    textAlign: 'left'
                  }}
                >
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px', color: '#fff' }}>
                    {loja.nome || loja.nomeFantasia || `Loja #${loja.id}`}
                  </h3>
                  {loja.categoria && (
                    <p style={{ color: '#12cdde', fontSize: '0.9rem', marginBottom: '6px' }}>
                      Categoria: {loja.categoria}
                    </p>
                  )}
                  {loja.endereco && (
                    <p style={{ color: '#888', fontSize: '0.85rem' }}>
                      📍 {loja.endereco}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}