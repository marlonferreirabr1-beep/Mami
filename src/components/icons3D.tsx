import React from 'react';

interface Icon3DProps {
  className?: string;
  size?: number;
  showGleam?: boolean;
}

/**
 * 3D Official WhatsApp Badge - Shiny & High Relief Edition
 * Features rich emerald/mint volumetric lighting, 3D dome bevel,
 * animated specular sheen, and sparkling glint.
 */
export const WhatsApp3DIcon: React.FC<Icon3DProps> = ({
  className = '',
  size = 52,
  showGleam = true,
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center shrink-0 group ${className}`}
    >
      {/* Outer Luminous Ambient Glow */}
      <div className="absolute inset-0 rounded-full bg-emerald-400/35 blur-md group-hover:blur-lg group-hover:bg-emerald-400/50 transition-all duration-300 pointer-events-none scale-95 group-hover:scale-110" />

      <div className="relative w-full h-full rounded-full transition-all duration-300 transform-gpu group-hover:-translate-y-1 group-hover:scale-105 active:translate-y-0.5 active:scale-95 shadow-[0_12px_24px_-6px_rgba(18,140,126,0.5),0_6px_10px_-4px_rgba(37,211,102,0.4)]">
        <svg
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          className="overflow-visible rounded-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Rich 3D Sphere Gradient */}
            <radialGradient id="waSphere" cx="35%" cy="30%" r="68%">
              <stop offset="0%" stopColor="#86efac" />
              <stop offset="25%" stopColor="#4ade80" />
              <stop offset="60%" stopColor="#22c55e" />
              <stop offset="85%" stopColor="#15803d" />
              <stop offset="100%" stopColor="#064e3b" />
            </radialGradient>

            {/* Specular Highlight Gloss Arc */}
            <linearGradient id="waHighGloss" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="45%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Bottom Inner Reflection */}
            <radialGradient id="waBottomRim" cx="50%" cy="95%" r="50%">
              <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
            </radialGradient>

            {/* Bevel rim */}
            <linearGradient id="waBevel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#4ade80" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#064e3b" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* 3D Sphere Base with Deep Relief */}
          <circle cx="50" cy="50" r="44" fill="url(#waSphere)" />
          {/* Beveled outer ring */}
          <circle cx="50" cy="50" r="43.5" stroke="url(#waBevel)" strokeWidth="1.5" />
          {/* Bottom Rim Glow */}
          <circle cx="50" cy="50" r="44" fill="url(#waBottomRim)" />

          {/* Specular Glass Dome Arc */}
          <path
            d="M 16 38 C 22 18, 78 18, 84 38 C 72 26, 28 26, 16 38 Z"
            fill="url(#waHighGloss)"
          />

          {/* Official WhatsApp Glyph in High Contrast White with Inset Shadow */}
          <g filter="drop-shadow(0 2px 3px rgba(6,78,59,0.5))">
            {/* Speech bubble */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 50 22 C 34.54 22 22 34.54 22 50 C 22 55.45 23.56 60.55 26.27 64.91 L 23.36 75.82 C 23.11 76.77 23.99 77.65 24.94 77.4 L 36.04 74.45 C 40.23 76.99 44.97 78 50 78 C 65.46 78 78 65.46 78 50 C 78 34.54 65.46 22 50 22 Z"
              fill="#ffffff"
            />
            {/* Official Phone receiver */}
            <path
              d="M 40.5 35.8 C 39.8 34.2 38.8 34.2 37.9 34.1 C 37.1 34.1 36.3 34.1 35.5 34.1 C 34.7 34.1 33.4 34.4 32.3 35.6 C 31.2 36.8 28.1 39.7 28.1 45.6 C 28.1 51.5 32.4 57.2 33 58 C 33.6 58.8 41.3 71.2 53.4 75.8 C 63.4 79.6 65.5 77.4 67.6 77.2 C 69.7 77 74.4 74.4 75.4 71.6 C 76.4 68.8 76.4 66.4 76.1 65.9 C 75.8 65.4 75 65.1 73.8 64.5 C 72.6 63.9 66.7 61 65.6 60.6 C 64.5 60.2 63.7 60 62.9 61.2 C 62.1 62.4 59.8 65.3 59.1 66.1 C 58.4 66.9 57.7 67 56.5 66.4 C 55.3 65.8 51.4 64.5 46.8 60.4 C 43.2 57.2 40.8 53.3 40.1 52.1 C 39.4 50.9 40 50.2 40.6 49.6 C 41.2 49 41.9 48 42.5 47.3 C 43.1 46.6 43.3 46.1 43.7 45.3 C 44.1 44.5 43.9 43.8 43.6 43.2 C 43.3 42.6 41.3 37.6 40.5 35.8 Z"
              fill="#16a34a"
            />
          </g>

          {/* Glint Star Accent */}
          {showGleam && (
            <path
              d="M 30 24 L 32 30 L 38 32 L 32 34 L 30 40 L 28 34 L 22 32 L 28 30 Z"
              fill="#ffffff"
              opacity="0.85"
            />
          )}
        </svg>

        {/* Dynamic Sheen Sweep Overlay */}
        <div className="absolute inset-0 rounded-full animate-sheen pointer-events-none" />
      </div>
    </div>
  );
};

/**
 * 3D Official Instagram Badge - Shiny & High Relief Edition
 * Features vivid authentic sunset gradient, dual-layer specular glass,
 * and animated gleaming glints.
 */
export const Instagram3DIcon: React.FC<Icon3DProps> = ({
  className = '',
  size = 52,
  showGleam = true,
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center shrink-0 group ${className}`}
    >
      {/* Outer Luminous Ambient Sunset Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-400/30 via-pink-500/40 to-purple-600/40 blur-md group-hover:blur-lg transition-all duration-300 pointer-events-none scale-95 group-hover:scale-110" />

      <div className="relative w-full h-full rounded-[24px] transition-all duration-300 transform-gpu group-hover:-translate-y-1 group-hover:scale-105 active:translate-y-0.5 active:scale-95 shadow-[0_12px_26px_-6px_rgba(225,48,108,0.5),0_6px_12px_-4px_rgba(131,58,180,0.4)]">
        <svg
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          className="overflow-visible rounded-[24px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Official Instagram Linear Multi-Stop */}
            <linearGradient id="ig3DLinear" x1="10%" y1="100%" x2="90%" y2="0%">
              <stop offset="0%" stopColor="#FFDC80" />
              <stop offset="20%" stopColor="#F77737" />
              <stop offset="45%" stopColor="#F56040" />
              <stop offset="70%" stopColor="#FD1D1D" />
              <stop offset="85%" stopColor="#E1306C" />
              <stop offset="100%" stopColor="#C13584" />
            </linearGradient>

            {/* Radial corner aura for purple/blue */}
            <radialGradient id="ig3DRadial" cx="88%" cy="12%" r="85%">
              <stop offset="0%" stopColor="#833AB4" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#5851DB" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#405DE6" stopOpacity="0" />
            </radialGradient>

            {/* Bevel rim */}
            <linearGradient id="igBevel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#ffd8a8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4a044e" stopOpacity="0.8" />
            </linearGradient>

            {/* Gloss Arc */}
            <linearGradient id="igHighGloss" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* 3D Squircle Base */}
          <rect x="8" y="8" width="84" height="84" rx="24" fill="url(#ig3DLinear)" />
          <rect x="8" y="8" width="84" height="84" rx="24" fill="url(#ig3DRadial)" />
          <rect x="8.5" y="8.5" width="83" height="83" rx="23.5" stroke="url(#igBevel)" strokeWidth="1.5" />

          {/* Gloss Specular Arc */}
          <path
            d="M 14 36 C 24 16, 76 16, 86 36 C 72 24, 28 24, 14 36 Z"
            fill="url(#igHighGloss)"
          />

          {/* Official Instagram Camera Glyph with High-Relief Drop Shadow */}
          <g filter="drop-shadow(0 2.5px 3.5px rgba(74,4,78,0.5))">
            {/* Outer Rounded Box */}
            <rect
              x="24"
              y="24"
              width="52"
              height="52"
              rx="15"
              stroke="#ffffff"
              strokeWidth="5.5"
              fill="none"
            />
            {/* Camera Lens */}
            <circle
              cx="50"
              cy="50"
              r="13"
              stroke="#ffffff"
              strokeWidth="5.5"
              fill="none"
            />
            {/* Flash Indicator */}
            <circle cx="65.5" cy="34.5" r="3.5" fill="#ffffff" />
          </g>

          {/* Shiny Star Glint */}
          {showGleam && (
            <path
              d="M 28 22 L 30 27 L 35 29 L 30 31 L 28 36 L 26 31 L 21 29 L 26 27 Z"
              fill="#ffffff"
              opacity="0.9"
            />
          )}
        </svg>

        {/* Dynamic Sheen Sweep Overlay */}
        <div className="absolute inset-0 rounded-[24px] animate-sheen pointer-events-none" />
      </div>
    </div>
  );
};

