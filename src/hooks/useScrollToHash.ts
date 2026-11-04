import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Garante navegação fluida em uma SPA: rola até o topo a cada troca de rota
 * e, quando a URL contém uma âncora (#id), rola suavemente até o elemento.
 */
export function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Aguarda o próximo frame para garantir que a página já renderizou.
      const timeoutId = window.setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => window.clearTimeout(timeoutId);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
}
