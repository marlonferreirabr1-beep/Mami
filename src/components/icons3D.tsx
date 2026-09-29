import React from 'react';

interface OfficialIconProps {
  className?: string;
  size?: number;
  showGleam?: boolean;
}

/**
 * LOGO OFICIAL DO WHATSAPP (Meta)
 * O formato e cores oficiais com o balão verde #25D366 e o monofone branco autêntico.
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
      {/* Glow ambiente oficial verde WhatsApp */}
      <div className="absolute inset-0 rounded-full bg-[#25D366]/30 blur-md group-hover:blur-lg group-hover:bg-[#25D366]/45 transition-all duration-300 pointer-events-none scale-90 group-hover:scale-105" />

      <div className="relative w-full h-full transition-all duration-300 transform-gpu group-hover:-translate-y-0.5 group-hover:scale-105 active:scale-95 shadow-[0_8px_20px_-4px_rgba(37,211,102,0.45)] rounded-full">
        <svg
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
          className="overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Fundo oficial Verde WhatsApp */}
          <circle cx="24" cy="24" r="23" fill="#25D366" />
          
          {/* Sombra sutil de profundidade */}
          <circle cx="24" cy="24" r="22.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

          {/* Glifo Oficial WhatsApp (Monofone e Balão) */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 24 9 C 15.716 9 9 15.716 9 24 C 9 26.88 9.816 29.58 11.232 31.872 L 9.72 37.404 C 9.54 38.064 10.14 38.664 10.8 38.484 L 16.332 36.972 C 18.624 38.388 21.324 39.204 24.204 39.204 C 32.488 39.204 39.204 32.488 39.204 24.204 C 39.204 15.92 32.488 9 24.204 9 Z"
            fill="#25D366"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 24 11.5 C 17.096 11.5 11.5 17.096 11.5 24 C 11.5 26.494 12.228 28.824 13.486 30.796 L 12.316 35.084 L 16.694 33.938 C 18.618 35.128 20.884 35.812 23.312 35.812 C 30.216 35.812 35.812 30.216 35.812 23.312 C 35.812 16.408 30.216 11.5 24 11.5 Z"
            fill="#25D366"
          />
          {/* Ícone vetor oficial branco do WhatsApp */}
          <path
            d="M 19.344 16.32 C 18.888 15.312 18.408 15.288 17.976 15.264 C 17.616 15.24 17.208 15.24 16.8 15.24 C 16.392 15.24 15.72 15.384 15.144 16.008 C 14.568 16.632 12.96 18.144 12.96 21.216 C 12.96 24.288 15.216 27.24 15.528 27.648 C 15.84 28.056 19.824 34.512 26.112 36.936 C 31.344 38.952 32.4 37.824 33.48 37.728 C 34.56 37.632 36.984 36.312 37.488 34.872 C 37.992 33.432 37.992 32.184 37.848 31.92 C 37.704 31.656 37.296 31.512 36.696 31.224 C 36.096 30.936 33.12 29.472 32.568 29.28 C 32.016 29.088 31.608 28.992 31.2 29.592 C 30.792 30.192 29.64 31.656 29.28 32.064 C 28.92 32.472 28.56 32.52 27.96 32.232 C 27.36 31.944 25.416 31.32 23.112 29.28 C 21.312 27.672 20.088 25.704 19.728 25.104 C 19.368 24.504 19.68 24.168 19.992 23.88 C 20.256 23.616 20.616 23.136 20.904 22.776 C 21.192 22.416 21.312 22.176 21.504 21.768 C 21.696 21.36 21.6 21.024 21.456 20.736 C 21.312 20.448 20.208 17.616 19.704 16.488 L 19.344 16.32 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </div>
  );
};

/**
 * LOGO OFICIAL DO INSTAGRAM (Meta)
 * O gradiente oficial autêntico do pôr do sol e o glifo de câmera com cantos arredondados.
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
      {/* Glow ambiente oficial Instagram */}
      <div className="absolute inset-0 rounded-[14px] bg-gradient-to-tr from-[#FD5949]/30 via-[#D6249F]/35 to-[#285AEB]/30 blur-md group-hover:blur-lg transition-all duration-300 pointer-events-none scale-90 group-hover:scale-105" />

      <div className="relative w-full h-full rounded-[14px] transition-all duration-300 transform-gpu group-hover:-translate-y-0.5 group-hover:scale-105 active:scale-95 shadow-[0_8px_20px_-4px_rgba(225,48,108,0.45)]">
        <svg
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
          className="overflow-visible rounded-[14px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradiente Oficial Instagram do Brand Resources */}
            <radialGradient id="instaOfficialGrad1" cx="20%" cy="115%" r="135%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="5%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
          </defs>

          {/* Base oficial Squircle com Gradiente do Instagram */}
          <rect width="48" height="48" rx="13" fill="url(#instaOfficialGrad1)" />
          <rect x="0.5" y="0.5" width="47" height="47" rx="12.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

          {/* Glifo Oficial da Câmera Instagram em Branco Puro */}
          <rect
            x="11"
            y="11"
            width="26"
            height="26"
            rx="7.5"
            stroke="#FFFFFF"
            strokeWidth="3"
            fill="none"
          />
          <circle
            cx="24"
            cy="24"
            r="6.5"
            stroke="#FFFFFF"
            strokeWidth="3"
            fill="none"
          />
          <circle cx="31.8" cy="16.2" r="1.8" fill="#FFFFFF" />
        </svg>
      </div>
    </div>
  );
};

