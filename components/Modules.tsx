import React, { useState } from 'react';
import { AppMode } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Cpu, Network, Bot, Plus, Minus, Stethoscope, Zap, Binary } from 'lucide-react';

interface ModulesProps {
  mode: AppMode;
}

const modulesData = [
  {
    id: '01',
    title: 'Neuro_Web_Architecture',
    subtitle: 'Infraestrutura Digital & Conversão',
    icon: Network,
    descClinic: 'Desenvolvimento de ecossistemas digitais (WebApps e Landing Pages) projetados com princípios de neurociência aplicada à conversão. Não entregamos apenas design, mas uma infraestrutura de autoridade capaz de filtrar curiosos e captar pacientes "High-Ticket" antes mesmo do primeiro contato.',
    specs: [
      { label: 'ENTREGA', value: 'WEBAPPS DE ALTA PERFORMANCE' },
      { label: 'MOTOR', value: 'NEURO-COPYWRITING' },
      { label: 'FOCO', value: 'AUTORIDADE & CAPTAÇÃO' },
    ],
    status: 'OPERATIONAL',
  },
  {
    id: '02',
    title: 'Clinical_AI_Agents',
    subtitle: 'Secretaria Digital Autônoma (24/7)',
    icon: Bot,
    descClinic: 'Elimine a espera e o erro humano no primeiro atendimento. Implementamos Agentes de IA treinados na sua metodologia clínica para acolher, realizar triagem qualificada e agendar pacientes via WhatsApp Business API. Atendimento empático, instantâneo e incansável.',
    specs: [
      { label: 'TECNOLOGIA', value: 'LLM CUSTOMIZADA (RAG)' },
      { label: 'INTEGRAÇÃO', value: 'WHATSAPP BUSINESS API' },
      { label: 'CAPACIDADE', value: 'ATENDIMENTO ILIMITADO' },
    ],
    status: 'DEPLOYING',
  },
  {
    id: '03',
    title: 'Strategic_AI_Core',
    subtitle: 'Consultoria de Escala & Governança por IA',
    icon: Cpu,
    descClinic: 'A revolução da gestão médica. Utilizamos Inteligência Artificial para analisar seus dados financeiros e operacionais, identificando gargalos invisíveis. O objetivo é implementar processos auto-gerenciáveis onde a IA atua como "COO", permitindo que a clínica escale e funcione com precisão cirúrgica sem a sua presença constante na operação.',
    specs: [
      { label: 'MÉTODO', value: 'CONSULTORIA HYBRID (IA + HUMAN)' },
      { label: 'MOTOR', value: 'ANÁLISE DE DADOS PREDITIVA' },
      { label: 'RESULTADO', value: 'LIBERDADE & ESCALA' },
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
    if (moduleTitle === 'Neuro_Web_Architecture') {
        message = `Olá Pedro. Quero elevar a autoridade da minha clínica com a *Neuro Web Architecture* (Protocolo 01).`;
    } 
    else if (moduleTitle === 'Clinical_AI_Agents') {
        message = `Olá Pedro. Tenho interesse em automatizar meu atendimento com os *Agentes de IA* (Protocolo 02).`;
    } 
    else if (moduleTitle === 'Strategic_AI_Core') {
        message = `Olá Pedro. Gostaria de aplicar para a *Strategic AI Core* e escalar minha operação (Protocolo 03).`;
    } 
    else {
        message = `Olá Pedro. Gostaria de saber mais sobre as soluções de IA para minha clínica.`;
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
       <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-white/5 pb-8">
          <div className="space-y-4">
            <div className={`flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] ${accentColor} opacity-80 uppercase`}>
                <Stethoscope size={14} />
                <span>Ecossistema de Soluções</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-none">
              Protocolos de <span className="italic font-light opacity-60 font-serif">Alta Performance.</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-4 bg-white/5 border border-white/5 px-5 py-3 rounded-full backdrop-blur-md">
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
           
           return (
             <motion.div
               key={module.id}
               layout
               onClick={() => handleInteraction(module.id)}
               className={`relative w-full border transition-all duration-500 rounded-sm overflow-hidden cursor-pointer group
                  ${isActive 
                    ? 'bg-zinc-900 border-medical-teal/40 shadow-[0_0_30px_rgba(20,184,166,0.1)]' 
                    : 'bg-zinc-900/40 border-white/5 hover:border-white/20'
                  }`}
             >
                <div className="relative z-10 p-6 md:p-8">
                   
                   {/* Header Row */}
                   <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-6 md:gap-8">
                         <span className={`font-mono text-xs tracking-widest ${isActive ? accentColor : 'text-gray-600'}`}>
                            {module.id}
                         </span>
                         
                         <div>
                             <h3 className={`font-serif text-xl md:text-2xl text-gray-200 transition-colors duration-300 ${isActive ? 'text-white' : 'group-hover:text-white'}`}>
                                {module.title}
                             </h3>
                             <p className="font-mono text-[9px] tracking-[0.2em] text-gray-500 uppercase mt-2">
                                {module.subtitle}
                             </p>
                         </div>
                      </div>

                      <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-white text-black rotate-180' : 'text-gray-500 group-hover:border-white/30'}`}>
                          {isActive ? <Minus size={14} /> : <Plus size={14} />}
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
                            <div className="pt-8 md:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-white/5 mt-8">
                                
                                <div className="lg:col-span-7 space-y-8">
                                    <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed font-light">
                                        {module.descClinic}
                                    </p>
                                    
                                    <div className="pt-2">
                                        <a 
                                            href={getWhatsAppLink(module.title)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className={`inline-flex items-center gap-3 group/btn bg-white text-black px-8 py-3 transition-all hover:bg-gray-200`}
                                        >
                                            <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase">
                                                {module.status === 'APPLICATION_ONLY' ? 'Aplicar Agora' : 'Solicitar Orçamento'}
                                            </span>
                                            <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>

                                <div className="lg:col-span-5">
                                    <div className="bg-black/20 p-6 rounded-sm border border-white/5">
                                        <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-medical-teal mb-6 uppercase">
                                            <Binary size={12} />
                                            <span>Detalhes Técnicos</span>
                                        </div>

                                        <div className="space-y-4">
                                            {module.specs.map((spec, idx) => (
                                                <div key={idx} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                                    <span className="font-mono text-[10px] text-gray-500 tracking-wider uppercase">
                                                        {spec.label}
                                                    </span>
                                                    <span className="font-mono text-[10px] font-bold tracking-wider text-gray-300 text-right">
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