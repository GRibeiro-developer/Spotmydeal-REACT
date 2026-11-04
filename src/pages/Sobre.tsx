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
      </section>
    </>
  );
}
