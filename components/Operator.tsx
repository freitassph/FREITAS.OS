import React from 'react';
import { AppMode } from '../types';
import { motion } from 'framer-motion';
import { Fingerprint, ShieldCheck, BrainCircuit, ScanEye, Award } from 'lucide-react';

interface OperatorProps {
  mode: AppMode;
}

const OP_CLINIC_IMG = "https://i.ibb.co/yBSbM35F/Gemini-Generated-Image-jxdl30jxdl30jxdl.png";

const Operator: React.FC<OperatorProps> = ({ mode }) => {
  const accentColor = 'text-medical-teal';

  return (
    <section className="py-20 md:py-24 px-4 md:px-6 container mx-auto relative z-10 border-b border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Content Header */}
        <div className="space-y-4 md:space-y-6 max-w-2xl">
            <div className={`flex items-center justify-center gap-3 text-[10px] font-mono tracking-[0.4em] ${accentColor} opacity-90 uppercase`}>
                <ScanEye size={14} />
                <span>Executive Profile</span>
            </div>
            <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl text-white tracking-tight leading-tight"
            >
                Visão além do <br/><span className="italic text-gray-500">Protocolo.</span>
            </motion.h2>

            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-sans text-sm md:text-lg text-gray-300 leading-relaxed font-light px-4 md:px-0"
            >
                "A medicina tradicional parou no tempo. Meu trabalho é conectar sua clínica ao futuro através de Inteligência Artificial e Branding de Elite. Decodifico padrões de sucesso digital e os aplico na realidade médica para gerar autoridade e liberdade."
            </motion.p>
        </div>

        {/* Stats Grid - Minimalist High-End Look */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-10 md:pt-12 w-full max-w-3xl border-t border-white/5 mt-10 mb-16">
            
            <div className="flex flex-col items-center group">
                <div className="flex items-center gap-3 mb-2 text-medical-teal">
                    <Award size={18} />
                    <span className="text-[10px] font-mono tracking-[0.2em]">STATUS</span>
                </div>
                <span className="text-xl font-serif text-white tracking-wide">Medical Core</span>
            </div>

            <div className="flex flex-col items-center group">
                <div className="flex items-center gap-3 mb-2 text-medical-teal">
                    <ShieldCheck size={18} />
                    <span className="text-[10px] font-mono tracking-[0.2em]">AUTHORITY</span>
                </div>
                <span className="text-xl font-serif text-white tracking-wide">Verified</span>
            </div>

            <div className="flex flex-col items-center group">
                <div className="flex items-center gap-3 mb-2 text-medical-teal">
                    <BrainCircuit size={18} />
                    <span className="text-[10px] font-mono tracking-[0.2em]">STRATEGY</span>
                </div>
                <span className="text-xl font-serif text-white tracking-wide">High Ticket</span>
            </div>
        </div>

        {/* Image Display - Moved here as requested (After Strategy/High Ticket) */}
        <div className="relative w-full max-w-[280px] aspect-[4/5] md:w-80 md:h-[30rem] group perspective-1000 mb-12">
            
            {/* Minimalist Frame - Luxury Style */}
            <div className={`absolute -top-6 -left-6 w-16 h-16 md:w-20 md:h-20 border-t border-l border-white/10 transition-colors duration-700`}></div>
            <div className={`absolute -bottom-6 -right-6 w-16 h-16 md:w-20 md:h-20 border-b border-r border-white/10 transition-colors duration-700`}></div>

            {/* Profile Image Wrapper */}
            <div className="w-full h-full overflow-hidden bg-zinc-950 relative z-10 shadow-2xl grayscale-[30%] hover:grayscale-0 transition-all duration-1000">
                <img 
                    src={OP_CLINIC_IMG} 
                    alt="Pedro Freitas Operator" 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000"
                />
                {/* Subtle noise overlay for texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            </div>

            {/* Floating ID Tag */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-40 w-max">
                <Fingerprint size={24} className="text-gray-600" />
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-500">
                    FOUNDER // P.FREITAS
                </div>
            </div>
        </div>

        {/* Signature */}
        <div className="pt-8 opacity-40 flex flex-col items-center gap-4">
            <span className="font-serif italic text-2xl">Pedro Freitas</span>
            <div className="text-[10px] font-mono tracking-[0.3em] text-gray-400">
                EST. 2026 // FREITAS LAB
            </div>
        </div>

      </div>
    </section>
  );
};

export default Operator;