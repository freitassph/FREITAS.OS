import React, { useState, useEffect } from 'react';
import { AppMode } from '../types';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { LocateFixed, Clock, Activity, ArrowDown, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  mode: AppMode;
}

const CLINIC_IMAGE = "https://i.ibb.co/HLqRSjcr/BD59-BA87-F4-D3-462-D-A9-EA-E1-D61-F9-AE0-EF.png";

const Hero: React.FC<HeroProps> = ({ mode }) => {
  const [timeStr, setTimeStr] = useState('');
  
  // Desktop Parallax Logic (Mouse)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  // Mobile Parallax Logic (Scroll)
  const { scrollY } = useScroll();
  const mobileY = useTransform(scrollY, [0, 300], [0, 30]);

  // Using numbers for rotation to ensure correct MotionValue<number> type inference
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-2, 2]);
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    const xPct = (mouseXPos / width) - 0.5;
    const yPct = (mouseYPos / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const scrollToModules = () => {
    const modulesSection = document.getElementById('modules-section');
    if (modulesSection) {
      modulesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const accentColor = 'text-medical-teal';
  const gradientColor = 'from-teal-500/10';

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 md:px-8 py-20 lg:py-0"
    >
      {/* Refined Background Ambience - Reduced opacity on mobile for text readability */}
      <div className={`absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-b ${gradientColor} to-transparent blur-[120px] md:blur-[150px] opacity-5 md:opacity-10 pointer-events-none`} />
      
      {/* Header Info - Improved positioning for Tablets */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 lg:top-12 lg:right-12 z-30 flex items-center gap-4 md:gap-6 opacity-80 bg-black/20 backdrop-blur-sm p-2 rounded-lg border border-white/5 lg:bg-transparent lg:border-none lg:backdrop-blur-none">
        {/* Location hidden on Tablet (md) to prevent overlap, visible on Desktop (lg) */}
        <div className="hidden lg:flex flex-col items-end">
            <span className="text-[9px] font-mono text-gray-500 tracking-widest uppercase">Location</span>
            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-300 tracking-widest">
               <span>BRASIL_HQ</span>
               <LocateFixed size={10} className={accentColor} />
            </div>
        </div>
        
        {/* Divider visible only on Desktop */}
        <div className="h-6 w-px bg-white/20 hidden lg:block"></div>
        
        <div className="flex flex-col items-end">
            <span className="text-[9px] font-mono text-gray-500 tracking-widest uppercase">Time_Sync</span>
            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-300 tracking-widest">
               <span>{timeStr}</span>
               <Clock size={10} className={accentColor} />
            </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Text Content */}
        <div className="order-1 lg:col-span-7 text-center lg:text-left space-y-6 md:space-y-8 relative flex flex-col items-center lg:items-start pt-10 md:pt-0">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-2 w-full"
          >
            {/* Tagline - UPDATED FOR HIGH TICKET AUTHORITY */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2 md:mb-4">
                <span className="h-px w-8 bg-medical-teal"></span>
                <span className="text-[9px] md:text-[10px] font-mono tracking-[0.15em] md:tracking-[0.2em] text-medical-teal uppercase">
                    Sistema Operacional de Elite para Clínicas High-Ticket
                </span>
            </div>

            {/* Headline - Fluid typography */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-[4rem] lg:text-[5.5rem] leading-[1.1] md:leading-[1.1] lg:leading-[1] text-white tracking-tight">
              Arquitetura Digital <br className="hidden lg:block"/> para Médicos.
            </h1>
            
            {/* Sub-headline */}
            <div className="relative pt-4 md:pt-8 pb-2">
               <p className="text-lg md:text-2xl lg:text-3xl font-light tracking-wide flex flex-col md:block items-center lg:items-start gap-1 md:gap-0">
                  <span className="text-gray-300">Converta Cliques em</span>
                  <span className="hidden md:inline">&nbsp;</span>
                  <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-medical-teal via-teal-200 to-medical-teal drop-shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                    Pacientes Particulares.
                  </span>
               </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-6 justify-center lg:justify-start max-w-2xl"
          >
            <p className="font-sans text-sm md:text-base leading-relaxed text-gray-400 font-light px-4 md:px-0">
              Desenvolvemos Landing Pages blindadas eticamente e sistemas de triagem via IA. A ponte técnica entre sua especialidade e a jornada do paciente.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="pt-4 md:pt-6 w-full md:w-auto flex flex-col items-center lg:items-start gap-4"
          >
             <button 
                onClick={scrollToModules}
                className="group relative px-8 py-4 md:px-10 md:py-5 bg-white text-noir font-mono text-[10px] md:text-xs font-bold tracking-[0.2em] overflow-hidden hover:bg-gray-100 transition-all duration-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.4)] active:scale-95 w-full md:w-auto mx-4 md:mx-0"
             >
                <div className="relative z-10 flex items-center justify-center gap-4">
                   <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-teal opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-medical-teal"></span>
                   </span>
                   <span>SOLICITAR DIAGNÓSTICO TÉCNICO</span>
                   <ArrowDown size={14} className="text-black transition-transform group-hover:translate-x-1" />
                </div>
                {/* Tech overlay effect */}
                <div className="absolute top-0 left-0 w-1 h-full bg-medical-teal transition-all duration-300 group-hover:w-full opacity-10"></div>
             </button>

             {/* URGENCY TRIGGER - SCARCITY */}
             <div className="flex items-center gap-2.5 opacity-90">
                 <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                 </span>
                 <span className="text-[9px] font-mono text-gray-400/80 tracking-widest uppercase">
                    Apenas 2 vagas para auditoria este mês
                 </span>
             </div>
          </motion.div>
        </div>

        {/* Visual - Optimized for cleaner look on all devices */}
        <div className="order-2 lg:col-span-5 flex justify-center lg:justify-end perspective-1000 mt-8 lg:mt-0 w-full px-4 md:px-0">
          <motion.div 
             style={{ 
               rotateX, 
               rotateY, 
               y: mobileY, 
               transformStyle: "preserve-3d" 
             }}
             className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] md:w-[400px] md:h-[550px] group"
          >
             {/* Main Frame - Premium Glass Aesthetic (Unified with Operator Mobile Style) */}
             <div className="relative h-full w-full p-1.5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                
                {/* Inner Image Container */}
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-zinc-900">
                    <img 
                        src={CLINIC_IMAGE}
                        alt="Pedro Freitas"
                        loading="eager"
                        // @ts-ignore
                        fetchPriority="high"
                        decoding="async"
                        className="h-full w-full object-cover object-center opacity-90 group-hover:opacity-100 transition-all duration-700 grayscale-[10%] group-hover:scale-105"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                        }}
                    />
                    
                    {/* Clean Overlay - Bottom Gradient only (Matching Operator) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 pointer-events-none"></div>

                    {/* Top Right Tech Badge (Matching Operator Structure) */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-black/60 backdrop-blur rounded border border-white/10 z-20">
                        <span className="w-1.5 h-1.5 rounded-full bg-medical-teal animate-pulse"></span>
                        <span className="text-[8px] font-mono text-white/80 uppercase tracking-widest">Live Feed</span>
                    </div>

                    {/* Bottom Info - Integrated cleanly (Matching Operator Structure) */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20">
                         <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-medical-teal/10 rounded border border-medical-teal/20">
                                <Activity size={14} className="text-medical-teal" />
                            </div>
                            <div>
                                <div className="text-[9px] font-mono text-gray-400 uppercase tracking-wider">Architect</div>
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
             
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;