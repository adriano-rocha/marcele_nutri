'use client';

import { useState } from 'react';

const FONT_TITLE = { fontFamily: 'var(--font-playfair), Georgia, serif' };

const links = [
  { label: 'Home',           href: '#home' },
  { label: 'Sobre',          href: '#sobre' },
  { label: 'O que inclui',   href: '#servicos' },
  { label: 'Como funciona',  href: '#como-funciona' },
  { label: 'Planos',         href: '#planos' },
  { label: 'FAQ',            href: '#faq' },
  { label: 'Contato',        href: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-link {
          font-family: var(--font-lato), sans-serif;
          color: #372b2e;
          font-weight: 600;
          font-size: 0.875rem;
          transition: color 0.2s;
          text-decoration: none;
          white-space: nowrap;
        }
        .nav-link:hover { color: #5e8c6a; }

        .nav-cta {
          font-family: var(--font-lato), sans-serif;
          background-color: #5e8c6a;
          color: #ffffff !important;
          font-weight: 700;
          font-size: 0.875rem;
          padding: 8px 20px;
          border-radius: 9999px;
          transition: background-color 0.2s;
          text-decoration: none;
          white-space: nowrap;
        }
        .nav-cta:hover { background-color: #4a7055; }

        .menu-mobile-link {
          display: block;
          font-family: var(--font-lato), sans-serif;
          color: #372b2e;
          font-weight: 600;
          padding: 12px 0;
          border-bottom: 1px solid #d18e8f22;
          transition: color 0.2s;
          text-decoration: none;
        }
        .menu-mobile-link:hover { color: #5e8c6a; }
        .menu-mobile-link:last-child { border-bottom: none; }
      `}</style>

      {/* Navbar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-sm"
        style={{ backgroundColor: 'rgba(216, 218, 214, 0.92)' }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center gap-6">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold shrink-0"
            style={{ ...FONT_TITLE, color: '#5e8c6a', fontStyle: 'italic', textDecoration: 'none' }}
          >
            Marcele Nutri
          </a>

          {/* Links desktop */}
          <ul className="hidden lg:flex items-center gap-6">
            {links.slice(0, -1).map((item) => (
              <li key={item.label}>
                <a href={item.href} className="nav-link">{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Botão CTA desktop */}
          <a
            href="#planos"
            className="nav-cta hidden lg:inline-block"
          >
            Ver planos
          </a>

          {/* Botão hambúrguer mobile */}
          <button
            className="lg:hidden text-2xl ml-auto"
            style={{ color: '#372b2e', background: 'none', border: 'none', cursor: 'pointer', lineHeight: 1 }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </nav>
      </header>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          className="lg:hidden fixed top-14.25 left-0 right-0 z-40 shadow-lg px-6 py-4"
          style={{ backgroundColor: '#d8dad6' }}
        >
          <ul>
            {links.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="menu-mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA mobile */}
          <a
            href="#planos"
            className="nav-cta block text-center mt-4 py-3"
            onClick={() => setMenuOpen(false)}
          >
            Ver planos →
          </a>
        </div>
      )}
    </>
  );
}