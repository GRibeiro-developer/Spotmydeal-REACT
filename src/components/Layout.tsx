import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollManager from './ScrollManager';

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Suspense fallback={<div className="page-loading" aria-busy="true" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
