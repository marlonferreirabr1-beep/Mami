import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CalendarCheck, ShieldCheck, Sparkles, ExternalLink, X, Eye } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  council: string;
  registration: string;
  accent: 'pink' | 'blue' | 'purple';
  postImg: string;
  originalUrl: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'lara-cibelly',
    name: 'Lara Cibelly',
    role: 'Fisioterapeuta',
    council: 'CREFITO',
    registration: '407325-F',
    accent: 'pink',
    postImg: '/team/post_0.png',
    originalUrl: 'https://i.postimg.cc/s20kX9w5/Screenshot-20260929-163108-Instagram.png',
  },
  {
    id: 'albery-ferreira',
    name: 'Albery Ferreira Lima',
    role: 'Psicólogo',
    council: 'CRP',
    registration: '15/4271',
    accent: 'blue',
    postImg: '/team/post_1.png',
    originalUrl: 'https://i.postimg.cc/X70TpvcL/Screenshot-20260929-163110-Instagram.png',
  },
  {
    id: 'marcio-souza',
    name: 'Márcio Souza',
    role: 'Neuropsicólogo',
    council: 'CRP',
    registration: '15/3759',
    accent: 'purple',
    postImg: '/team/post_2.png',
    originalUrl: 'https://i.postimg.cc/y8L5QyqP/Screenshot-20260929-163114-Instagram.png',
  },
  {
    id: 'anthony-victor',
    name: 'Anthony Victor',
    role: 'Psicólogo',
    council: 'CRP',
    registration: '15/8120',
    accent: 'pink',
    postImg: '/team/post_3.png',
    originalUrl: 'https://i.postimg.cc/qR357fND/Screenshot-20260929-163117-Instagram.png',
  },
  {
    id: 'maria-iasmin',
    name: 'Maria Iasmin',
    role: 'Psicóloga',
    council: 'CRP',
    registration: '15/7444',
    accent: 'blue',
    postImg: '/team/post_4.png',
    originalUrl: 'https://i.postimg.cc/T2nsM6MK/Screenshot-20260929-163120-Instagram.png',
  },
];

const getAccentStyle = (accent: TeamMember['accent']) => {
  switch (accent) {
    case 'pink':
      return {
        badgeBg: 'bg-gradient-to-tr from-pink-400 to-rose-300 text-white shadow-pink-300/40',
        cardBorder: 'hover:border-pink-300',
        glow: 'from-pink-100/40 to-transparent',
        btnBg: 'bg-pink-50 hover:bg-pink-500 text-pink-700 hover:text-white border-pink-200 hover:border-pink-500',
        ringGlow: 'group-hover:shadow-[0_12px_28px_-6px_rgba(244,114,182,0.3)]',
        tagBg: 'bg-pink-50 text-pink-700 border-pink-200/80',
      };
    case 'blue':
      return {
        badgeBg: 'bg-gradient-to-tr from-sky-400 to-cyan-300 text-white shadow-sky-300/40',
        cardBorder: 'hover:border-sky-300',
        glow: 'from-sky-100/40 to-transparent',
        dot: 'bg-sky-400',
        btnBg: 'bg-sky-50 hover:bg-sky-500 text-sky-700 hover:text-white border-sky-200 hover:border-sky-500',
        ringGlow: 'group-hover:shadow-[0_12px_28px_-6px_rgba(56,189,248,0.3)]',
        tagBg: 'bg-sky-50 text-sky-700 border-sky-200/80',
      };
    case 'purple':
      return {
        badgeBg: 'bg-gradient-to-tr from-purple-400 to-indigo-300 text-white shadow-purple-300/40',
        cardBorder: 'hover:border-purple-300',
        glow: 'from-purple-100/40 to-transparent',
        dot: 'bg-purple-400',
        btnBg: 'bg-purple-50 hover:bg-purple-500 text-purple-700 hover:text-white border-purple-200 hover:border-purple-500',
        ringGlow: 'group-hover:shadow-[0_12px_28px_-6px_rgba(192,132,252,0.3)]',
        tagBg: 'bg-purple-50 text-purple-700 border-purple-200/80',
      };
  }
};

