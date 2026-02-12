import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-noise opacity-[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      
      {/* Central Breathing Orb */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute w-64 h-64 bg-white/5 rounded-full blur-[80px]"
      />

      {/* Text Container */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="overflow-hidden">
            <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-display text-4xl md:text-5xl text-white/90 tracking-tight"
            >
            InkEcho
            </motion.h1>
        </div>
        
        <div className="h-px w-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
             style={{ animation: 'expandWidth 2s ease-out forwards' }} 
        />
        <style>{`
            @keyframes expandWidth {
                to { width: 100px; }
            }
        `}</style>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-serif italic text-white/40 text-sm tracking-widest"
        >
          gathering thoughts...
        </motion.p>
      </div>

      {/* Loading Progress Line */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-white/10 w-full origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default LoadingScreen;