import type { ComponentProps } from "react";
import { Container } from "@/components/container";
import { Routers } from "@/configs/routers.config";

const widgets = [
	{
		title: "Home",
		items: [
			Routers.categoriesPage,
			Routers.devicesPage,
			Routers.pricingPage,
			Routers.faqPage,
		]
	},
	{
		title: "Movies",
		items: [
			Routers.gernesPage,
			Routers.trendingPage,
			Routers.newReleasePage,
			Routers.popularPage,
		]
	},
	{
		title: "Shows",
		items: [
			Routers.gernesPage,
			Routers.trendingPage,
			Routers.newReleasePage,
			Routers.popularPage,
		]
	},
	{
		title: "Support",
		items: [
			Routers.contactPage,
		]
	},
	{
		title: "Subscription",
		items: [
			Routers.plansPage,
			Routers.featuresPage
		]
	}
];

export const FooterLayout = ({
	className,
	...props
}: Omit<ComponentProps<"footer">, "children">) => {
	return (
		<footer className={className} {...props}>
			<Container>
				<div className="grid grid-cols-6 gap-10">
					ok
				</div>
			</Container>
		</footer>
	);
};
