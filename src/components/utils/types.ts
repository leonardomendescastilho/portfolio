import { ReactNode } from 'react';

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