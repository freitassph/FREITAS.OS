import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Activity, ShieldCheck, ArrowDown, Ban, Scan, XCircle, CheckCircle2 } from 'lucide-react';

// Animated Icon: The Leak (Hemorrhage)
const HemorrhageIcon = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <motion.div
      animate={{ 
        y: [0, 8, 0],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute inset-0 border border-red-500/30 rounded-lg"
    />
    <motion.div
        animate={{ height: ["0%", "100%", "0%"] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-[1px] bg-red-500 h-full opacity-50"
    />
    
    <div className="relative z-10 p-3 bg-noir rounded-lg border border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
       <ArrowDown size={24} className="text-red-500" />
    </div>
  </div>
);

// Animated Icon: The Tourniquet (Stabilization)
const TourniquetIcon = () => (
  <div className="relative w-16 h-16 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-medical-teal/5 rounded-full animate-pulse"></div>
    
    <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border border-dashed border-medical-teal/30 rounded-full"
    />
    
    <div className="relative z-10 p-3 bg-noir rounded-lg border border-medical-teal/40 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
       <ShieldCheck size={24} className="text-medical-teal" />
    </div>
  </div>
);

const Tourniquet: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Background Integration */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir via-zinc-950 to-noir z-0"></div>
      
      {/* Tech Overlay Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-8 mb-16 relative">
            
            {/* Connecting Line to Previous Section */}
            <div className="absolute -top-24 h-24 w-px bg-gradient-to-b from-transparent to-medical-teal/50"></div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-2"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/5 text-red-400 backdrop-blur-md">
                    <Activity size={12} className="animate-pulse" />
                    <span className="text-[9px] font-mono tracking-[0.2em] uppercase font-bold">Protocolo de Diagnóstico</span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">
                    O <span className="text-white border-b border-red-500/50 pb-1">Torniquete</span> Digital.
                </h2>
            </motion.div>
            
            <p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">
                O maior erro médico no digital: injetar tráfego <span className="text-red-400/80">(sangue)</span> em um site que vaza pacientes <span className="text-red-400/80">(hemorragia)</span>.
            </p>
        </div>

        {/* The Diagnostic Panel */}
        <div className="relative bg-zinc-900/30 border border-white/5 rounded-xl p-1 md:p-2 backdrop-blur-sm">
            
            {/* Panel Header Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-noir border border-white/10 rounded-full z-20">
                <span className="text-[8px] font-mono text-gray-500 tracking-widest">SYSTEM_COMPARISON_MODE</span>
            </div>

            {/* Changed from md:grid-cols-2 to lg:grid-cols-2. Tablet (md) now uses 1 column for better readability. */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-0 relative overflow-hidden rounded-lg">
                
                {/* Center Divider/Connector - Visible only on Large Screens */}
                <div className="hidden lg:flex absolute inset-0 z-10 items-center justify-center pointer-events-none">
                    <div className="h-full w-px bg-white/5 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center">
                            <span className="text-[8px] font-mono text-gray-500">VS</span>
                        </div>
                    </div>
                </div>

                {/* Left: The Hemorrhage (Alert State) */}
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative p-8 md:p-12 bg-gradient-to-br from-red-950/10 to-transparent flex flex-col items-center text-center group border-b lg:border-b-0 lg:border-r border-white/5 hover:bg-red-950/20 transition-colors duration-500"
                >
                     {/* Background Grid Red */}
                     <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

                    <div className="relative z-10 mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                        <HemorrhageIcon />
                    </div>

                    <div className="flex items-center gap-2 mb-2 text-red-400/80">
                         <XCircle size={14} />
                         <span className="text-[10px] font-mono tracking-widest uppercase">Critical Failure</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">Hemorragia de Leads</h3>
                    
                    <div className="w-full max-w-xs space-y-3">
                         <div className="flex items-center justify-between text-xs text-gray-400 border-b border-white/5 pb-2">
                             <span>Site Lento ({'>'} 3.5s)</span>
                             <span className="text-red-400 font-mono font-bold">MORTE DO LEAD</span>
                         </div>
                         <div className="flex items-center justify-between text-xs text-gray-400 border-b border-white/5 pb-2">
                             <span>Desperdício de Ads</span>
                             <span className="text-red-400 font-mono font-bold">60% DO TRÁFEGO</span>
                         </div>
                         <div className="flex items-center justify-between text-xs text-gray-400 pb-2">
                             <span>Custo da Inação</span>
                             <span className="text-red-400 font-mono font-bold text-right">- R$ 20.000/MÊS</span>
                         </div>
                    </div>
                </motion.div>

                {/* Right: The Solution (Stable State) */}
                <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative p-8 md:p-12 bg-gradient-to-bl from-medical-teal/5 to-transparent flex flex-col items-center text-center group hover:bg-medical-teal/10 transition-colors duration-500"
                >
                    {/* Background Grid Teal */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

                    <div className="relative z-10 mb-6">
                        <TourniquetIcon />
                    </div>

                    <div className="flex items-center gap-2 mb-2 text-medical-teal">
                         <CheckCircle2 size={14} />
                         <span className="text-[10px] font-mono tracking-widest uppercase">Systems Normal</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">Estabilidade Vital</h3>

                    <div className="w-full max-w-xs space-y-3">
                         <div className="flex items-center justify-between text-xs text-gray-300 border-b border-white/5 pb-2">
                             <span>Infraestrutura Neural</span>
                             <span className="text-medical-teal font-mono font-bold">INSTANTÂNEA (&lt;1s)</span>
                         </div>
                         <div className="flex items-center justify-between text-xs text-gray-300 border-b border-white/5 pb-2">
                             <span>Eficiência de Tráfego</span>
                             <span className="text-medical-teal font-mono font-bold">RETENÇÃO MÁXIMA</span>
                         </div>
                         <div className="flex items-center justify-between text-xs text-gray-300 pb-2">
                             <span>Projeção de Receita</span>
                             <span className="text-medical-teal font-mono font-bold">ESCALA HIGH-TICKET</span>
                         </div>
                    </div>
                </motion.div>

            </div>

        </div>

        {/* Bottom Status Bar */}
        <div className="mt-8 flex justify-center opacity-60">
             <div className="flex items-center gap-2 text-[9px] font-mono text-gray-500">
                 <Scan size={10} />
                 <span>AUTOMATED DIAGNOSTIC RUNNING...</span>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Tourniquet;