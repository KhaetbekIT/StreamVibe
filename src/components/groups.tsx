import type { ComponentProps } from "react";
import { cn } from "@/libs/utils";

export const Groups = ({
	className,
	children,
	...props
}: ComponentProps<"div">) => {
	return (
		<div className={cn("flex flex-col gap-3", className)} {...props}>
			{children}
		</div>
	);
};
