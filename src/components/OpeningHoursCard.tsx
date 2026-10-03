import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ChevronDown, ChevronUp, Calendar, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface DaySchedule {
  dayName: string;
  shortName: string;
  dayIndex: number; // 0 = Sun, 1 = Mon, ..., 6 = Sat
  hours: string;
  isOpenDay: boolean;
}

const WEEKLY_SCHEDULE: DaySchedule[] = [
  { dayName: 'Segunda-feira', shortName: 'Seg', dayIndex: 1, hours: '07:00 – 20:00', isOpenDay: true },
  { dayName: 'Terça-feira', shortName: 'Ter', dayIndex: 2, hours: '07:00 – 20:00', isOpenDay: true },
  { dayName: 'Quarta-feira', shortName: 'Qua', dayIndex: 3, hours: '07:00 – 20:00', isOpenDay: true },
  { dayName: 'Quinta-feira', shortName: 'Qui', dayIndex: 4, hours: '07:00 – 20:00', isOpenDay: true },
  { dayName: 'Sexta-feira', shortName: 'Sex', dayIndex: 5, hours: '07:00 – 20:00', isOpenDay: true },
  { dayName: 'Sábado', shortName: 'Sáb', dayIndex: 6, hours: '08:00 – 12:00', isOpenDay: true },
  { dayName: 'Domingo', shortName: 'Dom', dayIndex: 0, hours: 'Fechado', isOpenDay: false },
];

/**
 * Retorna o status em tempo real com base no fuso horário de Maceió/Brasília (UTC-3)
 */
export function getClinicCurrentStatus(): {
  isOpen: boolean;
  statusText: string;
  subText: string;
  currentDayIndex: number;
} {
  // Obter hora atual no fuso horário de Maceió/Brasil (America/Maceio)
  const now = new Date();
  const maceioString = now.toLocaleString('en-US', { timeZone: 'America/Maceio' });
  const maceioDate = new Date(maceioString);

  const dayOfWeek = maceioDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hours = maceioDate.getHours();
  const minutes = maceioDate.getMinutes();
  const currentTime = hours * 60 + minutes;

  // Dias de semana (Segunda a Sexta): 07:00 às 20:00
  const openTimeWeekday = 7 * 60; // 07:00
  const closeTimeWeekday = 20 * 60; // 20:00

  // Sábado: 08:00 às 12:00
  const openTimeSaturday = 8 * 60; // 08:00
  const closeTimeSaturday = 12 * 60; // 12:00

  const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
  const isSaturday = dayOfWeek === 6;

  // 1. Verificação se está aberto agora em dia de semana
  if (isWeekday && currentTime >= openTimeWeekday && currentTime < closeTimeWeekday) {
    return {
      isOpen: true,
      statusText: 'Aberto agora',
      subText: 'Fecha hoje às 20:00',
      currentDayIndex: dayOfWeek,
    };
  }

  // 2. Verificação se está aberto agora no sábado
  if (isSaturday && currentTime >= openTimeSaturday && currentTime < closeTimeSaturday) {
    return {
      isOpen: true,
      statusText: 'Aberto agora',
      subText: 'Fecha hoje às 12:00',
      currentDayIndex: dayOfWeek,
    };
  }

  // 3. Se estiver fechado no momento, informar com exatidão quando abre
  let subText = 'Abre seg. às 07:00';

  if (isWeekday) {
    if (currentTime < openTimeWeekday) {
      subText = 'Abre hoje às 07:00';
    } else if (dayOfWeek < 5) {
      // De segunda a quinta após as 20:00
      subText = 'Abre amanhã às 07:00';
    } else {
      // Sexta-feira após as 20:00 -> abre sábado às 08:00
      subText = 'Abre sáb. às 08:00';
    }
  } else if (isSaturday) {
    if (currentTime < openTimeSaturday) {
      // Sábado de manhã antes das 08:00
      subText = 'Abre hoje às 08:00';
    } else {
      // Sábado após as 12:00 -> domingo fechado, abre seg às 07:00
      subText = 'Abre seg. às 07:00';
    }
  } else {
    // Domingo -> abre segunda às 07:00
    subText = 'Abre seg. às 07:00';
  }

  return {
    isOpen: false,
    statusText: 'Fechado no momento',
    subText,
    currentDayIndex: dayOfWeek,
  };
}

