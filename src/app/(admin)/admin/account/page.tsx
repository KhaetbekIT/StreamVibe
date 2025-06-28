import AvatarImage from "@public/avatar.png";
import { PenLine } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { PageType } from "@/types/type";

const Page: PageType = async () => {
	return (
		<section className="space-y-5">
			<form className="space-y-5 w-96">
				<div className="w-32 h-32 rounded-full overflow-hidden relative group">
					<Image src={AvatarImage} alt="John Doe" />

					<div className="absolute group-hover:bottom-0 -bottom-full left-0 right-0 bg-black/40 p-1.5 text-center transition-all duration-500 ease-in-out">
						<PenLine stroke="white" className="inline-block" />
					</div>
				</div>
				<div className="space-y-2">
					<Label htmlFor="name">Name</Label>

					<Input type="text" placeholder="John Doe" id="name" />
				</div>
			</form>
		</section>
	);
};

export default Page;
