import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import type { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Router } from "@/configs/router.config";

export const Section = ({ title, href, items = [] }: Props) => {
	return (
		<section className="py-10">
			<Container>
				<div className="space-y-10">
					<h2 className="text-3xl font-bold">
						<Link href={href} className="hover:underline">
							{title}
						</Link>
					</h2>

					<div className="grid grid-cols-6 gap-5">
						{items.map((item) => (
							<Link
								key={item.id}
								href={Router.pages.details(item.id)}
								className="overflow-hidden rounded-2xl group relative inline-block h-[300px]"
							>
								<Image
									className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
									alt={item.title}
									width={200}
									height={300}
									src={item.image}
								/>
							</Link>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

interface Props {
	title: string;
	href: Url;
	items: Movie[];
}

interface Movie {
	id: number;
	title: string;
	image: string | StaticImport;
}
