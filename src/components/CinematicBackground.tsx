import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const CinematicBackground: React.FC = () => {
  const { scrollY } = useScroll();

  // Cinematic parallax transformations as the user scrolls
  const yPink = useTransform(scrollY, [0, 3000], [0, -250]);
  const yBlue = useTransform(scrollY, [0, 3000], [0, 320]);
  const yPurple = useTransform(scrollY, [0, 3000], [0, -180]);
  const rotateOrbs = useTransform(scrollY, [0, 3000], [0, 45]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
      {/* Pristine Ice White Canvas Base */}
      <div className="absolute inset-0 bg-[#f7f9fc]" />

      {/* Floating 3D Glowing Pastel Mesh (Pink, Baby Blue, Lilac) */}
      <motion.div
        style={{ y: yPink, rotate: rotateOrbs }}
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[520px] rounded-full bg-gradient-to-tr from-pink-200/50 via-rose-100/40 to-transparent blur-[110px] opacity-75 animate-aura"
      />

      <motion.div
        style={{ y: yBlue }}
        className="absolute top-[30%] -left-36 w-[620px] h-[620px] rounded-full bg-gradient-to-br from-sky-200/55 via-cyan-100/35 to-transparent blur-[120px] opacity-80 animate-float"
      />

      <motion.div
        style={{ y: yPurple }}
        className="absolute top-[55%] -right-36 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-purple-200/50 via-indigo-100/35 to-transparent blur-[125px] opacity-75 animate-float-reverse"
      />

      <motion.div
        style={{ y: yPink }}
        className="absolute bottom-10 left-[15%] w-[580px] h-[480px] rounded-full bg-gradient-to-t from-pink-200/45 via-purple-100/35 to-transparent blur-[110px] opacity-70 animate-aura"
      />

      {/* Subtle Micro-Grid Texture with Ice Reflections */}
      <div
        className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px]"
      />

      {/* Iridescent Vignette Rim */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/40 via-transparent to-slate-900/[0.02]" />
    </div>
  );
};
