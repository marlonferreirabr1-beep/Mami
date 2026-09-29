import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Receipt, MessageCircle, HelpCircle, Sparkles } from 'lucide-react';
import { WhatsApp3DIcon } from './icons3D.tsx';
import {
  UnimedLogo,
  BradescoSaudeLogo,
  AmilLogo,
  SulAmericaLogo,
  CassiLogo,
  GeapLogo,
  PostalSaudeLogo,
  AssefazLogo,
  CapesespLogo,
  BacenLogo,
} from './InsuranceLogos.tsx';

interface InsuranceItem {
  id: string;
  name: string;
  LogoComponent: React.ComponentType<{ className?: string; height?: number }>;
  tag: string;
}

const INSURANCE_LIST: InsuranceItem[] = [
  { id: 'unimed', name: 'Unimed', LogoComponent: UnimedLogo, tag: 'Rede Credenciada' },
  { id: 'bradesco', name: 'Bradesco Saúde', LogoComponent: BradescoSaudeLogo, tag: 'Rede Credenciada' },
  { id: 'amil', name: 'Amil', LogoComponent: AmilLogo, tag: 'Rede Credenciada' },
  { id: 'sulamerica', name: 'SulAmérica', LogoComponent: SulAmericaLogo, tag: 'Rede Credenciada' },
  { id: 'cassi', name: 'Cassi', LogoComponent: CassiLogo, tag: 'Banco do Brasil' },
  { id: 'geap', name: 'Geap Saúde', LogoComponent: GeapLogo, tag: 'Autogestão' },
  { id: 'postal', name: 'Postal Saúde', LogoComponent: PostalSaudeLogo, tag: 'Correios' },
  { id: 'assefaz', name: 'Assefaz', LogoComponent: AssefazLogo, tag: 'Fundação' },
  { id: 'capesesp', name: 'Capesesp', LogoComponent: CapesespLogo, tag: 'Previdência & Saúde' },
  { id: 'bacen', name: 'Bacen PASBC', LogoComponent: BacenLogo, tag: 'Banco Central' },
];

export const InsuranceSection: React.FC = () => {
  const whatsappUrl = 'https://wa.link/int8mg';

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Premium Header with Editorial Subtitle */}
      <div className="text-center mb-9">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 border border-amber-200/80 shadow-2xs text-xs font-semibold text-amber-950 mb-3.5">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
          <span className="tracking-wide">Cobertura e Facilidade</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-900 tracking-tight">
          Convênios Atendidos
        </h3>
        <p className="text-sm font-medium text-slate-500 mt-1.5 max-w-md mx-auto leading-relaxed">
          Atendimento dedicado através dos principais planos de saúde do país
        </p>
      </div>

      {/* Grid de Convênios com as Logos Reais Oficiais */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {INSURANCE_LIST.map((item, idx) => {
          const Logo = item.LogoComponent;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group relative bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-[0_4px_16px_rgba(217,119,6,0.03)] hover:shadow-[0_12px_28px_rgba(217,119,6,0.08)] hover:border-amber-200 transition-all duration-300 flex items-center justify-between gap-3 overflow-hidden transform-gpu hover:-translate-y-0.5"
            >
              {/* Subtle Ambient Sheen */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-50/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Logo Oficial Real */}
              <div className="relative z-10 flex items-center min-w-0 h-10">
                <Logo height={28} className="max-w-[155px] object-contain transition-transform duration-300 group-hover:scale-105" />
              </div>

              {/* Micro Status Badge */}
              <div className="relative z-10 shrink-0">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-slate-50 text-slate-600 border border-slate-200/70 group-hover:border-amber-300 group-hover:text-amber-800 group-hover:bg-amber-50/60 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {item.tag}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Cartão de Destaque Luxo: Particular com Reembolso */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full mt-5 p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-white via-rose-50/50 to-amber-50/40 border border-amber-200/80 shadow-[0_10px_30px_rgba(217,119,6,0.07)] relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-300/20 to-rose-300/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-start gap-4 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-500 text-white shadow-md shadow-rose-500/20 flex items-center justify-center shrink-0 border border-white/60 group-hover:scale-105 transition-transform">
            <Receipt className="w-6 h-6 stroke-[2.2] text-amber-100" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="text-base font-bold text-slate-900 tracking-tight">
                Atendimento Particular com Reembolso
              </h4>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200/80 tracking-wide uppercase">
                100% Assistido
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-normal">
              Caso seu plano não esteja na lista ou opere por livre escolha, emitimos toda a documentação, laudos e recibos médicos necessários para você solicitar o reembolso integral ou parcial junto à sua operadora.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Concierge Call to Action */}
      <div className="mt-7 w-full p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-amber-100/80 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="text-left flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight">
              Dúvidas sobre o seu convênio?
            </p>
            <p className="text-[11px] sm:text-xs text-slate-500 font-normal">
              Nossa equipe orienta você sobre autorizações e procedimentos.
            </p>
          </div>
        </div>

        <a
          href={`${whatsappUrl}?text=${encodeURIComponent(
            'Olá! Gostaria de consultar as condições do meu plano de saúde na Clínica Mami.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-md shadow-emerald-500/25 active:scale-95 transition-all w-full sm:w-auto justify-center"
        >
          <WhatsApp3DIcon size={20} showGleam={false} />
          <span>Consultar Cobertura</span>
        </a>
      </div>
    </div>
  );
};
