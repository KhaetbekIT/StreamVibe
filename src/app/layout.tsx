import { NuqsAdapter } from "nuqs/adapters/next";
import type { LayoutType } from "@/types/type";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Archivo, Inter, Manrope } from "next/font/google";
import { HeaderLayout } from "@/layouts/header/header.layout";
import { cn } from "@/libs/utils";

const manrope = Manrope({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
	variable: "--font-manrope",
});

const inter = Inter({
	subsets: ["latin"],
	weight: ["500"],
	variable: "--font-inter",
});

const archivo = Archivo({
	subsets: ["latin"],
	weight: ["500"],
	variable: "--font-archivo",
});

export const metadata: Metadata = {
	title: "StreamVibe",
	description: "StreamVibe",
	keywords: [
		"StreamVibe",
		"cinema site",
		"movie site",
		"streaming site",
		"movie streaming site",
		"streaming movie site",
	],
};

const RootLayout: LayoutType = async ({ children }) => {
	return (
		<html
			translate="no"
			className={cn(
				archivo.variable,
				inter.variable,
				manrope.variable,
				"min-h-screen bg-black-08",
			)}
			lang="en"
		>
			<body className="font-primary">
				<NuqsAdapter>
					<main className="min-h-screen flex flex-col justify-between">
						<HeaderLayout className="fixed top-0 z-40 shrink-0 left-0 right-0" />
						{children}
					</main>
				</NuqsAdapter>
			</body>
		</html>
	);
};

export default RootLayout;
