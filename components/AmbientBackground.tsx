import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeConfig } from '../types';

interface Props {
  theme: ThemeConfig;
  mode: string;
}

// Particle shape generator based on mode
const SemanticParticles = ({ mode, color }: { mode: string; color: string }) => {
  // Generate random particles
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      // Increased duration significantly for "subconscious" feel (40s to 90s)
      duration: Math.random() * 50 + 40, 
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => {
        // Love: Falling Petals (swaying, rounded rects)
        if (mode === 'Love') {
            return (
                <motion.div
                    key={p.id}
                    className="absolute opacity-40 mix-blend-screen"
                    style={{
                        backgroundColor: color,
                        width: p.size * 2,
                        height: p.size * 2,
                        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', // Organic petal shape
                        left: `${p.x}%`,
                        top: -50,
                    }}
                    animate={{
                        y: ['0vh', '120vh'],
                        x: [0, Math.sin(p.id) * 200, 0], // Wider, slower sway
                        rotate: [0, 360],
                        scale: [1, 0.9, 1]
                    }}
                    transition={{
                        duration: p.duration, // Very slow fall
                        ease: "linear",
                        repeat: Infinity,
                        delay: p.delay,
                    }}
                />
            );
        }

        // Melancholy / Longing: Falling Dust (slow, vertical, tiny)
        if (mode === 'Melancholy' || mode === 'Longing') {
            return (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full opacity-30 mix-blend-screen"
                    style={{
                        backgroundColor: color,
                        width: p.size * 0.5,
                        height: p.size * 0.5,
                        left: `${p.x}%`,
                        top: -20,
                    }}
                    animate={{
                        y: ['0vh', '110vh'],
                        opacity: [0, 0.4, 0] // Fade in and out as they fall
                    }}
                    transition={{
                        duration: p.duration * 1.5, // Extremely slow
                        ease: "linear",
                        repeat: Infinity,
                        delay: p.delay,
                    }}
                />
            );
        }

        // Nature: Floating Motes (rising organic shapes)
        if (mode === 'Nature') {
             return (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full opacity-20 mix-blend-overlay"
                    style={{
                        backgroundColor: color,
                        width: p.size * 1.5,
                        height: p.size * 1.5,
                        left: `${p.x}%`,
                        bottom: -20,
                    }}
                    animate={{
                        y: ['0vh', '-120vh'], // Rising
                        x: [0, Math.cos(p.id) * 100], // Gentle drift
                    }}
                    transition={{
                        duration: p.duration,
                        ease: "linear",
                        repeat: Infinity,
                        delay: p.delay,
                    }}
                />
            );
        }

        // Dreams: Twinkling Stars (static positions, sharp pulsing)
        if (mode === 'Dreams') {
            return (
                <motion.div
                    key={p.id}
                    className="absolute bg-white"
                    style={{
                        width: Math.max(1, p.size * 0.4),
                        height: Math.max(1, p.size * 0.4),
                        borderRadius: '50%',
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        boxShadow: `0 0 ${p.size}px ${color}`
                    }}
                    animate={{
                        opacity: [0.1, 0.8, 0.1],
                        scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                        duration: p.duration * 0.1, // Twinkle speed (faster than movement)
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: p.delay,
                    }}
                />
            );
        }

        // Default (All/Reflective): Floating Dust (random drift)
        return (
             <motion.div
                key={p.id}
                className="absolute rounded-full bg-white opacity-[0.08]"
                style={{
                    width: p.size,
                    height: p.size,
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                }}
                animate={{
                    y: [0, -40, 0],
                    x: [0, 30, 0],
                    opacity: [0.05, 0.15, 0.05]
                }}
                transition={{
                    duration: p.duration * 0.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: p.delay,
                }}
            />
        );
      })}
    </div>
  );
};

const AmbientBackground: React.FC<Props> = ({ theme, mode }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={theme.gradient} // Trigger re-render on theme change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
            {/* Deep Base Layer */}
            <div className={`absolute inset-0 bg-gradient-to-b ${theme.gradient} opacity-90`} />

            {/* Faded Geometric Depth Elements */}
            <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] border border-white/10 rounded-full mix-blend-overlay dashed-border" 
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] border-[0.5px] border-white/10 rounded-full mix-blend-overlay" 
                />
                <div className="absolute top-[20%] right-[10%] w-[1px] h-[40vh] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                <div className="absolute bottom-[20%] left-[10%] w-[1px] h-[30vh] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>

            {/* Anime-inspired Glow Orbs - Primary */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, 60, 0],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-20%] left-[-10%] w-[90vw] h-[90vw] rounded-full blur-[130px] mix-blend-screen"
                style={{ background: theme.accent, opacity: 0.15 }}
            />

            {/* Secondary Orb */}
            <motion.div 
                animate={{ 
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -60, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full blur-[110px] mix-blend-screen"
                style={{ background: theme.accent, opacity: 0.1 }}
            />
            
            {/* Semantic Particles */}
            <SemanticParticles mode={mode} color={theme.particleColor} />
            
        </motion.div>
      </AnimatePresence>
      
      {/* Vignette & Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-10" />
    </div>
  );
};

export default AmbientBackground;