import React from 'react';
import { MessageCircle, Heart, ArrowUpRight } from 'lucide-react';
import { Instagram3DIcon, WhatsApp3DIcon } from './icons3D.tsx';

export const SocialSection: React.FC = () => {
  const whatsappUrl = 'https://wa.link/int8mg';
  const instagramUrl = 'https://www.instagram.com/clinicamami?stkn=dTdzaWR3aW1oenl2';

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <div className="text-center mb-7">
        <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-800 tracking-tight">
          Canais de contato & redes
        </h3>
        <p className="text-sm font-medium text-slate-500 mt-1">
          Acompanhe nossos conteúdos e converse diretamente com nossa equipe
        </p>
      </div>

      <div className="w-full flex flex-col gap-4.5">
        {/* Large WhatsApp 3D Action Card with Sheen & Emerald Aura */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-emerald-100 shadow-[0_12px_28px_-6px_rgba(37,211,102,0.35),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_36px_-6px_rgba(37,211,102,0.5)] transition-all duration-300 hover:border-emerald-300 active:scale-[0.98] overflow-hidden transform-gpu hover:-translate-y-1"
        >
          {/* Subtle Sheen Light Sweep */}
          <div className="absolute inset-0 animate-sheen pointer-events-none opacity-40" />

          {/* Green ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/40 via-emerald-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="relative z-10 flex items-center gap-4 min-w-0">
            <WhatsApp3DIcon size={60} />
            <div className="min-w-0">
              <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-600">
                Atendimento Rápido
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight flex items-center gap-1.5 truncate">
                Conversar pelo WhatsApp
              </h4>
              <p className="text-xs text-slate-500 truncate">
                Tire dúvidas, agende consultas e receba orientações
              </p>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center w-11 h-11 rounded-2xl bg-emerald-50 group-hover:bg-emerald-500 text-emerald-600 group-hover:text-white transition-all duration-300 shrink-0 shadow-xs group-hover:rotate-12">
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </div>
        </a>

        {/* Large Instagram 3D Action Card with Sheen & Sunset Aura */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-pink-100 shadow-[0_12px_28px_-6px_rgba(225,48,108,0.35),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_36px_-6px_rgba(225,48,108,0.5)] transition-all duration-300 hover:border-pink-300 active:scale-[0.98] overflow-hidden transform-gpu hover:-translate-y-1"
        >
          {/* Subtle Sheen Light Sweep */}
          <div className="absolute inset-0 animate-sheen pointer-events-none opacity-40" />

          {/* Sunset ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 via-purple-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="relative z-10 flex items-center gap-4 min-w-0">
            <Instagram3DIcon size={60} />
            <div className="min-w-0">
              <span className="text-[11px] font-bold tracking-wider uppercase text-pink-600">
                Instagram Oficial
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight flex items-center gap-1.5 truncate">
                @clinicamami
              </h4>
              <p className="text-xs text-slate-500 truncate">
                Conteúdos sobre saúde, bem-estar e novidades da clínica
              </p>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center w-11 h-11 rounded-2xl bg-pink-50 group-hover:bg-pink-500 text-pink-600 group-hover:text-white transition-all duration-300 shrink-0 shadow-xs group-hover:rotate-12">
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </div>
        </a>
      </div>
    </div>
  );
};
