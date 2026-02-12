import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeConfig } from '../types';

interface Props {
  text: string;
  theme: ThemeConfig;
  isActive: boolean;
}

// Sub-component for individual word interaction
const InteractiveWord = ({ word, theme }: { word: string; theme: ThemeConfig }) => {
  const [ripples, setRipples] = useState<{ id: number }[]>([]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const id = Date.now();
    setRipples((prev) => [...prev, { id }]);
  };

  const removeRipple = (id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <span 
      className="relative inline-block cursor-pointer select-none group"
      onClick={handleClick}
    >
      {/* The Text Itself */}
      <motion.span 
        className="relative z-10 transition-colors duration-500 ease-out"
        whileHover={{ 
            color: theme.accent, 
            textShadow: `0 0 12px ${theme.accent}60` // Soft glow on hover
        }}
        whileTap={{ scale: 0.95, color: '#ffffff' }}
      >
        {word}
      </motion.span>

      {/* Ripple Animations */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0.5, opacity: 0.6 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          onAnimationComplete={() => removeRipple(ripple.id)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full pointer-events-none z-0"
          style={{ 
            background: `radial-gradient(circle, ${theme.particleColor} 0%, transparent 70%)`,
            filter: 'blur(3px)'
          }}
        />
      ))}
    </span>
  );
};

const WhisperReader: React.FC<Props> = ({ text, theme, isActive }) => {
  const lines = text.split('\n');
  
  return (
    <div className="flex flex-col items-center py-20 md:py-32 w-full">
      {lines.map((line, index) => {
        if (!line.trim()) return <div key={index} className="h-12 md:h-16" />; // Spacing for stanzas

        // Split line into words to enable individual interaction
        // We render them with explicit spaces to preserve natural text flow
        const words = line.split(' ');

        return (
          <motion.p
            key={index}
            initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ margin: "-10% 0px -10% 0px", amount: 0.5 }}
            transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-2xl md:text-3xl lg:text-4xl text-center leading-[1.8] md:leading-[2] tracking-wide text-white/90 max-w-3xl my-4 md:my-6"
          >
            {words.map((word, wordIndex) => (
                <React.Fragment key={wordIndex}>
                    {/* Only interactive if it's actual text, not empty string from double spaces */}
                    {word ? <InteractiveWord word={word} theme={theme} /> : null}
                    {/* Restore the space between words */}
                    {wordIndex < words.length - 1 && ' '} 
                </React.Fragment>
            ))}
          </motion.p>
        );
      })}
      
      {/* End mark */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-20 text-white/30 text-xl"
      >
        ✦
      </motion.div>
    </div>
  );
};

export default WhisperReader;