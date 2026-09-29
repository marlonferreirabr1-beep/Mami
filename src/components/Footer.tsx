import React from 'react';
import { Instagram3DIcon, WhatsApp3DIcon, GoogleMaps3DIcon, Google3DIcon } from './icons3D.tsx';

export const Footer: React.FC = () => {
  const logoUrl = 'https://i.postimg.cc/k57NL0CD/file-00000000ba38820e9946adf2e70e85f1.png';
  const whatsappUrl = 'https://wa.link/int8mg';
  const instagramUrl = 'https://www.instagram.com/clinicamami?stkn=dTdzaWR3aW1oenl2';
  const mapsUrl = 'https://maps.app.goo.gl/wPJXZXymML1Yq6Rm9?g_st=ac';

  return (
    <footer className="w-full border-t border-amber-100/70 bg-[#f8fafc] pt-14 pb-16 px-4 relative overflow-hidden">
      {/* Top Iridescent Line (Rosa Premium & Dourado Imperial) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-[2px] bg-gradient-to-r from-transparent via-rose-400 via-amber-300 to-transparent opacity-90 shadow-[0_1px_8px_rgba(245,158,11,0.3)]" />

      <div className="max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Logo */}
        <div className="w-36 mb-4 select-none">
          <img
            src={logoUrl}
            alt="Clínica Mami"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-contain mx-auto drop-shadow-sm"
          />
        </div>

        <p className="text-xs text-slate-500 font-light italic tracking-wide">
          “Um espaço de cuidado, escuta e acolhimento.”
        </p>

        {/* 4 Quick Access Navigation Badges (3D High Relief) */}
        <div className="flex items-center justify-center gap-5 sm:gap-7 mt-7">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="flex flex-col items-center gap-1.5 group transform-gpu hover:scale-105 transition-transform"
          >
            <WhatsApp3DIcon size={42} />
            <span className="text-[10px] font-bold text-slate-500 group-hover:text-emerald-600 transition-colors">
              WhatsApp
            </span>
          </a>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="flex flex-col items-center gap-1.5 group transform-gpu hover:scale-105 transition-transform"
          >
            <Instagram3DIcon size={42} />
            <span className="text-[10px] font-bold text-slate-500 group-hover:text-rose-600 transition-colors">
              Instagram
            </span>
          </a>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Localização"
            className="flex flex-col items-center gap-1.5 group transform-gpu hover:scale-105 transition-transform"
          >
            <GoogleMaps3DIcon size={42} />
            <span className="text-[10px] font-bold text-slate-500 group-hover:text-amber-600 transition-colors">
              Localização
            </span>
          </a>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Avaliação no Google"
            className="flex flex-col items-center gap-1.5 group transform-gpu hover:scale-105 transition-transform"
          >
            <Google3DIcon size={42} />
            <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-900 transition-colors">
              Avaliação
            </span>
          </a>
        </div>

        {/* Delicate gold & rose hairline separator */}
        <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-rose-400 via-amber-300 to-rose-400 mt-9 mb-4 shadow-[0_1px_6px_rgba(245,158,11,0.25)]" />

        {/* Copyright */}
        <p className="text-[11px] text-slate-400 font-normal">
          © {new Date().getFullYear()} Clínica Mami · Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