/**
 * Balãozinho Dinâmico 3D de Status (Aberto Agora / Fechado)
 */
export const LiveStatusBadge: React.FC<{
  onClick?: () => void;
  className?: string;
}> = ({ onClick, className = '' }) => {
  const [status, setStatus] = useState(getClinicCurrentStatus);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getClinicCurrentStatus());
    }, 30000); // Atualiza a cada 30 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full backdrop-blur-xl border transition-all duration-300 select-none shadow-md ${
        status.isOpen
          ? 'bg-emerald-500/10 border-emerald-300 text-emerald-800 shadow-emerald-500/15 hover:bg-emerald-500/15'
          : 'bg-rose-500/10 border-rose-200 text-rose-900 shadow-rose-500/10 hover:bg-rose-500/15'
      } ${onClick ? 'cursor-pointer hover:scale-105 active:scale-95' : ''} ${className}`}
    >
      {/* Ponto Pulsante 3D */}
      <span className="flex h-2.5 w-2.5 relative">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            status.isOpen ? 'bg-emerald-400' : 'bg-rose-400'
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
            status.isOpen ? 'bg-emerald-500' : 'bg-rose-500'
          }`}
        />
      </span>

      <span className="text-xs font-bold tracking-tight">
        {status.statusText}
      </span>

      <span className="text-[11px] text-slate-500 font-medium">
        · {status.subText}
      </span>
    </div>
  );
};

/**
 * Card Completo de Horário de Funcionamento (Fiel ao Google Maps)
 */
export const OpeningHoursCard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [status, setStatus] = useState(getClinicCurrentStatus);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getClinicCurrentStatus());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative bg-white/95 backdrop-blur-2xl rounded-3xl border border-amber-200/90 shadow-[0_16px_40px_rgba(217,119,6,0.06),0_4px_16px_rgba(0,0,0,0.02)] p-5 sm:p-6 overflow-hidden transition-all duration-300">
      {/* Bevel superior com brilho de luz */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-300 via-rose-300 to-transparent" />

      {/* Cabeçalho Interativo do Horário */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 pb-4 border-b border-amber-100/80">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 via-rose-400 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-400/25 border border-white/80">
            <Clock className="w-5 h-5 stroke-[2.4]" />
          </div>
          <div className="text-left">
            <h4 className="text-base font-bold text-slate-800 tracking-tight flex items-center gap-2">
              Horário de Funcionamento
            </h4>
            <p className="text-xs text-slate-500 font-normal">
              Atendimento com agendamento prévio
            </p>
          </div>
        </div>

        {/* O Balãozinho com Status em Tempo Real */}
        <div className="self-start sm:self-auto">
          <LiveStatusBadge />
        </div>
      </div>

      {/* Lista de Dias da Semana com destaque no dia de Hoje */}
      <div className="mt-4 pt-1 flex flex-col gap-1.5">
        {WEEKLY_SCHEDULE.map((item) => {
          const isToday = item.dayIndex === status.currentDayIndex;

          return (
            <div
              key={item.dayName}
              className={`flex items-center justify-between py-2 px-3 sm:px-3.5 rounded-xl transition-all duration-200 text-xs sm:text-sm ${
                isToday
                  ? 'bg-gradient-to-r from-amber-50/90 via-rose-50/70 to-amber-50/80 border border-amber-200 shadow-2xs font-bold text-slate-900'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={isToday ? 'text-amber-800 font-bold' : 'text-slate-700'}>
                  {item.dayName}
                </span>
                {isToday && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-200/90 text-amber-900 shadow-2xs">
                    Hoje
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 font-mono">
                <span
                  className={
                    item.isOpenDay
                      ? isToday
                        ? 'text-slate-900 font-bold'
                        : 'text-slate-700 font-medium'
                      : 'text-slate-400 italic'
                  }
                >
                  {item.hours}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Rodapé Informativo */}
      <div className="mt-4 pt-3.5 border-t border-amber-100/60 flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          Fuso horário de Brasília (Maceió - AL)
        </span>
        <a
          href="https://wa.link/int8mg?text=Olá!%20Gostaria%20de%20confirmar%20os%20horários%20de%20atendimento%20da%20Clínica%20Mami."
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-rose-600 hover:text-amber-600 transition-colors"
        >
          Tirar dúvidas no WhatsApp →
        </a>
      </div>
    </div>
  );
};
