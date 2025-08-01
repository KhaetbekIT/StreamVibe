import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export const FAQs = () => {
	return (
		<section>
			<Container>
				<div className="space-y-15">
					<div className="flex gap-5 items-center">
						<div className="space-y-2.5 grow">
							<h2 className="text-3xl font-bold text-white">
								Frequently Asked Questions
							</h2>

							<p className="text-grey-60">
								Got questions? We've got answers! Check out our FAQ section to
								find answers to the most common questions about StreamVibe.
							</p>
						</div>

						<div>
							<Button color="red">Ask a Question</Button>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
