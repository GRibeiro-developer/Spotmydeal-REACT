import { useLanguage } from '../i18n/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import './Integrantes.css';

export default function Integrantes() {
  const { t } = useLanguage();
  usePageMeta("Equipe — SpotMyDeal", "Equipe SpotMyDeal — Conheça os integrantes do projeto FIAP.");

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">{t('team.label')}</span>
          <h1>
            A
            {" "}
            <span style={{ color: 'var(--cyan)' }}>{t('nav.team')}</span>
          </h1>
          <p style={{ maxWidth: '560px', marginTop: '16px' }}>{t('team.hero.desc')}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="members-grid">
            <article className="member-card">
              <div className="member-avatar">
                <img src="./img/EU.jpeg" alt="Gabriel Augusto" />
              </div>
              <div className="member-rm">RM 573120</div>
              <h2 className="member-name">Gabriel Augusto</h2>
              <span className="turma-badge">1TDSPW · FIAP 2026</span>
              <p className="member-turma">{t('team.g2.role')}</p>
              <div className="member-links">
                <a href="https://www.linkedin.com/in/gabrielribeiro-backend-developer/" target="_blank" className="member-link link-linkedin" rel="noopener noreferrer">in {t('team.linkedin')}</a>
                {" "}
                <a href="https://github.com/Ribeirogab06" target="_blank" className="member-link link-github" rel="noopener noreferrer">⌥ {t('team.github')}</a>
              </div>
            </article>
            <article className="member-card">
              <div className="member-avatar">
                <img src="./img/escobar.png" alt="Nycoas Escobar" />
              </div>
              <div className="member-rm">RM 573052</div>
              <h2 className="member-name">Nycolas Escobar</h2>
              <span className="turma-badge">1TDSPW · FIAP 2026</span>
              <p className="member-turma">{t('team.g3.role')}</p>
              <div className="member-links">
                <a href="https://www.linkedin.com/in/nycolas-melo-escobar-983376391/" target="_blank" className="member-link link-linkedin" rel="noopener noreferrer">in {t('team.linkedin')}</a>
                {" "}
                <a href="https://github.com/Nycolas10072006" target="_blank" className="member-link link-github" rel="noopener noreferrer">⌥ {t('team.github')}</a>
              </div>
            </article>
            <article className="member-card">
              <div className="member-avatar">
                <img src="./img/rodrigo.png" alt="Rodrigo" />
              </div>
              <div className="member-rm">RM 570539</div>
              <h2 className="member-name">Rodrigo Banharelli</h2>
              <span className="turma-badge">1TDSPW · FIAP 2026</span>
              <p className="member-turma">{t('team.g1.role')}</p>
              <div className="member-links">
                <a href="https://www.linkedin.com/in/rodrigo-banharelli/" target="_blank" className="member-link link-linkedin" rel="noopener noreferrer">in {t('team.linkedin')}</a>
                {" "}
                <a href="https://github.com/RodrigoBanharelli" target="_blank" className="member-link link-github" rel="noopener noreferrer">⌥ {t('team.github')}</a>
              </div>
            </article>
            <article className="member-card">
              <div className="member-avatar">
                <img src="./img/tay.png" alt="tay" />
              </div>
              <div className="member-rm">RM 569337</div>
              <h2 className="member-name">Tayna Jimenes</h2>
              <span className="turma-badge">1TDSPW · FIAP 2026</span>
              <p className="member-turma">{t('team.g4.role')}</p>
              <div className="member-links">
                <a href="https://www.linkedin.com/in/tayna-jimenes/" target="_blank" className="member-link link-linkedin" rel="noopener noreferrer">in {t('team.linkedin')}</a>
                {" "}
                <a href="https://github.com/TaynaJimenes" target="_blank" className="member-link link-github" rel="noopener noreferrer">⌥ {t('team.github')}</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
