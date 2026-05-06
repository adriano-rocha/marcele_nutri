// app/page.tsx
import Header from "@/components/Header";
import CookieBanner from '@/components/CookieBanner';
import WhatsAppButtonFloat from "@/components/WhatsAppButtonFloat";

import Hero from "@/components/home/Hero";
import Sobre from "@/components/home/Sobre";
import Servicos from "@/components/home/Servicos";
import ComoFunciona from "@/components/home/ComoFunciona";
import Planos from "@/components/home/Planos";
import Antropometria from "@/components/home/Antropometria";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <ComoFunciona />
        <Planos />
        <Antropometria />
        <FAQ />
        <CTA />
        <Footer />
      </main>

      <WhatsAppButtonFloat />
      <CookieBanner />
    </>
  );
}