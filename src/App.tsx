/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ChevronUp } from 'lucide-react';
import { WhatsApp3DIcon } from './components/icons3D.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { InsuranceSection } from './components/InsuranceSection.tsx';
import { SpaceCarousel } from './components/SpaceCarousel.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { SocialSection } from './components/SocialSection.tsx';
import { ReviewSection } from './components/ReviewSection.tsx';
import { FinalContactSection } from './components/FinalContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { VerticalSlideNav } from './components/VerticalSlideNav.tsx';
import { CinematicBackground } from './components/CinematicBackground.tsx';
import { CinematicSection } from './components/CinematicSection.tsx';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const whatsappUrl = 'https://wa.link/int8mg';

  // Cinematic scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4EFEA] text-slate-800 selection:bg-amber-100 selection:text-amber-900 relative antialiased flex flex-col font-sans overflow-x-hidden">
      {/* Cinematic Ambient Parallax Background with Champagne Gold and Warm Sand Nuances */}
      <CinematicBackground />

      {/* Cinematic Scroll Progress Bar at the Very Top (Dourado -> Rosa -> Roxo) */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 origin-left z-50 shadow-[0_1px_12px_rgba(168,85,247,0.5)]"
      />

      {/* Top Bar Contract (Single-row, 3-zone architecture with 3D glass) */}
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-2xl border-b border-amber-100/60 shadow-[0_4px_24px_rgba(217,119,6,0.04)] transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark with 3D glint */}
          <a
            href="#secao-abertura"
            className="text-base sm:text-lg font-display font-bold tracking-tight text-slate-900 flex items-center gap-2.5 hover:opacity-90 transition-opacity group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-500 shadow-sm shadow-rose-400/50 group-hover:scale-125 transition-transform" />
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Clínica Mami
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links (Desktop) */}
          <nav className="hidden md:flex items-center gap-5 text-xs sm:text-sm font-semibold text-slate-600">
            <a href="#secao-abertura" className="hover:text-rose-600 transition-colors">Início</a>
            <a href="#secao-espaco" className="hover:text-amber-600 transition-colors">Nosso Espaço</a>
            <a href="#secao-conheca" className="hover:text-purple-600 transition-colors">Sobre</a>
            <a href="#secao-servicos" className="hover:text-rose-600 transition-colors">Serviços</a>
            <a href="#secao-convenios" className="hover:text-amber-600 transition-colors">Convênios</a>
            <a href="#secao-equipe" className="hover:text-purple-600 transition-colors">Corpo Clínico</a>
            <a href="#secao-localizacao" className="hover:text-rose-600 transition-colors">Onde Estamos</a>
            <a href="#secao-redes" className="hover:text-amber-600 transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Floating Vertical Section Slide Navigator (Desktop) */}
      <VerticalSlideNav />

      {/* Main Vertical Carousel Panels Container with Cinematic Motion Reveals */}
      <main className="w-full flex-1 flex flex-col">
        {/* SEÇÃO 1: ABERTURA */}
        <section
          id="secao-abertura"
          className="relative min-h-[92dvh] flex flex-col items-center justify-center py-12 sm:py-20 px-4 sm:px-6"
        >
          <HeroSection />
        </section>

        {/* Delicate Cinematic Divider */}
        <div className="w-full flex justify-center py-2">
          <div className="w-36 h-[2px] rounded-full bg-gradient-to-r from-transparent via-amber-300 via-rose-400 via-purple-400 to-transparent shadow-[0_1px_6px_rgba(245,158,11,0.25)]" />
        </div>

        {/* SEÇÃO 2: NOSSO ESPAÇO COM IMAGENS (NO TOPO) */}
        <CinematicSection
          id="secao-espaco"
          className="min-h-[90dvh] flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6"
        >
          <div className="w-full max-w-xl text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-50 via-amber-50 to-purple-50 border border-amber-200/70 shadow-2xs text-xs font-semibold text-amber-950 mb-3.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="tracking-wide">Infraestrutura Acolhedora</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-900 tracking-tight">
              Nosso Espaço
            </h3>
            <p className="text-sm font-medium text-slate-500 mt-1.5 max-w-md mx-auto leading-relaxed">
              Ambientes preparados com conforto, acolhimento, acessibilidade e privacidade
            </p>
          </div>
          <SpaceCarousel />
        </CinematicSection>

        {/* Delicate Cinematic Divider */}
        <div className="w-full flex justify-center py-2">
          <div className="w-36 h-[2px] rounded-full bg-gradient-to-r from-transparent via-purple-400 via-rose-400 via-amber-300 to-transparent shadow-[0_1px_6px_rgba(168,85,247,0.25)]" />
        </div>

        {/* SEÇÃO 3: CONHEÇA A CLÍNICA */}
        <CinematicSection
          id="secao-conheca"
          className="min-h-[85dvh] flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6"
        >
          <AboutSection />
        </CinematicSection>

        {/* Delicate Cinematic Divider */}
        <div className="w-full flex justify-center py-2">
          <div className="w-36 h-[2px] rounded-full bg-gradient-to-r from-transparent via-amber-300 via-rose-400 via-purple-400 to-transparent shadow-[0_1px_6px_rgba(245,158,11,0.25)]" />
        </div>

        {/* SEÇÃO: ESPECIALIDADES & SERVIÇOS */}
        <CinematicSection
          id="secao-servicos"
          className="min-h-[85dvh] flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6"
        >
          <ServicesSection />
        </CinematicSection>

        {/* Delicate Cinematic Divider */}
        <div className="w-full flex justify-center py-2">
          <div className="w-36 h-[2px] rounded-full bg-gradient-to-r from-transparent via-purple-400 via-rose-400 via-amber-300 to-transparent shadow-[0_1px_6px_rgba(168,85,247,0.25)]" />
        </div>

        {/* SEÇÃO: CONVÊNIOS ATENDIDOS */}
        <CinematicSection
          id="secao-convenios"
          className="min-h-[80dvh] flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6"
        >
          <InsuranceSection />
        </CinematicSection>

        {/* Delicate Cinematic Divider */}
        <div className="w-full flex justify-center py-2">
          <div className="w-36 h-[2px] rounded-full bg-gradient-to-r from-transparent via-amber-300 via-rose-400 via-purple-400 to-transparent shadow-[0_1px_6px_rgba(245,158,11,0.25)]" />
        </div>

        {/* SEÇÃO 4: CORPO CLÍNICO */}
        <CinematicSection
          id="secao-equipe"
          className="min-h-[85dvh] flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6"
        >
          <TeamSection />
        </CinematicSection>

        {/* Delicate Cinematic Divider */}
        <div className="w-full flex justify-center py-2">
          <div className="w-36 h-[2px] rounded-full bg-gradient-to-r from-transparent via-purple-400 via-rose-400 via-amber-300 to-transparent shadow-[0_1px_6px_rgba(168,85,247,0.25)]" />
        </div>

        {/* SEÇÃO 5: LOCALIZAÇÃO */}
        <CinematicSection
          id="secao-localizacao"
          className="min-h-[85dvh] flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6"
        >
          <LocationSection />
        </CinematicSection>

        {/* Delicate Cinematic Divider */}
        <div className="w-full flex justify-center py-2">
          <div className="w-36 h-[2px] rounded-full bg-gradient-to-r from-transparent via-amber-300 via-rose-400 via-purple-400 to-transparent shadow-[0_1px_6px_rgba(245,158,11,0.25)]" />
        </div>

        {/* SEÇÃO 6: REDES SOCIAIS & CONTATO */}
        <CinematicSection
          id="secao-redes"
          className="min-h-[80dvh] flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6"
        >
          <SocialSection />
        </CinematicSection>

        {/* Delicate Cinematic Divider */}
        <div className="w-full flex justify-center py-2">
          <div className="w-36 h-[2px] rounded-full bg-gradient-to-r from-transparent via-purple-400 via-rose-400 via-amber-300 to-transparent shadow-[0_1px_6px_rgba(168,85,247,0.25)]" />
        </div>

        {/* SEÇÃO 7: AVALIE A CLÍNICA */}
        <CinematicSection
          id="secao-avaliacao"
          className="min-h-[80dvh] flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6"
        >
          <ReviewSection />
        </CinematicSection>

        {/* Delicate Cinematic Divider */}
        <div className="w-full flex justify-center py-2">
          <div className="w-36 h-[2px] rounded-full bg-gradient-to-r from-transparent via-amber-300 via-rose-400 via-purple-400 to-transparent shadow-[0_1px_6px_rgba(245,158,11,0.25)]" />
        </div>

        {/* SEÇÃO 8: CONTATO FINAL */}
        <CinematicSection
          id="secao-contato"
          className="min-h-[85dvh] flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6"
        >
          <FinalContactSection />
        </CinematicSection>
      </main>

      {/* RODAPÉ */}
      <Footer />

      {/* Floating Bottom Quick Contact Trigger for Mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-30 md:hidden pointer-events-none flex justify-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto relative group overflow-hidden flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold text-xs sm:text-sm shadow-[0_12px_28px_-4px_rgba(37,211,102,0.55)] border-t border-white/40 active:scale-95 transition-all duration-200"
        >
          <div className="absolute inset-0 animate-sheen pointer-events-none opacity-40" />
          <WhatsApp3DIcon size={28} />
          <span className="relative z-10 font-bold tracking-wide">Falar pelo WhatsApp</span>
        </a>
      </div>

      {/* Floating WhatsApp Quick Action on Desktop */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar pelo WhatsApp Oficial"
          title="Falar pelo WhatsApp Oficial"
          className="group relative flex items-center gap-3 py-2.5 px-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs shadow-[0_10px_28px_rgba(37,211,102,0.35)] hover:shadow-[0_14px_35px_rgba(37,211,102,0.5)] border border-emerald-200 transition-all duration-300 transform-gpu hover:scale-105 active:scale-95"
        >
          <WhatsApp3DIcon size={36} />
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase font-bold text-emerald-600">WhatsApp</span>
            <span className="text-xs font-bold text-slate-800 tracking-tight">Atendimento Online</span>
          </div>
        </a>
      </div>

      {/* 3D Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Voltar ao início"
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-30 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-[0_8px_20px_rgba(0,0,0,0.12)] border border-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 group"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
}
