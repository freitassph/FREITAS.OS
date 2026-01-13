import React, { useState } from 'react';
import { AppMode } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Cpu, Network, Bot, Plus, Minus, Stethoscope, Zap, Binary, LayoutTemplate, MessageSquareCode, DatabaseZap, ChevronRight, Check, SquareTerminal } from 'lucide-react';

interface ModulesProps {
  mode: AppMode;
}

const modulesData = [
  {
    id: '01',
    title: 'Infraestrutura de Alta Conversão',
    subtitle: 'Landing Pages High-Ticket',
    icon: LayoutTemplate,
    features: [
      "Neuro-Design: Conversão de visitantes em pacientes particulares através de psicologia visual.",
      "Velocidade Supersônica: Carregamento <1.5s para evitar rejeição de leads impacientes.",
      "Filtro de Autoridade: Design que repele curiosos e atrai pacientes que pagam valor."
    ],
    specs: [
      { label: 'PERFORMANCE', value: 'LOAD TIME < 1.5s' },
      { label: 'MOTOR', value: 'NEURO-COPYWRITING' },
      { label: 'FOCO', value: 'PACIENTES PARTICULARES' },
    ],
    status: 'OPERATIONAL',
  },
  {
    id: '02',
    title: 'Secretária de IA & Triagem',
    subtitle: 'Atendimento & Agendamento 24/7',
    icon: MessageSquareCode,
    features: [
      "Zero Espera: Atendimento humanizado em menos de 3 segundos.",
      "Triagem Automática: Qualificação imediata de Convênio vs. Particular.",
      "Agenda Perpétua: Preenchimento automático de horários 24h por dia."
    ],
    specs: [
      { label: 'CAPACIDADE', value: 'RESPOSTA INSTANTÂNEA' },
      { label: 'CANAL', value: 'WHATSAPP BUSINESS API' },
      { label: 'FUNÇÃO', value: 'AGENDAMENTO AUTOMÁTICO' },
    ],
    status: 'DEPLOYING',
  },
  {
    id: '03',
    title: 'Mentoria Estratégica em IA',
    subtitle: 'Implementação & Otimização de Processos',
    icon: Bot,
    features: [
      "Diagnóstico Cirúrgico: Mapeamento profundo de gargalos operacionais.",
      "Fim da Burocracia: Automação de processos para focar apenas na medicina.",
      "Playbook Executivo: Implementação prática de IA na rotina clínica."
    ],
    specs: [
      { label: 'ESCOPO', value: 'DIAGNÓSTICO DE NEGÓCIO' },
      { label: 'ALVO', value: 'OTIMIZAÇÃO DE TEMPO' },
      { label: 'ENTREGA', value: 'PLAYBOOK DE IA' },
    ],
    status: 'APPLICATION_ONLY',
  },
];

