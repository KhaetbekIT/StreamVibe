import Logo from "@public/logo.svg";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import { Container } from "@/components/container";
import { Groups } from "@/components/groups";
import { Routers } from "@/configs/routers.config";
import { cn } from "@/libs/utils";
import { SearchSheet } from "./_components/search-sheet";

export const HeaderLayout = ({
	className,
	...props
}: Omit<ComponentProps<"header">, "children">) => {
	return (
		<header className={cn("py-5", className)} {...props}>
			<Container>
				<div className="flex items-center gap-5 justify-between">
					<Link href={Routers.homePage}>
						<Image priority src={Logo} alt="logo" />
					</Link>

					<Groups className="flex-row shrink-0">
						<SearchSheet />

						<Bell className="size-6 text-white" />
					</Groups>
				</div>
			</Container>
		</header>
	);
};
