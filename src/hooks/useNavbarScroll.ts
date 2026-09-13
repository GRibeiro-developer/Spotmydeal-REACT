import { useEffect, useState } from 'react';

/**
 * Detecta se a página foi rolada além de um limiar, para aplicar
 * um fundo mais opaco/sombra na navbar fixa (efeito visual do site original).
 */
export function useNavbarScroll(threshold = 40): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > threshold);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
