/**
 * FREITAS.OS // THE NEXUS INTERFACE
 * Classificação: Ultra-Premium / Medical-Futurism
 * Conceito: "A Sala de Cirurgia Digital"
 * 
 * Main Application Entry Point
 * Architecture: Neuro-Adaptive Interface
 */

import React, { useState } from 'react';
import { AppMode } from './types';
import Hero from './components/Hero';
import Operator from './components/Operator';
import Modules from './components/Modules';
import Terminal from './components/Terminal';
import Footer from './components/Footer';
import NeuralBackground from './components/NeuralBackground';

const App: React.FC = () => {
  // Locked to CLINIC mode (Single Mode Application)
  const [mode] = useState<AppMode>(AppMode.CLINIC);

  return (
    <main className="relative min-h-[100dvh] bg-noir text-gray-200 selection:bg-medical-teal/20 selection:text-white">
      
      {/* 1. Cinematic Noise Layer */}
      <div className="noise-bg" />

      {/* 2. Scanline Overlay (Subtle) */}
      <div className="scanline-overlay pointer-events-none" />
      
      {/* Background: Neural Particles */}
      <NeuralBackground mode={mode} />

      {/* Main Content */}
      <div className="relative z-10 transition-colors duration-700">
        <Hero mode={mode} />
        <Operator mode={mode} />
        <Modules mode={mode} />
        <Terminal mode={mode} />
        <Footer mode={mode} />
      </div>

      {/* Ambient Lighting - Sterile Surgical Glow */}
      <div 
          className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 opacity-20"
          style={{ background: 'radial-gradient(circle at 50% 40%, rgba(20, 184, 166, 0.08), transparent 70%)' }}
      />
    </main>
  );
};

export default App;