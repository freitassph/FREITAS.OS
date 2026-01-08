import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const bootSequence = [
  "INITIALIZING_FREITAS_OS...",
  "CONNECTING_TO_MEDICAL_DATABASE...",
  "ANALYZING_MARKET_PATTERNS...",
  "LOADING_STRATEGIC_FRAMEWORKS...",
  "OPTIMIZING_NEURAL_ASSETS...",
  "VERIFYING_AUTHORITY_PROTOCOLS...",
  "SYSTEM_READY."
];

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let delay = 0;
    const totalDuration = 1500; // Faster boot for better UX
    const step = totalDuration / bootSequence.length;

    bootSequence.forEach((line, index) => {
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, delay);
      delay += step; 
    });

    setTimeout(() => {
       onComplete();
    }, totalDuration + 300);

  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-noir text-xs font-mono text-white"
    >
        <div className="flex flex-col items-center gap-6">
            <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 border-t border-medical-teal animate-spin rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            <div className="h-6 overflow-hidden flex flex-col items-center">
                 <span className="text-medical-teal tracking-[0.3em] uppercase animate-pulse">
                     {lines[lines.length - 1] || "LOADING..."}
                 </span>
            </div>
        </div>
    </motion.div>
  );
};

export default Preloader;