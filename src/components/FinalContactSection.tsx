import React from 'react';
import { Navigation } from 'lucide-react';
import { WhatsApp3DIcon, Instagram3DIcon, GoogleMaps3DIcon } from './icons3D.tsx';

export const FinalContactSection: React.FC = () => {
  const logoUrl = 'https://i.postimg.cc/k57NL0CD/file-00000000ba38820e9946adf2e70e85f1.png';
  const whatsappUrl = 'https://wa.link/int8mg';
  const instagramUrl = 'https://www.instagram.com/clinicamami?stkn=dTdzaWR3aW1oenl2';
  const mapsUrl = 'https://maps.app.goo.gl/wPJXZXymML1Yq6Rm9?g_st=ac';

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center">
      {/* 3D Levitation Clinic Logo */}
      <div className="relative w-40 sm:w-48 mb-4 select-none group">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300/30 via-sky-300/30 to-purple-300/30 blur-xl rounded-full opacity-60 group-hover:opacity-90 transition-opacity duration-500 scale-90" />
        <img
          src={logoUrl}
          alt="Clínica Mami"
          referrerPolicy="no-referrer"
          className="relative z-10 w-full h-auto object-contain mx-auto drop-shadow-md transform-gpu hover:scale-105 transition-transform"
        />
      </div>

      <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-800 tracking-tight">
        Estamos aqui para acolher você.
      </h3>

      <p className="text-sm text-slate-500 mt-2 max-w-md font-light leading-relaxed">
        Agende uma conversa ou venha nos visitar. Nosso espaço foi pensado com todo carinho para seu bem-estar.
      </p>

      {/* 3D Buttons Stack with High Relief & Sheen */}
      <div className="w-full mt-7 flex flex-col gap-3.5">
        {/* Main WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden w-full flex items-center justify-center gap-3.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 bg-[length:200%_auto] hover:bg-right text-white font-bold text-sm sm:text-base tracking-wide shadow-[0_12px_28px_-6px_rgba(16,185,129,0.55)] hover:shadow-[0_18px_36px_-6px_rgba(16,185,129,0.7)] border-t border-white/30 active:scale-[0.98] transition-all duration-300 transform-gpu hover:-translate-y-0.5"
        >
          <div className="absolute inset-0 animate-sheen pointer-events-none opacity-40" />
          <WhatsApp3DIcon size={36} />
          <span className="relative z-10">FALAR PELO WHATSAPP</span>
        </a>

        {/* Secondary Instagram Button */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden w-full flex items-center justify-center gap-3.5 py-4 px-6 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 font-bold text-sm sm:text-base tracking-wide shadow-[0_8px_20px_-4px_rgba(225,48,108,0.25)] hover:shadow-[0_12px_28px_-4px_rgba(225,48,108,0.4)] transition-all duration-300 active:scale-[0.98] transform-gpu hover:-translate-y-0.5"
        >
          <div className="absolute inset-0 animate-sheen pointer-events-none opacity-30" />
          <Instagram3DIcon size={34} />
          <span className="relative z-10">CONHEÇA NOSSO INSTAGRAM</span>
        </a>

        {/* Como Chegar Button */}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden w-full flex items-center justify-center gap-3.5 py-4 px-6 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 font-bold text-sm sm:text-base tracking-wide shadow-[0_8px_20px_-4px_rgba(2,132,199,0.25)] hover:shadow-[0_12px_28px_-4px_rgba(2,132,199,0.4)] transition-all duration-300 active:scale-[0.98] transform-gpu hover:-translate-y-0.5"
        >
          <div className="absolute inset-0 animate-sheen pointer-events-none opacity-30" />
          <GoogleMaps3DIcon size={34} />
          <span className="relative z-10">COMO CHEGAR</span>
        </a>
      </div>
    </div>
  );
};
