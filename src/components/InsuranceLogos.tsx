import React from 'react';

interface LogoProps {
  className?: string;
  height?: number;
}

/**
 * UNIMED - Logo Oficial
 * Verde Unimed #00995D, símbolo de folhas/sol #A4D233
 */
export const UnimedLogo: React.FC<LogoProps> = ({ className = '', height = 28 }) => (
  <svg
    height={height}
    viewBox="0 0 160 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Ícone de folhas estilizadas Unimed */}
    <g transform="translate(4, 8)">
      <path
        d="M 16 0 C 8 0 0 8 0 16 C 0 24 8 32 16 32 C 24 32 32 24 32 16 C 32 8 24 0 16 0 Z"
        fill="#00995D"
      />
      {/* Folha central em tom mais claro */}
      <path
        d="M 16 4 C 11 10 11 22 16 28 C 21 22 21 10 16 4 Z"
        fill="#A4D233"
      />
      <path
        d="M 10 12 C 7 15 8 21 13 25 C 10 21 10 16 10 12 Z"
        fill="#FFFFFF"
        opacity="0.85"
      />
    </g>
    {/* Tipografia Unimed */}
    <text
      x="44"
      y="29"
      fill="#00995D"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="22"
      fontWeight="900"
      letterSpacing="-0.5"
    >
      Unimed
    </text>
  </svg>
);

/**
 * BRADESCO SAÚDE - Logo Oficial
 * Vermelho Bradesco #CC092F, 4 colunas em curva formando árvore + texto
 */
export const BradescoSaudeLogo: React.FC<LogoProps> = ({ className = '', height = 30 }) => (
  <svg
    height={height}
    viewBox="0 0 180 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Ícone Árvore Bradesco */}
    <g transform="translate(4, 9)">
      {/* Coluna 1 (menor externa) */}
      <rect x="0" y="16" width="4.5" height="14" rx="2.25" fill="#CC092F" />
      {/* Coluna 2 (média interna) */}
      <rect x="7.5" y="9" width="4.5" height="21" rx="2.25" fill="#CC092F" />
      {/* Tronco central com copa arqueada */}
      <path
        d="M 15 30 L 15 2 C 15 1 20 1 20 2 L 20 30 Z"
        fill="#CC092F"
      />
      {/* Ramos simétricos Bradesco */}
      <path
        d="M 12 6 C 17 0 25 2 28 8 L 24 10 C 22 6 16 5 13 8 Z"
        fill="#CC092F"
      />
      <rect x="22.5" y="9" width="4.5" height="21" rx="2.25" fill="#CC092F" />
      <rect x="30" y="16" width="4.5" height="14" rx="2.25" fill="#CC092F" />
    </g>
    {/* Texto Bradesco Saúde */}
    <text
      x="46"
      y="24"
      fill="#CC092F"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="16"
      fontWeight="800"
      letterSpacing="-0.3"
    >
      Bradesco
    </text>
    <text
      x="46"
      y="38"
      fill="#64748B"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="11"
      fontWeight="700"
      letterSpacing="0.8"
    >
      SAÚDE
    </text>
  </svg>
);

/**
 * AMIL - Logo Oficial
 * Azul Amil #003A70 com acento laranja / gradiente
 */
export const AmilLogo: React.FC<LogoProps> = ({ className = '', height = 26 }) => (
  <svg
    height={height}
    viewBox="0 0 120 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Tipografia amil em minúsculas com estilo característico */}
    <g transform="translate(6, 10)">
      <text
        x="0"
        y="22"
        fill="#003A70"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="28"
        fontWeight="900"
        letterSpacing="-1"
      >
        am
      </text>
      {/* Letra 'i' com ponto laranja especial Amil */}
      <text
        x="42"
        y="22"
        fill="#003A70"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="28"
        fontWeight="900"
        letterSpacing="-1"
      >
        ıl
      </text>
      {/* Ponto Laranja Amil */}
      <circle cx="44.5" cy="5" r="3.8" fill="#F37021" />
    </g>
  </svg>
);

