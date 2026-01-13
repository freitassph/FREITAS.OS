/**
 * FREITAS.OS // THE NEXUS INTERFACE
 * Classificação: Ultra-Premium / Medical-Futurism
 * Conceito: "A Sala de Cirurgia Digital"
 * 
 * Main Application Entry Point
 * Architecture: Neuro-Adaptive Interface
 */

import React, { useState, lazy, Suspense } from 'react';
import { AppMode } from './types';
import Hero from './components/Hero';
import NeuralBackground from './components/NeuralBackground';

// PERFORMANCE OPTIMIZATION: Lazy load components below the fold
// This drastically reduces the initial JavaScript bundle size.
const Operator = lazy(() => import('./components/Operator'));
const Tourniquet = lazy(() => import('./components/Tourniquet'));
const Modules = lazy(() => import('./components/Modules'));
const Terminal = lazy(() => import('./components/Terminal'));
const Footer = lazy(() => import('./components/Footer'));

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
        
        {/* Suspense wrapper handles loading state for lazy components */}
        <Suspense fallback={<div className="h-96 w-full flex items-center justify-center text-medical-teal/20 font-mono text-[10px] animate-pulse">LOADING_MODULES...</div>}>
          <Operator mode={mode} />
          <Tourniquet />
          <Modules mode={mode} />
          <Terminal mode={mode} />
          <Footer mode={mode} />
        </Suspense>
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