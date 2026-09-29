import React from 'react';
import { motion } from 'motion/react';
import {
  Brain,
  Sparkles,
  Activity,
  Puzzle,
  Mic,
  Apple,
  Users2,
  CalendarCheck,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accent: 'pink' | 'blue' | 'purple';
}

const SERVICES: ServiceItem[] = [
  {
    id: 'psicologia',
    title: 'Psicologia Clínica & Infantil',
    description: 'Avaliação psicológica, psicoterapia infantil, orientação de pais e adolescentes.',
    icon: Users2,
    accent: 'pink',
  },
  {
    id: 'neuropsicologia',
    title: 'Neuropsicologia',
    description: 'Avaliação neuropsicológica, reabilitação cognitiva, investigação de TDAH, TEA e dificuldades de aprendizagem.',
    icon: Brain,
    accent: 'purple',
  },
  {
    id: 'fisioterapia',
    title: 'Fisioterapia Pediátrica & Motora',
    description: 'Estimulação precoce, reabilitação motora, atraso no desenvolvimento motor e fisioterapia neurofuncional.',
    icon: Activity,
    accent: 'blue',
  },
  {
    id: 'terapia-ocupacional',
    title: 'Terapia Ocupacional',
    description: 'Integração sensorial, treino de atividades da vida diária (AVD), coordenação motora fina e global.',
    icon: Puzzle,
    accent: 'pink',
  },
  {
    id: 'fonoaudiologia',
    title: 'Fonoaudiologia',
    description: 'Desenvolvimento da linguagem, fala, motricidade orofacial, deglutição e comunicação alternativa.',
    icon: Mic,
    accent: 'blue',
  },
  {
    id: 'nutricao',
    title: 'Nutrição Infantil & Comportamental',
    description: 'Seletividade alimentar, introdução alimentar, reeducação alimentar e acompanhamento nutricional personalizado.',
    icon: Apple,
    accent: 'purple',
  },
  {
    id: 'aba',
    title: 'Acompanhamento Terapêutico (AT) & Terapia ABA',
    description: 'Intervenção comportamental baseada na Análise do Comportamento Aplicada (ABA) no ambiente clínico e escolar.',
    icon: Sparkles,
    accent: 'pink',
  },
];

const getStyle = (accent: ServiceItem['accent']) => {
  switch (accent) {
    case 'pink':
      return {
        iconBg: 'bg-gradient-to-tr from-pink-400 to-rose-300 text-white shadow-pink-300/40',
        cardBorder: 'hover:border-pink-300',
        glow: 'from-pink-100/35 to-transparent',
        dot: 'bg-pink-400',
      };
    case 'blue':
      return {
        iconBg: 'bg-gradient-to-tr from-sky-400 to-cyan-300 text-white shadow-sky-300/40',
        cardBorder: 'hover:border-sky-300',
        glow: 'from-sky-100/35 to-transparent',
        dot: 'bg-sky-400',
      };
    case 'purple':
      return {
        iconBg: 'bg-gradient-to-tr from-purple-400 to-indigo-300 text-white shadow-purple-300/40',
        cardBorder: 'hover:border-purple-300',
        glow: 'from-purple-100/35 to-transparent',
        dot: 'bg-purple-400',
      };
  }
};

export const ServicesSection: React.FC = () => {
  const whatsappUrl = 'https://wa.link/int8mg';

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-800 tracking-tight">
          Especialidades & Serviços
        </h3>
        <p className="text-sm font-medium text-slate-500 mt-1 max-w-md mx-auto">
          Cuidado multidisciplinar integrado para crianças e famílias
        </p>
      </div>

      {/* Services Grid / Stack */}
      <div className="w-full flex flex-col gap-3.5">
        {SERVICES.map((srv, idx) => {
          const style = getStyle(srv.accent);
          const bookingUrl = `${whatsappUrl}?text=${encodeURIComponent(
            `Olá! Gostaria de agendar uma avaliação para ${srv.title} na Clínica Mami.`
          )}`;

          return (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className={`group relative bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 ${style.cardBorder} flex items-start gap-4 overflow-hidden transform-gpu hover:-translate-y-0.5`}
            >
              {/* Soft ambient glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${style.glow} pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* 3D Icon Avatar */}
              <div
                className={`w-12 h-12 rounded-2xl ${style.iconBg} flex items-center justify-center shrink-0 shadow-md border border-white/60 group-hover:scale-105 transition-transform duration-300 relative z-10`}
              >
                <srv.icon className="w-6 h-6 stroke-[2.2]" />
              </div>

              {/* Text Info */}
              <div className="flex-1 min-w-0 relative z-10">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-base font-bold text-slate-800 tracking-tight">
                    {srv.title}
                  </h4>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Agendar esta especialidade"
                    className="shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                  >
                    <CalendarCheck className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-light mt-1 leading-relaxed">
                  {srv.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Evaluation CTA */}
      <div className="mt-8 text-center w-full">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-pink-500/20 hover:shadow-lg active:scale-95 transition-all duration-300"
        >
          <div className="absolute inset-0 animate-sheen pointer-events-none opacity-40" />
          <CalendarCheck className="w-4 h-4" />
          <span>AGENDAR AVALIAÇÃO MULTIDISCIPLINAR</span>
        </a>
      </div>
    </div>
  );
};
