import { Container } from "@/components/container";
import { PlansItem } from "./plans-item";

const plans = [
	{
		id: 1,
		title: "Basic Plan",
		amount: 9.99,
		description:
			"Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
	},
	{
		id: 2,
		title: "Standard Plan",
		amount: 12.99,
		description:
			"Access to a wider selection of movies and shows, including most new releases and exclusive content",
	},
	{
		id: 3,
		title: "Premium Plan",
		amount: 14.99,
		description:
			"Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
	},
];

export const Plans = () => {
	return (
		<section>
			<Container>
				<div className="space-y-10">
					<div className="space-y-2.5">
						<h2 className="text-3xl font-bold text-white">
							Choose the plan that's right for you
						</h2>

						<p className="text-grey-60">
							Join StreamVibe and select from our flexible subscription options
							tailored to suit your viewing preferences. Get ready for non-stop
							entertainment!
						</p>
					</div>

					<ul className="flex flex-wrap gap-5 justify-center">
						{plans.map((item) => (
							<li key={item.id}>
								<PlansItem {...item} />
							</li>
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
};
