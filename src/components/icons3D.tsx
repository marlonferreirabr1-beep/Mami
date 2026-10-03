import React from 'react';

interface OfficialIconProps {
  className?: string;
  size?: number;
  showGleam?: boolean;
}

/**
 * LOGO OFICIAL 3D BRILHANTE DO WHATSAPP
 * Com reflexo de cúpula de vidro (convex specular highlight), relevo táctil e aura verde esmeralda.
 */
export const WhatsApp3DIcon: React.FC<OfficialIconProps> = ({
  className = '',
  size = 48,
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center shrink-0 group ${className}`}
    >
      {/* 3D Glowing Ambient Halo */}
      <div className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-lg group-hover:blur-xl group-hover:bg-[#25D366]/60 transition-all duration-300 pointer-events-none scale-95 group-hover:scale-120 animate-pulse" />

      {/* 3D Convex Badge Container with Bevel & Gloss */}
      <div className="relative w-full h-full rounded-full transition-all duration-300 transform-gpu group-hover:-translate-y-1 group-hover:scale-110 active:scale-95 shadow-[0_12px_24px_-4px_rgba(37,211,102,0.6),0_4px_10px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-3px_6px_rgba(0,0,0,0.2)] overflow-hidden">
        {/* Animated Sheen Sweep */}
        <div className="absolute inset-0 animate-sheen pointer-events-none z-20 opacity-60" />

        {/* Glossy Curved Dome Reflection (Top Specular Highlight) */}
        <div className="absolute -top-1 left-0 right-0 h-[55%] rounded-t-full bg-gradient-to-b from-white/70 via-white/20 to-transparent pointer-events-none z-10" />

        <svg
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
          className="overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="wa3dShine" cx="30%" cy="25%" r="70%">
              <stop offset="0%" stopColor="#4eed88" />
              <stop offset="60%" stopColor="#25D366" />
              <stop offset="100%" stopColor="#128C7E" />
            </radialGradient>
          </defs>

          {/* Fundo oficial Verde WhatsApp com gradiente 3D esférico */}
          <circle cx="24" cy="24" r="23.5" fill="url(#wa3dShine)" />
          
          {/* Anel de brilho perolado */}
          <circle cx="24" cy="24" r="23" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />

          {/* Glifo Oficial WhatsApp (Monofone e Balão) */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 24 9 C 15.716 9 9 15.716 9 24 C 9 26.88 9.816 29.58 11.232 31.872 L 9.72 37.404 C 9.54 38.064 10.14 38.664 10.8 38.484 L 16.332 36.972 C 18.624 38.388 21.324 39.204 24.204 39.204 C 32.488 39.204 39.204 32.488 39.204 24.204 C 39.204 15.92 32.488 9 24.204 9 Z"
            fill="#1da851"
            opacity="0.3"
          />
          {/* Ícone vetor oficial branco com sombra de relevo */}
          <path
            d="M 19.344 16.32 C 18.888 15.312 18.408 15.288 17.976 15.264 C 17.616 15.24 17.208 15.24 16.8 15.24 C 16.392 15.24 15.72 15.384 15.144 16.008 C 14.568 16.632 12.96 18.144 12.96 21.216 C 12.96 24.288 15.216 27.24 15.528 27.648 C 15.84 28.056 19.824 34.512 26.112 36.936 C 31.344 38.952 32.4 37.824 33.48 37.728 C 34.56 37.632 36.984 36.312 37.488 34.872 C 37.992 33.432 37.992 32.184 37.848 31.92 C 37.704 31.656 37.296 31.512 36.696 31.224 C 36.096 30.936 33.12 29.472 32.568 29.28 C 32.016 29.088 31.608 28.992 31.2 29.592 C 30.792 30.192 29.64 31.656 29.28 32.064 C 28.92 32.472 28.56 32.52 27.96 32.232 C 27.36 31.944 25.416 31.32 23.112 29.28 C 21.312 27.672 20.088 25.704 19.728 25.104 C 19.368 24.504 19.68 24.168 19.992 23.88 C 20.256 23.616 20.616 23.136 20.904 22.776 C 21.192 22.416 21.312 22.176 21.504 21.768 C 21.696 21.36 21.6 21.024 21.456 20.736 C 21.312 20.448 20.208 17.616 19.704 16.488 L 19.344 16.32 Z"
            fill="#FFFFFF"
            className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
          />
        </svg>
      </div>
    </div>
  );
};

/**
 * LOGO OFICIAL 3D BRILHANTE DO INSTAGRAM
 * Com gradiente do pôr do sol hiperbrilhante, reflexo de vidro e aura magenta luminosa.
 */
export const Instagram3DIcon: React.FC<OfficialIconProps> = ({
  className = '',
  size = 48,
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center shrink-0 group ${className}`}
    >
      {/* 3D Glowing Ambient Halo */}
      <div className="absolute inset-0 rounded-[16px] bg-gradient-to-tr from-[#FD5949]/45 via-[#D6249F]/55 to-[#285AEB]/40 blur-lg group-hover:blur-xl transition-all duration-300 pointer-events-none scale-95 group-hover:scale-120 animate-pulse" />

      {/* 3D Glass Squircle Container */}
      <div className="relative w-full h-full rounded-[16px] transition-all duration-300 transform-gpu group-hover:-translate-y-1 group-hover:scale-110 active:scale-95 shadow-[0_12px_26px_-4px_rgba(225,48,108,0.65),0_4px_10px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-3px_6px_rgba(0,0,0,0.2)] overflow-hidden">
        {/* Animated Sheen Sweep */}
        <div className="absolute inset-0 animate-sheen pointer-events-none z-20 opacity-60" />

        {/* Specular Highlight */}
        <div className="absolute -top-1 left-0 right-0 h-[50%] rounded-t-[16px] bg-gradient-to-b from-white/70 via-white/15 to-transparent pointer-events-none z-10" />

        <svg
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
          className="overflow-visible rounded-[16px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="insta3DShine" cx="25%" cy="115%" r="140%">
              <stop offset="0%" stopColor="#ffee55" />
              <stop offset="10%" stopColor="#ffb03a" />
              <stop offset="45%" stopColor="#fd3666" />
              <stop offset="70%" stopColor="#c5169a" />
              <stop offset="100%" stopColor="#285AEB" />
            </radialGradient>
          </defs>

          {/* Base oficial Squircle com Gradiente 3D vibrante */}
          <rect width="48" height="48" rx="14" fill="url(#insta3DShine)" />
          <rect x="0.5" y="0.5" width="47" height="47" rx="13.5" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />

          {/* Glifo Oficial da Câmera com relevo tridimensional */}
          <g className="drop-shadow-[0_2px_5px_rgba(0,0,0,0.3)]">
            <rect
              x="11"
              y="11"
              width="26"
              height="26"
              rx="7.5"
              stroke="#FFFFFF"
              strokeWidth="3.2"
              fill="none"
            />
            <circle
              cx="24"
              cy="24"
              r="6.5"
              stroke="#FFFFFF"
              strokeWidth="3.2"
              fill="none"
            />
            <circle cx="31.8" cy="16.2" r="2" fill="#FFFFFF" />
          </g>
        </svg>
      </div>
    </div>
  );
};

