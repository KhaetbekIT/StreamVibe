import { ArrowRight } from "lucide-react";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { Groups } from "@/components/groups";
import { Routers } from "@/configs/routers.config";

export const Catalog = ({ images, catalogId, title }: Props) => {
	return (
		<div className="py-[30px] px-5 rounded-xl bg-black-10 space-y-2">
			<div className="flex gap-1 flex-wrap justify-center">
				{images.map((image, index) => (
					<Image
						src={image}
						alt={`catalog-${index}`}
						key={`catalog-${image}`}
						priority
						width={100}
						height={120}
						className="w-[100px] h-[120px] object-cover shrink-0"
					/>
				))}
			</div>

			<Groups className="flex-row items-center justify-between gap-1">
				<p className="text-white font-semibold text-base">{title}</p>

				<Link
					href={{
						pathname: Routers.categoriesPage.to,
						query: {
							catalogId,
						},
					}}
				>
					<ArrowRight />
				</Link>
			</Groups>
		</div>
	);
};

interface Props {
	images: (string | StaticImport)[];
	title: string;
	catalogId: number;
}
