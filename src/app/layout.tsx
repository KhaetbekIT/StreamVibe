import { Poppins } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next";
import type { LayoutType } from "@/types/type";
import "@/styles/globals.css";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	display: "swap",
});

const RootLayout: LayoutType = async ({ children }) => {
	return (
		<html className={poppins.className} translate="no" lang="en">
			<NuqsAdapter>{children}</NuqsAdapter>
		</html>
	);
};

export default RootLayout;
