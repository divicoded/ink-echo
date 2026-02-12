export type Emotion = 'Love' | 'Longing' | 'Reflection' | 'Hope' | 'Melancholy' | 'Nature' | 'Dreams' | 'Reflective' | 'All';

export interface Poem {
  title: string;
  preview: string;
  body: string;
  category: string; // Matches Emotion roughly, but kept as string for flexibility
  date: string;
  emotion: string; // Internal emotion tag for logic
}

export interface ThemeConfig {
  base: string;
  accent: string;
  background: string;
  text: string;
  secondary: string;
  gradient: string;
  particleColor: string;
}

export interface MoodOption {
  id: Emotion;
  label: string;
  description: string;
}