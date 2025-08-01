import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader } from "lucide-react";
import type * as React from "react";
import { cn } from "@/libs/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
				contained: "p-2.5",
				outline: "border border-solid border-gray-300",
				ghost:
					"border-none! border-transparent! bg-transparent! text-stone-900! shadow-none! hover:shadow-none! focus:shadow-none! p-0!",
				icon: "bg-black-10 border border-black-15 p-2.5",
				button: "py-3.5 px-8"
			},
			color: {
				gray: "bg-brand-muted-dark text-white hover:bg-brand-muted-dark focus-visible:ring-brand-muted-dark",
				red: "bg-red-45 text-white hover:bg-red-50 focus-visible:ring-brand-muted-dark",				
				black:
					"bg-black-10 border border-black-15 text-white hover:bg-black-20 focus-visible:ring-brand-muted-dark",
				white: "bg-white hover:bg-gray-50 focus-visible:ring-brand-muted-dark",
				"light-blue": "bg-slate-100 text-black",
				none: "bg-transparent",
			},
			shadow: {
				true: "shadow-md",
				false: "shadow-none!",
			},
		},
		defaultVariants: {
			variant: "contained",
			color: "gray",
			shadow: false,
		},
	},
);

function Button({
	className,
	variant,
	color,
	asChild = false,
	loading = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
		loading?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return loading ? (
		<button
			data-slot="button"
			className={cn(buttonVariants({ variant, color, className }))}
			{...props}
			type="button"
		>
			<Loader className="animate-spin" />
		</button>
	) : (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, color, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
