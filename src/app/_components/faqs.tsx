import { Container } from "@/components/container";
import { Groups } from "@/components/groups";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
	{
		id: 1,
		question: "What is StreamVibe?",
		answer:
			"StreamVibe is a video streaming platform that allows users to watch movies and TV shows in high-quality, on-demand, and ad-free.",
	},
	{
		id: 2,
		question: "How much does StreamVibe cost?",
		answer:
			"StreamVibe is free to use, with no subscription fees or hidden charges. You can watch movies and TV shows for free on StreamVibe.",
	},
	{
		id: 3,
		question: "What content is available on StreamVibe?",
		answer:
			"StreamVibe is compatible with a wide range of devices, including smartphones, tablets, and smart TVs. You can watch movies and TV shows on any device that supports the StreamVibe app.",
	},
	{
		id: 4,
		question: "How can I watch StreamVibe?",
		answer:
			"Yes, you can watch StreamVibe on multiple devices at the same time. You can watch movies and TV shows on any device that supports the StreamVibe app.",
	},
	{
		id: 5,
		question: "How do I sign up for StreamVibe?",
		answer:
			"Yes, you can watch StreamVibe on multiple devices at the same time. You can watch movies and TV shows on any device that supports the StreamVibe app.",
	},
	{
		id: 6,
		question: "What is the StreamVibe free trial?",
		answer:
			"Yes, you can watch StreamVibe on multiple devices at the same time. You can watch movies and TV shows on any device that supports the StreamVibe app.",
	},
	{
		id: 7,
		question: "How do I contact StreamVibe customer support?",
		answer:
			"Yes, you can watch StreamVibe on multiple devices at the same time. You can watch movies and TV shows on any device that supports the StreamVibe app.",
	},
	{
		id: 8,
		question: "What are the StreamVibe payment methods?",
		answer:
			"Yes, you can watch StreamVibe on multiple devices at the same time. You can watch movies and TV shows on any device that supports the StreamVibe app.",
	},
];

export const FAQs = () => {
	const firstColumns = faqs.slice(0, faqs.length / 2);
	const secondColumns = faqs.slice(faqs.length / 2);

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
							<Button variant={"button"} color="red">Ask a Question</Button>
						</div>
					</div>

					<Accordion type="single" collapsible className="grid grid-cols-2 gap-10">
						<div>
							{firstColumns.map((faq) => (
								<AccordionItem
									className="border-b-0 p-6"
									key={faq.id}
									value={`item-${faq.id}`}
								>
									<AccordionTrigger
										iconClassName="text-white size-7"
										className="cursor-pointer"
									>
										<Groups className="flex-row items-center gap-3">
											<span className="bg-black-10 border border-black-12 p-2.5 text-white rounded-md">
												0{faq.id}
											</span>

											<span className="text-white font-medium text-xl">
												{faq.question}
											</span>
										</Groups>
									</AccordionTrigger>
									<AccordionContent className="text-grey-60 pl-12">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</div>

						<div>
							{secondColumns.map((faq) => (
								<AccordionItem
									className="border-b-0 p-6"
									key={faq.id}
									value={`item-${faq.id}`}
								>
									<AccordionTrigger
										iconClassName="text-white size-7"
										className="cursor-pointer"
									>
										<Groups className="flex-row items-center gap-3">
											<span className="bg-black-10 border border-black-12 p-2.5 text-white rounded-md">
												0{faq.id}
											</span>

											<span className="text-white font-medium text-xl">
												{faq.question}
											</span>
										</Groups>
									</AccordionTrigger>
									<AccordionContent className="text-grey-60 pl-12">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</div>
					</Accordion>
				</div>
			</Container>
		</section>
	);
};
