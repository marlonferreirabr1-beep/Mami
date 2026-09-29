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
  ArrowRight,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accent: 'rose' | 'gold' | 'rosegold';
}

const SERVICES: ServiceItem[] = [
  {
    id: 'psicologia',
    number: '01',
    title: 'Psicologia Clínica & Infantil',
    description: 'Avaliação psicológica, psicoterapia infantil, orientação de pais e adolescentes.',
    icon: Users2,
    accent: 'rose',
  },
  {
    id: 'neuropsicologia',
    number: '02',
    title: 'Neuropsicologia',
    description: 'Avaliação neuropsicológica, reabilitação cognitiva, investigação de TDAH, TEA e dificuldades de aprendizagem.',
    icon: Brain,
    accent: 'gold',
  },
  {
    id: 'fisioterapia',
    number: '03',
    title: 'Fisioterapia Pediátrica & Motora',
    description: 'Estimulação precoce, reabilitação motora, atraso no desenvolvimento motor e fisioterapia neurofuncional.',
    icon: Activity,
    accent: 'rosegold',
  },
  {
    id: 'terapia-ocupacional',
    number: '04',
    title: 'Terapia Ocupacional',
    description: 'Integração sensorial, treino de atividades da vida diária (AVD), coordenação motora fina e global.',
    icon: Puzzle,
    accent: 'rose',
  },
  {
    id: 'fonoaudiologia',
    number: '05',
    title: 'Fonoaudiologia',
    description: 'Desenvolvimento da linguagem, fala, motricidade orofacial, deglutição e comunicação alternativa.',
    icon: Mic,
    accent: 'gold',
  },
  {
    id: 'nutricao',
    number: '06',
    title: 'Nutrição Infantil & Comportamental',
    description: 'Seletividade alimentar, introdução alimentar, reeducação alimentar e acompanhamento nutricional personalizado.',
    icon: Apple,
    accent: 'rosegold',
  },
  {
    id: 'aba',
    number: '07',
    title: 'Acompanhamento Terapêutico (AT) & Terapia ABA',
    description: 'Intervenção comportamental baseada na Análise do Comportamento Aplicada (ABA) no ambiente clínico e escolar.',
    icon: Sparkles,
    accent: 'rose',
  },
];

const getStyle = (accent: ServiceItem['accent']) => {
  switch (accent) {
    case 'rose':
      return {
        iconBg: 'bg-gradient-to-tr from-rose-500 to-pink-400 text-white shadow-rose-300/40',
        cardBorder: 'hover:border-rose-300',
        glow: 'from-rose-100/30 to-transparent',
        tagText: 'text-rose-700 bg-rose-50 border-rose-100',
        numberColor: 'text-rose-300',
      };
    case 'gold':
      return {
        iconBg: 'bg-gradient-to-tr from-amber-500 to-yellow-400 text-white shadow-amber-300/40',
        cardBorder: 'hover:border-amber-300',
        glow: 'from-amber-100/30 to-transparent',
        tagText: 'text-amber-800 bg-amber-50 border-amber-100',
        numberColor: 'text-amber-400',
      };
    case 'rosegold':
      return {
        iconBg: 'bg-gradient-to-tr from-rose-400 to-amber-400 text-white shadow-amber-300/40',
        cardBorder: 'hover:border-amber-300',
        glow: 'from-rose-50/40 to-amber-50/20',
        tagText: 'text-amber-900 bg-rose-50/60 border-amber-200',
        numberColor: 'text-amber-400/80',
      };
  }
};

export const ServicesSection: React.FC = () => {
  const whatsappUrl = 'https://wa.link/int8mg';

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Editorial Header */}
      <div className="text-center mb-9">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-50 via-amber-50 to-rose-50 border border-amber-200/80 shadow-2xs text-xs font-semibold text-amber-950 mb-3.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span className="tracking-wide">Atuação Especializada</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-900 tracking-tight">
          Especialidades & Serviços
        </h3>
        <p className="text-sm font-medium text-slate-500 mt-1.5 max-w-md mx-auto leading-relaxed">
          Cuidado multidisciplinar integrado para o pleno desenvolvimento de crianças e famílias
        </p>
      </div>

      {/* Services Grid with Editorial Gold/Rose Accents */}
      <div className="w-full flex flex-col gap-3.5">
        {SERVICES.map((srv, idx) => {
          const style = getStyle(srv.accent);
          const bookingUrl = `${whatsappUrl}?text=${encodeURIComponent(
            `Olá! Gostaria de agendar uma avaliação para ${srv.title} na Clínica Mami.`
          )}`;

          return (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className={`group relative bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_4px_16px_rgba(217,119,6,0.03)] hover:shadow-[0_12px_28px_rgba(217,119,6,0.08)] transition-all duration-300 ${style.cardBorder} flex items-start gap-4 overflow-hidden transform-gpu hover:-translate-y-0.5`}
            >
              {/* Subtle Ambient Glow */}
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
                  <div className="flex items-center gap-2">
                    <span className={`font-mono text-xs font-bold ${style.numberColor}`}>
                      {srv.number}
                    </span>
                    <h4 className="text-base font-bold text-slate-800 tracking-tight">
                      {srv.title}
                    </h4>
                  </div>

                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Agendar esta especialidade"
                    className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                  >
                    <span className="hidden sm:inline">Agendar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-light mt-1.5 leading-relaxed">
                  {srv.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Master CTA */}
      <div className="mt-8 text-center w-full">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white font-bold text-xs sm:text-sm tracking-wider shadow-md shadow-rose-500/25 hover:shadow-lg active:scale-95 transition-all duration-300 uppercase border-t border-amber-200/40"
        >
          <div className="absolute inset-0 animate-sheen pointer-events-none opacity-40" />
          <CalendarCheck className="w-4 h-4 text-amber-100" />
          <span>AGENDAR AVALIAÇÃO MULTIDISCIPLINAR</span>
        </a>
      </div>
    </div>
  );
};
