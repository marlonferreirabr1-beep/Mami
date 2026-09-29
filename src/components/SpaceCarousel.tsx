import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, X, Eye } from 'lucide-react';

interface SpaceItem {
  id: string;
  name: string;
  url: string;
  description: string;
}

const SPACES: SpaceItem[] = [
  {
    id: 'recepcao',
    name: 'Recepção',
    description: 'Ambiente de boas-vindas tranquilo, pensado para o conforto e acolhimento desde o primeiro instante.',
    url: 'https://i.postimg.cc/FFbSXPP1/Screenshot-20260929-163136-Instagram.png',
  },
  {
    id: 'sala-01',
    name: 'Sala 01',
    description: 'Espaço privativo e sereno, com iluminação suave e ergonomia dedicada ao cuidado e à escuta.',
    url: 'https://i.postimg.cc/8zcfWTTc/Screenshot-20260929-163149-Instagram.png',
  },
  {
    id: 'sala-02',
    name: 'Sala 02',
    description: 'Consultório harmonioso, planejado com acústica e mobiliário confortáveis para consultas individualizadas.',
    url: 'https://i.postimg.cc/Gh81sfZ9/Screenshot-20260929-163200-Instagram.png',
  },
  {
    id: 'sala-03',
    name: 'Sala 03',
    description: 'Atendimento com atmosfera calorosa, estimulando o bem-estar, a tranquilidade e a confiança mútua.',
    url: 'https://i.postimg.cc/0NxgFyrm/Screenshot-20260929-163212-Instagram.png',
  },
  {
    id: 'sala-04',
    name: 'Sala 04',
    description: 'Ambiente cuidadosamente estruturado para sessões clínicas e terapêuticas em total discrição.',
    url: 'https://i.postimg.cc/02JLNwwr/Screenshot-20260929-163224-Instagram.png',
  },
  {
    id: 'sala-05',
    name: 'Sala 05',
    description: 'Espaço acolhedor e seguro, integrando delicadeza visual e máximo conforto para cada paciente.',
    url: 'https://i.postimg.cc/8CwYYdqR/Screenshot-20260929-163238-Instagram.png',
  },
];

export const SpaceCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? SPACES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === SPACES.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') setLightboxOpen(false);
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const currentSpace = SPACES[currentIndex];

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* 3D Gallery Pedestal Frame */}
      <div className="relative w-full p-2.5 sm:p-3 rounded-[32px] bg-gradient-to-b from-white via-white to-slate-50/80 shadow-[0_24px_50px_-12px_rgba(56,189,248,0.22),0_12px_24px_-8px_rgba(244,114,182,0.18)] border border-white">
        {/* Soft Tri-Color Rim Halo */}
        <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-r from-pink-300/30 via-sky-300/30 to-purple-300/30 blur-sm pointer-events-none -z-10" />

        {/* Viewport Frame */}
        <div
          className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[24px] overflow-hidden bg-slate-100 select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Animated Image Transition with Motion */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={currentSpace.id}
              src={currentSpace.url}
              alt={currentSpace.name}
              referrerPolicy="no-referrer"
              initial={{ opacity: 0, scale: 1.05, x: direction * 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.96, x: direction * -40 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </AnimatePresence>

          {/* Cinematic Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Top 3D Pill Badge */}
          <div className="absolute top-4 left-4 z-10">
            <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/80 text-xs font-bold tracking-wide text-slate-800 shadow-md flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-ping" />
              <span>{currentSpace.name}</span>
            </div>
          </div>

          {/* Fullscreen Expand Action */}
          <button
            onClick={() => setLightboxOpen(true)}
            title="Ver em tela cheia"
            aria-label="Ver foto em tela cheia"
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-slate-700 flex items-center justify-center shadow-md hover:bg-white hover:text-slate-950 hover:scale-110 active:scale-95 transition-all"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Space Info at Bottom */}
          <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold tracking-tight drop-shadow-md">
                {currentSpace.name}
              </h4>
              <span className="text-xs text-white/90 font-mono font-medium px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
                {currentIndex + 1} / {SPACES.length}
              </span>
            </div>
            <p className="text-xs text-white/90 mt-1 line-clamp-2 font-normal leading-relaxed drop-shadow-sm">
              {currentSpace.description}
            </p>
          </div>

          {/* Shiny 3D Prev / Next Controls */}
          <button
            onClick={prevSlide}
            aria-label="Ambiente anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.2)] border border-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-20 group"
          >
            <ChevronLeft className="w-5 h-5 -ml-0.5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Próximo ambiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.2)] border border-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-20 group"
          >
            <ChevronRight className="w-5 h-5 -mr-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* 3D Navigation Dots with Pastel Glow */}
      <div className="flex items-center gap-2.5 mt-5">
        {SPACES.map((space, idx) => (
          <button
            key={space.id}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            aria-label={`Ver ${space.name}`}
            className={`transition-all duration-300 rounded-full h-2.5 ${
              currentIndex === idx
                ? 'w-8 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 shadow-md shadow-amber-400/40 scale-105'
                : 'w-2.5 bg-slate-200 hover:bg-amber-200'
            }`}
          />
        ))}
      </div>

      {/* Space Thumbnails Quick Bar with 3D Pill Touch */}
      <div className="flex items-center gap-2 mt-4 overflow-x-auto max-w-full px-2 py-1.5 scrollbar-none">
        {SPACES.map((space, idx) => (
          <button
            key={space.id}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`shrink-0 text-xs px-3.5 py-1.5 rounded-full transition-all duration-300 font-semibold ${
              currentIndex === idx
                ? 'bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white shadow-md shadow-rose-400/30 scale-105 border-t border-amber-200/50'
                : 'bg-white text-slate-600 hover:text-amber-800 border border-slate-200/80 shadow-xs hover:border-amber-300'
            }`}
          >
            {space.name}
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Fechar tela cheia"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center">
            <img
              src={currentSpace.url}
              alt={currentSpace.name}
              referrerPolicy="no-referrer"
              className="max-h-[80vh] max-w-full object-contain rounded-2xl shadow-2xl"
            />
            <button
              onClick={prevSlide}
              aria-label="Anterior"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Próximo"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-4 text-center text-white">
            <h4 className="text-xl font-bold tracking-tight">{currentSpace.name}</h4>
            <p className="text-sm text-slate-300 max-w-md mt-1 font-light">
              {currentSpace.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
