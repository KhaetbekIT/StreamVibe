import { AlertOctagon } from "lucide-react";
import Link from "next/link";
import { Router } from "@/configs/router.config";

export default function NotFound() {
	return (
		<>
			<head>
				<title>404 - Page Not Found</title>
			</head>
			<body className="from-background to-muted/30 flex min-h-screen items-center justify-center bg-linear-to-b p-4">
				<main className="mx-auto w-full max-w-3xl space-y-8 text-center">
					<div className="animate-bounce">
						<AlertOctagon className="text-destructive/60 mx-auto h-24 w-24" />
					</div>

					<div className="space-y-4">
						<h2 className="text-foreground/80 text-4xl font-bold">
							Global Not Found
						</h2>
						<p className="text-muted-foreground mx-auto max-w-md text-xl">
							The requested page could not be found on the server.
						</p>
					</div>

					<Link
						href={Router.pages.home}
						className="bg-black shadow text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center transition-colors duration-200"
					>
						Return to Homepage
					</Link>
				</main>
			</body>
		</>
	);
}
