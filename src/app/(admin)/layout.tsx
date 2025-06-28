import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { LayoutType } from "@/types/type";
import { AppSidebar } from "./admin/_components/app-sidebar";
import { SiteHeader } from "./admin/_components/site-header";

export const metadata: Metadata = {
	title: "PlayOn | Admin",
	description: "Auth page of the application",
};

const AdminLayout: LayoutType = async ({ children }) => {
	return (
		<body>
			<SidebarProvider
				style={
					{
						"--sidebar-width": "calc(var(--spacing) * 72)",
						"--header-height": "calc(var(--spacing) * 12)",
					} as CSSProperties
				}
			>
				<AppSidebar variant="inset" />
				<SidebarInset>
					<SiteHeader />
					<div className="flex flex-1 flex-col">
						<div className="@container/main flex flex-1 flex-col gap-2">
							<div className="flex flex-col gap-4 px-8 py-4 md:gap-6 md:py-6">
								{children}
							</div>
						</div>
					</div>
				</SidebarInset>
			</SidebarProvider>
		</body>
	);
};

export default AdminLayout;
