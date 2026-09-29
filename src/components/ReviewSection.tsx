import React from 'react';
import { Star, MessageSquareHeart, CheckCircle2 } from 'lucide-react';
import { Google3DIcon } from './icons3D.tsx';

export const ReviewSection: React.FC = () => {
  const googleReviewUrl = 'https://maps.app.goo.gl/wPJXZXymML1Yq6Rm9?g_st=ac';

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* 3D Review Luxury Glass Card */}
      <div className="w-full relative rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.03)] p-7 sm:p-10 text-center flex flex-col items-center overflow-hidden group">
        {/* Soft pastel aura rings */}
        <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-pink-200/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />

        {/* 3D Google Icon Top Display */}
        <div className="relative mb-5 transform-gpu group-hover:scale-105 transition-transform duration-300">
          <Google3DIcon size={68} />
          <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-amber-400 text-white flex items-center justify-center shadow-md border-2 border-white animate-bounce">
            <Star className="w-4 h-4 fill-white" />
          </div>
        </div>

        {/* 5-Star Visual Accent with Score Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 mb-3.5 shadow-2xs">
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-amber-400 stroke-amber-400 drop-shadow-[0_1px_4px_rgba(251,191,36,0.4)]"
              />
            ))}
          </div>
          <span className="text-xs font-bold text-amber-900 font-mono">5.0 / 5.0</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-display font-medium text-slate-900 tracking-tight max-w-md leading-snug">
          Sua opinião é fundamental para nós.
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md font-light leading-relaxed">
          Compartilhe sua experiência de atendimento e ajude outras famílias a encontrarem acolhimento na Clínica Mami.
        </p>

        {/* Big Action Button: AVALIAR NO GOOGLE */}
        <a
          href={googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 w-full sm:w-auto relative group/btn overflow-hidden inline-flex items-center justify-center gap-3.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:to-slate-700 text-white shadow-[0_12px_28px_-6px_rgba(15,23,42,0.35)] hover:shadow-[0_16px_36px_-6px_rgba(66,133,244,0.3)] transition-all duration-300 font-bold text-xs sm:text-sm tracking-wider uppercase active:scale-95 transform-gpu hover:-translate-y-0.5"
        >
          <div className="absolute inset-0 animate-sheen pointer-events-none opacity-40" />
          <Google3DIcon size={28} showGleam={false} />
          <span className="relative z-10">AVALIAR NO GOOGLE</span>
        </a>

        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <MessageSquareHeart className="w-4 h-4 text-pink-500" />
          <span>Leva menos de 1 minuto para deixar seu depoimento</span>
        </div>
      </div>
    </div>
  );
};
