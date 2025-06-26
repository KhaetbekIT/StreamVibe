import type { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Container: Props = ({ children, className }) => {
	return (
		<div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", className)}>
			{children}
		</div>
	);
};

type Props = FC<{
	children: ReactNode;
	className?: string;
}>;
