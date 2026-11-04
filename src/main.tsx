import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import './styles/global.css';
import './styles/responsive.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
);


export default function App() {
  const [dados, setDados] = useState<any[]>([]);

  useEffect(() => {
    // Obtém o URL configurado na Vercel
    const baseUrl = import.meta.env.VITE_API_URL;

    // Substitua '/api/cupons' pelo caminho exato do endpoint da sua Controller Java
    fetch(`${baseUrl}/api/cupons`)
      .then((resposta) => resposta.json())
      .then((resultado) => {
        console.log('Dados recebidos:', resultado);
        setDados(resultado);
      })
      .catch((erro) => console.error('Erro na requisição:', erro));
  }, []);

  return (
    <div>
      <h1>SpotMyDeal</h1>
      <pre>{JSON.stringify(dados, null, 2)}</pre>
    </div>
  );
}


