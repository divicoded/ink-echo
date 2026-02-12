import React, { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Emotion, Poem } from './types';
import { POEMS, THEMES } from './constants';
import AmbientBackground from './components/AmbientBackground';
import PoemCard from './components/PoemCard';
import PoemModal from './components/PoemModal';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fake loading time for atmosphere
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Theme logic: If reading a poem, use its emotion. Otherwise use 'All' (default).
  const activeTheme = useMemo(() => {
    const themeKey = selectedPoem ? selectedPoem.emotion : 'All';
    return THEMES[themeKey] || THEMES['All'];
  }, [selectedPoem]);

  const isReading = !!selectedPoem;

  return (
    <div className="min-h-screen text-white selection:bg-white/20 selection:text-white overflow-hidden bg-[#050505]">
      
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {/* Cinematic Noise & Background */}
      <div className="noise-overlay" />
      <AmbientBackground theme={activeTheme} mode={selectedPoem?.emotion || 'All'} />
      
      {/* Geometric Overlay for App Depth */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10%" cy="20%" r="300" stroke="white" strokeWidth="1" fill="none" />
            <line x1="0" y1="80%" x2="100%" y2="20%" stroke="white" strokeWidth="1" />
            <circle cx="90%" cy="90%" r="400" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      {/* Main Container - Blurs and fades when reading */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`
            relative z-10 max-w-screen-xl mx-auto min-h-screen flex flex-col
            transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]
            ${isReading ? 'blur-xl opacity-0 scale-95 pointer-events-none grayscale' : 'blur-0 opacity-100 scale-100 grayscale-0'}
        `}
      >
        
        {/* Cinematic Header */}
        <header className="pt-24 pb-20 px-6 md:px-12 flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 2.6 }}
                className="mb-6"
            >
                <h1 className="font-display text-5xl md:text-8xl tracking-tight font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/40">
                    InkEcho
                </h1>
            </motion.div>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1.5 }}
                className="font-serif text-lg md:text-2xl text-white/50 italic max-w-md leading-relaxed"
            >
                "Where ink becomes voice, <br/>and voice becomes echo."
            </motion.p>
        </header>

        {/* Poems Stream */}
        <main className="flex-1 px-4 md:px-24 lg:px-48 pb-48">
          <motion.div layout className="flex flex-col w-full">
            <AnimatePresence mode='popLayout'>
              {POEMS.map((poem, idx) => (
                <PoemCard 
                  key={poem.title} 
                  index={idx}
                  poem={poem} 
                  theme={THEMES[poem.emotion] || THEMES['All']}
                  onClick={() => setSelectedPoem(poem)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </main>

        {/* Minimal Footer */}
        <footer className="fixed bottom-8 left-0 right-0 text-center pointer-events-none mix-blend-difference z-0">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-30">
            Anthology v2.0
          </p>
        </footer>
      </motion.div>

      {/* Reading Modal */}
      <PoemModal 
        poem={selectedPoem} 
        theme={activeTheme} 
        onClose={() => setSelectedPoem(null)} 
      />

    </div>
  );
};

export default App;