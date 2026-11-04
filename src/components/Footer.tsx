import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo" style={{ marginBottom: 0 }}>
              <div className="nav-logo-icon">S</div>
              <span className="nav-logo-text">
                Spot<span>My</span>Deal
              </span>
            </Link>
            <p>{t('footer.desc')}</p>
          </div>

          <div className="footer-col">
            <h4>{t('footer.nav')}</h4>
            <ul>
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/sobre">{t('nav.about')}</Link></li>
              <li><Link to="/solucao">{t('nav.solution')}</Link></li>
              <li><Link to="/demo">{t('nav.demo')}</Link></li>
              <li><Link to="/faq">{t('nav.faq')}</Link></li>
              <li><Link to="/integrantes">{t('nav.team')}</Link></li>
              <li><Link to="/contato">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.project')}</h4>
            <ul>
              <li><Link to="/sobre#contexto">{t('footer.context')}</Link></li>
              <li><Link to="/solucao#mecanismo">{t('footer.loot')}</Link></li>
              <li><Link to="/solucao#gatilhos">{t('footer.triggers')}</Link></li>
              <li><Link to="/demo">{t('footer.demo')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{ color: 'var(--text-muted)' }}>{t('footer.copy')}</p>
          <span className="footer-badge">{t('footer.badge')}</span>
        </div>
      </div>
    </footer>
  );
}
