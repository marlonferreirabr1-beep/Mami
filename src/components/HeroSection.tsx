import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MessageCircle, ArrowDown, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { WhatsApp3DIcon, Instagram3DIcon } from './icons3D.tsx';

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const logoUrl = 'https://i.postimg.cc/k57NL0CD/file-00000000ba38820e9946adf2e70e85f1.png';
  const whatsappUrl = 'https://wa.link/int8mg';
  const instagramUrl = 'https://www.instagram.com/clinicamami?stkn=dTdzaWR3aW1oenl2';

  const scrollToNext = () => {
    const el = document.getElementById('secao-espaco');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center">
      {/* Top Luxury Medical Seal with Gold & Rose Details */}
      <motion.div
        initial={{ opacity: 0, y: -16, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-7 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-50/90 via-amber-50/90 to-rose-50/90 backdrop-blur-xl border border-amber-200/80 shadow-[0_4px_20px_rgba(217,119,6,0.06)] text-xs font-semibold tracking-wide text-amber-950 select-none"
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-rose-500 to-amber-500" />
        </span>
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-800">
          Centro de Saúde & Desenvolvimento Integrado
        </span>
      </motion.div>

      {/* Main Clínica Mami Logo (Sculpted Floating Presence) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-64 sm:w-80 max-w-[88vw] select-none group"
      >
        {/* Ambient Warm Golden-Rose Aura */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-300/30 via-amber-200/30 to-rose-300/30 blur-3xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500 scale-95" />
        
        <img
          src={logoUrl}
          alt="Clínica Mami"
          referrerPolicy="no-referrer"
          className="relative z-10 w-full h-auto object-contain mx-auto drop-shadow-[0_16px_32px_rgba(244,114,182,0.18)] transition-transform duration-500 hover:scale-[1.03]"
        />
      </motion.div>

      {/* Brand Slogan with Haute-Couture Editorial Styling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 mb-7 max-w-lg px-3"
      >
        <h2 className="text-2xl sm:text-3xl font-display font-medium text-slate-900 tracking-tight leading-snug drop-shadow-xs">
          “Um espaço de cuidado, escuta e acolhimento.”
        </h2>
        
        {/* Rose & Gold Ribbon */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="w-12 h-[2px] rounded-full bg-gradient-to-r from-transparent via-rose-400 to-amber-400" />
          <span className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-300" />
          <span className="w-2 h-2 rounded-full bg-rose-400 shadow-sm shadow-rose-300" />
          <span className="w-12 h-[2px] rounded-full bg-gradient-to-l from-transparent via-rose-400 to-amber-400" />
        </div>
      </motion.div>

      {/* Premium Pillars Ribbon Pill */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-8 w-full max-w-md px-2"
      >
        <div className="p-3 sm:py-3 sm:px-4 rounded-2xl bg-white/90 backdrop-blur-md border border-amber-100 shadow-[0_4px_16px_rgba(217,119,6,0.04)] flex items-center justify-around gap-2 text-[11px] sm:text-xs font-semibold text-slate-700">
          <span className="flex items-center gap-1.5">
            <span className="text-sm">👶</span> Cuidado Infantil
          </span>
          <span className="text-amber-300">·</span>
          <span className="flex items-center gap-1.5">
            <span className="text-sm">🧠</span> Multidisciplinar
          </span>
          <span className="text-amber-300">·</span>
          <span className="flex items-center gap-1.5">
            <span className="text-sm">📌</span> Humanizado
          </span>
        </div>
      </motion.div>

      {/* Two Master Action Buttons with Gold & Premium Rose Depth */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col sm:flex-row items-center justify-center gap-3.5 px-2"
      >
        {/* AGENDAR ATENDIMENTO - Luxury Rose Gold & Imperial Gold Satin */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-1/2 relative group overflow-hidden py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 bg-[length:200%_auto] hover:bg-right text-white font-bold text-xs sm:text-sm tracking-wider shadow-[0_12px_28px_-6px_rgba(244,114,182,0.5),0_4px_12px_rgba(245,158,11,0.25)] hover:shadow-[0_16px_36px_-6px_rgba(217,119,6,0.4)] border-t border-amber-200/50 active:translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5"
        >
          <div className="absolute inset-0 animate-sheen pointer-events-none" />
          <Calendar className="w-4 h-4 stroke-[2.5] relative z-10" />
          <span className="relative z-10 uppercase">AGENDAR ATENDIMENTO</span>
        </a>

        {/* FALE CONOSCO - Porcelain Glass with Gold Rim */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-1/2 relative group overflow-hidden py-4 px-6 rounded-2xl bg-white/95 hover:bg-white text-slate-800 font-bold text-xs sm:text-sm tracking-wider shadow-[0_8px_24px_-4px_rgba(217,119,6,0.06),0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_14px_30px_-6px_rgba(245,158,11,0.2)] border border-amber-200/80 active:translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5"
        >
          <div className="absolute inset-0 animate-sheen pointer-events-none opacity-40" />
          <MessageCircle className="w-4 h-4 text-emerald-500 stroke-[2.5] relative z-10" />
          <span className="relative z-10 uppercase">FALE CONOSCO</span>
        </a>
      </motion.div>

      {/* Official Social Media Master Channels */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 flex items-center justify-center gap-4 sm:gap-6 w-full max-w-md px-2"
      >
        {/* WhatsApp Official */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Fale conosco no WhatsApp Oficial"
          className="flex-1 flex items-center gap-3 p-3.5 rounded-2xl bg-white/95 hover:bg-white border border-slate-200/80 shadow-[0_6px_20px_rgba(37,211,102,0.12)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.25)] transition-all duration-300 group active:scale-95 transform-gpu hover:-translate-y-0.5"
        >
          <WhatsApp3DIcon size={36} />
          <div className="text-left min-w-0">
            <span className="block text-[10px] uppercase font-bold tracking-wider text-emerald-600">
              WhatsApp
            </span>
            <span className="block text-xs font-bold text-slate-800 group-hover:text-emerald-600 transition-colors truncate">
              Online Agora
            </span>
          </div>
        </a>

        {/* Instagram Official */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Siga @clinicamami no Instagram"
          className="flex-1 flex items-center gap-3 p-3.5 rounded-2xl bg-white/95 hover:bg-white border border-rose-100 shadow-[0_6px_20px_rgba(225,48,108,0.12)] hover:shadow-[0_12px_28px_rgba(225,48,108,0.25)] transition-all duration-300 group active:scale-95 transform-gpu hover:-translate-y-0.5"
        >
          <Instagram3DIcon size={36} />
          <div className="text-left min-w-0">
            <span className="block text-[10px] uppercase font-bold tracking-wider text-rose-600">
              Instagram
            </span>
            <span className="block text-xs font-bold text-slate-800 group-hover:text-rose-600 transition-colors truncate">
              @clinicamami
            </span>
          </div>
        </a>
      </motion.div>

      {/* Smooth Editorial Scroll Down Prompt */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        onClick={scrollToNext}
        aria-label="Deslize para ver mais"
        className="mt-12 flex flex-col items-center gap-2 text-slate-400 hover:text-amber-700 transition-colors group cursor-pointer select-none"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase bg-gradient-to-r from-rose-500 via-amber-500 to-rose-500 bg-clip-text text-transparent">
          Deslize para conhecer
        </span>
        <div className="w-8 h-8 rounded-full bg-white border border-amber-200/80 shadow-sm flex items-center justify-center group-hover:translate-y-1 transition-transform">
          <ArrowDown className="w-3.5 h-3.5 text-amber-600 animate-bounce" />
        </div>
      </motion.button>
    </div>
  );
};
