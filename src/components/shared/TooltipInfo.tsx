import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { TooltipInfoProps } from '@/types';

export const TooltipInfo = ({ children, tip }: TooltipInfoProps) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>{children}</TooltipTrigger>
				<TooltipContent>
					<p>{tip}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
