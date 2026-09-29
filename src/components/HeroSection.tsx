import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MessageCircle, ArrowDown, Sparkles } from 'lucide-react';
import { WhatsApp3DIcon, Instagram3DIcon } from './icons3D.tsx';

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const logoUrl = 'https://i.postimg.cc/k57NL0CD/file-00000000ba38820e9946adf2e70e85f1.png';
  const whatsappUrl = 'https://wa.link/int8mg';
  const instagramUrl = 'https://www.instagram.com/clinicamami?stkn=dTdzaWR3aW1oenl2';

  const scrollToAbout = () => {
    const el = document.getElementById('secao-conheca');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center">
      {/* Top 3D Welcome Pill with Tri-Color Pastel Sheen */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-[0_4px_16px_rgba(244,114,182,0.15),0_2px_8px_rgba(56,189,248,0.15)] text-xs font-semibold tracking-wide text-slate-700 select-none animate-float"
      >
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse delay-75" />
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-150" />
        </div>
        <span>Clínica Especializada em Saúde & Bem-Estar</span>
      </motion.div>

      {/* Main Large Clínica Mami Logo (Centered, 3D levitation) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-64 sm:w-80 max-w-[88vw] select-none group"
      >
        {/* Soft 3D Glow Pod beneath the logo */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300/30 via-sky-300/30 to-purple-300/30 blur-2xl rounded-full opacity-60 group-hover:opacity-90 transition-opacity duration-500 scale-90" />
        
        <img
          src={logoUrl}
          alt="Clínica Mami"
          referrerPolicy="no-referrer"
          className="relative z-10 w-full h-auto object-contain mx-auto drop-shadow-[0_12px_24px_rgba(244,114,182,0.22)] transition-transform duration-500 hover:scale-105"
        />
      </motion.div>

      {/* Brand Slogan with Cinematographic Fade & Typography */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="mt-7 mb-8 max-w-md px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-display font-medium text-slate-800 tracking-tight leading-snug drop-shadow-sm">
          “Um espaço de cuidado, escuta e acolhimento.”
        </h2>
        {/* Tri-Color Iridescent Ribbon */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="w-12 h-[2px] rounded-full bg-gradient-to-r from-transparent to-pink-400" />
          <span className="w-2 h-2 rounded-full bg-sky-400 shadow-sm shadow-sky-300" />
          <span className="w-2 h-2 rounded-full bg-purple-400 shadow-sm shadow-purple-300" />
          <span className="w-12 h-[2px] rounded-full bg-gradient-to-l from-transparent to-pink-400" />
        </div>
      </motion.div>

      {/* Two Main Action Buttons - 3D High Relief & Specular Sheen */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 px-2"
      >
        {/* AGENDAR ATENDIMENTO - 3D Gradient with Sheen */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-1/2 relative group overflow-hidden py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 bg-[length:200%_auto] hover:bg-right text-white font-bold text-sm tracking-wide shadow-[0_12px_28px_-6px_rgba(244,114,182,0.6),0_4px_12px_rgba(244,114,182,0.3)] hover:shadow-[0_16px_36px_-6px_rgba(244,114,182,0.75)] border-t border-white/40 active:translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5"
        >
          {/* Animated Sheen */}
          <div className="absolute inset-0 animate-sheen pointer-events-none" />
          <Calendar className="w-4 h-4 stroke-[2.5] relative z-10" />
          <span className="relative z-10">AGENDAR ATENDIMENTO</span>
        </a>

        {/* FALE CONOSCO - 3D Porcelain Glass with Iridescent Rim */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-1/2 relative group overflow-hidden py-4 px-6 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm tracking-wide shadow-[0_10px_24px_-6px_rgba(56,189,248,0.3),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_30px_-6px_rgba(56,189,248,0.45)] border border-sky-100 active:translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5"
        >
          <div className="absolute inset-0 animate-sheen pointer-events-none opacity-60" />
          <MessageCircle className="w-4 h-4 text-emerald-500 stroke-[2.5] relative z-10" />
          <span className="relative z-10">FALE CONOSCO</span>
        </a>
      </motion.div>

      {/* Social Platforms Row (3D Badges with Shiny Gleam) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="mt-9 flex items-center justify-center gap-5 sm:gap-7"
      >
        {/* WhatsApp 3D */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Fale conosco no WhatsApp"
          className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/95 hover:bg-white border border-emerald-100 shadow-[0_8px_20px_-4px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_28px_-4px_rgba(37,211,102,0.45)] transition-all duration-300 group active:scale-95 transform-gpu hover:-translate-y-1"
        >
          <WhatsApp3DIcon size={40} />
          <div className="text-left">
            <span className="block text-[10px] uppercase font-bold tracking-wider text-emerald-600">
              WhatsApp
            </span>
            <span className="block text-xs font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
              Online Agora
            </span>
          </div>
        </a>

        {/* Instagram 3D */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Siga @clinicamami no Instagram"
          className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/95 hover:bg-white border border-pink-100 shadow-[0_8px_20px_-4px_rgba(225,48,108,0.3)] hover:shadow-[0_12px_28px_-4px_rgba(225,48,108,0.45)] transition-all duration-300 group active:scale-95 transform-gpu hover:-translate-y-1"
        >
          <Instagram3DIcon size={40} />
          <div className="text-left">
            <span className="block text-[10px] uppercase font-bold tracking-wider text-pink-600">
              Instagram
            </span>
            <span className="block text-xs font-bold text-slate-800 group-hover:text-pink-600 transition-colors">
              @clinicamami
            </span>
          </div>
        </a>
      </motion.div>

      {/* Gentle Cinematographic Scroll Prompt */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        onClick={scrollToAbout}
        aria-label="Deslize para ver mais"
        className="mt-12 flex flex-col items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors group cursor-pointer select-none"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase bg-gradient-to-r from-pink-500 via-sky-500 to-purple-500 bg-clip-text text-transparent">
          Deslize para conhecer
        </span>
        <div className="w-9 h-9 rounded-full bg-white/90 border border-slate-200/80 shadow-md flex items-center justify-center group-hover:translate-y-1 transition-transform">
          <ArrowDown className="w-4 h-4 text-slate-500 animate-bounce" />
        </div>
      </motion.button>
    </div>
  );
};
