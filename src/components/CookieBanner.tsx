'use client';

import { useState, useEffect } from 'react';

const FB = { fontFamily: 'var(--font-lato), sans-serif' };
const FT = { fontFamily: 'var(--font-playfair), Georgia, serif' };

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Primeiro marca como montado
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    // Usa setTimeout para evitar o warning de setState síncrono
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('cookie_consent');
      if (!consent) {
        setVisible(true);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  const handlePolicyClick = () => {
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  return (
    <>
      <style>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 -4px 24px rgba(55, 43, 46, 0.15);
          background-color: #372b2e;
        }

        @media (min-width: 768px) {
          .cookie-banner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 20px 48px;
          }
        }

        .cookie-btn-accept {
          background-color: #5e8c6a;
          color: #ffffff;
          border: none;
          padding: 10px 24px;
          border-radius: 9999px;
          font-weight: 700;
          cursor: pointer;
          font-size: 0.875rem;
          transition: background-color 0.2s;
          white-space: nowrap;
        }
        .cookie-btn-accept:hover { background-color: #4a7055; }

        .cookie-btn-decline {
          background-color: transparent;
          color: #d8dad6;
          border: 2px solid #d8dad6;
          padding: 10px 24px;
          border-radius: 9999px;
          font-weight: 700;
          cursor: pointer;
          font-size: 0.875rem;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .cookie-btn-decline:hover {
          background-color: #d8dad6;
          color: #372b2e;
        }

        .cookie-link {
          color: #d18e8f;
          text-decoration: underline;
        }
        .cookie-link:hover { color: #ffffff; }
      `}</style>

      <div 
        className="cookie-banner" 
        role="dialog" 
        aria-label="Aviso de cookies"
        aria-modal="true"
      >
        <div style={{ maxWidth: '680px' }}>
          <p className="text-sm font-bold mb-1" style={{ ...FT, color: '#d18e8f' }}>
            🍪 Utilizamos cookies
          </p>
          <p className="text-sm leading-relaxed" style={{ ...FB, color: '#d8dad6' }}>
            Este site utiliza cookies para melhorar sua experiência de navegação e analisar o tráfego.
            Ao clicar em <strong style={{ color: '#ffffff' }}>&quot;Aceitar&quot;</strong>, você concorda com o uso
            de cookies conforme nossa{' '}
            <a
              href="#politica-de-privacidade"
              onClick={handlePolicyClick}
              className="cookie-link"
              style={FB}
            >
              Política de Privacidade
            </a>.
          </p>
        </div>

        <div className="flex gap-3 shrink-0">
          <button 
            onClick={decline} 
            className="cookie-btn-decline" 
            style={FB}
          >
            Recusar
          </button>
          <button 
            onClick={accept} 
            className="cookie-btn-accept" 
            style={FB}
          >
            Aceitar
          </button>
        </div>
      </div>
    </>
  );
}