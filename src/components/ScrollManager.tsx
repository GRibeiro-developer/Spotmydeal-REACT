import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Em uma SPA o navegador não reposiciona o scroll ao trocar de rota.
 * - Rota nova sem #hash  -> volta ao topo
 * - Rota com #hash       -> rola até o elemento com aquele id (espera a página lazy montar)
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timer: number | undefined;

    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView();
      } else if (attempts++ < 20) {
        timer = window.setTimeout(scrollToTarget, 50);
      }
    };

    scrollToTarget();
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
