import React from 'react';

interface OfficialIconProps {
  className?: string;
  size?: number;
  showGleam?: boolean;
}

/**
 * LOGO OFICIAL E REAL DO WHATSAPP (Meta)
 * O formato autêntico com a bolha de diálogo verde #25D366, contorno branco e o monofone oficial.
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
      {/* Glow suave ambiente verde oficial */}
      <div className="absolute inset-0 rounded-full bg-[#25D366]/30 blur-md group-hover:blur-lg group-hover:bg-[#25D366]/50 transition-all duration-300 pointer-events-none scale-90 group-hover:scale-110" />

      {/* Vetor Oficial e Real da Marca WhatsApp */}
      <div className="relative w-full h-full transition-all duration-300 transform-gpu group-hover:-translate-y-0.5 group-hover:scale-105 active:scale-95 drop-shadow-[0_6px_14px_rgba(37,211,102,0.4)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 175.216 175.552"
          width="100%"
          height="100%"
          className="overflow-visible select-none"
        >
          <defs>
            <linearGradient id="waRealGreen" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#25D366" />
              <stop offset="100%" stopColor="#20BA5C" />
            </linearGradient>
          </defs>

          {/* Sombra sutil de relevo */}
          <path
            fill="#000000"
            opacity="0.12"
            d="m54.532 140.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 27.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 125.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
          />

          {/* Borda branca externa oficial da bolha */}
          <path
            fill="#FFFFFF"
            d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
          />

          {/* Preenchimento verde autêntico #25D366 com gradiente oficial */}
          <path
            fill="url(#waRealGreen)"
            d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
          />

          {/* Glifo oficial do monofone do WhatsApp em branco puro */}
          <path
            fill="#FFFFFF"
            fillRule="evenodd"
            d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
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
 * LOGO OFICIAL 3D DO GOOGLE MAPS
 * Pin esculpido oficial com reflexo de porcelana e aura de profundidade.
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
      <div className="relative w-full h-full rounded-2xl bg-white/95 backdrop-blur-md transition-all duration-300 transform-gpu group-hover:-translate-y-1 group-hover:scale-110 active:scale-95 shadow-[0_12px_24px_-4px_rgba(66,133,244,0.35),0_4px_10px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.06)] border border-white flex items-center justify-center p-2.5 overflow-hidden">
        {/* Animated Sheen Sweep */}
        <div className="absolute inset-0 animate-sheen pointer-events-none z-20 opacity-40" />

        {/* Specular Highlight */}
        <div className="absolute -top-1 left-0 right-0 h-[45%] bg-gradient-to-b from-white/80 via-white/20 to-transparent pointer-events-none z-10" />

        {/* Vetor Oficial Exato do Google Maps */}
        <svg
          viewBox="0 0 92.3 132.3"
          width="72%"
          height="72%"
          className="overflow-visible select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#1a73e8" d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z" />
          <path fill="#ea4335" d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-33.3-21.8-18.3z" />
          <path fill="#4285f4" d="M46.2 28.5c9.8 0 17.7 7.9 17.7 17.7 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.6 27.5-32.7-5.6-10.8-15.3-19-27-22.7L32.6 34.8c3.3-3.8 8.1-6.3 13.6-6.3" />
          <path fill="#fbbc04" d="M46.2 63.8c-9.8 0-17.7-7.9-17.7-17.7 0-4.3 1.5-8.3 4.1-11.3l-28 33.3c4.8 10.6 12.8 19.2 21 29.9l34.1-40.5c-3.3 3.9-8.1 6.3-13.5 6.3" />
          <path fill="#34a853" d="M59.1 109.2c15.4-24.1 33.3-35 33.3-63 0-7.7-1.9-14.9-5.2-21.3L25.6 98c2.6 3.4 5.3 7.3 7.9 11.3 9.4 14.5 6.8 23.1 12.8 23.1s3.4-8.7 12.8-23.2" />
        </svg>
      </div>
    </div>
  );
};

/**
 * LOGO OFICIAL E REAL DO GOOGLE (G Multicor Autêntico)
 * Vetor geométrico oficial do Google, sem cortes, sem falhas e com proporções perfeitas.
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
      <div className="relative w-full h-full rounded-2xl bg-white/95 backdrop-blur-md transition-all duration-300 transform-gpu group-hover:-translate-y-1 group-hover:scale-110 active:scale-95 shadow-[0_12px_24px_-4px_rgba(66,133,244,0.35),0_4px_10px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.06)] border border-white flex items-center justify-center p-2.5 overflow-hidden">
        {/* Animated Sheen Sweep */}
        <div className="absolute inset-0 animate-sheen pointer-events-none z-20 opacity-40" />

        {/* Specular Highlight */}
        <div className="absolute -top-1 left-0 right-0 h-[45%] bg-gradient-to-b from-white/80 via-white/20 to-transparent pointer-events-none z-10" />

        {/* Logo Oficial e Real do Google 'G' (Vetor Oficial Meta/Alphabet) */}
        <svg
          viewBox="0 0 24 24"
          width="76%"
          height="76%"
          className="overflow-visible select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Azul Oficial Google */}
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          {/* Verde Oficial Google */}
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          {/* Amarelo Oficial Google */}
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          {/* Vermelho Oficial Google */}
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
      </div>
    </div>
  );
};
