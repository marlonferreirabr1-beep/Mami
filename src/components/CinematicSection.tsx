import React from 'react';
import { motion } from 'motion/react';

interface CinematicSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

/**
 * Cinematic Motion Wrapper for Sections
 * Efeito Motion com aspecto cinematográfico ao rolar a página:
 * - 3D Perspective Camera Entrance (rotateX 6deg -> 0deg)
 * - Fluid Y Translation (y 55 -> 0)
 * - Cinematic Scale Expansion (scale 0.94 -> 1.0)
 * - Soft Parallax Ambient Aura
 */
export const CinematicSection: React.FC<CinematicSectionProps> = ({
  id,
  className = '',
  children,
  delay = 0,
}) => {
  return (
    <section id={id} className={`relative w-full ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 55, scale: 0.94, rotateX: 6 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{
          duration: 0.88,
          delay,
          ease: [0.16, 1, 0.3, 1], // Curva cinematográfica premium (Apple/Hollywood)
        }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: 1200,
          willChange: 'transform, opacity',
        }}
        className="w-full flex flex-col items-center"
      >
        {children}
      </motion.div>
    </section>
  );
};
