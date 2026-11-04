import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useLanguage } from '../i18n/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();
  usePageMeta('Página não encontrada — SpotMyDeal', 'A página que você procura não existe.');

  return (
    <section className="page-hero" style={{ minHeight: '70vh' }}>
      <div className="container">
        <span className="section-label">{t('notfound.label')}</span>
        <h1>
          <span style={{ color: 'var(--cyan)' }}>404</span> — {t('notfound.title')}
        </h1>
        <p style={{ maxWidth: '500px', margin: '16px 0 32px' }}>{t('notfound.desc')}</p>
        <Link to="/" className="btn btn-primary">
          {t('notfound.btn')}
        </Link>
      </div>
    </section>
  );
}
