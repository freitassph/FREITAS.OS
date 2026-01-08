import React, { useRef, useEffect } from 'react';
import { AppMode } from '../types';

interface NeuralBackgroundProps {
  mode: AppMode;
}

const NeuralBackground: React.FC<NeuralBackgroundProps> = ({ mode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // PERFORMANCE: Detect device capabilities
    const dpr = window.devicePixelRatio || 1;
    const isMobile = window.innerWidth < 768;
    
    // Resize handler with Retina support
    const setSize = () => {
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        ctx.scale(dpr, dpr);
    };
    setSize();

    let animationFrameId: number;
    const particles: Particle[] = [];
    
    // CONFIGURATION
    // Fewer particles on mobile for battery saving
    const particleCount = isMobile ? 30 : 70; 
    const connectionDistance = isMobile ? 100 : 160;
    
    const config = {
      color: mode === AppMode.DEV ? 'rgba(6, 182, 212, ' : 'rgba(251, 191, 36, ', 
      speed: mode === AppMode.DEV ? (isMobile ? 0.2 : 0.3) : (isMobile ? 0.4 : 0.6),
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * config.speed;
        this.vy = (Math.random() - 0.5) * config.speed;
        this.size = Math.random() * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0) this.x = window.innerWidth;
        if (this.x > window.innerWidth) this.x = 0;
        if (this.y < 0) this.y = window.innerHeight;
        if (this.y > window.innerHeight) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = config.color + '0.5)';
        ctx.fill();
      }
    }

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Update particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          
          // Optimization: Simple box check before Math.sqrt
          if (Math.abs(dx) > connectionDistance || Math.abs(dy) > connectionDistance) continue;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = config.color + (1 - distance / connectionDistance) * 0.15 + ')';
            ctx.lineWidth = 0.5; // Thinner lines for elegance
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    // Debounce resize
    let resizeTimeout: any;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
          setSize();
          init();
      }, 200);
    }

    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mode]); 

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 opacity-40 pointer-events-none transition-opacity duration-1000"
    />
  );
};

export default NeuralBackground;