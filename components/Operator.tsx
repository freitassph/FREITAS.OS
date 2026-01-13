import React from 'react';
import { AppMode } from '../types';
import { motion } from 'framer-motion';
import { Fingerprint, ShieldCheck, Database, Lock, Scan, CheckCircle2 } from 'lucide-react';

interface OperatorProps {
  mode: AppMode;
}

const OP_CLINIC_IMG = "https://i.ibb.co/Ndr864tg/BCA95-EE1-A909-4265-90-F6-AADE7-BDE8197.png";

const Operator: React.FC<OperatorProps> = ({ mode }) => {
  const accentColor = 'text-medical-teal';

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 container mx-auto relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left: The Bio-Metric Scan (Image) - DESKTOP ONLY */}
        <div className="hidden lg:flex lg:col-span-5 relative group perspective-1000 justify-center lg:justify-end">
             {/* Premium Glass Card Container (Unified Design with Mobile) */}
             <div className="relative w-[340px] h-[460px] p-1.5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                
                {/* The Image Wrapper */}
                <div className="relative w-full h-full overflow-hidden rounded-lg bg-zinc-900">
                    <img 
                        src={OP_CLINIC_IMG} 
                        alt="Pedro Freitas Operator" 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center opacity-95 transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Clean Overlay - Bottom Gradient only */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 pointer-events-none"></div>

                    {/* Top Right Tech Badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-black/60 backdrop-blur rounded border border-white/10 z-20">
                        <span className="w-1.5 h-1.5 rounded-full bg-medical-teal animate-pulse"></span>
                        <span className="text-[8px] font-mono text-white/80 uppercase tracking-widest">Live Feed</span>
                    </div>

                    {/* Bottom Info - Integrated cleanly */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20">
                         <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-medical-teal/10 rounded border border-medical-teal/20">
                                <Scan size={14} className="text-medical-teal" />
                            </div>
                            <div>
                                <div className="text-[9px] font-mono text-gray-400 uppercase tracking-wider">Operator</div>
                                <div className="text-sm font-serif text-white italic">Pedro Freitas</div>
                            </div>
                         </div>
                         
                         <div className="flex items-center gap-1 text-[9px] font-mono text-gray-500">
                            <CheckCircle2 size={10} className="text-green-500" />
                            <span>VERIFIED</span>
                         </div>
                    </div>
                </div>
             </div>
        </div>

        {/* Right: The Decrypted Data (Content) */}
        <div className="lg:col-span-7 space-y-10">
            
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-medical-teal/50"></span>
                    <span className="text-[10px] font-mono tracking-[0.3em] text-medical-teal uppercase">Operator Profile</span>
                </div>
                
                <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight leading-[1.1]">
                    O elo perdido entre <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">Medicina e Tecnologia.</span>
                </h2>

                <p className="font-sans text-sm md:text-lg text-gray-400 leading-relaxed font-light max-w-2xl border-l border-white/10 pl-6">
                    A maioria das agências trata sua clínica como um comércio genérico. Eu projeto a jornada do paciente com a visão de quem vive a rotina médica. Entendo a ética, a terminologia e a responsabilidade de lidar com vidas.
                </p>
            </div>

            {/* Mobile/Tablet Main Image (Fixed Aspect Ratio & Centering) */}
            <div className="lg:hidden w-full mb-8 md:max-w-md md:mx-auto">
                {/* Premium Glass Card Container */}
                <div className="relative p-1.5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm shadow-2xl">
                    
                    {/* The Image Wrapper - Fixed Vertical Ratio for all mobile/tablet */}
                    {/* Removed aspect-video to prevent cutting head on landscape/tablets */}
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-zinc-900">
                        <img 
                            src={OP_CLINIC_IMG} 
                            alt="Pedro Freitas" 
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover object-center opacity-95 transition-transform duration-700 hover:scale-105"
                        />
                        
                        {/* Clean Overlay - Bottom Gradient only */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 pointer-events-none"></div>

                        {/* Top Right Tech Badge */}
                        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-black/60 backdrop-blur rounded border border-white/10">
                            <span className="w-1.5 h-1.5 rounded-full bg-medical-teal animate-pulse"></span>
                            <span className="text-[8px] font-mono text-white/80 uppercase tracking-widest">Live Feed</span>
                        </div>

                        {/* Bottom Info - Integrated cleanly */}
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                             <div className="flex items-center gap-3">
                                <div className="p-1.5 bg-medical-teal/10 rounded border border-medical-teal/20">
                                    <Scan size={14} className="text-medical-teal" />
                                </div>
                                <div>
                                    <div className="text-[9px] font-mono text-gray-400 uppercase tracking-wider">Operator</div>
                                    <div className="text-sm font-serif text-white italic">Pedro Freitas</div>
                                </div>
                             </div>
                             
                             <div className="hidden md:flex items-center gap-1 text-[9px] font-mono text-gray-500">
                                <CheckCircle2 size={10} className="text-green-500" />
                                <span>VERIFIED</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Spec Card 1 */}
                <div className="group relative p-5 bg-zinc-900/40 border border-white/5 hover:border-medical-teal/30 transition-all duration-300 overflow-hidden rounded-lg">
                    <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                        <ShieldCheck size={18} className="text-medical-teal" />
                    </div>
                    <h4 className="font-mono text-xs text-medical-teal tracking-widest uppercase mb-2">Protocolo CFM</h4>
                    <p className="text-sm text-gray-300 font-serif italic">Blindagem Ética</p>
                    <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">
                        Estruturas validadas conforme a Resolução 2.336/2023. Publicidade médica sem riscos.
                    </p>
                </div>

                {/* Spec Card 2 */}
                <div className="group relative p-5 bg-zinc-900/40 border border-white/5 hover:border-medical-teal/30 transition-all duration-300 overflow-hidden rounded-lg">
                     <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                        <Database size={18} className="text-medical-teal" />
                    </div>
                    <h4 className="font-mono text-xs text-medical-teal tracking-widest uppercase mb-2">Neuro-Linguística</h4>
                    <p className="text-sm text-gray-300 font-serif italic">Tradução Técnica</p>
                    <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">
                        Eu falo sua língua nativa. Sem ruídos na explicação de patologias ou procedimentos complexos.
                    </p>
                </div>

                {/* Spec Card 3 */}
                 <div className="group relative p-5 bg-zinc-900/40 border border-white/5 hover:border-medical-teal/30 transition-all duration-300 overflow-hidden md:col-span-2 rounded-lg">
                     <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                        <Lock size={18} className="text-medical-teal" />
                    </div>
                    <h4 className="font-mono text-xs text-medical-teal tracking-widest uppercase mb-2">Arquitetura Proprietária</h4>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <p className="text-sm text-gray-300 font-serif italic">UX Baseada em Anamnese</p>
                        <div className="flex items-center gap-2">
                             <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                             <span className="text-[9px] font-mono text-gray-500 uppercase">System Active</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>

      </div>
    </section>
  );
};

export default Operator;