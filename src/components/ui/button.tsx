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
				contained: "",
				outline: "border border-solid border-gray-300",
				ghost:
					"border-none! border-transparent! bg-transparent! text-stone-900! shadow-none! hover:shadow-none! focus:shadow-none! p-0!",
				icon: "bg-black-10 border border-black-12 p-2.5",
			},
			color: {
				gray: "bg-brand-muted-dark text-white hover:bg-brand-muted-dark focus-visible:ring-brand-muted-dark",
				red: "bg-brand-light-coral text-white hover:bg-red-600 focus-visible:ring-brand-light-coral",
				blue: "bg-brand-light-blue text-white focus-visible:ring-brand-light-blue",
				green:
					"bg-brand-aqua text-white hover:admin-green focus-visible:ring-brand-aqua",
				yellow:
					"bg-yellow-500 text-white hover:bg-yellow-600 focus-visible:ring-yellow-500",
				pink: "bg-pink-500 text-white hover:bg-pink-600 focus-visible:ring-pink-500",
				cyan: "bg-cyan-500 text-white hover:bg-cyan-600 focus-visible:ring-cyan-500",
				orange:
					"bg-orange-500 text-white hover:bg-orange-600 focus-visible:ring-orange-500",
				black:
					"bg-brand-gray-800 text-white hover:bg-brand-gray-800 focus-visible:ring-brand-gray-800",
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