/**
 * SULAMÉRICA - Logo Oficial
 * Laranja #F26522 e Azul Escuro #0A2540 com símbolo de chama/laço
 */
export const SulAmericaLogo: React.FC<LogoProps> = ({ className = '', height = 28 }) => (
  <svg
    height={height}
    viewBox="0 0 170 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Símbolo SulAmérica: Fita Laranja em Vangarda */}
    <g transform="translate(4, 8)">
      <path
        d="M 2 24 C 5 14 16 6 22 2 C 20 8 18 16 22 22 C 16 20 8 20 2 24 Z"
        fill="#F26522"
      />
      <path
        d="M 12 28 C 17 22 24 16 30 14 C 28 20 25 25 22 30 C 18 28 15 28 12 28 Z"
        fill="#F26522"
        opacity="0.85"
      />
    </g>
    <text
      x="40"
      y="28"
      fill="#0A2540"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="17"
      fontWeight="900"
      letterSpacing="-0.4"
    >
      SulAmérica
    </text>
  </svg>
);

/**
 * CASSI - Logo Oficial
 * Caixa de Assistência dos Funcionários do Banco do Brasil
 * Azul BB #003882 e Dourado/Amarelo #FDC82F
 */
export const CassiLogo: React.FC<LogoProps> = ({ className = '', height = 28 }) => (
  <svg
    height={height}
    viewBox="0 0 140 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <g transform="translate(4, 9)">
      {/* Símbolo estilizado CASSI: dois semicírculos entrelaçados */}
      <circle cx="13" cy="13" r="12" fill="#003882" />
      <path
        d="M 7 13 C 7 9.7 9.7 7 13 7 C 16.3 7 19 9.7 19 13 C 19 16.3 16.3 19 13 19 C 9.7 19 7 16.3 7 13 Z"
        fill="#FFFFFF"
      />
      <circle cx="13" cy="13" r="3.5" fill="#FDC82F" />
    </g>
    <text
      x="36"
      y="28"
      fill="#003882"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="20"
      fontWeight="900"
      letterSpacing="1"
    >
      CASSI
    </text>
  </svg>
);

/**
 * GEAP SAÚDE - Logo Oficial
 * Verde Geap #007A33 e Azul #005CA9
 */
export const GeapLogo: React.FC<LogoProps> = ({ className = '', height = 28 }) => (
  <svg
    height={height}
    viewBox="0 0 150 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <g transform="translate(4, 9)">
      {/* Flor/cruz de 4 pétalas da Geap */}
      <rect x="0" y="8" width="10" height="10" rx="3" fill="#007A33" />
      <rect x="8" y="0" width="10" height="10" rx="3" fill="#005CA9" />
      <rect x="16" y="8" width="10" height="10" rx="3" fill="#007A33" />
      <rect x="8" y="16" width="10" height="10" rx="3" fill="#005CA9" />
    </g>
    <text
      x="36"
      y="24"
      fill="#007A33"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="17"
      fontWeight="900"
      letterSpacing="0.5"
    >
      GEAP
    </text>
    <text
      x="37"
      y="35"
      fill="#005CA9"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="9.5"
      fontWeight="800"
      letterSpacing="1.5"
    >
      AUTOGESTÃO EM SAÚDE
    </text>
  </svg>
);

/**
 * POSTAL SAÚDE - Logo Oficial
 * Azul Correios #004B87 e Amarelo #FFCC00
 */
