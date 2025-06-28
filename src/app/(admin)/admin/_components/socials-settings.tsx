import { Instagram, Twitter, Youtube } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export const SocialsSettings = () => {
	return (
		<div className="w-max space-y-5 px-4 p-4 border rounded-lg">
			<h3 className="text-lg font-semibold">Quick settings</h3>
			<div className="flex gap-5 items-center justify-between">
				<Youtube size={40} />

				<Switch />
			</div>

			<div className="flex gap-5 items-center justify-between">
				<Twitter size={40} />

				<Switch />
			</div>

			<div className="flex gap-5 items-center justify-between">
				<Instagram size={40} />

				<Switch />
			</div>
		</div>
	);
};
