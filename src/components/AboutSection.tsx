import React from 'react';
import { Heart, Sparkles, Smile, Shield, CheckCircle2, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Main Luxury Glass Card with Gold & Premium Rose Accents */}
      <div className="w-full bg-white/95 backdrop-blur-2xl rounded-3xl p-7 sm:p-10 text-center relative overflow-hidden border border-amber-100/80 shadow-[0_16px_40px_rgba(217,119,6,0.04)] group">
        {/* Top Metallic Ribbon (Rosa Premium & Dourado Real) */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500" />

        {/* Small 3D Floating Pill Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-50 via-amber-50 to-rose-50 border border-amber-200/80 shadow-2xs text-xs font-semibold text-amber-950 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Conheça a Clínica Mami · Saúde & Bem-Estar</span>
        </div>

        {/* Mandatory Heading with Editorial Elegance */}
        <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-900 tracking-tight leading-snug">
          “Um espaço pensado para cuidar de você.”
        </h3>

        {/* Short, elegant, welcoming institutional text */}
        <div className="mt-5 space-y-3.5 text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-lg mx-auto">
          <p>
            A <strong className="font-semibold text-slate-800">Clínica Mami</strong> nasceu com a missão de oferecer um refúgio de tranquilidade, onde cada pessoa e família é acolhida com sensibilidade, atenção e respeito mútuo.
          </p>
          <p>
            Nosso compromisso é proporcionar uma escuta atenta e empática em um ambiente sereno, planejado em cada detalhe para promover o bem-estar emocional e a confiança em todas as etapas do atendimento.
          </p>
        </div>

        {/* Official Highlights from Clinic Profile */}
        <div className="mt-7 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50/50 via-white to-rose-50/50 border border-amber-100 flex flex-col gap-2.5 text-left shadow-2xs">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
            <span className="w-6 h-6 rounded-lg bg-rose-100/90 text-rose-700 flex items-center justify-center text-sm shrink-0">👶</span>
            <span>Cuidado e acolhimento para o desenvolvimento do seu filho</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
            <span className="w-6 h-6 rounded-lg bg-amber-100/90 text-amber-800 flex items-center justify-center text-sm shrink-0">🧠</span>
            <span>Equipe multidisciplinar especializada e integrada</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
            <span className="w-6 h-6 rounded-lg bg-rose-100/90 text-rose-700 flex items-center justify-center text-sm shrink-0">📌</span>
            <span>Atendimento humanizado em ambiente seguro e acolhedor</span>
          </div>
        </div>

        {/* 3 Pillars of Care with Gold & Premium Rose Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8 pt-7 border-t border-amber-100/60">
          {/* Pillar 1: Rosa Premium */}
          <div className="relative group/card flex flex-col items-center p-4 rounded-2xl bg-gradient-to-b from-rose-50/70 to-white border border-rose-200/80 shadow-[0_4px_16px_rgba(244,114,182,0.12)] hover:shadow-[0_8px_24px_rgba(244,114,182,0.22)] transition-all duration-300 transform-gpu hover:-translate-y-0.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-400 text-white shadow-md shadow-rose-400/25 flex items-center justify-center mb-2.5 group-hover/card:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-white/20 stroke-[2.5]" />
            </div>
            <h4 className="text-xs font-bold text-slate-800 tracking-tight">Acolhimento</h4>
            <p className="text-[11px] text-slate-500 mt-1 font-normal">Escuta sensível e afeto</p>
          </div>

          {/* Pillar 2: Dourado Real */}
          <div className="relative group/card flex flex-col items-center p-4 rounded-2xl bg-gradient-to-b from-amber-50/70 to-white border border-amber-200/80 shadow-[0_4px_16px_rgba(245,158,11,0.12)] hover:shadow-[0_8px_24px_rgba(245,158,11,0.22)] transition-all duration-300 transform-gpu hover:-translate-y-0.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-white shadow-md shadow-amber-400/25 flex items-center justify-center mb-2.5 group-hover/card:scale-105 transition-transform">
              <Smile className="w-5 h-5 stroke-[2.5]" />
            </div>
            <h4 className="text-xs font-bold text-slate-800 tracking-tight">Tranquilidade</h4>
            <p className="text-[11px] text-slate-500 mt-1 font-normal">Ambiente calmo e seguro</p>
          </div>

          {/* Pillar 3: Ouro Rosé */}
          <div className="relative group/card flex flex-col items-center p-4 rounded-2xl bg-gradient-to-b from-rose-50/50 to-white border border-amber-200/80 shadow-[0_4px_16px_rgba(217,119,6,0.1)] hover:shadow-[0_8px_24px_rgba(217,119,6,0.18)] transition-all duration-300 transform-gpu hover:-translate-y-0.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-400 to-amber-400 text-white shadow-md shadow-amber-400/25 flex items-center justify-center mb-2.5 group-hover/card:scale-105 transition-transform">
              <Shield className="w-5 h-5 stroke-[2.5]" />
            </div>
            <h4 className="text-xs font-bold text-slate-800 tracking-tight">Confiança</h4>
            <p className="text-[11px] text-slate-500 mt-1 font-normal">Profissionalismo e ética</p>
          </div>
        </div>
      </div>
    </div>
  );
};