/**
 * LOGO OFICIAL 3D BRILHANTE DO GOOGLE MAPS
 * Pin esculpido com reflexo de porcelana e aura de profundidade azul celeste.
 */
export const GoogleMaps3DIcon: React.FC<OfficialIconProps> = ({
  className = '',
  size = 48,
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center shrink-0 group ${className}`}
    >
      {/* 3D Glowing Ambient Halo */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#4285F4]/35 via-[#EA4335]/30 to-[#34A853]/35 blur-lg group-hover:blur-xl transition-all duration-300 pointer-events-none scale-95 group-hover:scale-120 animate-pulse" />

      {/* 3D Porcelain Beveled Card */}
      <div className="relative w-full h-full rounded-2xl bg-white/95 backdrop-blur-md transition-all duration-300 transform-gpu group-hover:-translate-y-1 group-hover:scale-110 active:scale-95 shadow-[0_12px_24px_-4px_rgba(66,133,244,0.45),0_4px_10px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.06)] border border-white flex items-center justify-center p-2 overflow-hidden">
        {/* Animated Sheen Sweep */}
        <div className="absolute inset-0 animate-sheen pointer-events-none z-20 opacity-50" />

        {/* Specular Highlight */}
        <div className="absolute -top-1 left-0 right-0 h-[45%] bg-gradient-to-b from-white/80 via-white/20 to-transparent pointer-events-none z-10" />

        <svg
          viewBox="0 0 92 136"
          width="74%"
          height="74%"
          className="overflow-visible drop-shadow-[0_4px_8px_rgba(0,0,0,0.18)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pin Oficial Google Maps */}
          <path
            d="M 46 0 C 20.6 0 0 20.6 0 46 C 0 57.8 4.6 68.6 12.1 76.8 L 30 59 C 27.5 55.2 26 50.8 26 46 C 26 35 35 26 46 26 C 50.8 26 55.2 27.5 59 30 L 76.8 12.1 C 68.6 4.6 57.8 0 46 0 Z"
            fill="#EA4335"
          />
          <path
            d="M 0 46 C 0 57.8 4.6 68.6 12.1 76.8 L 30 59 C 27.5 55.2 26 50.8 26 46 C 26 45.4 26 44.8 26.1 44.2 L 8.3 26.4 C 3 32.1 0 38.7 0 46 Z"
            fill="#4285F4"
          />
          <path
            d="M 46 26 C 50.8 26 55.2 27.5 59 30 L 76.8 12.1 C 71.1 6.8 64.5 3.8 57.2 2.2 L 44.2 26.1 C 44.8 26 45.4 26 46 26 Z"
            fill="#FBBC04"
          />
          <path
            d="M 12.1 76.8 L 46 136 L 79.9 76.8 C 87.4 68.6 92 57.8 92 46 C 92 42.6 91.5 39.3 90.5 36.2 L 59 67.7 C 56.6 70.1 53.4 71.5 50 71.8 L 46 72 C 40.5 72 35.6 69.8 32 66.2 L 12.1 76.8 Z"
            fill="#34A853"
          />
          <circle cx="46" cy="46" r="20" fill="#ffffff" />
          <circle cx="46" cy="46" r="14" fill="#1A73E8" />
        </svg>
      </div>
    </div>
  );
};

/**
 * LOGO OFICIAL 3D BRILHANTE DO GOOGLE (G Multicor)
 * Com visual espelhado em relevo e brilho de alta fidelidade.
 */
export const Google3DIcon: React.FC<OfficialIconProps> = ({
  className = '',
  size = 48,
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center shrink-0 group ${className}`}
    >
      {/* 3D Glowing Ambient Halo */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#4285F4]/30 via-[#EA4335]/30 to-[#FBBC05]/30 blur-lg group-hover:blur-xl transition-all duration-300 pointer-events-none scale-95 group-hover:scale-120 animate-pulse" />

      {/* 3D Porcelain Beveled Card */}
      <div className="relative w-full h-full rounded-2xl bg-white/95 backdrop-blur-md transition-all duration-300 transform-gpu group-hover:-translate-y-1 group-hover:scale-110 active:scale-95 shadow-[0_12px_24px_-4px_rgba(66,133,244,0.45),0_4px_10px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.06)] border border-white flex items-center justify-center p-2.5 overflow-hidden">
        {/* Animated Sheen Sweep */}
        <div className="absolute inset-0 animate-sheen pointer-events-none z-20 opacity-50" />

        {/* Specular Highlight */}
        <div className="absolute -top-1 left-0 right-0 h-[45%] bg-gradient-to-b from-white/80 via-white/20 to-transparent pointer-events-none z-10" />

        <svg
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
          className="overflow-visible drop-shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 44.5 20 H 24 V 28.5 H 35.8 C 34.7 31.4 32.5 33.8 29.7 35.3 L 37.1 41 C 41.4 37 44.5 31.2 44.5 24 C 44.5 22.6 44.3 21.3 44.5 20 Z"
            fill="#4285F4"
          />
          <path
            d="M 24 44 C 30.1 44 35.2 42 39.1 38.4 L 31.7 32.7 C 29.6 34.1 27 35 24 35 C 18.2 35 13.3 31.1 11.5 25.8 L 3.8 31.8 C 7.7 39.5 15.3 44 24 44 Z"
            fill="#34A853"
          />
          <path
            d="M 11.5 25.8 C 11 24.3 10.7 22.7 10.7 21 C 10.7 19.3 11 17.7 11.5 16.2 L 3.8 10.2 C 1.4 15 0 20.4 0 26 C 0 31.6 1.4 37 3.8 41.8 L 11.5 25.8 Z"
            fill="#FBBC05"
          />
          <path
            d="M 24 7 C 27.3 7 30.3 8.1 32.7 10.4 L 39.3 3.8 C 35.2 0 30.1 -2 24 -2 C 15.3 -2 7.7 2.5 3.8 10.2 L 11.5 16.2 C 13.3 10.9 18.2 7 24 7 Z"
            transform="translate(0, 2)"
            fill="#EA4335"
          />
        </svg>
      </div>
    </div>
  );
};
