import { Download } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const Info = ({ title }: Props) => {
	return (
		<div className="space-y-6">
			<h2 className="text-4xl font-bold text-center ">{title}</h2>

			<div className="flex gap-5 justify-between">
				<Badge variant={"secondary"}>8.5</Badge>

				<Link href="#" download={title}>
					<Download />
				</Link>
			</div>

			<p className="text-white">
				Peter Quill cannot come to terms with the loss of Gamora in any way and
				now, together with the Guardians of the Galaxy, he is forced to go on
				another mission to protect the universe.
			</p>

			<p>
				<span className="text-gray-400">Director:</span> James Gunn
			</p>

			<p>
				<span className="text-gray-400">Actors:</span> Chris Pratt, Zoe Saldana,
				Dave Bautista
			</p>
		</div>
	);
};

interface Props {
	title: string;
	// description: string;
	// director: string;
	// actors: string;
}
