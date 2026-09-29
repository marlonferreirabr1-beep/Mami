import React, { useEffect, useState } from 'react';

interface SectionItem {
  id: string;
  label: string;
}

const SECTIONS: SectionItem[] = [
  { id: 'secao-abertura', label: 'Início' },
  { id: 'secao-conheca', label: 'Sobre' },
  { id: 'secao-servicos', label: 'Serviços' },
  { id: 'secao-convenios', label: 'Convênios' },
  { id: 'secao-espaco', label: 'Espaço' },
  { id: 'secao-equipe', label: 'Equipe' },
  { id: 'secao-localizacao', label: 'Local' },
  { id: 'secao-redes', label: 'Redes' },
  { id: 'secao-avaliacao', label: 'Avalie' },
  { id: 'secao-contato', label: 'Contato' },
];

export const VerticalSlideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('secao-abertura');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Find section currently in view
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.45 && rect.bottom >= windowHeight * 0.2) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Navegação entre seções"
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 p-2 rounded-full bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-sm"
    >
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            title={section.label}
            aria-label={`Ir para ${section.label}`}
            className="group relative flex items-center justify-end"
          >
            {/* Tooltip on hover */}
            <span className="absolute right-6 px-2.5 py-1 rounded-md bg-slate-800 text-white text-[11px] font-medium opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">
              {section.label}
            </span>

            {/* Indicator Dot */}
            <div
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-3 h-3 bg-pink-500 shadow-sm shadow-pink-300 scale-110'
                  : 'w-2 h-2 bg-slate-300 hover:bg-slate-400 group-hover:scale-125'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};
