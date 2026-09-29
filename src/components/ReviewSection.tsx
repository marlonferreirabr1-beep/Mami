import React from 'react';
import { Star, MessageSquareHeart } from 'lucide-react';
import { Google3DIcon } from './icons3D.tsx';

export const ReviewSection: React.FC = () => {
  const googleReviewUrl = 'https://maps.app.goo.gl/wPJXZXymML1Yq6Rm9?g_st=ac';

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* 3D Review Glass Card */}
      <div className="w-full relative rounded-3xl card-3d-glass p-7 sm:p-9 text-center flex flex-col items-center overflow-hidden group">
        {/* Soft pastel aura rings */}
        <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-pink-200/40 blur-3xl pointer-events-none animate-aura" />
        <div className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-sky-200/40 blur-3xl pointer-events-none animate-aura" />

        {/* 3D Google Icon Top Display with Gleam */}
        <div className="relative mb-5 transform-gpu group-hover:scale-105 transition-transform duration-300">
          <Google3DIcon size={70} />
          <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-amber-400 text-white flex items-center justify-center shadow-md border-2 border-white animate-bounce">
            <Star className="w-4 h-4 fill-white" />
          </div>
        </div>

        {/* 5-Star Visual Accent with Golden Drop Shadow */}
        <div className="flex items-center gap-1.5 mb-4 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-amber-400 stroke-amber-400 drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)] transform-gpu hover:scale-125 transition-transform"
            />
          ))}
        </div>

        <h3 className="text-xl sm:text-2xl font-display font-medium text-slate-800 tracking-tight max-w-md leading-snug">
          Sua opinião é muito importante para nós.
        </h3>

        <p className="text-sm text-slate-600 mt-2.5 max-w-md font-light leading-relaxed">
          Compartilhe sua experiência e ajude outras pessoas a conhecerem a Clínica Mami.
        </p>

        {/* Big Action Button: AVALIAR NO GOOGLE with 3D Depth & Sheen */}
        <a
          href={googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 w-full sm:w-auto relative group/btn overflow-hidden inline-flex items-center justify-center gap-3.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:to-slate-700 text-white shadow-[0_12px_28px_-6px_rgba(15,23,42,0.45)] hover:shadow-[0_16px_36px_-6px_rgba(66,133,244,0.35)] transition-all duration-300 font-bold text-sm tracking-wide active:scale-95 transform-gpu hover:-translate-y-0.5"
        >
          {/* Animated Sheen */}
          <div className="absolute inset-0 animate-sheen pointer-events-none opacity-40" />

          <Google3DIcon size={30} showGleam={false} />
          <span className="relative z-10">AVALIAR NO GOOGLE</span>
        </a>

        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <MessageSquareHeart className="w-4 h-4 text-pink-500" />
          <span>Leva menos de 1 minuto para deixar sua avaliação</span>
        </div>
      </div>
    </div>
  );
};
