import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';

const NAV_LINKS: { to: string; key: TranslationKey; end?: boolean }[] = [
  { to: '/', key: 'nav.home', end: true },
  { to: '/sobre', key: 'nav.about' },
  { to: '/solucao', key: 'nav.solution' },
  { to: '/demo', key: 'nav.demo' },
  { to: '/faq', key: 'nav.faq' },
  { to: '/integrantes', key: 'nav.team' },
];

const activeClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : undefined);
const ctaClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'nav-cta active' : 'nav-cta');

export default function Navbar() {
  const { lang, t, toggleLanguage } = useLanguage();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // fecha o menu mobile ao trocar de página
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // efeito de fundo ao rolar a página
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className="navbar"
      style={
        scrolled
          ? { background: 'rgba(8, 14, 20, 0.98)', boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }
          : undefined
      }
    >
      <div className="container">
        <div className="navbar-inner">
          <Link to="/" className="nav-logo">
            <div className="nav-logo-icon">S</div>
            <span className="nav-logo-text">
              Spot<span>My</span>Deal
            </span>
          </Link>

          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.end} className={activeClass}>
                  {t(link.key)}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/contato" className={ctaClass}>
                {t('nav.contact')}
              </NavLink>
            </li>
          </ul>

          <button
            type="button"
            id="lang-toggle"
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            title={lang === 'pt' ? 'English' : 'Português'}
          >
            <img
              src={lang === 'pt' ? '/img/eua.png' : '/img/bra.jpeg'}
              className="flag-img"
              alt={lang === 'pt' ? 'English' : 'Português'}
            />
          </button>

          <button
            type="button"
            className={menuOpen ? 'hamburger open' : 'hamburger'}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={menuOpen ? 'mobile-nav open' : 'mobile-nav'}>
        {NAV_LINKS.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.end} className={activeClass} onClick={closeMenu}>
            {t(link.key)}
          </NavLink>
        ))}
        <NavLink to="/contato" className={activeClass} onClick={closeMenu}>
          {t('nav.contact')}
        </NavLink>
      </div>
    </nav>
  );
}
