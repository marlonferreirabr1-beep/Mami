import React from 'react';
import { Heart, Sparkles, Smile, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Main 3D Luxury Glass Card with Gold, Rose & Purple Accents */}
      <div className="w-full bg-white/95 backdrop-blur-2xl rounded-3xl p-7 sm:p-10 text-center relative overflow-hidden border border-amber-200/90 shadow-[0_20px_50px_-10px_rgba(217,119,6,0.1),0_10px_25px_-5px_rgba(244,114,182,0.12),inset_0_1px_3px_rgba(255,255,255,1)] group transform-gpu hover:shadow-[0_28px_60px_-10px_rgba(217,119,6,0.16)] transition-all duration-500">
        {/* Top Metallic Ribbon (Dourado -> Rosa -> Roxo) */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 shadow-sm" />

        {/* 3D Floating Pill Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-50 via-amber-50 to-purple-50 border border-amber-200/90 shadow-[0_4px_14px_rgba(217,119,6,0.08)] text-xs font-semibold text-amber-950 mb-6 transform-gpu hover:scale-105 transition-transform">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: '8s' }} />
          <span className="font-bold">Conheça a Clínica Mami · Saúde & Bem-Estar</span>
        </div>

        {/* Mandatory Heading with Editorial Elegance */}
        <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-900 tracking-tight leading-snug drop-shadow-xs">
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

        {/* 3D Highlights Box */}
        <div className="mt-7 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50/60 via-white to-rose-50/60 border border-amber-200/80 flex flex-col gap-2.5 text-left shadow-[0_4px_16px_rgba(217,119,6,0.05)]">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
            <span className="w-7 h-7 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-400 text-white flex items-center justify-center text-sm shrink-0 shadow-md shadow-rose-400/30">👶</span>
            <span>Cuidado e acolhimento para o desenvolvimento do seu filho</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
            <span className="w-7 h-7 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-white flex items-center justify-center text-sm shrink-0 shadow-md shadow-amber-400/30">🧠</span>
            <span>Equipe multidisciplinar especializada e integrada</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
            <span className="w-7 h-7 rounded-xl bg-gradient-to-tr from-purple-500 to-violet-400 text-white flex items-center justify-center text-sm shrink-0 shadow-md shadow-purple-400/30">📌</span>
            <span>Atendimento humanizado em ambiente seguro e acolhedor</span>
          </div>
        </div>

        {/* 3 Pillars of Care with 3D Glossy Relief */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8 pt-7 border-t border-amber-100">
          {/* Pillar 1: Rosa Premium */}
          <div className="relative group/card flex flex-col items-center p-4 rounded-2xl bg-gradient-to-b from-rose-50/80 to-white border border-rose-200/90 shadow-[0_8px_20px_rgba(244,114,182,0.18)] hover:shadow-[0_14px_30px_rgba(244,114,182,0.3)] transition-all duration-300 transform-gpu hover:-translate-y-1">
            <div className="relative w-13 h-13 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-400 text-white shadow-[0_8px_20px_rgba(244,114,182,0.5)] flex items-center justify-center mb-2.5 group-hover/card:scale-110 transition-transform overflow-hidden border border-white/60">
              <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-transparent to-transparent pointer-events-none" />
              <Heart className="w-6 h-6 fill-white/20 stroke-[2.5] relative z-10" />
            </div>
            <h4 className="text-xs font-bold text-slate-800 tracking-tight">Acolhimento</h4>
            <p className="text-[11px] text-slate-500 mt-1 font-normal">Escuta sensível e afeto</p>
          </div>

          {/* Pillar 2: Dourado Real */}
          <div className="relative group/card flex flex-col items-center p-4 rounded-2xl bg-gradient-to-b from-amber-50/80 to-white border border-amber-200/90 shadow-[0_8px_20px_rgba(245,158,11,0.18)] hover:shadow-[0_14px_30px_rgba(245,158,11,0.3)] transition-all duration-300 transform-gpu hover:-translate-y-1">
            <div className="relative w-13 h-13 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-white shadow-[0_8px_20px_rgba(245,158,11,0.5)] flex items-center justify-center mb-2.5 group-hover/card:scale-110 transition-transform overflow-hidden border border-white/60">
              <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-transparent to-transparent pointer-events-none" />
              <Smile className="w-6 h-6 stroke-[2.5] relative z-10" />
            </div>
            <h4 className="text-xs font-bold text-slate-800 tracking-tight">Tranquilidade</h4>
            <p className="text-[11px] text-slate-500 mt-1 font-normal">Ambiente calmo e seguro</p>
          </div>

          {/* Pillar 3: Roxo & Ouro Rosé */}
          <div className="relative group/card flex flex-col items-center p-4 rounded-2xl bg-gradient-to-b from-purple-50/80 to-white border border-purple-200/90 shadow-[0_8px_20px_rgba(168,85,247,0.18)] hover:shadow-[0_14px_30px_rgba(168,85,247,0.3)] transition-all duration-300 transform-gpu hover:-translate-y-1">
            <div className="relative w-13 h-13 rounded-2xl bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-amber-400 text-white shadow-[0_8px_20px_rgba(168,85,247,0.5)] flex items-center justify-center mb-2.5 group-hover/card:scale-110 transition-transform overflow-hidden border border-white/60">
              <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-transparent to-transparent pointer-events-none" />
              <Shield className="w-6 h-6 stroke-[2.5] relative z-10" />
            </div>
            <h4 className="text-xs font-bold text-slate-800 tracking-tight">Confiança</h4>
            <p className="text-[11px] text-slate-500 mt-1 font-normal">Profissionalismo e ética</p>
          </div>
        </div>
      </div>
    </div>
  );
};
