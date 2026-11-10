import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLang } from '@/lib/i18n';

export default function Layout() {
  const { lang } = useLang();
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#FDE01A] focus:px-4 focus:py-2 focus:font-semibold">Skip to content</a>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main"
          key={`${pathname}-${lang}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}