import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#09090D] text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-lg font-bold tracking-tight">
            BOS138
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#showcase" className="hover:text-white">Works</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
          >
            Hire Me
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <div className="border-t border-white/10" />
        <About />
        <div className="border-t border-white/10" />
        <Showcase />
        <div className="border-t border-white/10" />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[#0B0B10] py-8 text-center text-white/70">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm">
            © {new Date().getFullYear()} BOS138 — Gaming • AI Education • Full‑stack Development. Built with love for Indonesia.
          </p>
          <p className="mt-2 text-xs">Portfolio modern dengan animasi halus dan struktur SEO‑friendly.</p>
        </div>
      </footer>
    </div>
  );
}