/**
 * LOGO OFICIAL DO GOOGLE MAPS
 * O icônico Pin de 4 cores oficial da Google (Vermelho, Amarelo, Verde, Azul).
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
      {/* Glow ambiente Google Maps */}
      <div className="absolute inset-0 rounded-full bg-[#4285F4]/25 blur-md group-hover:blur-lg transition-all duration-300 pointer-events-none scale-90 group-hover:scale-105" />

      <div className="relative w-full h-full rounded-2xl bg-white transition-all duration-300 transform-gpu group-hover:-translate-y-0.5 group-hover:scale-105 active:scale-95 shadow-[0_8px_20px_-4px_rgba(66,133,244,0.35)] border border-slate-100 flex items-center justify-center p-1.5">
        <svg
          viewBox="0 0 92 136"
          width="70%"
          height="70%"
          className="overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pin Oficial Google Maps com as 4 Cores Originais */}
          {/* Arco Superior Vermelho */}
          <path
            d="M 46 0 C 20.6 0 0 20.6 0 46 C 0 57.8 4.6 68.6 12.1 76.8 L 30 59 C 27.5 55.2 26 50.8 26 46 C 26 35 35 26 46 26 C 50.8 26 55.2 27.5 59 30 L 76.8 12.1 C 68.6 4.6 57.8 0 46 0 Z"
            fill="#EA4335"
          />
          {/* Segmento Azul Esquerdo */}
          <path
            d="M 0 46 C 0 57.8 4.6 68.6 12.1 76.8 L 30 59 C 27.5 55.2 26 50.8 26 46 C 26 45.4 26 44.8 26.1 44.2 L 8.3 26.4 C 3 32.1 0 38.7 0 46 Z"
            fill="#4285F4"
          />
          {/* Segmento Amarelo Ombro Direito */}
          <path
            d="M 46 26 C 50.8 26 55.2 27.5 59 30 L 76.8 12.1 C 71.1 6.8 64.5 3.8 57.2 2.2 L 44.2 26.1 C 44.8 26 45.4 26 46 26 Z"
            fill="#FBBC04"
          />
          {/* Base e Ponta Inferior Verde */}
          <path
            d="M 12.1 76.8 L 46 136 L 79.9 76.8 C 87.4 68.6 92 57.8 92 46 C 92 42.6 91.5 39.3 90.5 36.2 L 59 67.7 C 56.6 70.1 53.4 71.5 50 71.8 L 46 72 C 40.5 72 35.6 69.8 32 66.2 L 12.1 76.8 Z"
            fill="#34A853"
          />
          {/* Centro do Pin Círculo com Centro Azul */}
          <circle cx="46" cy="46" r="20" fill="#ffffff" />
          <circle cx="46" cy="46" r="14" fill="#1A73E8" />
        </svg>
      </div>
    </div>
  );
};

/**
 * LOGO OFICIAL DO GOOGLE (G Multicor)
 * O icônico 'G' tetracolor oficial da Google (Azul, Vermelho, Amarelo, Verde).
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
      {/* Glow ambiente oficial Google */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#4285F4]/20 via-[#EA4335]/20 to-[#34A853]/20 blur-md group-hover:blur-lg transition-all duration-300 pointer-events-none scale-90 group-hover:scale-105" />

      <div className="relative w-full h-full rounded-2xl bg-white transition-all duration-300 transform-gpu group-hover:-translate-y-0.5 group-hover:scale-105 active:scale-95 shadow-[0_8px_20px_-4px_rgba(66,133,244,0.35)] border border-slate-100 flex items-center justify-center p-2">
        <svg
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
          className="overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Azul Oficial Google */}
          <path
            d="M 44.5 20 H 24 V 28.5 H 35.8 C 34.7 31.4 32.5 33.8 29.7 35.3 L 37.1 41 C 41.4 37 44.5 31.2 44.5 24 C 44.5 22.6 44.3 21.3 44.5 20 Z"
            fill="#4285F4"
          />
          {/* Verde Oficial Google */}
          <path
            d="M 24 44 C 30.1 44 35.2 42 39.1 38.4 L 31.7 32.7 C 29.6 34.1 27 35 24 35 C 18.2 35 13.3 31.1 11.5 25.8 L 3.8 31.8 C 7.7 39.5 15.3 44 24 44 Z"
            fill="#34A853"
          />
          {/* Amarelo Oficial Google */}
          <path
            d="M 11.5 25.8 C 11 24.3 10.7 22.7 10.7 21 C 10.7 19.3 11 17.7 11.5 16.2 L 3.8 10.2 C 1.4 15 0 20.4 0 26 C 0 31.6 1.4 37 3.8 41.8 L 11.5 25.8 Z"
            fill="#FBBC05"
          />
          {/* Vermelho Oficial Google */}
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
