import React, { useEffect, useRef } from 'react';
import { AppMode } from '../types';
import { HardDrive, Cpu, Wifi, Zap, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

interface TerminalProps {
  mode: AppMode;
}

const ECGGraph: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Resize handling with DPR for sharp lines on mobile
        const resize = () => {
            const parent = canvas.parentElement;
            if(parent) {
                const dpr = window.devicePixelRatio || 1;
                const rect = parent.getBoundingClientRect();
                
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;
                
                // Style width/height must match the display size
                canvas.style.width = `${rect.width}px`;
                canvas.style.height = `${rect.height}px`;
                
                ctx.scale(dpr, dpr);
            }
        };
        resize();
        window.addEventListener('resize', resize);

        const dataPoints: number[] = [];
        const maxPoints = 80; // Resolution
        for(let i=0; i<maxPoints; i++) dataPoints.push(0.5); // Flatline centered

        let frameId: number;
        let t = 0;

        const draw = () => {
            t += 0.08;
            
            // Heartbeat Logic (PQRST wave simulation)
            let val = 0.5;
            const cycle = t % (Math.PI * 2);
            
            // Simple spike sequence
            if (cycle > 5.0 && cycle < 5.2) {
                 val = 0.5 - Math.sin((cycle - 5.0) * Math.PI * 10) * 0.4;
            } else if (cycle > 5.2 && cycle < 5.4) {
                 val = 0.5 + Math.sin((cycle - 5.2) * Math.PI * 10) * 0.2;
            } else {
                 val = 0.5 + (Math.random() - 0.5) * 0.01; // Tiny noise
            }
            
            dataPoints.push(val);
            if(dataPoints.length > maxPoints) dataPoints.shift();

            // Need to get current logical width/height for drawing calculation
            const width = canvas.width / (window.devicePixelRatio || 1);
            const height = canvas.height / (window.devicePixelRatio || 1);

            ctx.clearRect(0, 0, width, height);
            ctx.beginPath();
            ctx.strokeStyle = '#14b8a6'; // medical-teal
            ctx.lineWidth = 1.5;
            ctx.lineJoin = 'round';
            
            const step = width / (maxPoints - 1);
            
            for(let i=0; i<dataPoints.length; i++) {
                const x = i * step;
                const y = dataPoints[i] * height;
                if(i===0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Leading dot
            const lastX = (dataPoints.length - 1) * step;
            const lastY = dataPoints[dataPoints.length - 1] * height;
            
            ctx.beginPath();
            ctx.fillStyle = '#ffffff';
            ctx.arc(lastX, lastY, 1.5, 0, Math.PI * 2);
            ctx.fill();
            
            // Glow effect
            ctx.shadowBlur = 4;
            ctx.shadowColor = '#14b8a6';

            frameId = requestAnimationFrame(draw);
        };
        
        draw();

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <div className="h-6 w-20 relative overflow-hidden opacity-80"><canvas ref={canvasRef} className="absolute inset-0 block" /></div>;
}

const Terminal: React.FC<TerminalProps> = ({ mode }) => {
  // Metrics focused on Protocol Performance (Directly linked to Modules)
  const systems = [
    {
      id: 1,
      label: "CONVERSION INFRA", // Linked to Module 01 (Interfaces)
      status: "OPTIMIZED",
      detail: "Neuro-Design",
      icon: Zap
    },
    {
      id: 2,
      label: "AI SECRETARY", // Linked to Module 02 (Secretária de IA)
      status: "ACTIVE",
      detail: "Auto-Booking",
      icon: Cpu
    },
    {
      id: 3,
      label: "STRATEGIC AI", // Linked to Module 03 (Mentoria Estratégica)
      status: "READY",
      detail: "Workflow Audit",
      icon: Bot
    }
  ];

  return (
    <section className="py-16 relative z-20 w-full">
      
      {/* Decorative Top Line - subtle integration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Title / Status */}
            <div className="flex items-center gap-4 pl-2 min-w-fit w-full lg:w-auto justify-center lg:justify-start">
                <div className="p-2.5 bg-zinc-900/50 rounded-lg border border-white/5 shadow-[0_0_15px_rgba(20,184,166,0.05)]">
                    <HardDrive size={16} className="text-medical-teal opacity-80" />
                </div>
                <div>
                    <h3 className="text-[10px] font-mono font-bold text-gray-500 tracking-widest uppercase mb-1">
                        System Status
                    </h3>
                    <div className="flex items-center gap-3">
                         <div className="flex items-center gap-2">
                             <span className="relative flex h-1.5 w-1.5">
                               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                               <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                             </span>
                             <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Operational</span>
                         </div>
                         {/* Live Vitals Monitor */}
                         <div className="hidden sm:block border-l border-white/10 pl-3">
                            <ECGGraph />
                         </div>
                    </div>
                </div>
            </div>

            {/* Metrics Strip */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                {systems.map((sys, i) => (
                    <motion.div 
                        key={sys.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-black/20 backdrop-blur-sm border border-white/5 p-4 rounded hover:bg-white/5 hover:border-white/10 transition-all duration-300 flex items-center justify-between group"
                    >
                        <div className="flex items-center gap-3">
                            <sys.icon size={14} className="text-gray-600 group-hover:text-medical-teal transition-colors duration-300" />
                            <div>
                                <div className="text-[10px] font-mono font-bold text-gray-400 group-hover:text-gray-200 tracking-wider uppercase transition-colors">{sys.label}</div>
                                <div className="text-[9px] font-mono text-gray-700 group-hover:text-gray-500 uppercase transition-colors">{sys.detail}</div>
                            </div>
                        </div>
                        <div className="text-[9px] font-mono text-medical-teal/60 group-hover:text-medical-teal/90 bg-medical-teal/5 px-2 py-1 rounded border border-medical-teal/5 transition-colors">
                            {sys.status}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Live Indicator - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:flex flex-col items-end opacity-30 pr-2 min-w-fit">
                <Wifi size={14} className="text-gray-500 mb-1" />
                <span className="text-[9px] font-mono text-gray-600">LATENCY: 12ms</span>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Terminal;