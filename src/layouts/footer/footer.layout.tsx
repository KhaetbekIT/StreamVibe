import type { ComponentProps } from "react";
import { Container } from "@/components/container";

export const FooterLayout = ({
	className,
	...props
}: Omit<ComponentProps<"footer">, "children">) => {
	return (
		<footer className={className} {...props}>
			<Container>ok</Container>
		</footer>
	);
};
