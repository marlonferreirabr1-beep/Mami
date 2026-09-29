import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const CinematicBackground: React.FC = () => {
  const { scrollY } = useScroll();

  // Parallax scroll transforms for background depth
  const yGold1 = useTransform(scrollY, [0, 4000], [0, -320]);
  const yRose1 = useTransform(scrollY, [0, 4000], [0, 360]);
  const yPurple1 = useTransform(scrollY, [0, 4000], [0, -220]);
  const yGold2 = useTransform(scrollY, [0, 4000], [0, 280]);
  const yPurple2 = useTransform(scrollY, [0, 4000], [0, -380]);
  const rotateOrbs = useTransform(scrollY, [0, 4000], [0, 60]);
  const rotateReverse = useTransform(scrollY, [0, 4000], [0, -60]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20 select-none">
      {/* 1. Base Límpida em Branco Gelo Puro (Ice White) */}
      <div className="absolute inset-0 bg-[#f8fafc]" />

      {/* 2. Malha de Iluminação Laranja/Dourado, Rosa e Roxo (Grande Escala) */}

      {/* Topo / Hero: Foco Rosa Vibrante & Dourado */}
      <motion.div
        style={{ y: yRose1, rotate: rotateOrbs }}
        className="absolute -top-32 left-[10%] w-[680px] h-[550px] rounded-full bg-gradient-to-tr from-rose-300/50 via-pink-200/40 to-transparent blur-[95px] opacity-80 animate-aura"
      />
      <motion.div
        style={{ y: yGold1, rotate: rotateReverse }}
        className="absolute -top-20 right-[5%] w-[620px] h-[520px] rounded-full bg-gradient-to-bl from-amber-300/50 via-yellow-200/40 to-transparent blur-[90px] opacity-85 animate-float"
      />

      {/* Região Superior/Média (Espaço & Sobre): Roxo Imperial & Ouro Rosé */}
      <motion.div
        style={{ y: yPurple1 }}
        className="absolute top-[20%] -left-32 w-[640px] h-[640px] rounded-full bg-gradient-to-br from-purple-400/45 via-violet-300/35 to-fuchsia-200/20 blur-[105px] opacity-85 animate-float-reverse"
      />
      <motion.div
        style={{ y: yGold2 }}
        className="absolute top-[35%] -right-28 w-[580px] h-[580px] rounded-full bg-gradient-to-tl from-amber-300/45 via-rose-200/35 to-transparent blur-[100px] opacity-80 animate-float"
      />

      {/* Região Média (Serviços & Convênios): Fusão Roxo & Rosa */}
      <motion.div
        style={{ y: yPurple2 }}
        className="absolute top-[52%] left-1/2 -translate-x-1/2 w-[720px] h-[600px] rounded-full bg-gradient-to-r from-purple-400/35 via-rose-300/35 to-amber-200/30 blur-[115px] opacity-75 animate-aura"
      />
      <motion.div
        style={{ y: yRose1 }}
        className="absolute top-[62%] -right-36 w-[620px] h-[620px] rounded-full bg-gradient-to-l from-rose-400/40 via-purple-300/30 to-transparent blur-[100px] opacity-80 animate-float"
      />

      {/* Região Inferior (Equipe, Localização & Contato): Dourado Quente & Roxo */}
      <motion.div
        style={{ y: yGold1 }}
        className="absolute bottom-[18%] -left-28 w-[620px] h-[620px] rounded-full bg-gradient-to-tr from-amber-300/45 via-yellow-200/35 to-transparent blur-[100px] opacity-85 animate-float-reverse"
      />
      <motion.div
        style={{ y: yPurple1 }}
        className="absolute bottom-5 right-[10%] w-[680px] h-[580px] rounded-full bg-gradient-to-tl from-purple-500/40 via-rose-300/35 to-transparent blur-[110px] opacity-80 animate-aura"
      />

      {/* 3. Detalhes Decorativos Flutuantes em Dourado, Rosa e Roxo */}

      {/* Anel Dourado Flutuante no Topo Esquerdo */}
      <div className="absolute top-[12%] left-[4%] w-32 h-32 rounded-full border-[1.5px] border-amber-300/40 shadow-[0_0_25px_rgba(245,158,11,0.2)] blur-[0.5px] animate-float" />
      <div className="absolute top-[13.5%] left-[5.5%] w-20 h-20 rounded-full border border-amber-200/30 animate-pulse" />

      {/* Anel Roxo Flutuante no Centro-Direito */}
      <div className="absolute top-[28%] right-[6%] w-40 h-40 rounded-full border-[1.5px] border-purple-400/40 shadow-[0_0_30px_rgba(168,85,247,0.25)] blur-[0.5px] animate-float-reverse" />
      <div className="absolute top-[30%] right-[8%] w-24 h-24 rounded-full border border-purple-300/30 animate-pulse" />

      {/* Anel Rosa Flutuante no Meio-Esquerdo */}
      <div className="absolute top-[48%] left-[3%] w-36 h-36 rounded-full border-[1.5px] border-rose-400/40 shadow-[0_0_25px_rgba(244,114,182,0.25)] blur-[0.5px] animate-float" />

      {/* Anel Dourado e Roxo na Região Inferior */}
      <div className="absolute top-[68%] right-[5%] w-32 h-32 rounded-full border-[1.5px] border-amber-400/40 shadow-[0_0_25px_rgba(245,158,11,0.2)] animate-float-reverse" />
      <div className="absolute top-[82%] left-[6%] w-44 h-44 rounded-full border-[1.5px] border-purple-400/35 shadow-[0_0_30px_rgba(168,85,247,0.2)] animate-float" />

      {/* 4. Partículas e Estrelas de Luz (Dourado, Rosa e Roxo) */}
      {/* Estrela Dourada Topo */}
      <svg className="absolute top-[8%] right-[14%] w-6 h-6 text-amber-400/70 animate-pulse drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
      </svg>

      {/* Estrela Rosa Esquerda */}
      <svg className="absolute top-[22%] left-[12%] w-5 h-5 text-rose-400/75 animate-bounce drop-shadow-[0_0_8px_rgba(244,114,182,0.6)]" style={{ animationDuration: '6s' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
      </svg>

      {/* Estrela Roxa Meio */}
      <svg className="absolute top-[42%] right-[10%] w-7 h-7 text-purple-400/75 animate-pulse drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
      </svg>

      {/* Estrela Dourada Centro-Esquerda */}
      <svg className="absolute top-[60%] left-[8%] w-6 h-6 text-amber-400/70 animate-float drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
      </svg>

      {/* Estrela Roxa / Rosa Inferior */}
      <svg className="absolute top-[75%] right-[12%] w-6 h-6 text-purple-400/75 animate-pulse drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
      </svg>
      <svg className="absolute top-[90%] left-[15%] w-5 h-5 text-rose-400/70 animate-float-reverse drop-shadow-[0_0_8px_rgba(244,114,182,0.6)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
      </svg>

      {/* 5. Linhas de Ondas Suaves em Degradê Dourado, Rosa e Roxo */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldRosePurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#F43F5E" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#9333EA" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path
          d="M -100 200 C 200 100, 400 350, 800 220 S 1200 400, 1500 280"
          fill="none"
          stroke="url(#goldRosePurpleGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />
        <path
          d="M -100 1200 C 300 1350, 500 1100, 900 1250 S 1300 1150, 1600 1300"
          fill="none"
          stroke="url(#goldRosePurpleGrad)"
          strokeWidth="1.5"
          strokeDasharray="6 10"
        />
        <path
          d="M -100 2200 C 250 2100, 600 2300, 950 2150 S 1400 2250, 1600 2100"
          fill="none"
          stroke="url(#goldRosePurpleGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />
      </svg>

      {/* 6. Textura Micro-Pontilhada Cristalina */}
      <div
        className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:28px_28px]"
      />

      {/* 7. Iluminação de Vinheta Suave nas Bordas */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/20 via-transparent to-purple-900/[0.03]" />
    </div>
  );
};
