import React, { useEffect, useState } from 'react';
import { AppMode } from '../types';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CursorProps {
  mode: AppMode;
}

const Cursor: React.FC<CursorProps> = ({ mode }) => {
  // Using MotionValues instead of State prevents re-renders on every pixel move
  // This makes the cursor absurdly smooth (60/144fps)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for the "trailing" circle (smooth follow)
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return;
    }

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Intelligent hover detection
      const isClickable = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-hoverable="true"]') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  const accentColor = mode === AppMode.DEV ? 'border-patient-blue' : 'border-pale-gold';

  return (
    <>
      {/* 1. The Precision Crosshair (Instant movement, no lag) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="h-4 w-4 flex items-center justify-center">
            <div className="w-[1px] h-3 bg-white"></div>
            <div className="absolute w-3 h-[1px] bg-white"></div>
        </div>
      </motion.div>

      {/* 2. The Magnetic Halo (Smooth physics) */}
      <motion.div
        className={`pointer-events-none fixed top-0 left-0 z-[9998] border ${accentColor} rounded-full transition-opacity duration-300`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          height: isHovering ? 40 : 20,
          width: isHovering ? 40 : 20,
          opacity: isHovering ? 1 : 0.3,
          backgroundColor: isHovering ? (mode === AppMode.DEV ? 'rgba(6,182,212,0.1)' : 'rgba(251,191,36,0.1)') : 'transparent',
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />
    </>
  );
};

export default Cursor;