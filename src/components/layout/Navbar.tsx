import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks, contactNavItem } from '@/data/navigation';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useNavbarScroll();

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line backdrop-blur-md transition-colors duration-300 ${
        isScrolled ? 'bg-surface/95 shadow-lg shadow-black/40' : 'bg-surface/90'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1140px] items-center justify-between gap-3 px-6">
        <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan font-display text-xl font-black text-white">
            S
          </span>
          <span className="font-display text-xl font-extrabold uppercase tracking-[2px] text-white">
            Spot<span className="text-cyan">My</span>Deal
          </span>
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-sm px-4 py-2 font-display text-sm font-semibold uppercase tracking-wider transition-colors ${
                  isActive ? 'bg-cyan/10 text-cyan' : 'text-ink-muted hover:bg-cyan/10 hover:text-cyan'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to={contactNavItem.to}
            className="ml-2 rounded-sm bg-cyan px-5 py-2 font-display text-sm font-bold uppercase tracking-wider text-surface transition-colors hover:bg-white"
          >
            {contactNavItem.label}
          </Link>
        </nav>

        {/* Botão hambúrguer (mobile/tablet) */}
        <button
          type="button"
          aria-label="Abrir menu de navegação"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded bg-cyan transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-cyan transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-cyan transition-transform duration-300 ${
              isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Navegação mobile */}
      {isMobileMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-line bg-surface-2 px-6 py-4 lg:hidden">
          {[...navLinks, contactNavItem].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `rounded-sm px-4 py-3 font-display text-base font-bold uppercase tracking-wider transition-colors ${
                  isActive ? 'bg-cyan/10 text-cyan' : 'text-ink-muted hover:bg-cyan/10 hover:text-cyan'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
