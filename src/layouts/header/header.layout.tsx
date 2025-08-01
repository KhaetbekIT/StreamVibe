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
import { Nav } from "./_components/nav";

export const HeaderLayout = ({
	className,
	...props
}: Omit<ComponentProps<"header">, "children">) => {
	return (
		<header className={cn("py-5 bg-black-06/30", className)} {...props}>
			<Container>
				<div className="flex items-center gap-5 justify-between">
					<Link href={Routers.homePage.to}>
						<Image priority src={Logo} alt="logo" />
					</Link>

					<Nav />

					<Groups className="items-center flex-row">
						<SearchSheet />

						<Bell className="size-6 text-white" />
					</Groups>
				</div>
			</Container>
		</header>
	);
};