export const TeamSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<TeamMember | null>(null);

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="text-center mb-9">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-50 via-slate-50 to-sky-50 border border-slate-200/60 shadow-2xs text-xs font-semibold text-slate-700 mb-3.5">
          <ShieldCheck className="w-3.5 h-3.5 text-pink-500" />
          <span className="tracking-wide">Profissionais Habilitados</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-900 tracking-tight">
          Corpo Clínico
        </h3>
        <p className="text-sm font-medium text-slate-500 mt-1.5 max-w-md mx-auto leading-relaxed">
          Especialistas dedicados ao acolhimento e desenvolvimento integrado
        </p>
      </div>

      <div className="flex flex-col gap-3.5">
        {TEAM_MEMBERS.map((member, index) => {
          const style = getAccentStyle(member.accent);
          const bookingUrl = `https://wa.link/int8mg?text=${encodeURIComponent(
            `Olá! Gostaria de agendar um atendimento na Clínica Mami com ${member.name} (${member.role}).`
          )}`;

          return (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`group relative bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition-all duration-300 ${style.cardBorder} flex items-center justify-between gap-3 overflow-hidden transform-gpu hover:-translate-y-0.5`}
            >
              {/* Subtle ambient gradient aura in the background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${style.glow} pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Left Info: 3D Monogram Avatar, Name, Role, License */}
              <div className="relative z-10 flex items-center gap-3.5 sm:gap-4 min-w-0">
                {/* 3D Monogram badge with gradient & gloss */}
                <div
                  className={`w-12 h-12 rounded-2xl ${style.badgeBg} flex items-center justify-center font-display font-bold text-lg shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300 border border-white/60 select-none`}
                >
                  {member.name.charAt(0)}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight truncate">
                      {member.name}
                    </h4>
                    <span title="Profissional Habilitado" className="inline-flex">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    </span>
                  </div>

                  {/* Clean unboxed metadata with dot separator */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mt-1 truncate">
                    <span className="font-semibold text-slate-700">{member.role}</span>
                    <span className="text-slate-300" aria-hidden="true">·</span>
                    <span className="font-mono text-xs text-slate-500">
                      {member.council} {member.registration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Actions: View official post preview & Agendar button */}
              <div className="relative z-10 flex items-center gap-2 shrink-0">
                {/* View publication preview button */}
                <button
                  onClick={() => setSelectedPost(member)}
                  title="Ver publicação da clínica"
                  className="p-2 sm:px-2.5 sm:py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-800 border border-slate-200/80 text-xs font-semibold tracking-tight transition-colors shadow-2xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>

                {/* Direct WhatsApp Appointment button */}
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Agendar com ${member.name}`}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl ${style.btnBg} border text-xs font-bold tracking-wide transition-all duration-200 shadow-xs active:scale-95 group/btn`}
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Agendar</span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox / Modal for Official Clinic Instagram Post */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setSelectedPost(null)}
            aria-label="Fechar"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-sm w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-3 flex flex-col items-center">
            {/* Post Graphic */}
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 relative">
              <img
                src={selectedPost.postImg}
                alt={`${selectedPost.name} - ${selectedPost.role}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to original external url if needed
                  (e.target as HTMLImageElement).src = selectedPost.originalUrl;
                }}
              />
            </div>

            <div className="mt-3 text-center w-full px-2 pb-1">
              <h4 className="text-base font-bold text-slate-800 tracking-tight">
                {selectedPost.name}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                {selectedPost.role} · {selectedPost.council} {selectedPost.registration}
              </p>

              <div className="mt-4 flex items-center gap-2">
                <a
                  href={`https://wa.link/int8mg?text=${encodeURIComponent(
                    `Olá! Gostaria de agendar um atendimento na Clínica Mami com ${selectedPost.name} (${selectedPost.role}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs shadow-md transition-colors text-center"
                >
                  Agendar Consulta
                </a>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
