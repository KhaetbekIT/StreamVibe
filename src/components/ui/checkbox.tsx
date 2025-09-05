"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import type * as LabelPrimitive from "@radix-ui/react-label";
import { CheckIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/libs/utils";
import { Groups } from "../groups";
import { Label } from "./label";

function Checkbox({
	label,
	checkbox,
	...props
}: Props & ComponentProps<"div">) {
	return (
		<Groups {...props}>
			<Label data-slot="label" htmlFor={label.htmlFor} {...label} />

			<CheckboxPrimitive.Root
				data-slot="checkbox"
				className={cn(
					"peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
					checkbox.className,
				)}
				id={label.htmlFor ?? checkbox.id}
				{...checkbox}
			>
				<CheckboxPrimitive.Indicator
					data-slot="checkbox-indicator"
					className="flex items-center justify-center text-current transition-none"
				>
					<CheckIcon className="size-3.5" />
				</CheckboxPrimitive.Indicator>
			</CheckboxPrimitive.Root>
		</Groups>
	);
}

interface Props {
	label: ComponentProps<typeof LabelPrimitive.Root>;
	checkbox: ComponentProps<typeof CheckboxPrimitive.Root>;
}

export { Checkbox };
