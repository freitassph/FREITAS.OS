import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const bootSequence = [
  "INITIALIZING...",
  "SYSTEM_READY."
];

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let delay = 0;
    // EXTREME OPTIMIZATION: Reduced from 1500ms to 150ms.
    // We want the aesthetic "flash" but zero user waiting time.
    const totalDuration = 150; 
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
    }, totalDuration + 50);

  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-noir text-xs font-mono text-white pointer-events-none"
    >
        <div className="flex flex-col items-center gap-6">
            <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 border-t border-medical-teal animate-spin rounded-full" style={{ animationDuration: '0.4s' }}></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
        </div>
    </motion.div>
  );
};

export default Preloader;