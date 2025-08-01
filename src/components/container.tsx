import type { ComponentProps } from "react";
import { cn } from "@/libs/utils";

export const Container = ({
	children,
	className,
	...props
}: ComponentProps<"div">) => {
	return (
		<div className={cn("mx-auto container px-4", className)} {...props}>
			{children}
		</div>
	);
};
