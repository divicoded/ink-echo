import React from 'react';
import { motion } from 'framer-motion';
import { Emotion } from '../types';
import { MOODS } from '../constants';

interface Props {
  currentMood: Emotion;
  onSelectMood: (mood: Emotion) => void;
  isDark: boolean;
}

const MoodSelector: React.FC<Props> = ({ currentMood, onSelectMood, isDark }) => {
  return (
    <div className="w-full overflow-x-auto hide-scrollbar pb-8 pt-4">
        <div className="flex justify-start md:justify-center gap-2 md:gap-3 px-6 min-w-max">
            {MOODS.map((mood) => {
                const isActive = currentMood === mood.id;
                return (
                <button
                    key={mood.id}
                    onClick={() => onSelectMood(mood.id)}
                    className={`
                        relative px-6 py-3 rounded-full text-xs font-sans tracking-[0.15em] uppercase transition-all duration-500 border
                        ${isActive 
                            ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                            : 'bg-transparent text-white/40 border-white/10 hover:border-white/30 hover:text-white/80'
                        }
                    `}
                >
                    {mood.label}
                </button>
                );
            })}
        </div>
    </div>
  );
};

export default MoodSelector;