import React from 'react';
import { MessageCircle, Heart, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Instagram3DIcon, WhatsApp3DIcon } from './icons3D.tsx';

export const SocialSection: React.FC = () => {
  const whatsappUrl = 'https://wa.link/int8mg';
  const instagramUrl = 'https://www.instagram.com/clinicamami?stkn=dTdzaWR3aW1oenl2';

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Editorial Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-50 via-amber-50 to-rose-50 border border-amber-200/80 shadow-2xs text-xs font-semibold text-amber-950 mb-3.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span className="tracking-wide">Comunicação Direta</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-900 tracking-tight">
          Canais de Contato & Redes
        </h3>
        <p className="text-sm font-medium text-slate-500 mt-1.5 max-w-md mx-auto leading-relaxed">
          Acompanhe nossos conteúdos e converse em tempo real com nossa equipe de atendimento
        </p>
      </div>

      <div className="w-full flex flex-col gap-4">
        {/* Large WhatsApp 3D Action Card with Sheen & Emerald Aura */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-5 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-[0_12px_28px_-6px_rgba(37,211,102,0.18),0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_36px_-6px_rgba(37,211,102,0.3)] transition-all duration-300 hover:border-emerald-300 active:scale-[0.98] overflow-hidden transform-gpu hover:-translate-y-0.5"
        >
          {/* Subtle Sheen Light Sweep */}
          <div className="absolute inset-0 animate-sheen pointer-events-none opacity-40" />

          {/* Green ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/30 via-emerald-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="relative z-10 flex items-center gap-4 min-w-0">
            <WhatsApp3DIcon size={56} />
            <div className="min-w-0">
              <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Atendimento Imediato
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight flex items-center gap-1.5 truncate mt-0.5">
                Conversar pelo WhatsApp
              </h4>
              <p className="text-xs text-slate-500 truncate mt-0.5">
                Agende consultas, envie dúvidas e receba suporte
              </p>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center w-11 h-11 rounded-2xl bg-emerald-50 group-hover:bg-[#25D366] text-emerald-600 group-hover:text-white transition-all duration-300 shrink-0 shadow-2xs group-hover:rotate-12">
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </div>
        </a>

        {/* Large Instagram 3D Action Card with Sheen & Sunset Aura */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-5 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-[0_12px_28px_-6px_rgba(225,48,108,0.18),0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_36px_-6px_rgba(225,48,108,0.3)] transition-all duration-300 hover:border-pink-300 active:scale-[0.98] overflow-hidden transform-gpu hover:-translate-y-0.5"
        >
          {/* Subtle Sheen Light Sweep */}
          <div className="absolute inset-0 animate-sheen pointer-events-none opacity-40" />

          {/* Sunset ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100/40 via-purple-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="relative z-10 flex items-center gap-4 min-w-0">
            <Instagram3DIcon size={56} />
            <div className="min-w-0">
              <span className="text-[10px] font-bold tracking-widest uppercase text-pink-600 flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-pink-500" />
                Perfil Oficial
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight flex items-center gap-1.5 truncate mt-0.5">
                @clinicamami
              </h4>
              <p className="text-xs text-slate-500 truncate mt-0.5">
                Conteúdos, dicas de desenvolvimento e novidades
              </p>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center w-11 h-11 rounded-2xl bg-pink-50 group-hover:bg-[#E1306C] text-pink-600 group-hover:text-white transition-all duration-300 shrink-0 shadow-2xs group-hover:rotate-12">
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </div>
        </a>
      </div>
    </div>
  );
};
