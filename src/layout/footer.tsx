import { Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/container";

export const Footer = () => {
	return (
		<footer className="py-12">
			<Container>
				<div className="text-center space-x-5">
					<Link
						className="inline-block"
						href="https://www.instagram.com/playon.official/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Instagram size={30} />
					</Link>

					<Link
						className="inline-block"
						href="https://www.instagram.com/playon.official/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Twitter size={30} />
					</Link>

					<Link
						className="inline-block"
						href="https://www.instagram.com/playon.official/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Youtube size={30} />
					</Link>
				</div>
			</Container>
		</footer>
	);
};
