import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Sobre from '@/pages/Sobre';
import Solucao from '@/pages/Solucao';
import Demo from '@/pages/Demo';
import Faq from '@/pages/Faq';
import Integrantes from '@/pages/Integrantes';
import MemberDetail from '@/pages/MemberDetail';
import Contato from '@/pages/Contato';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/solucao" element={<Solucao />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/integrantes" element={<Integrantes />} />
        {/* Rota dinâmica: parâmetro :id lido via useParams em MemberDetail */}
        <Route path="/integrantes/:id" element={<MemberDetail />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
