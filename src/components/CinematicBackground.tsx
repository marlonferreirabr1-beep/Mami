import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const CinematicBackground: React.FC = () => {
  const { scrollY } = useScroll();

  // Parallax scroll transforms for background depth
  const yChampagne1 = useTransform(scrollY, [0, 4000], [0, -260]);
  const ySand1 = useTransform(scrollY, [0, 4000], [0, 280]);
  const yTaupe1 = useTransform(scrollY, [0, 4000], [0, -180]);
  const yChampagne2 = useTransform(scrollY, [0, 4000], [0, 220]);
  const yTaupe2 = useTransform(scrollY, [0, 4000], [0, -300]);
  const rotateOrbs = useTransform(scrollY, [0, 4000], [0, 45]);
  const rotateReverse = useTransform(scrollY, [0, 4000], [0, -45]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20 select-none">
      {/* 1. Base Bege Quente, Suave e Sofisticado (Inspirado em Taupe/Areia Claro #AF987F) */}
      <div className="absolute inset-0 bg-[#F4EFEA] bg-gradient-to-b from-[#F7F4F0] via-[#F2ECE4] to-[#ECE5DC]" />

      {/* 2. Nuances Sutis de Dourado Champanhe e Bege Areia / Taupe Suave */}

      {/* Topo / Hero: Brilho Suave de Dourado Champanhe & Areia Aveludada */}
      <motion.div
        style={{ y: yChampagne1, rotate: rotateOrbs }}
        className="absolute -top-32 left-[12%] w-[720px] h-[560px] rounded-full bg-gradient-to-tr from-[#EEDDC4]/40 via-[#F5ECE0]/30 to-transparent blur-[120px] opacity-75 animate-aura"
      />
      <motion.div
        style={{ y: ySand1, rotate: rotateReverse }}
        className="absolute -top-24 right-[8%] w-[640px] h-[520px] rounded-full bg-gradient-to-bl from-[#E8D4B0]/35 via-[#F1E5D5]/30 to-transparent blur-[110px] opacity-80 animate-float"
      />

      {/* Região Superior/Média (Espaço & Sobre): Nuance Taupe Claro (#AF987F) e Ouro Champanhe */}
      <motion.div
        style={{ y: yTaupe1 }}
        className="absolute top-[22%] -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#AF987F]/15 via-[#DFCDB9]/25 to-transparent blur-[130px] opacity-80 animate-float-reverse"
      />
      <motion.div
        style={{ y: yChampagne2 }}
        className="absolute top-[36%] -right-28 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#EADBBE]/30 via-[#F3EBE0]/25 to-transparent blur-[120px] opacity-75 animate-float"
      />

      {/* Região Média (Serviços & Convênios): Fusão Champanhe Suave e Areia Quente */}
      <motion.div
        style={{ y: yTaupe2 }}
        className="absolute top-[52%] left-1/2 -translate-x-1/2 w-[740px] h-[620px] rounded-full bg-gradient-to-r from-[#AF987F]/12 via-[#E8D8BF]/25 to-[#F4EFEA]/30 blur-[135px] opacity-75 animate-aura"
      />
      <motion.div
        style={{ y: ySand1 }}
        className="absolute top-[64%] -right-36 w-[620px] h-[620px] rounded-full bg-gradient-to-l from-[#E6D5B8]/30 via-[#EFE6D9]/25 to-transparent blur-[120px] opacity-75 animate-float"
      />

      {/* Região Inferior (Equipe, Localização & Contato): Toque Aconchegante Champanhe */}
      <motion.div
        style={{ y: yChampagne1 }}
        className="absolute bottom-[18%] -left-28 w-[620px] h-[620px] rounded-full bg-gradient-to-tr from-[#DFC7A2]/25 via-[#EFE7DC]/30 to-transparent blur-[120px] opacity-80 animate-float-reverse"
      />
      <motion.div
        style={{ y: yTaupe1 }}
        className="absolute bottom-5 right-[10%] w-[680px] h-[580px] rounded-full bg-gradient-to-tl from-[#AF987F]/15 via-[#EBDCC2]/25 to-transparent blur-[130px] opacity-75 animate-aura"
      />

      {/* 3. Detalhes Decorativos Flutuantes Extremamente Discretos em Dourado Champanhe */}

      {/* Anel Champanhe no Topo Esquerdo */}
      <div className="absolute top-[12%] left-[4%] w-32 h-32 rounded-full border-[1.5px] border-[#DFC9A0]/25 shadow-[0_0_25px_rgba(223,201,160,0.15)] blur-[0.5px] animate-float" />
      <div className="absolute top-[13.5%] left-[5.5%] w-20 h-20 rounded-full border border-[#EBDCC2]/20 animate-pulse" />

      {/* Anel Champanhe no Centro-Direito */}
      <div className="absolute top-[28%] right-[6%] w-40 h-40 rounded-full border-[1.5px] border-[#DFC9A0]/25 shadow-[0_0_30px_rgba(223,201,160,0.15)] blur-[0.5px] animate-float-reverse" />
      <div className="absolute top-[30%] right-[8%] w-24 h-24 rounded-full border border-[#EBDCC2]/20 animate-pulse" />

      {/* Anel Champanhe no Meio-Esquerdo */}
      <div className="absolute top-[48%] left-[3%] w-36 h-36 rounded-full border-[1.5px] border-[#AF987F]/20 shadow-[0_0_25px_rgba(175,152,127,0.1)] blur-[0.5px] animate-float" />

      {/* Anéis Champanhe na Região Inferior */}
      <div className="absolute top-[68%] right-[5%] w-32 h-32 rounded-full border-[1.5px] border-[#DFC9A0]/25 shadow-[0_0_25px_rgba(223,201,160,0.15)] animate-float-reverse" />
      <div className="absolute top-[82%] left-[6%] w-44 h-44 rounded-full border-[1.5px] border-[#AF987F]/20 shadow-[0_0_30px_rgba(175,152,127,0.1)] animate-float" />

      {/* 4. Estrelas de Luz Muito Discretas em Dourado Champanhe */}
      {/* Estrela Champanhe Topo */}
      <svg className="absolute top-[8%] right-[14%] w-5 h-5 text-[#D4AF37]/45 animate-pulse drop-shadow-[0_0_6px_rgba(212,175,55,0.4)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
      </svg>

      {/* Estrela Champanhe Esquerda */}
      <svg className="absolute top-[22%] left-[12%] w-4 h-4 text-[#E2CCA2]/50 animate-bounce drop-shadow-[0_0_6px_rgba(226,204,162,0.4)]" style={{ animationDuration: '6s' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
      </svg>

      {/* Estrela Champanhe Meio */}
      <svg className="absolute top-[42%] right-[10%] w-5 h-5 text-[#D4AF37]/40 animate-pulse drop-shadow-[0_0_6px_rgba(212,175,55,0.35)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
      </svg>

      {/* Estrela Champanhe Centro-Esquerda */}
      <svg className="absolute top-[60%] left-[8%] w-5 h-5 text-[#E2CCA2]/45 animate-float drop-shadow-[0_0_6px_rgba(226,204,162,0.4)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
      </svg>

      {/* Estrela Champanhe Inferior */}
      <svg className="absolute top-[75%] right-[12%] w-5 h-5 text-[#D4AF37]/40 animate-pulse drop-shadow-[0_0_6px_rgba(212,175,55,0.35)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
      </svg>

      {/* 5. Linhas de Ondas Suaves em Dourado Champanhe Discreto */}
      <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="champagneSandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#E2CCA2" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#AF987F" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M -100 200 C 200 100, 400 350, 800 220 S 1200 400, 1500 280"
          fill="none"
          stroke="url(#champagneSandGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 8"
        />
        <path
          d="M -100 1200 C 300 1350, 500 1100, 900 1250 S 1300 1150, 1600 1300"
          fill="none"
          stroke="url(#champagneSandGrad)"
          strokeWidth="1.2"
          strokeDasharray="6 10"
        />
        <path
          d="M -100 2200 C 250 2100, 600 2300, 950 2150 S 1400 2250, 1600 2100"
          fill="none"
          stroke="url(#champagneSandGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 8"
        />
      </svg>

      {/* 6. Textura Micro-Pontilhada em Taupe Areia Suave */}
      <div
        className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#AF987F_1px,transparent_1px)] [background-size:28px_28px]"
      />

      {/* 7. Iluminação de Vinheta Suave e Quente nas Bordas */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 via-transparent to-[#AF987F]/[0.05]" />
    </div>
  );
};
