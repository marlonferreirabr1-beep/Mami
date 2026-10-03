import React from 'react';
import { motion } from 'motion/react';
import { CalendarCheck, ShieldCheck, Sparkles } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  council: string;
  registration: string;
  accent: 'rose' | 'gold' | 'rosegold';
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'lara-cibelly',
    name: 'Lara Cibelly',
    role: 'Fisioterapeuta',
    council: 'CREFITO',
    registration: '407325-F',
    accent: 'rose',
  },
  {
    id: 'albery-ferreira',
    name: 'Albery Ferreira Lima',
    role: 'Psicólogo',
    council: 'CRP',
    registration: '15/4271',
    accent: 'gold',
  },
  {
    id: 'marcio-souza',
    name: 'Márcio Souza',
    role: 'Neuropsicólogo',
    council: 'CRP',
    registration: '15/3759',
    accent: 'rosegold',
  },
  {
    id: 'anthony-victor',
    name: 'Anthony Victor',
    role: 'Psicólogo',
    council: 'CRP',
    registration: '15/8120',
    accent: 'rose',
  },
  {
    id: 'maria-iasmin',
    name: 'Maria Iasmin',
    role: 'Psicóloga',
    council: 'CRP',
    registration: '15/7444',
    accent: 'gold',
  },
];

const getAccentStyle = (accent: TeamMember['accent']) => {
  switch (accent) {
    case 'rose':
      return {
        badgeBg: 'bg-gradient-to-tr from-rose-500 via-pink-400 to-rose-300 text-white shadow-[0_8px_20px_-3px_rgba(244,114,182,0.5)]',
        cardBorder: 'hover:border-rose-300/90',
        glow: 'from-rose-100/40 via-pink-50/30 to-transparent',
        btnBg: 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-md shadow-rose-500/25 border-t border-rose-200/50',
        ringGlow: 'group-hover:shadow-[0_16px_36px_-6px_rgba(244,114,182,0.35)]',
        tagBg: 'bg-rose-50 text-rose-700 border-rose-200/80',
      };
    case 'gold':
      return {
        badgeBg: 'bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-300 text-white shadow-[0_8px_20px_-3px_rgba(245,158,11,0.5)]',
        cardBorder: 'hover:border-amber-300/90',
        glow: 'from-amber-100/40 via-yellow-50/30 to-transparent',
        btnBg: 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white shadow-md shadow-amber-500/25 border-t border-amber-200/50',
        ringGlow: 'group-hover:shadow-[0_16px_36px_-6px_rgba(245,158,11,0.35)]',
        tagBg: 'bg-amber-50 text-amber-800 border-amber-200/80',
      };
    case 'rosegold':
      return {
        badgeBg: 'bg-gradient-to-tr from-rose-400 via-amber-400 to-rose-300 text-white shadow-[0_8px_20px_-3px_rgba(217,119,6,0.45)]',
        cardBorder: 'hover:border-amber-300/90',
        glow: 'from-rose-50/40 via-amber-50/30 to-transparent',
        btnBg: 'bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white shadow-md shadow-rose-500/25 border-t border-amber-200/50',
        ringGlow: 'group-hover:shadow-[0_16px_36px_-6px_rgba(217,119,6,0.35)]',
        tagBg: 'bg-rose-50/70 text-amber-900 border-amber-200/80',
      };
  }
};

export const TeamSection: React.FC = () => {
  return (
    <div className="w-full max-w-xl mx-auto">
      {/* 3D Chamativo Header */}
      <div className="text-center mb-9">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-50 via-amber-50 to-purple-50 border border-amber-200/80 shadow-[0_4px_16px_rgba(217,119,6,0.08)] text-xs font-semibold text-amber-950 mb-3.5 transform-gpu hover:scale-105 transition-transform">
          <ShieldCheck className="w-4 h-4 text-amber-600" />
          <span className="tracking-wide font-bold">Profissionais Habilitados</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-900 tracking-tight drop-shadow-xs">
          Corpo Clínico
        </h3>
        <p className="text-sm font-medium text-slate-500 mt-1.5 max-w-md mx-auto leading-relaxed">
          Especialistas dedicados ao acolhimento e desenvolvimento integrado
        </p>
      </div>

      {/* 3D Sculpted Cards */}
      <div className="flex flex-col gap-4">
        {TEAM_MEMBERS.map((member, index) => {
          const style = getAccentStyle(member.accent);
          const bookingUrl = `https://wa.link/int8mg?text=${encodeURIComponent(
            `Olá! Gostaria de agendar um atendimento na Clínica Mami com ${member.name} (${member.role}).`
          )}`;

          return (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative bg-white/95 backdrop-blur-2xl rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_-10px_rgba(217,119,6,0.15)] transition-all duration-300 ${style.cardBorder} flex items-center justify-between gap-3 overflow-hidden transform-gpu hover:-translate-y-1 hover:scale-[1.01]`}
            >
              {/* 3D Top Bevel Glint */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

              {/* Ambient Glowing Aura */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${style.glow} pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Left Info: 3D Monogram Avatar, Name, Role, License */}
              <div className="relative z-10 flex items-center gap-3.5 sm:gap-4 min-w-0">
                {/* 3D Monogram badge with Convex Gloss Reflection */}
                <div className="relative shrink-0">
                  <div
                    className={`w-13 h-13 rounded-2xl ${style.badgeBg} flex items-center justify-center font-display font-bold text-xl shrink-0 group-hover:scale-110 transition-transform duration-300 border border-white/80 select-none relative overflow-hidden`}
                  >
                    {/* Gloss Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-transparent to-black/10 pointer-events-none" />
                    <span className="relative z-10 drop-shadow-md">{member.name.charAt(0)}</span>
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight truncate group-hover:text-slate-900 transition-colors">
                      {member.name}
                    </h4>
                    <span title="Profissional Habilitado" className="inline-flex shrink-0">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 drop-shadow-xs" />
                    </span>
                  </div>

                  {/* Role and Council Registration */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mt-1 truncate">
                    <span className="font-semibold text-slate-700">{member.role}</span>
                    <span className="text-amber-400" aria-hidden="true">·</span>
                    <span className="font-mono text-xs text-slate-500 font-medium">
                      {member.council} {member.registration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Action: Clean Direct WhatsApp Button (Olhinho removido) */}
              <div className="relative z-10 shrink-0">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Agendar com ${member.name}`}
                  className={`relative group/btn overflow-hidden inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl ${style.btnBg} text-xs font-bold tracking-wide transition-all duration-300 active:scale-95 whitespace-nowrap transform-gpu hover:scale-105`}
                >
                  <div className="absolute inset-0 animate-sheen pointer-events-none opacity-40" />
                  <CalendarCheck className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 font-bold uppercase tracking-wider">Agendar</span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
