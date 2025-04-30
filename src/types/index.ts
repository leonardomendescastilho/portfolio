import { ReactNode } from 'react';
export interface IProject {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  TechStack: string[];
  linkUrl: string;
}


export interface DialogModalProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  triggerAriaLabel?: string;
}

export interface TooltipInfoProps {
  children?: ReactNode;
  tip?: string;
}

export interface TooltipInfoProps {
  children?: ReactNode;
  tip?: string;
}