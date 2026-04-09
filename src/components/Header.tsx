'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar Top */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Nutri Marceli</div>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" className="text-gray-700 hover:text-blue-600">Home</a></li>
            <li><a href="#servicos" className="text-gray-700 hover:text-blue-600">Serviços</a></li>
            <li><a href="#sobre" className="text-gray-700 hover:text-blue-600">Sobre</a></li>
            <li><a href="#contato" className="text-gray-700 hover:text-blue-600">Contato</a></li>
          </ul>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </nav>
      </header>

      

      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-md p-4">
          <ul className="space-y-4">
            <li><a href="#home" className="block text-gray-700">Home</a></li>
            <li><a href="#servicos" className="block text-gray-700">Serviços</a></li>
            <li><a href="#sobre" className="block text-gray-700">Sobre</a></li>
            <li><a href="#contato" className="block text-gray-700">Contato</a></li>
          </ul>
        </div>
      )}
    </>
  );
}