/**
 * 3D Official Google Maps Badge - Shiny & High Relief Edition
 * Features porcelain enamel pedestal with chromatic rim, 3D multi-color pin,
 * and high-gloss specular shine.
 */
export const GoogleMaps3DIcon: React.FC<Icon3DProps> = ({
  className = '',
  size = 52,
  showGleam = true,
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center shrink-0 group ${className}`}
    >
      {/* Outer Luminous Sky/Red Ambient Glow */}
      <div className="absolute inset-0 rounded-full bg-sky-400/30 blur-md group-hover:blur-lg group-hover:bg-sky-400/45 transition-all duration-300 pointer-events-none scale-95 group-hover:scale-110" />

      <div className="relative w-full h-full rounded-full transition-all duration-300 transform-gpu group-hover:-translate-y-1 group-hover:scale-105 active:translate-y-0.5 active:scale-95 shadow-[0_12px_24px_-6px_rgba(2,132,199,0.4),0_6px_12px_-4px_rgba(234,67,53,0.25)]">
        <svg
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          className="overflow-visible rounded-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Porcelain 3D Badge Pedestal */}
            <radialGradient id="maps3DBg" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#f1f5f9" />
              <stop offset="90%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </radialGradient>

            {/* Chromatic Rim Bevel */}
            <linearGradient id="maps3DBevel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#bae6fd" />
              <stop offset="70%" stopColor="#fbcfe8" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            {/* Specular gloss */}
            <linearGradient id="mapsHighGloss" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* 3D Round Pedestal */}
          <circle cx="50" cy="50" r="44" fill="url(#maps3DBg)" />
          <circle cx="50" cy="50" r="43.5" stroke="url(#maps3DBevel)" strokeWidth="1.5" />

          {/* Specular Gloss Arc */}
          <path
            d="M 18 38 C 26 20, 74 20, 82 38 C 70 28, 30 28, 18 38 Z"
            fill="url(#mapsHighGloss)"
          />

          {/* Official Google Maps Multi-Color Pin with 3D Drop Shadow */}
          <g filter="drop-shadow(0 3px 4px rgba(15,23,42,0.3))" transform="translate(18, 14) scale(0.64)">
            {/* Red top loop */}
            <path
              d="M 50 12 C 34.5 12 22 24.5 22 40 C 22 49 26 56.5 32 64 L 50 88 L 68 64 C 74 56.5 78 49 78 40 C 78 24.5 65.5 12 50 12 Z"
              fill="#EA4335"
            />
            {/* Blue segment */}
            <path
              d="M 50 12 C 34.5 12 22 24.5 22 40 C 22 45 23.5 49.5 26 53.5 L 37 39 L 50 32 Z"
              fill="#4285F4"
            />
            {/* Yellow segment */}
            <path
              d="M 26 53.5 C 27.5 56.5 29.5 59.5 32 62.5 L 43 51 L 37 39 Z"
              fill="#FBBC04"
            />
            {/* Green bottom point */}
            <path
              d="M 32 62.5 L 50 86 L 68 62.5 L 57 51 L 43 51 Z"
              fill="#34A853"
            />
            {/* Center ring */}
            <circle cx="50" cy="40" r="13" fill="#ffffff" />
            <circle cx="50" cy="40" r="8" fill="#1A73E8" />
          </g>

          {/* Shiny Star Glint */}
          {showGleam && (
            <path
              d="M 28 22 L 30 27 L 35 29 L 30 31 L 28 36 L 26 31 L 21 29 L 26 27 Z"
              fill="#ffffff"
              opacity="0.95"
            />
          )}
        </svg>

        {/* Dynamic Sheen Sweep Overlay */}
        <div className="absolute inset-0 rounded-full animate-sheen pointer-events-none" />
      </div>
    </div>
  );
};

/**
 * 3D Official Google Badge - Shiny & High Relief Edition
 * Features pristine porcelain enamel pedestal, multi-colored Google "G",
 * and brilliant light reflection.
 */
export const Google3DIcon: React.FC<Icon3DProps> = ({
  className = '',
  size = 52,
  showGleam = true,
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center shrink-0 group ${className}`}
    >
      {/* Outer Luminous Rainbow Ambient Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/25 via-red-400/25 to-yellow-400/25 blur-md group-hover:blur-lg transition-all duration-300 pointer-events-none scale-95 group-hover:scale-110" />

      <div className="relative w-full h-full rounded-full transition-all duration-300 transform-gpu group-hover:-translate-y-1 group-hover:scale-105 active:translate-y-0.5 active:scale-95 shadow-[0_12px_24px_-6px_rgba(66,133,244,0.35),0_6px_12px_-4px_rgba(234,67,53,0.2)]">
        <svg
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          className="overflow-visible rounded-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="google3DBg" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="65%" stopColor="#f8fafc" />
              <stop offset="90%" stopColor="#eef2f6" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </radialGradient>

            <linearGradient id="google3DBevel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            <linearGradient id="googleHighGloss" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* 3D Porcelain Base */}
          <circle cx="50" cy="50" r="44" fill="url(#google3DBg)" />
          <circle cx="50" cy="50" r="43.5" stroke="url(#google3DBevel)" strokeWidth="1.5" />

          {/* Specular Gloss Arc */}
          <path
            d="M 18 38 C 26 20, 74 20, 82 38 C 70 28, 30 28, 18 38 Z"
            fill="url(#googleHighGloss)"
          />

          {/* Official Google 'G' with 3D Inset Shadow */}
          <g filter="drop-shadow(0 2.5px 3.5px rgba(15,23,42,0.25))" transform="translate(23, 23) scale(0.54)">
            {/* Blue segment */}
            <path
              d="M 96.5 50.8 C 96.5 47.1 96.1 43.8 95.5 40.5 L 50 40.5 L 50 59.2 L 76.2 59.2 C 75.1 65.3 71.5 70.6 66.2 74.2 L 82.2 86.6 C 91.6 77.9 96.5 65.4 96.5 50.8 Z"
              fill="#4285F4"
            />
            {/* Green segment */}
            <path
              d="M 50 98 C 63 98 73.9 93.7 82.2 86.6 L 66.2 74.2 C 61.8 77.2 56.4 79 50 79 C 37.4 79 26.7 70.5 22.8 59.1 L 6.4 71.8 C 14.7 88.2 31.2 98 50 98 Z"
              fill="#34A853"
            />
            {/* Yellow segment */}
            <path
              d="M 22.8 59.1 C 21.8 56.1 21.2 52.9 21.2 49.6 C 21.2 46.3 21.8 43.1 22.8 40.1 L 6.4 27.4 C 3 34.2 1.1 41.7 1.1 49.6 C 1.1 57.5 3 65 6.4 71.8 L 22.8 59.1 Z"
              fill="#FBBC05"
            />
            {/* Red segment */}
            <path
              d="M 50 20.2 C 57.1 20.2 63.4 22.6 68.4 27.3 L 82.6 13.1 C 73.8 5 63 0 50 0 C 31.2 0 14.7 9.8 6.4 26.2 L 22.8 38.9 C 26.7 27.5 37.4 20.2 50 20.2 Z"
              fill="#EA4335"
            />
          </g>

          {/* Shiny Star Glint */}
          {showGleam && (
            <path
              d="M 28 22 L 30 27 L 35 29 L 30 31 L 28 36 L 26 31 L 21 29 L 26 27 Z"
              fill="#ffffff"
              opacity="0.95"
            />
          )}
        </svg>

        {/* Dynamic Sheen Sweep Overlay */}
        <div className="absolute inset-0 rounded-full animate-sheen pointer-events-none" />
      </div>
    </div>
  );
};