const Modules: React.FC<ModulesProps> = ({ mode }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const getWhatsAppLink = (moduleTitle: string) => {
    const phoneNumber = "5563984840431";
    let message = "";
    
    // Explicitly directing message based on the chosen proposal/module
    if (moduleTitle.includes('Infraestrutura')) {
        message = `Olá Pedro. Quero um diagnóstico da minha presença digital e saber mais sobre a *Infraestrutura de Alta Conversão*.`;
    } 
    else if (moduleTitle.includes('Secretária')) {
        message = `Olá Pedro. Tenho interesse em implementar a *Secretária de IA* para automatizar meu agendamento.`;
    } 
    else if (moduleTitle.includes('Mentoria')) {
        message = `Olá Pedro. Quero saber como funciona a *Mentoria Estratégica de Implementação de IA* para minha clínica.`;
    } 
    else {
        message = `Olá Pedro. Gostaria de saber mais sobre as soluções de Arquitetura Digital.`;
    }

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleInteraction = (id: string) => {
    setActiveId(prev => prev === id ? null : id);
  };

  const accentColor = 'text-medical-teal';

  return (
    <section id="modules-section" className="py-24 md:py-32 px-4 md:px-6 container mx-auto relative z-10 scroll-mt-12">
       
       {/* Section Header */}
       <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8 border-b border-white/5 pb-8">
          <div className="space-y-4">
            <div className={`flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] ${accentColor} opacity-80 uppercase`}>
                <Stethoscope size={14} />
                <span>Ecossistema de Soluções</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight leading-none">
              Protocolos de <br className="md:hidden" /><span className="italic font-light opacity-60 font-serif">Alta Performance.</span>
            </h2>
          </div>
          
          <div className="self-start md:self-auto flex items-center gap-4 bg-white/5 border border-white/5 px-5 py-3 rounded-full backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              </span>
              <div className="h-4 w-[1px] bg-white/10"></div>
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-gray-300">
                  <Zap size={12} className="text-white" />
                  <span>AGENDA ABERTA</span>
              </div>
          </div>
       </div>

       {/* Modules Grid */}
       <div className="flex flex-col gap-4">
         {modulesData.map((module) => {
           const isActive = activeId === module.id;
           const ModuleIcon = module.icon;
           
           return (
             <motion.div
               key={module.id}
               layout
               onClick={() => handleInteraction(module.id)}
               className={`relative w-full border transition-all duration-500 rounded-lg overflow-hidden cursor-pointer group active:scale-[0.98] md:active:scale-100 touch-manipulation
                  ${isActive 
                    ? 'bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-900 border-medical-teal/50 shadow-[0_0_30px_rgba(20,184,166,0.05)]' 
                    : 'bg-zinc-900/30 border-white/5 hover:border-white/20 hover:bg-zinc-900/50'
                  }`}
             >
                {/* Active Glow Indicator on Left */}
                {isActive && (
                    <motion.div 
                        layoutId="activeGlow"
                        className="absolute top-0 bottom-0 left-0 w-1 bg-medical-teal shadow-[0_0_10px_rgba(20,184,166,0.4)]"
                    />
                )}

                {/* Main clickable area - Increased padding for touch targets */}
                <div className="relative z-10 p-6 md:p-8">
                   
                   {/* Header Row */}
                   <div className="flex items-start md:items-center justify-between gap-4 md:gap-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-1">
                         <div className={`font-mono text-xs tracking-widest flex items-center gap-2 ${isActive ? accentColor : 'text-gray-600'}`}>
                            <span>{module.id}</span>
                            {isActive && <ChevronRight size={10} className="animate-pulse"/>}
                         </div>
                         
                         <div className="flex-1">
                             <h3 className={`font-serif text-xl md:text-2xl text-gray-200 transition-colors duration-300 leading-tight ${isActive ? 'text-white' : 'group-hover:text-white'}`}>
                                {module.title}
                             </h3>
                             <p className="font-mono text-[9px] tracking-[0.15em] md:tracking-[0.2em] text-gray-500 uppercase mt-2">
                                {module.subtitle}
                             </p>
                         </div>
                      </div>

                      <div className={`w-12 h-12 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 flex-shrink-0 ${isActive ? 'bg-medical-teal/10 text-medical-teal rotate-90 border-medical-teal/30' : 'text-gray-500 group-hover:border-white/30'}`}>
                          {isActive ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                   </div>

                   {/* Content */}
                   <AnimatePresence>
                      {isActive && (
                         <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                         >
                            <div className="pt-6 md:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 border-t border-white/5 mt-6 md:mt-8">
                                
                                <div className="lg:col-span-7 space-y-6 md:space-y-8">
                                    {/* Features Grid - REPLACED BULLET POINTS WITH LEGENDARY SYSTEM CARDS */}
                                    <div className="grid grid-cols-1 gap-4">
                                        {module.features.map((feature, idx) => {
                                            // Split "Title: Description" safely
                                            const [header, body] = feature.includes(':') 
                                                ? feature.split(':') 
                                                : [null, feature];

                                            return (
                                                <motion.div 
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="group/card relative bg-zinc-900/40 border border-white/5 rounded-lg p-5 hover:bg-zinc-900/80 hover:border-medical-teal/20 transition-all duration-300 overflow-hidden"
                                                >
                                                    {/* Background Tech Detail */}
                                                    <div className="absolute right-0 top-0 p-3 opacity-0 group-hover/card:opacity-10 transition-opacity">
                                                        <SquareTerminal size={40} />
                                                    </div>

                                                    <div className="flex gap-4">
                                                        {/* Number Index */}
                                                        <div className="flex-shrink-0 pt-1">
                                                            <div className="text-[10px] font-mono text-gray-600 font-bold group-hover/card:text-medical-teal transition-colors">
                                                                0{idx + 1}
                                                            </div>
                                                        </div>

                                                        {/* Text Content */}
                                                        <div className="space-y-1">
                                                            {header ? (
                                                                <>
                                                                    <div className="font-mono text-[10px] text-medical-teal uppercase tracking-widest font-bold">
                                                                        {header}
                                                                    </div>
                                                                    <div className="text-sm text-gray-300 font-light leading-relaxed">
                                                                        {body}
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <div className="text-sm text-gray-300 font-light leading-relaxed">
                                                                    {feature}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                    
                                    <div className="pt-4">
                                        <a 
                                            href={getWhatsAppLink(module.title)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className={`inline-flex items-center gap-3 group/btn bg-white text-black px-6 py-4 md:px-8 md:py-4 transition-all hover:bg-gray-200 w-full md:w-auto justify-center md:justify-start rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]`}
                                        >
                                            <span className="font-mono text-[11px] md:text-[10px] font-bold tracking-[0.2em] uppercase">
                                                {module.status === 'APPLICATION_ONLY' ? 'Aplicar para Mentoria' : 'Iniciar Protocolo'}
                                            </span>
                                            <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>

                                <div className="lg:col-span-5">
                                    <div className="bg-black/40 p-6 rounded-lg border border-white/5 backdrop-blur-sm">
                                        <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-medical-teal mb-6 uppercase">
                                            <Binary size={12} />
                                            <span>System Specifications</span>
                                        </div>

                                        <div className="space-y-4">
                                            {module.specs.map((spec, idx) => (
                                                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0 gap-1 sm:gap-0">
                                                    <span className="font-mono text-[10px] text-gray-500 tracking-wider uppercase">
                                                        {spec.label}
                                                    </span>
                                                    <span className="font-mono text-[10px] font-bold tracking-wider text-white sm:text-right drop-shadow-md">
                                                        {spec.value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                         </motion.div>
                      )}
                   </AnimatePresence>
                   
                </div>
             </motion.div>
           );
         })}
       </div>
    </section>
  );
};

export default Modules;