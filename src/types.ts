import { type ReactNode } from 'react';

export interface StatItem {
  label: string;
  value: string;
}

export interface ExpertiseItem {
  category: 'all' | 'architecture' | 'integration' | 'strategy';
  title: string;
  icon: ReactNode;
  description: string;
  skills: string[];
}