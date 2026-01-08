import React from 'react';
import { motion } from 'framer-motion';

interface ScrambleTextProps {
  text: string;
  className?: string;
  trigger?: boolean; // Prop kept for compatibility, triggers reset if needed
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ 
  text, 
  className = "", 
  trigger
}) => {
  // Using a clean Typewriter effect instead of random scrambling
  // This is more readable and "premium" while staying tech-focused.
  
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Controls typing speed
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.span 
      key={text + (trigger ? '_t' : '_f')} // Forces re-render on text change
      className={`${className} inline-block`}
      variants={sentenceVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default ScrambleText;