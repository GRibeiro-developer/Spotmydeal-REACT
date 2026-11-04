import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import './Home.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const { t } = useLanguage();
  usePageMeta("SpotMyDeal — Encontre Seu Cupom", "SpotMyDeal — Encontre seu cupom. Gamificação de cupons de desconto com loot tracker. Projeto FIAP x SoulUp.");

  const [lojas, setLojas] = useState<any[]>([]);
const [carregando, setCarregando] = useState<boolean>(true);

const API_URL = import.meta.env.VITE_API_URL;

useEffect(() => {
  fetch(`${API_URL}/lojas`)
    .then((res) => {
      if (!res.ok) throw new Error(`Erro: ${res.status}`);
      return res.json();
    })
    .then((dados) => {
      setLojas(dados);
      setCarregando(false);
    })
    .catch((erro) => {
      console.error('Falha ao carregar lojas:', erro);
      setCarregando(false);
    });
}, [API_URL]);

  return (
    
    <>
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
              <Link to="/solucao" className="btn btn-primary">{t('home.btn.solution')}</Link>
              {" "}
              <Link to="/demo" className="btn btn-outline">{t('home.btn.demo')}</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="loot-card">
              <div className="loot-header">
                <span className="loot-title">Deal Hunter</span>
                {" "}
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
      <section style={{ padding: '0' }}>
        <div className="container">
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">{t('home.stat1.num')}</span>
              {" "}
              <span className="stat-label">{t('home.stat1.label')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">{t('home.stat2.num')}</span>
              {" "}
              <span className="stat-label">{t('home.stat2.label')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">{t('home.stat3.num')}</span>
              {" "}
              <span className="stat-label">{t('home.stat3.label')}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="section-label">{t('home.how.label')}</span>
          <h2 className="section-title">
            <span>{t('home.how.title')}</span>
            {" "}
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
      <section className="section impact-section">
        <div className="container">
          <div className="impact-grid">
            <div>
              <span className="section-label">{t('home.impact.label')}</span>
              <h2 className="section-title">
                <span className="inline-home-1">{t('impacto_titulo_1')}</span>
                {" "}
                <span>{t('impacto_titulo_2')}</span>
              </h2>
              <p className="section-desc">{t('home.impact.desc')}</p>
              <Link to="/sobre" className="btn btn-outline" style={{ marginTop: '8px' }}>{t('home.impact.btn')}</Link>
            </div>
            <div className="impact-visual">
              <div className="impact-item">
                <div className="impact-icon">🌱</div>
                <div className="impact-info">
                  <strong>{t('home.i1.title')}</strong>
                  {" "}
                  <span>{t('home.i1.desc')}</span>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">🔄</div>
                <div className="impact-info">
                  <strong>{t('home.i2.title')}</strong>
                  {" "}
                  <span>{t('home.i2.desc')}</span>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">⚡</div>
                <div className="impact-info">
                  <strong>{t('home.i3.title')}</strong>
                  {" "}
                  <span>{t('home.i3.desc')}</span>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">🎮</div>
                <div className="impact-info">
                  <strong>{t('home.i4.title')}</strong>
                  {" "}
                  <span>{t('home.i4.desc')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section cta-section">
        <div className="container">
          <div className="glow-line" style={{ margin: '0 auto 24px' }} />
          <h2 className="section-title">
            <span>{t('home.cta.title')}</span>
            {" "}
            <span className="inline-home-2">{t('home.cta.hl')}</span>
          </h2>
          <p style={{ margin: '0 auto 40px', maxWidth: '500px' }}>{t('home.cta.desc')}</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/demo" className="btn btn-primary">{t('home.hero.btn_demo')}</Link>
            {" "}
            <Link to="/solucao" className="btn btn-outline">{t('home.hero.btn_solution')}</Link>

            
          </div>
        </div>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/demo" className="btn btn-primary">{t('home.hero.btn_demo')}</Link>
            <Link to="/solucao" className="btn btn-outline">{t('home.hero.btn_solution')}</Link>
          </div>

          {/* Coloque a lista aqui, fora da div dos botões mas dentro do container */}
          <div style={{ marginTop: '40px' }}>
            {carregando ? (
              <p style={{ textAlign: 'center' }}>A carregar lojas...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lojas.map((loja) => (
                  <div key={loja.id || loja.nome} className="p-4 border rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg">{loja.nome || loja.nomeFantasia || 'Loja'}</h3>
                    {loja.categoria && <p className="text-sm text-gray-600">{loja.categoria}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
      </section>
    </>
  );
}
