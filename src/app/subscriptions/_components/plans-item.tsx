import { Groups } from "@/components/groups";
import { Button } from "@/components/ui/button";
import { toMoney } from "@/libs/utils";

export const PlansItem = ({ amount, description, title }: Props) => {
	return (
		<div className="bg-black-10 border border-black-15 rounded-xl space-y-10 w-[415px] p-10">
			<div className="space-y-2.5">
				<h4 className="text-xl font-bold text-white">{title}</h4>

				<p className="text-grey-60">{description}</p>
			</div>

			<p>
				<span className="text-white text-3xl font-semibold">
					{toMoney(amount)}
				</span>
				<span className="text-grey-60 font-medium">/month</span>
			</p>

            <Groups className="gap-3 flex-row">
                <Button variant="button" color="black">
                    Start Free Trial
                </Button>

                <Button variant="button" color="red">
                    Choose Plan
                </Button>
            </Groups>
		</div>
	);
};

interface Props {
	title: string;
	description: string;
	amount: number;
}
