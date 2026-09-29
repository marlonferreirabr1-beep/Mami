import React from 'react';
import { ExternalLink, Compass } from 'lucide-react';
import { GoogleMaps3DIcon } from './icons3D.tsx';

export const LocationSection: React.FC = () => {
  const mapsUrl = 'https://maps.app.goo.gl/wPJXZXymML1Yq6Rm9?g_st=ac';

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <div className="text-center mb-7">
        <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-800 tracking-tight">
          Onde estamos
        </h3>
        <p className="text-sm font-medium text-slate-500 mt-1">
          Localização privilegiada com fácil acesso e total comodidade
        </p>
      </div>

      {/* Styled 3D Interactive Map Card with Iridescent Glow */}
      <div className="w-full relative rounded-3xl overflow-hidden card-3d-glass p-2.5 sm:p-3.5 group">
        <div className="relative w-full h-60 sm:h-68 rounded-2xl overflow-hidden bg-[#e4edf5] flex items-center justify-center border border-slate-200/70 shadow-inner">
          {/* Subtle stylized vector map grid / roads aesthetic */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:18px_18px]" />
          
          {/* Decorative geometric road lines */}
          <svg className="absolute inset-0 w-full h-full stroke-slate-300/80" strokeWidth="6" fill="none">
            <path d="M-20 60 Q 140 80, 220 180 T 600 220" />
            <path d="M130 -10 L 160 320" strokeWidth="9" stroke="#cbd5e1" />
            <path d="M-10 140 L 520 120" strokeWidth="6" stroke="#cbd5e1" />
            <path d="M280 -20 Q 330 130, 500 190" strokeWidth="8" stroke="#cbd5e1" />
          </svg>

          {/* Park aesthetic */}
          <div className="absolute top-4 left-6 w-28 h-20 rounded-2xl bg-emerald-100/60 border border-emerald-200/50 shadow-xs" />
          <div className="absolute bottom-6 right-8 w-32 h-20 rounded-3xl bg-sky-100/50 border border-sky-200/40 shadow-xs" />

          {/* Central Clinic Pin with Pulsing 3D Ripple */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Animated 3D radar waves */}
            <span className="absolute -inset-6 rounded-full bg-pink-400/35 animate-ping" />
            <span className="absolute -inset-10 rounded-full bg-sky-400/25 animate-pulse" />

            {/* Clinic Marker Badge */}
            <div className="relative z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_12px_24px_rgba(244,114,182,0.3)] border border-pink-200/90 transform-gpu hover:scale-105 transition-transform">
              <span className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" />
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold tracking-tight text-slate-800">
                  Clínica Mami
                </span>
                <span className="text-[10px] font-medium text-slate-500">
                  Toque para traçar rota
                </span>
              </div>
            </div>

            {/* Pin pointer stem */}
            <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[8px] border-t-white -mt-0.5 shadow-sm" />
          </div>

          {/* Quick interactive overlay to open maps */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-30 flex items-end justify-center p-3.5 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="px-4 py-2 rounded-full bg-white/95 text-slate-800 text-xs font-bold shadow-lg flex items-center gap-2 animate-bounce">
              <Compass className="w-4 h-4 text-sky-600" />
              Abrir no Google Maps
            </span>
          </a>
        </div>

        {/* Action button row below map preview */}
        <div className="pt-4 pb-1 px-1 flex flex-col sm:flex-row items-center justify-between gap-3.5">
          <div className="text-left w-full sm:w-auto">
            <p className="text-xs font-bold text-slate-800">Atendimento presencial</p>
            <p className="text-[11px] text-slate-500">Ambiente climatizado, acessível e seguro</p>
          </div>

          {/* VER LOCALIZAÇÃO primary 3D button */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 shadow-[0_8px_20px_-4px_rgba(2,132,199,0.3)] hover:shadow-[0_12px_28px_-4px_rgba(2,132,199,0.45)] transition-all duration-300 group/btn active:scale-95 transform-gpu hover:-translate-y-0.5"
          >
            <GoogleMaps3DIcon size={40} />
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Google Maps
              </span>
              <span className="text-sm font-bold tracking-tight text-slate-800 flex items-center gap-1.5">
                VER LOCALIZAÇÃO
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-slate-800 transition-colors" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
