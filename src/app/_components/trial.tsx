import { Container } from "@/components/container";
import { Groups } from "@/components/groups";
import { Button } from "@/components/ui/button";

export const Trial = () => {
	return (
		<section>
			<Container>
				<div className="overflow-hidden py-[87px] px-[60px] bg-[url('/assets/trial-bg.png')] relative bg-no-repeat bg-cover after:content-[''] after:bg-gradient-to-r after:absolute after:-top-1/2 after:left-0 after:-right-1/2 after:bottom-0 after:from-black-06 via-[#220E0E]/50 after:to-red-45/70 border border-black-15 rounded-xl">
					<Groups className="flex-row gap-10 items-center justify-between relative z-10">
						<div className="space-y-2.5">
							<h3 className="text-3xl font-bold text-white">
								Start your free trial today!
							</h3>

							<p className="text-grey-60">
								This is a clear and concise call to action that encourages users
								to sign up for a free trial of StreamVibe.
							</p>
						</div>

                        <Button variant="button" color="red">
                            Start Free Trial
                        </Button>
					</Groups>
				</div>
			</Container>
		</section>
	);
};
