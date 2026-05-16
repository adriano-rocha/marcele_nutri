"use client";

import { useState } from "react";

const FONT_TITLE = { fontFamily: "var(--font-playfair), Georgia, serif" };

const links = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "O que inclui", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Antropometria", href: "#antropometria" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

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

      <header
        className="fixed top-0 left-0 right-0 z-50 shadow-sm backdrop-blur-md"
        style={{ backgroundColor: "rgba(216, 218, 214, 0.92)" }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="shrink-0 text-lg font-bold lg:text-2xl"
            style={{
              ...FONT_TITLE,
              color: "#5e8c6a",
              fontStyle: "normal",
              fontWeight: 800,
              letterSpacing: "0.05em",
              textDecoration: "none",
            }}
          >
            Nutri da Mulher - Marcele Asevedo
          </a>

          <ul className="hidden items-center gap-6 lg:flex">
            {links.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#planos" className="nav-cta hidden lg:inline-block">
            Ver planos
          </a>

          <button
            type="button"
            className="ml-auto text-2xl lg:hidden"
            style={{
              color: "#372b2e",
              background: "none",
              border: "none",
              cursor: "pointer",
              lineHeight: 1,
            }}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed left-0 right-0 top-14 z-40 px-6 py-4 shadow-lg lg:hidden"
          style={{ backgroundColor: "#d8dad6" }}
        >
          <ul>
            {links.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="menu-mobile-link" onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#planos" className="nav-cta mt-4 block py-3 text-center" onClick={closeMenu}>
            Ver planos →
          </a>
        </div>
      )}
    </>
  );
}