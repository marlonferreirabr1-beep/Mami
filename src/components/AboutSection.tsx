import React from 'react';
import { Heart, Sparkles, Smile, Shield, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Main 3D Glass Card with Iridescent Tri-Color Accents */}
      <div className="w-full card-3d-glass rounded-3xl p-6 sm:p-9 text-center relative overflow-hidden group">
        {/* Top Iridescent Ribbon (Pink, Baby Blue, Lilac) */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-400 via-sky-400 to-purple-400" />

        {/* Small 3D Floating Pill Label */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-50 via-sky-50 to-purple-50 border border-white shadow-xs text-xs font-semibold text-slate-700 mb-5">
          <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Conheça a Clínica Mami · Saúde & Bem-estar</span>
        </div>

        {/* Mandatory Heading */}
        <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-800 tracking-tight leading-snug">
          “Um espaço pensado para cuidar de você.”
        </h3>

        {/* Short, elegant, welcoming institutional text */}
        <div className="mt-5 space-y-3 text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-lg mx-auto">
          <p>
            A <strong className="font-semibold text-slate-800">Clínica Mami</strong> nasceu com a missão de oferecer um refúgio de tranquilidade, onde cada pessoa e família é acolhida com sensibilidade, atenção e respeito mútuo.
          </p>
          <p>
            Nosso compromisso é proporcionar uma escuta atenta e empática em um ambiente sereno, planejado em cada detalhe para promover o bem-estar emocional e a confiança em todas as etapas do atendimento.
          </p>
        </div>

        {/* Official Highlights from Clinic Profile */}
        <div className="mt-6 p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 border border-slate-100 flex flex-col gap-2 text-left">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
            <span className="text-base select-none">👶</span>
            <span>Cuidado e acolhimento para o desenvolvimento do seu filho</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
            <span className="text-base select-none">🧠</span>
            <span>Equipe multidisciplinar especializada e integrada</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
            <span className="text-base select-none">📌</span>
            <span>Atendimento humanizado em ambiente seguro e acolhedor</span>
          </div>
        </div>

        {/* 3 Pillars of Care with High Relief & Vivid Pastel Accents */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-7 pt-6 border-t border-slate-100/80">
          {/* Pillar 1: Rosa pastel */}
          <div className="relative group/card flex flex-col items-center p-4 rounded-2xl bg-gradient-to-b from-pink-50/90 to-white border border-pink-200/80 shadow-[0_6px_16px_rgba(244,114,182,0.18)] hover:shadow-[0_12px_24px_rgba(244,114,182,0.3)] transition-all duration-300 transform-gpu hover:-translate-y-1">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-pink-400 to-rose-300 text-white shadow-md shadow-pink-400/30 flex items-center justify-center mb-2.5 group-hover/card:scale-110 transition-transform">
              <Heart className="w-5 h-5 fill-white/20 stroke-[2.5]" />
            </div>
            <h4 className="text-xs font-bold text-slate-800 tracking-tight">Acolhimento</h4>
            <p className="text-[11px] text-slate-500 mt-1 font-normal">Escuta sensível e respeito</p>
          </div>

          {/* Pillar 2: Azul bebê */}
          <div className="relative group/card flex flex-col items-center p-4 rounded-2xl bg-gradient-to-b from-sky-50/90 to-white border border-sky-200/80 shadow-[0_6px_16px_rgba(56,189,248,0.18)] hover:shadow-[0_12px_24px_rgba(56,189,248,0.3)] transition-all duration-300 transform-gpu hover:-translate-y-1">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-400 to-cyan-300 text-white shadow-md shadow-sky-400/30 flex items-center justify-center mb-2.5 group-hover/card:scale-110 transition-transform">
              <Smile className="w-5 h-5 stroke-[2.5]" />
            </div>
            <h4 className="text-xs font-bold text-slate-800 tracking-tight">Tranquilidade</h4>
            <p className="text-[11px] text-slate-500 mt-1 font-normal">Ambiente calmo e seguro</p>
          </div>

          {/* Pillar 3: Lilás pastel */}
          <div className="relative group/card flex flex-col items-center p-4 rounded-2xl bg-gradient-to-b from-purple-50/90 to-white border border-purple-200/80 shadow-[0_6px_16px_rgba(192,132,252,0.18)] hover:shadow-[0_12px_24px_rgba(192,132,252,0.3)] transition-all duration-300 transform-gpu hover:-translate-y-1">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-400 to-indigo-300 text-white shadow-md shadow-purple-400/30 flex items-center justify-center mb-2.5 group-hover/card:scale-110 transition-transform">
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
