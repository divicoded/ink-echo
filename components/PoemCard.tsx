import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { Poem, ThemeConfig } from '../types';
import { MoveRight } from 'lucide-react';

interface Props {
  poem: Poem;
  theme: ThemeConfig;
  onClick: () => void;
  index: number;
}

const PoemCard: React.FC<Props> = ({ poem, theme, onClick, index }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Parallax Logic
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Background texture moves slightly slower than content for depth
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate tilt
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);

    // Set CSS variables for the glow effect
    ref.current.style.setProperty("--mouse-x", `${mouseX}px`);
    ref.current.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      layoutId={`card-container-${poem.title}`}
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full mb-16 md:mb-28 cursor-pointer group perspective-1000"
    >
      {/* Glass Card Container */}
      <div 
        className="
          relative overflow-hidden rounded-3xl p-8 md:p-14 
          glass-panel border border-white/5
          transition-all duration-500 ease-out
          group-hover:bg-white/5 group-hover:border-white/10
          group-hover:-translate-y-2 shadow-lg group-hover:shadow-2xl
        "
        style={{ transform: "translateZ(20px)" }}
      >
        {/* Parallax Background Layer */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
             <motion.div 
               style={{ y: parallaxY }}
               className="absolute -inset-[25%] opacity-40 blur-3xl"
             >
                {/* Blue Depth Blob - Animated */}
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-1/4 w-[60%] h-[60%] bg-blue-950/60 rounded-full mix-blend-overlay" 
                />
                
                {/* Theme Accent Blob - Animated */}
                <motion.div 
                     animate={{ scale: [1.1, 1, 1.1], x: [0, -20, 0] }}
                     transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                     className="absolute bottom-0 left-1/4 w-[60%] h-[60%] rounded-full mix-blend-soft-light" 
                     style={{ backgroundColor: theme.accent, opacity: 0.6 }} 
                />
             </motion.div>
             
             {/* Noise texture overlay for tactile feel */}
             <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
        </div>

        {/* Dynamic Mouse Glow */}
        <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ 
                background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), ${theme.particleColor.replace('0.4', '0.15').replace('0.3', '0.1')}, transparent 40%)` 
            }}
        />

        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex-1">
                 {/* Meta Information */}
                <div className="flex items-center gap-4 mb-6 opacity-60 group-hover:opacity-80 transition-opacity">
                    <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold text-white/90">
                        {poem.category}
                    </span>
                    <div className="h-[1px] w-8 bg-white/30" />
                    <span className="text-[10px] md:text-xs font-serif italic text-white/70">
                         {new Date(poem.date).toLocaleDateString()}
                    </span>
                </div>

                {/* Big Title with text shadow for depth */}
                <motion.h2 
                    layoutId={`title-${poem.title}`}
                    className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.9] text-white/90 group-hover:text-white transition-colors duration-500 mb-6 drop-shadow-2xl"
                >
                    {poem.title}
                </motion.h2>

                {/* Preview Line */}
                <p className="font-serif text-lg md:text-xl text-white/60 max-w-lg leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                    {poem.preview}
                </p>
            </div>

            {/* Action Indicator */}
            <div className="hidden md:flex items-center gap-4 text-white/40 group-hover:text-white group-hover:gap-6 transition-all duration-500">
                <span className="text-xs uppercase tracking-widest font-sans font-medium">Read Poem</span>
                <MoveRight size={18} />
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PoemCard;