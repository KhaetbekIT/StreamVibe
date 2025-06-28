import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { PageType } from "@/types/type";

const Page: PageType = async () => {
	return (
		<section>
			<form className="space-y-5 w-80">
				<div className="space-y-2">
					<Label htmlFor="instagram">Instagram</Label>

					<Input type="url" placeholder="@playon.official" id="instagram" />
				</div>

				<div className="space-y-2">
					<Label htmlFor="twitter">Twitter</Label>

					<Input type="url" placeholder="@playon.official" id="twitter" />
				</div>

				<div className="space-y-2">
					<Label htmlFor="youtube">Youtube</Label>

					<Input type="url" placeholder="@playon.official" id="youtube" />
				</div>

				<Button>Save</Button>
			</form>
		</section>
	);
};

export default Page;
