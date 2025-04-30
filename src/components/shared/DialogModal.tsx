import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import  { useState } from 'react';

import { DialogModalProps } from '../utils/types';

export function DialogModal({ 
	title, 
	subtitle, 
	children, 
	triggerAriaLabel 
}: DialogModalProps) {
	const [isOpen, setIsOpen] = useState(false);
	const dialogId = `dialog-${title.toLowerCase().replace(/\s+/g, '-')}`;
	
	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button
					className="text-base uppercase transition-all duration-300 hover:text-chart-2 focus-visible:ring-2 focus-visible:ring-offset-2"
					variant="link"
					size={'lg'}
					aria-label={triggerAriaLabel || `Abrir ${title}`}
					aria-haspopup="dialog"
					aria-expanded={isOpen}
					aria-controls={dialogId}
				>
					{title}
				</Button>
			</DialogTrigger>
			<DialogContent 
				className="max-w-[400px] sm:max-w-[420px] md:w-[750px] md:max-w-[900px] lg:w-[980px]"
				id={dialogId}
				aria-labelledby={`${dialogId}-title`}
				role="dialog"
			>
				<DialogHeader>
					<DialogTitle 
						className="text-2xl md:text-3xl text-center tracking-tighter" 
						id={`${dialogId}-title`}
					>
						{title}
					</DialogTitle>
					{subtitle && (
						<DialogDescription 
							className="text-center"
							id={`${dialogId}-description`}
						>
							{subtitle}
						</DialogDescription>
					)}
				</DialogHeader>
				<div className="dialog-content">
					{children}
				</div>

			</DialogContent>
		</Dialog>
	);
}
