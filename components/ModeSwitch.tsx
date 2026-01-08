import React from 'react';
import { AppMode } from '../types';
import { motion } from 'framer-motion';

interface ModeSwitchProps {
  currentMode: AppMode;
  onToggle: (mode: AppMode) => void;
}

const ModeSwitch: React.FC<ModeSwitchProps> = ({ currentMode, onToggle }) => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 bg-noir/90 px-6 py-3 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl" data-hoverable="true">
      <button
        onClick={() => onToggle(AppMode.DEV)}
        className={`relative text-[10px] md:text-xs font-mono tracking-widest transition-colors duration-300 ${
          currentMode === AppMode.DEV ? 'text-patient-blue font-bold drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-gray-600 hover:text-gray-400'
        }`}
      >
        [DEV_MODE]
        {currentMode === AppMode.DEV && (
          <motion.div layoutId="activeMode" className="absolute -bottom-1 left-0 right-0 h-[1px] bg-patient-blue shadow-[0_0_10px_rgba(6,182,212,1)]" />
        )}
      </button>

      <div className="h-4 w-[1px] bg-white/10" />

      <button
        onClick={() => onToggle(AppMode.CLINIC)}
        className={`relative text-[10px] md:text-xs font-mono tracking-widest transition-colors duration-300 ${
          currentMode === AppMode.CLINIC ? 'text-pale-gold font-bold drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'text-gray-600 hover:text-gray-400'
        }`}
      >
        [CLINIC_MODE]
        {currentMode === AppMode.CLINIC && (
          <motion.div layoutId="activeMode" className="absolute -bottom-1 left-0 right-0 h-[1px] bg-pale-gold shadow-[0_0_10px_rgba(251,191,36,1)]" />
        )}
      </button>
    </div>
  );
};

export default ModeSwitch;