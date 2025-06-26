import { Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/container";
import { Router } from "@/configs/router.config";

export const Footer = () => {
	return (
		<footer className="py-12">
			<Container>
				<div className="space-y-10">
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

					<div className="text-center space-x-10">
						<Link
							className="inline-block text-gray-500 hover:text-white"
							href={Router.pages.home}
						>
							Home
						</Link>

						<Link
							className="inline-block text-gray-500 hover:text-white"
							href={Router.pages.home}
						>
							Jobs
						</Link>

						<Link
							className="inline-block text-gray-500 hover:text-white"
							href={Router.pages.home}
						>
							Info
						</Link>

						<Link
							className="inline-block text-gray-500 hover:text-white"
							href={Router.pages.home}
						>
							Support
						</Link>

						<Link
							className="inline-block text-gray-500 hover:text-white"
							href={Router.pages.home}
						>
							Contact us
						</Link>

						<Link
							className="inline-block text-gray-500 hover:text-white"
							href={Router.pages.home}
						>
							FAQ
						</Link>

						<Link
							className="inline-block text-gray-500 hover:text-white"
							href={Router.pages.home}
						>
							Account
						</Link>
					</div>
				</div>
			</Container>
		</footer>
	);
};
