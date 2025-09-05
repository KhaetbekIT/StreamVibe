import { Plans } from "@/app/_components/plans";
import { Container } from "@/components/container";
import { Groups } from "@/components/groups";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PriceTabs = async () => {
	return (
		<section>
			<Container>
				<Tabs defaultValue="account" className="w-full space-y-10">
					<Groups className="flex-row items-center gap-10"> 
						<div className="space-y-2.5">
							<h2 className="text-3xl font-bold text-white">
								Choose the plan that's right for you
							</h2>

							<p className="text-grey-60">
								Join StreamVibe and select from our flexible subscription
								options tailored to suit your viewing preferences. Get ready for
								non-stop entertainment!
							</p>
						</div>

						<TabsList className="bg-black-08 border border-black-15 rounded-xl">
							<TabsTrigger value="account">Account</TabsTrigger>
							<TabsTrigger value="password">Password</TabsTrigger>
						</TabsList>
					</Groups>
					<TabsContent value="account">
						<Plans />
					</TabsContent>
					<TabsContent value="password">
                        <Plans />
                    </TabsContent>
				</Tabs>
			</Container>
		</section>
	);
};
