import Link from "next/link";
import { Router } from "@/configs/router.config";

export const Logo = () => {
	return (
		<Link className="logo" href={Router.pages.home}>
			PlayOn
		</Link>
	);
};
