import Link from "next/link";
import { Container } from "@/components/container";
import { Router } from "@/configs/router.config";
import { cn } from "@/lib/utils";
import { Logo } from "./_components/logo";

export const Nav = ({ className }: Props) => {
	return (
		<nav className={cn("py-5 text-white", className)}>
			<Container>
				<div className="flex items-center gap-10">
					<Logo />

					<Link
						className="hover:underline text-lg"
						href={Router.pages.category}
					>
						Home
					</Link>

					<Link
						className="hover:underline text-lg"
						href={{
							pathname: Router.pages.category,
							query: {
								category: "Movies",
							},
						}}
					>
						Movies
					</Link>

					<Link
						className="hover:underline text-lg"
						href={{
							pathname: Router.pages.category,
							query: {
								category: "Series",
							},
						}}
					>
						Series
					</Link>

					<Link
						className="hover:underline text-lg"
						href={{
							pathname: Router.pages.category,
							query: {
								category: "Top",
							},
						}}
					>
						Top
					</Link>
				</div>
			</Container>
		</nav>
	);
};

interface Props {
	className?: string;
}
