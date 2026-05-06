import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Marcele Asevedo | Nutricionista',
  description: 'Nutricionista especialista em emagrecimento saudável, nutrição esportiva, funcional e estética.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${lato.variable}`}>
      <body style={{ fontFamily: 'var(--font-lato), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}