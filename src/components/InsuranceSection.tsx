import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Receipt, MessageCircle, HelpCircle } from 'lucide-react';
import { WhatsApp3DIcon } from './icons3D.tsx';

const CONVENIOS = [
  'Unimed',
  'Bradesco Saúde',
  'Amil',
  'SulAmérica',
  'Cassi',
  'Geap Saúde',
  'Postal Saúde',
  'Assefaz',
  'Capesesp',
  'Bacen',
];

export const InsuranceSection: React.FC = () => {
  const whatsappUrl = 'https://wa.link/int8mg';

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-800 tracking-tight">
          Convênios Atendidos
        </h3>
        <p className="text-sm font-medium text-slate-500 mt-1">
          Consulte as condições para o seu plano
        </p>
      </div>

      {/* Convênios Badges Grid */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
        {CONVENIOS.map((name, idx) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.04 }}
            className="group p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 flex items-center gap-2.5 transform-gpu hover:-translate-y-0.5 hover:border-sky-200"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-sky-400 to-cyan-300 shadow-xs group-hover:scale-125 transition-transform" />
            <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
              {name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Special Card: Particular com Reembolso */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full mt-4 p-5 rounded-3xl bg-gradient-to-r from-pink-50/90 via-purple-50/70 to-sky-50/90 border border-pink-200/70 shadow-sm relative overflow-hidden"
      >
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-white text-pink-600 shadow-sm flex items-center justify-center shrink-0 border border-pink-100">
            <Receipt className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800 tracking-tight flex items-center gap-2">
              <span>Particular com reembolso</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-pink-100 text-pink-700">
                Disponível
              </span>
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
              Atendemos particular e emitimos toda a documentação necessária para você solicitar reembolso junto ao seu plano de saúde.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Inquiry CTA */}
      <div className="mt-7 w-full p-4 rounded-2xl bg-white/80 border border-slate-100 text-center flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
        <div className="text-left flex items-center gap-2.5">
          <HelpCircle className="w-5 h-5 text-sky-500 shrink-0" />
          <span className="text-xs font-medium text-slate-600">
            Ficou com alguma dúvida sobre a cobertura do seu plano?
          </span>
        </div>
        <a
          href={`${whatsappUrl}?text=${encodeURIComponent(
            'Olá! Gostaria de tirar dúvidas sobre a cobertura do meu plano de saúde na Clínica Mami.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
        >
          <WhatsApp3DIcon size={22} showGleam={false} />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
