import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { useEffect, useState } from 'react';

// Code-splitting: cada página vira um chunk carregado sob demanda.
const Home = lazy(() => import('./pages/Home'));
const Sobre = lazy(() => import('./pages/Sobre'));
const Solucao = lazy(() => import('./pages/Solucao'));
const Demo = lazy(() => import('./pages/Demo'));
const Faq = lazy(() => import('./pages/Faq'));
const Integrantes = lazy(() => import('./pages/Integrantes'));
const Contato = lazy(() => import('./pages/Contato'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
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

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}


