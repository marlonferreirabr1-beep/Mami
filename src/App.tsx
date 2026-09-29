/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Calendar, ChevronUp } from 'lucide-react';
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
    <div className="min-h-screen bg-[#f7f9fc] text-slate-800 selection:bg-pink-100 selection:text-pink-900 relative antialiased flex flex-col font-sans overflow-x-hidden">
      {/* Cinematic Ambient Parallax Background with Pastel Orbs */}
      <CinematicBackground />

      {/* Cinematic Scroll Progress Bar at the Very Top (Pink -> Sky Blue -> Purple) */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-sky-400 to-purple-400 origin-left z-50 shadow-[0_1px_8px_rgba(244,114,182,0.6)]"
      />

      {/* Top Bar Contract (Single-row, 3-zone architecture with 3D glass) */}
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-2xl border-b border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark with 3D glint */}
          <a
            href="#secao-abertura"
            className="text-base sm:text-lg font-display font-bold tracking-tight text-slate-900 flex items-center gap-2.5 hover:opacity-90 transition-opacity group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 shadow-sm shadow-pink-400/50 group-hover:scale-125 transition-transform" />
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Clínica Mami
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links (Desktop) */}
          <nav className="hidden md:flex items-center gap-5 text-xs sm:text-sm font-semibold text-slate-600">
            <a href="#secao-abertura" className="hover:text-pink-600 transition-colors">Início</a>
            <a href="#secao-espaco" className="hover:text-purple-600 transition-colors">Nosso Espaço</a>
            <a href="#secao-conheca" className="hover:text-sky-600 transition-colors">Sobre</a>
            <a href="#secao-servicos" className="hover:text-pink-600 transition-colors">Serviços</a>
            <a href="#secao-convenios" className="hover:text-sky-600 transition-colors">Convênios</a>
            <a href="#secao-equipe" className="hover:text-purple-600 transition-colors">Corpo Clínico</a>
            <a href="#secao-localizacao" className="hover:text-sky-600 transition-colors">Onde Estamos</a>
            <a href="#secao-redes" className="hover:text-pink-600 transition-colors">Contato</a>
          </nav>

          {/* Zone 3: 1-2 primary actions (3D Shimmer CTA) */}
          <div className="flex items-center gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:to-slate-700 text-white text-xs font-bold tracking-wide shadow-md shadow-slate-900/15 hover:shadow-lg transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <div className="absolute inset-0 animate-sheen pointer-events-none opacity-40" />
              <Calendar className="w-3.5 h-3.5 text-pink-400" />
              <span>Agendar</span>
            </a>
          </div>
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
          <div className="w-32 h-[2px] rounded-full bg-gradient-to-r from-transparent via-purple-300 via-pink-300 to-transparent shadow-xs" />
        </div>

        {/* SEÇÃO 2: NOSSO ESPAÇO COM IMAGENS (NO TOPO) */}
        <CinematicSection
          id="secao-espaco"
          className="min-h-[90dvh] flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6"
        >
          <div className="w-full max-w-xl text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-50 via-slate-50 to-sky-50 border border-slate-200/60 shadow-2xs text-xs font-semibold text-slate-700 mb-3.5">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
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
          <div className="w-32 h-[2px] rounded-full bg-gradient-to-r from-transparent via-pink-300 via-sky-300 to-transparent shadow-xs" />
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
          <div className="w-32 h-[2px] rounded-full bg-gradient-to-r from-transparent via-pink-300 via-sky-300 to-transparent shadow-xs" />
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
          <div className="w-32 h-[2px] rounded-full bg-gradient-to-r from-transparent via-sky-300 via-purple-300 to-transparent shadow-xs" />
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
          <div className="w-32 h-[2px] rounded-full bg-gradient-to-r from-transparent via-purple-300 via-pink-300 to-transparent shadow-xs" />
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
          <div className="w-32 h-[2px] rounded-full bg-gradient-to-r from-transparent via-pink-300 via-sky-300 to-transparent shadow-xs" />
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
          <div className="w-32 h-[2px] rounded-full bg-gradient-to-r from-transparent via-sky-300 via-purple-300 to-transparent shadow-xs" />
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
          <div className="w-32 h-[2px] rounded-full bg-gradient-to-r from-transparent via-purple-300 via-pink-300 to-transparent shadow-xs" />
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
          <div className="w-32 h-[2px] rounded-full bg-gradient-to-r from-transparent via-pink-300 via-sky-300 to-transparent shadow-xs" />
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

      {/* Floating Bottom Quick Contact Trigger for Mobile (3D High Relief with Sheen, under 15% sticky cap) */}
      <div className="fixed bottom-4 left-4 right-4 z-30 md:hidden pointer-events-none flex justify-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto relative group overflow-hidden flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 text-white font-bold text-xs sm:text-sm shadow-[0_12px_28px_-4px_rgba(16,185,129,0.55)] border-t border-white/40 active:scale-95 transition-all duration-200"
        >
          <div className="absolute inset-0 animate-sheen pointer-events-none opacity-40" />
          <WhatsApp3DIcon size={28} showGleam={false} />
          <span className="relative z-10">Falar pelo WhatsApp</span>
        </a>
      </div>

      {/* 3D Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Voltar ao início"
          className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-30 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-[0_8px_20px_rgba(0,0,0,0.12)] border border-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 group"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
}
