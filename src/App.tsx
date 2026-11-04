<<<<<<< HEAD
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

// Code-splitting: cada página vira um chunk carregado sob demanda.
const Home = lazy(() => import('./pages/Home'));
const Sobre = lazy(() => import('./pages/Sobre'));
const Solucao = lazy(() => import('./pages/Solucao'));
const Demo = lazy(() => import('./pages/Demo'));
const Faq = lazy(() => import('./pages/Faq'));
const Integrantes = lazy(() => import('./pages/Integrantes'));
const Contato = lazy(() => import('./pages/Contato'));
const NotFound = lazy(() => import('./pages/NotFound'));
=======
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
>>>>>>> bcb44fe4966cfb971a1cb0fa7646f57681b9378e

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
<<<<<<< HEAD
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="solucao" element={<Solucao />} />
        <Route path="demo" element={<Demo />} />
        <Route path="faq" element={<Faq />} />
        <Route path="integrantes" element={<Integrantes />} />
        <Route path="contato" element={<Contato />} />

        {/* URLs antigas (.html) continuam funcionando */}
        <Route path="index.html" element={<Navigate to="/" replace />} />
        <Route path="sobre.html" element={<Navigate to="/sobre" replace />} />
        <Route path="solucao.html" element={<Navigate to="/solucao" replace />} />
        <Route path="demo.html" element={<Navigate to="/demo" replace />} />
        <Route path="faq.html" element={<Navigate to="/faq" replace />} />
        <Route path="integrantes.html" element={<Navigate to="/integrantes" replace />} />
        <Route path="contato.html" element={<Navigate to="/contato" replace />} />

=======
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/solucao" element={<Solucao />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/integrantes" element={<Integrantes />} />
        {/* Rota dinâmica: parâmetro :id lido via useParams em MemberDetail */}
        <Route path="/integrantes/:id" element={<MemberDetail />} />
        <Route path="/contato" element={<Contato />} />
>>>>>>> bcb44fe4966cfb971a1cb0fa7646f57681b9378e
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
