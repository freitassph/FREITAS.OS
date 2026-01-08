import React, { useState, useEffect } from 'react';
import { AppMode } from '../types';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { LocateFixed, Clock, Activity, ShieldCheck, TrendingUp, ArrowDown } from 'lucide-react';

interface HeroProps {
  mode: AppMode;
}

const CLINIC_IMAGE = "https://i.ibb.co/x92fkfH/Gemini-Generated-Image-c83r4dc83r4dc83r.png";

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

  // Define background gradient transform explicitly
  // Using explicit backgroundImage in style prop to avoid type conflicts
  const glassBackground = useTransform(
    mouseX, 
    [-0.5, 0.5], 
    [
      "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.05) 45%, transparent 50%)", 
      "linear-gradient(105deg, transparent 50%, rgba(255,255,255,0.05) 60%, transparent 70%)"
    ]
  );
  
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
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 md:px-6 py-20 md:py-0"
    >
      {/* Refined Background Ambience */}
      <div className={`absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-b ${gradientColor} to-transparent blur-[150px] opacity-10 pointer-events-none`} />
      
      {/* Header Info */}
      <div className="absolute top-8 right-6 md:top-12 md:right-12 z-20 flex items-center gap-6 opacity-60 mix-blend-plus-lighter">
        <div className="hidden md:flex flex-col items-end">
            <span className="text-[9px] font-mono text-gray-500 tracking-widest uppercase">Location</span>
            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-300 tracking-widest">
               <span>BRASIL_HQ</span>
               <LocateFixed size={10} className={accentColor} />
            </div>
        </div>
        <div className="h-6 w-px bg-white/20 hidden md:block"></div>
        <div className="flex flex-col items-end">
            <span className="text-[9px] font-mono text-gray-500 tracking-widest uppercase">Time_Sync</span>
            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-300 tracking-widest">
               <span>{timeStr}</span>
               <Clock size={10} className={accentColor} />
            </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10 pt-16 md:pt-0">
        
        {/* Text Content */}
        <div className="order-1 md:col-span-7 text-center md:text-left space-y-8 relative flex flex-col items-center md:items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 w-full"
          >
            {/* Tagline */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <span className="h-px w-8 bg-medical-teal"></span>
                <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-medical-teal uppercase">Medical Web Architecture</span>
            </div>

            <h1 className="font-serif text-[3rem] leading-[1.1] md:text-[5.5rem] md:leading-[0.95] text-white tracking-tight">
              Sua Clínica.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 pb-2">
                 Reinventada pela IA.
              </span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row items-center gap-6 justify-center md:justify-start max-w-xl"
          >
            <p className="font-sans text-sm md:text-base leading-relaxed text-gray-400 font-light">
              Infraestrutura Digital de Elite & Agentes Inteligentes. Desenvolvemos WebApps e Landing Pages de alta conversão e implementamos IA para captar pacientes High-Ticket enquanto você opera.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="pt-6 w-full md:w-auto flex justify-center md:justify-start"
          >
             <button 
                onClick={scrollToModules}
                className="group relative px-10 py-5 bg-white text-noir font-mono text-xs font-bold tracking-[0.2em] overflow-hidden hover:bg-gray-100 transition-all duration-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.4)]"
             >
                <div className="relative z-10 flex items-center gap-4">
                   <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-teal opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-medical-teal"></span>
                   </span>
                   <span>INICIAR NEURO-ARQUITETURA</span>
                   <ArrowDown size={14} className="text-black transition-transform group-hover:translate-y-1" />
                </div>
                {/* Tech overlay effect */}
                <div className="absolute top-0 left-0 w-1 h-full bg-medical-teal transition-all duration-300 group-hover:w-full opacity-10"></div>
             </button>
          </motion.div>
        </div>

        {/* Visual */}
        <div className="order-2 md:col-span-5 flex justify-center md:justify-end perspective-1000 mt-8 md:mt-0 w-full px-4 md:px-0">
          <motion.div 
             style={{ 
               rotateX, 
               rotateY, 
               y: mobileY, 
               transformStyle: "preserve-3d" 
             }}
             className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px]"
          >
             {/* Main Frame */}
             <div className={`relative h-full w-full bg-zinc-900 overflow-hidden border border-white/10 shadow-2xl group`}>
                
                {/* Image */}
                <div className="relative w-full h-full z-10">
                  <img 
                    src={CLINIC_IMAGE}
                    alt="Pedro Freitas"
                    className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale-[20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Glass Reflection Overlay */}
                <motion.div 
                   style={{ backgroundImage: glassBackground }}
                   className="absolute inset-0 z-30 pointer-events-none"
                />

                {/* HUD Elements */}
                <div className="absolute top-6 left-6 z-20">
                    <div className="flex items-center gap-2 mb-1">
                        <Activity size={12} className="text-medical-teal" />
                        <span className="text-[9px] font-mono tracking-widest text-white">AI_AGENTS: ACTIVE</span>
                    </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-20 border-t border-white/20 pt-4 flex justify-between items-center">
                    <div>
                        <div className="text-[9px] font-mono text-gray-400 tracking-widest uppercase mb-1">Architect</div>
                        <div className="font-serif text-white italic">Pedro Freitas</div>
                    </div>
                    <ShieldCheck size={16} className="text-white/50" />
                </div>
             </div>
             
             {/* Floating Cards */}
             <motion.div 
               animate={{ y: [0, -8, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-6 top-32 bg-black/80 backdrop-blur-md border border-white/10 p-4 w-40 z-40 hidden sm:block"
             >
                <div className="flex items-center gap-2 mb-2 text-medical-teal">
                   <TrendingUp size={12} />
                   <span className="text-[9px] font-bold tracking-widest font-mono text-white">BRANDING</span>
                </div>
                <div className="text-2xl text-white font-serif">Authority</div>
                <div className="text-[9px] text-gray-500 mt-1 font-mono">Posicionamento Premium</div>
             </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;