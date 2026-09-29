import React from 'react';
import { motion } from 'motion/react';

interface CinematicSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

/**
 * Cinematic Motion Wrapper for sections
 * Provides Apple/A24-grade camera reveals on scroll:
 * - Fluid opacity fade
 * - Smooth vertical rise (y: 40 -> 0)
 * - Subtle 3D perspective tilt (rotateX: 4deg -> 0deg)
 * - Scale settling (scale: 0.96 -> 1.0)
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
        initial={{ opacity: 0, y: 48, scale: 0.95, rotateX: 4 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        viewport={{ once: false, amount: 0.22 }}
        transition={{
          duration: 0.85,
          delay,
          ease: [0.16, 1, 0.3, 1], // Cinematic smooth curve
        }}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
        className="w-full flex flex-col items-center"
      >
        {children}
      </motion.div>
    </section>
  );
};