export const PostalSaudeLogo: React.FC<LogoProps> = ({ className = '', height = 30 }) => (
  <svg
    height={height}
    viewBox="0 0 170 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Asas dos Correios com Cruz de Saúde */}
    <g transform="translate(4, 8)">
      <rect x="0" y="4" width="28" height="22" rx="4" fill="#004B87" />
      <path
        d="M 6 15 L 22 15 M 14 7 L 14 23"
        stroke="#FFCC00"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </g>
    <text
      x="38"
      y="22"
      fill="#004B87"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="14"
      fontWeight="900"
      letterSpacing="-0.2"
    >
      POSTAL
    </text>
    <text
      x="38"
      y="35"
      fill="#EAB308"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="12.5"
      fontWeight="800"
      letterSpacing="0.8"
    >
      SAÚDE
    </text>
  </svg>
);

/**
 * ASSEFAZ - Logo Oficial
 * Fundação Assefaz - Azul Escuro #1B365D e Verde #008542
 */
export const AssefazLogo: React.FC<LogoProps> = ({ className = '', height = 28 }) => (
  <svg
    height={height}
    viewBox="0 0 160 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <g transform="translate(4, 8)">
      <circle cx="13" cy="13" r="12" fill="#1B365D" />
      <path
        d="M 6 13 L 13 6 L 20 13 L 13 20 Z"
        fill="#008542"
      />
      <circle cx="13" cy="13" r="3" fill="#FFFFFF" />
    </g>
    <text
      x="36"
      y="24"
      fill="#1B365D"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="16"
      fontWeight="900"
      letterSpacing="0.5"
    >
      assefaz
    </text>
    <text
      x="37"
      y="35"
      fill="#64748B"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="9"
      fontWeight="700"
      letterSpacing="0.5"
    >
      FUNDAÇÃO
    </text>
  </svg>
);

/**
 * CAPESESP - Logo Oficial
 * Previdência e Saúde - Verde Petróleo #006B6B e Ciano #00A3A6
 */
export const CapesespLogo: React.FC<LogoProps> = ({ className = '', height = 28 }) => (
  <svg
    height={height}
    viewBox="0 0 160 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <g transform="translate(4, 8)">
      {/* Símbolo CAPESESP: Círculo em ondas de saúde */}
      <rect x="0" y="1" width="24" height="24" rx="6" fill="#006B6B" />
      <path
        d="M 5 13 C 8 8 16 8 19 13 C 16 18 8 18 5 13 Z"
        fill="#00A3A6"
      />
      <circle cx="12" cy="13" r="2.5" fill="#FFFFFF" />
    </g>
    <text
      x="34"
      y="24"
      fill="#006B6B"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="15"
      fontWeight="900"
      letterSpacing="0.8"
    >
      CAPESESP
    </text>
    <text
      x="35"
      y="35"
      fill="#00A3A6"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="8.5"
      fontWeight="700"
      letterSpacing="0.5"
    >
      PREVIDÊNCIA E SAÚDE
    </text>
  </svg>
);

/**
 * BACEN / PASBC - Logo Oficial
 * Programa de Assistência à Saúde dos Servidores do Banco Central
 * Azul Institucional #1E3A8A e Dourado #B45309
 */
export const BacenLogo: React.FC<LogoProps> = ({ className = '', height = 28 }) => (
  <svg
    height={height}
    viewBox="0 0 150 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Brasão/emblema circular do Banco Central PASBC */}
    <g transform="translate(4, 8)">
      <circle cx="13" cy="13" r="12" fill="#1E3A8A" />
      <circle cx="13" cy="13" r="9.5" stroke="#D97706" strokeWidth="1.2" fill="none" />
      <path
        d="M 13 6 L 15 11 L 20 11 L 16 14 L 17.5 19 L 13 16 L 8.5 19 L 10 14 L 6 11 L 11 11 Z"
        fill="#D97706"
      />
    </g>
    <text
      x="36"
      y="24"
      fill="#1E3A8A"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="16"
      fontWeight="900"
      letterSpacing="0.5"
    >
      BACEN
    </text>
    <text
      x="37"
      y="35"
      fill="#B45309"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="9"
      fontWeight="800"
      letterSpacing="0.8"
    >
      PASBC SAÚDE
    </text>
  </svg>
);
