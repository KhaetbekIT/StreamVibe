"use client";

import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { Container } from "@/components/container";
import { Groups } from "@/components/groups";
import { Button } from "@/components/ui/button";
import { Routers } from "@/configs/routers.config";
import { cn, isActive } from "@/libs/utils";

const widgets = [
	{
		title: "Home",
		items: [
			Routers.categoriesPage,
			Routers.devicesPage,
			Routers.pricingPage,
			Routers.faqPage,
		],
	},
	{
		title: "Movies",
		items: [
			Routers.gernesPage,
			Routers.trendingPage,
			Routers.newReleasePage,
			Routers.popularPage,
		],
	},
	{
		title: "Shows",
		items: [
			Routers.gernesPage,
			Routers.trendingPage,
			Routers.newReleasePage,
			Routers.popularPage,
		],
	},
	{
		title: "Support",
		items: [Routers.contactPage],
	},
	{
		title: "Subscription",
		items: [Routers.plansPage, Routers.featuresPage],
	},
];

export const FooterLayout = ({
	className,
	...props
}: Omit<ComponentProps<"footer">, "children">) => {
	const pathname = usePathname();

	return (
		<footer className={cn("bg-black-06 pt-[80px] pb-10", className)} {...props}>
			<Container>
				<div className="grid grid-cols-6 gap-10 pb-[80px] border-b border-black-15">
					{widgets.map((widget, index) => (
						<div key={index.toString()} className="space-y-4">
							<h4 className="text-lg font-semibold text-white">
								{widget.title}
							</h4>
							<ul className="space-y-2.5">
								{widget.items.map((item, index) => (
									<li key={index.toString()}>
										<Link
											href={item.to}
											scroll={false}
											className={cn("text-grey-60 hover:text-white", {
												"text-white": isActive(item.to, pathname),
											})}
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}

					<div className="space-y-4">
						<h4 className="text-lg font-semibold text-white">
							Connect With Us
						</h4>
						<ul className="space-y-2.5 flex gap-2.5">
							<li>
								<Button variant="icon">
									<Facebook fill="white" size={20} />
								</Button>
							</li>

							<li>
								<Button variant="icon">
									<Twitter fill="white" size={20} />
								</Button>
							</li>

							<li>
								<Button variant="icon">
									<Linkedin fill="white" size={20} />
								</Button>
							</li>
						</ul>
					</div>
				</div>

				<Groups className="flex-row items-center justify-between pt-5">
					<p className="text-grey-60 text-sm">
						@2025 streamvib, All Rights Reserved by Khaetbek
					</p>

					<Groups className="flex-row items-center">
						<Link
							href={Routers.termsPage.to}
							className="text-grey-60 text-sm pr-5 border-r border-black-15"
						>
							{Routers.termsPage.label}
						</Link>

						<Link
							href={Routers.privacyPage.to}
							className="text-grey-60 text-sm px-5 border-r border-black-15"
						>
							{Routers.privacyPage.label}
						</Link>

						<Link
							href={Routers.cookiePage.to}
							className="text-grey-60 text-sm pl-5"
						>
							{Routers.cookiePage.label}
						</Link>
					</Groups>
				</Groups>
			</Container>
		</footer>
	);
};
