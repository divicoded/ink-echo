import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { Poem, ThemeConfig } from '../types';
import { ArrowLeft } from 'lucide-react';
import WhisperReader from './WhisperReader';

interface Props {
  poem: Poem | null;
  theme: ThemeConfig;
  onClose: () => void;
}

const PoemModal: React.FC<Props> = ({ poem, theme, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll within the modal container, not the window
  const { scrollYProgress } = useScroll({ container: containerRef });
  
  // Smooth out the raw scroll value for a fluid feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map progress to percentage for the sparkle position
  const sparkPosition = useTransform(smoothProgress, value => `${value * 100}%`);

  useEffect(() => {
    if (poem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [poem]);

  if (!poem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
        className="fixed inset-0 z-[100] flex flex-col"
      >
        {/* Background Layer */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md -z-10" />

        {/* Cinematic Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 z-[60] pointer-events-none mix-blend-screen">
          {/* Subtle Track */}
          <div className="absolute inset-0 bg-white/5 opacity-50" />
          
          {/* Main Gradient Bar - Fades in from left */}
          <motion.div
            className="absolute inset-0 origin-left"
            style={{ 
              scaleX: smoothProgress, 
              background: `linear-gradient(90deg, transparent, ${theme.accent})`,
              opacity: 0.8
            }}
          />
          
          {/* Leading Light Trail / Blur */}
          <motion.div
            className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent to-white opacity-40 blur-[4px]"
            style={{ 
                left: sparkPosition, 
                x: '-100%' 
            }}
          />
          
          {/* Intense Tip Point (The Ink Drop) */}
          <motion.div
             className="absolute top-1/2 -translate-y-1/2 h-[3px] w-[3px] rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"
             style={{
                 left: sparkPosition,
                 x: '-50%' // Center on the exact point
             }}
          />
        </div>

        {/* Liquid Gas Return Button & Controls */}
        <div className="fixed top-8 left-8 right-8 z-50 flex justify-between items-center pointer-events-none">
             <div className="pointer-events-auto">
                 <button 
                    onClick={onClose}
                    className="
                        group relative flex items-center gap-3 px-6 py-3 
                        rounded-full overflow-hidden 
                        bg-white/5 border border-white/10
                        transition-all duration-500
                        hover:border-white/20 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
                    "
                 >
                    {/* Liquid Gas Texture Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]" />
                        <div className="absolute -inset-full top-0 block h-full w-full -rotate-45 bg-gradient-to-r from-transparent to-white/10 opacity-40 group-hover:animate-[flow_3s_ease-in-out_infinite]" />
                    </div>
                    
                    {/* Button Content */}
                    <ArrowLeft size={16} className="text-white/70 group-hover:text-white group-hover:-translate-x-1 transition-all duration-300 relative z-10" />
                    <span className="text-xs font-sans tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors relative z-10">
                        Return
                    </span>
                 </button>
             </div>
             
             <div className="text-xs font-serif italic text-white/40 hidden md:block">
                Reading Mode
             </div>
        </div>

        {/* Content Container - Attached ref here for scroll tracking */}
        <div 
            ref={containerRef}
            className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden"
        >
            <div className="min-h-screen w-full max-w-5xl mx-auto px-6 py-32 flex flex-col items-center">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-center mb-20 md:mb-32"
                >
                    <span 
                        className="block text-xs md:text-sm font-sans tracking-[0.4em] uppercase text-white/40 mb-6"
                        style={{ color: theme.accent }}
                    >
                        {poem.category}
                    </span>
                    <motion.h1 
                        layoutId={`title-${poem.title}`}
                        className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 drop-shadow-2xl"
                    >
                        {poem.title}
                    </motion.h1>
                    <div className="w-px h-24 bg-gradient-to-b from-white/0 via-white/30 to-white/0 mx-auto" />
                </motion.div>

                {/* The Poem */}
                <WhisperReader text={poem.body} theme={theme} isActive={true} />

                {/* Footer Credits */}
                <div className="mt-32 text-center opacity-30 font-sans text-xs tracking-widest">
                    END OF ENTRY
                </div>
            </div>
        </div>

        {/* Inline styles for custom animations */}
        <style>{`
            @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
            @keyframes flow {
                0% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
                100% { transform: translateX(-50%) translateY(-50%) rotate(360deg); }
            }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
};

export default PoemModal;