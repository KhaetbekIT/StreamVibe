import type { Metadata } from "next";
import { Footer } from "@/layout/footer";
import { Nav } from "@/layout/nav";
import type { LayoutType } from "@/types/type";

export const metadata: Metadata = {
	title: "Home",
	description: "Home page of the application",
};

const HomeLayout: LayoutType = async ({ children }) => {
	return (
		<body className="flex flex-col justify-between min-h-screen bg-body text-white">
			<Nav />
			<main className="grow">{children}</main>

			<Footer />
		</body>
	);
};

export default HomeLayout;
