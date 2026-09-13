import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScrollToHash } from '@/hooks/useScrollToHash';

/**
 * Layout raiz da SPA: Navbar fixa + área de conteúdo (rota atual) + Footer.
 * `useScrollToHash` garante navegação fluida entre páginas (topo ou âncora).
 */
export default function Layout() {
  useScrollToHash();

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <Navbar />
      <main className="flex-1 pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
