<<<<<<< HEAD
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
=======
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="mb-4 font-display text-8xl font-black text-cyan/20">404</span>
      <h1 className="mb-4 text-white">Página não encontrada</h1>
      <p className="mb-8 max-w-md text-ink-muted">
        A página que você procura não existe ou foi movida. Volte para a home e continue
        disputando cupons.
      </p>
      <Button to="/" variant="primary">
        ← Voltar para a Home
      </Button>
    </Container>
>>>>>>> bcb44fe4966cfb971a1cb0fa7646f57681b9378e
  );
}
