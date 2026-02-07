import { LucideIcon } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  icon: LucideIcon;
  image: string;
  topics: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}